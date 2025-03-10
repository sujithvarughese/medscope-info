import {Button, Loader} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {login} from "../features/globalSlice.ts";

const email = import.meta.env.VITE_GUEST_EMAIL;
const password = import.meta.env.VITE_GUEST_PASSWORD;

const PreviewButton = () => {

  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.global.loading)

  if (loading) {
    return <Loader type="dots" size="xl" />
  }

  return (
    <Button
      onClick={() => dispatch(login({ email: email, password: password }))}
      size="xl"
      variant="gradient"
    >
      Preview Site
    </Button>
  );
};

export default PreviewButton;