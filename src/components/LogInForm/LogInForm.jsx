import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Button, Form, Label } from './LogInForm.styled';
import { selectUserEmail } from 'redux/auth/authSelectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUserEmail);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));

    if (!isLoggedIn) return;

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Please, Log In</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
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

        <Button type="submit">Log In</Button>
      </Form>
    </div>
  );
};
