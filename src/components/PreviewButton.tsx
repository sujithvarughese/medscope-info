import {Button} from "@mantine/core";
import {useAuthContext} from "../context/AuthContext.tsx";

const email = import.meta.env.VITE_GUEST_EMAIL;
const password = import.meta.env.VITE_GUEST_PASSWORD;

const PreviewButton = () => {

  const { login } = useAuthContext()

  return (
    <Button onClick={() => login({ email: email, password: password })}>Preview Site</Button>
  );
};

export default PreviewButton;