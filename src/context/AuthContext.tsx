import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer.ts";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SET_IS_LOADING,
} from "./actions";
import { api } from '../utilities/api'

const initialState = {
  user: null,
  isLoading: false,
}

const AuthContext = createContext({
  user: null,
  isLoading: false,
  register: async () => {},
  login: async () => {},
  logout: async () => {},
  setIsLoading: () => {}
})


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

  type RegisterProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string
  }

  const register = async (credentials: RegisterProps) => {
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

  const login = async (credentials: { email: string; password: string }) => {
      try {
          const response = await api.post("/auth/login", credentials)
          const { user } = response.data
          dispatch({
              type: LOGIN_USER,
              payload: { user }
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

  return (
    <AuthContext.Provider value={
      {
        ...state,
        register,
        login,
        logout,
        setIsLoading,
      }
    }>
      { children }
    </AuthContext.Provider>
  )
}

const useAuthContext = () => useContext(AuthContext)

export { AuthProvider, useAuthContext, initialState }