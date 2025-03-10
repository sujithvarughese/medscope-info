import {Button, Flex, Loader, Modal, Text, TextInput} from "@mantine/core";
import {matchesField, useForm} from "@mantine/form";
import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {register} from "../features/globalSlice.ts";

type RegisterModalProps = {
  opened: boolean;
  onClose: () => void;
}

const RegisterModal = ({ opened, onClose }: RegisterModalProps) => {

  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.global.loading)

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      firstName: (value: string) => (value.length < 2 ? 'First name must be at least 2 characters' : null),
      lastName: (value: string) => (value.length < 2 ? 'Last name must be at least 2 characters' : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: string) => (value.length < 6 ? 'Password must be at least 6 to register' : null),
      confirmPassword: matchesField('password', 'Passwords do not match'),
    },
  });

  return (
    <Modal opened={opened} onClose={onClose} size="lg">
      <form onSubmit={form.onSubmit(values => dispatch(register(values)))}>
        <Flex direction="column" align="center" p="xl">
          <Text style={{ fontSize: 36, fontWeight: 700 }}>Create Account</Text>
          <Text c="gray">Register to access all the features of the app</Text>
        </Flex>


        <Flex direction="column" gap={16} p={32}>
          <TextInput
            label="First Name"
            placeholder="First Name"
            key={form.key('firstName')}
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            key={form.key('lastName')}
            {...form.getInputProps('lastName')}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            key={form.key('email')}
            type="email"
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Password"
            placeholder="Password"
            key={form.key('password')}
            type="password"
            {...form.getInputProps('password')}
          />
          <TextInput
            label="Confirm Password"
            placeholder="Confirm Password"
            key={form.key('confirmPassword')}
            type="password"
            {...form.getInputProps('confirmPassword')}
          />

          <Flex justify="center">
            {loading ? <Loader type="bars" /> : <Button type="submit" mt="sm">Create Account</Button>}
          </Flex>

        </Flex>

      </form>
    </Modal>
  );
};

export default RegisterModal;