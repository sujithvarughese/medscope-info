import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer.ts";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SET_IS_LOADING,
  SET_AUTH_STATE,
  SHOW_REGISTER_MODAL,
} from "./actions";
import { api } from '../utilities/api'

const initialState = {
  user: null,
  isLoading: false,
  authState: "",
  favorites: [],
  showRegisterModal: false
}

const AuthContext = createContext()


const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [state, dispatch] = useReducer(
    (state: typeof initialState, action: { type: string; payload?: any }) => {
      const result = reducer(state, action);
      if (result === undefined) {
        return state;
      }
      return result;
    },
    initialState
  )

  const register = async (credentials: { email: string; password: string }) => {
    try {
      const response = await api.post("/auth/register", credentials)
      // user = { userID: _id, isAdmin: isAdmin }
      const { user } = response.data
      dispatch({
        type: REGISTER_USER,
        payload: { user }
      })

    } catch (error) {
      console.log(error);
    }
  }

  const setShowRegisterModal = () => {
    dispatch({
      type: SHOW_REGISTER_MODAL
    })
  }
  const login = async (credentials: { email: string; password: string }) => {
      try {
          const response = await api.post("/auth/login", credentials)
          const { user, favorites } = response.data
          dispatch({
              type: LOGIN_USER,
              payload: { user, favorites }
          })
      } catch (error) {
          console.log(error);
      }
  }
  const logout = async () => {
    await api("/auth/logout");
    dispatch({ type: LOGOUT_USER });
  }

  const setIsLoading = (bool: boolean) => {
    dispatch({
      type: SET_IS_LOADING,
      payload: { isLoading: bool }
    })
  }

  const setAuthState = (authState: string) => {
    dispatch({
      type: SET_AUTH_STATE,
      payload: { authState: authState }
    })
  }

  return (
    <AuthContext.Provider value={
      {
        ...state,
        register,
        login,
        logout,
        setIsLoading,
        setAuthState,
        setShowRegisterModal,
      }
    }>
      { children }
    </AuthContext.Provider>
  )
}

const useAuthContext = () => useContext(AuthContext)

export { AuthProvider, useAuthContext, initialState }