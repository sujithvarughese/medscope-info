import {useForm} from "@mantine/form";
import {Box, Button, ButtonGroup, Flex, Text, TextInput, UnstyledButton} from "@mantine/core";

type Props = {
  openRegisterModal: () => void;
}

const Login = ({ openRegisterModal }: Props) => {

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
    <div>
      <form onSubmit={form.onSubmit(console.log)}>
        <Flex gap={8} align="flex-end">
          <Flex direction="column" gap={8}>
            <TextInput
              mt="sm"
              placeholder="Email"
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
            <TextInput
              placeholder="Password"
              key={form.key('password')}
              {...form.getInputProps('name')}
            />
          </Flex>

          <Flex direction="column" align="center">
            <Button variant="subtle" size="sm" onClick={openRegisterModal}>Register</Button>
            <Button type="submit" mt="sm">Submit</Button>
          </Flex>

        </Flex>

      </form>
    </div>
  );
};

export default Login;