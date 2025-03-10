import {Button, Flex, Modal, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useAppDispatch} from "../utilities/hooks.ts";
import {register} from "../features/globalSlice.ts";

type RegisterModalProps = {
  opened: boolean;
  onClose: () => void;
}

const RegisterModal = ({ opened, onClose }: RegisterModalProps) => {

  const dispatch = useAppDispatch()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { firstName: '', lastName: '', email: '', password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      firstName: (value: string) => (value.length < 2 ? 'First name must be at least 2 characters' : null),
      lastName: (value: string) => (value.length < 2 ? 'Last name must be at least 2 characters' : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: string) => (value.length < 6 ? 'Password must be at least 6 to register' : null),
    },
  });

  return (
    <Modal opened={opened} onClose={onClose} title="Register" size="lg">
      <form onSubmit={form.onSubmit(values => dispatch(register(values)))}>

        <Flex direction="column" gap={8}>
          <TextInput
            placeholder="First Name"
            key={form.key('firstName')}
            {...form.getInputProps('firstName')}
          />
          <TextInput
            placeholder="Last Name"
            key={form.key('lastName')}
            {...form.getInputProps('lastName')}
          />
          <TextInput
            placeholder="Email"
            key={form.key('email')}
            type="email"
            {...form.getInputProps('email')}
          />
          <TextInput
            placeholder="Password"
            key={form.key('password')}
            type="password"
            {...form.getInputProps('password')}
          />

          <Button type="submit" mt="sm">Submit</Button>
        </Flex>

      </form>
    </Modal>
  );
};

export default RegisterModal;