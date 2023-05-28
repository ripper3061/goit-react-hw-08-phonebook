import { Button } from 'components/LogInForm/LogInForm.styled';
import { Label } from 'components/LogInForm/LogInForm.styled';
import { Form } from 'components/LogInForm/LogInForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Please, Sigh Up</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>Name</Label>
        <input type="text" name="name" value={name} onChange={handleChange} />

        <Label>Email</Label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <Label>Password</Label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};
