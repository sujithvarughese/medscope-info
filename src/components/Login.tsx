import {useForm} from "@mantine/form";
import {Box, Button, ButtonGroup, Flex, Text, TextInput, UnstyledButton} from "@mantine/core";
import {useAppDispatch} from "../utilities/hooks.ts";
import {login} from "../features/globalSlice.ts";

type Props = {
  openRegisterModal: () => void;
}

const Login = ({ openRegisterModal }: Props) => {

  const dispatch = useAppDispatch()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { email: '', password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: string) => (value.length < 6 ? 'Password must be at least 6 to register' : null),
    },
  });

  return (

    <form onSubmit={form.onSubmit((values) => dispatch(login(values)))}>
      <Flex pt={{ base: "xs", md: 0 }} >
        <Flex direction="column" gap={8} pt="xs">
          <TextInput
            placeholder="Email"
            key={form.key('email')}
            {...form.getInputProps('email')}
            m={0}
          />
          <TextInput
            placeholder="Password"
            key={form.key('password')}
            {...form.getInputProps('name')}
            m={0}
          />
        </Flex>

        <Flex direction="column" align="center" justify="flex-end" gap={12}>

          <Button variant="subtle" onClick={openRegisterModal}>
            <Flex direction="column">
              <Text size="xs">Don't have an account?</Text>
              Register
            </Flex>
          </Button>

          <Button display={{ md: "none" }} size="xs" type="submit">Sign In</Button>
          <Button display={{ base: "none", md: "initial" }} size="sm" type="submit" bg="cyan.6">Sign In</Button>
        </Flex>

      </Flex>
    </form>

  );
};

export default Login;