import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

import { Button, Div, Email } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <Div>
      <Email>{email}</Email>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Div>
  );
}
