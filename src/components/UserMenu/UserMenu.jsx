import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <div style={styles.container}>
      <p style={styles.name}>{email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
