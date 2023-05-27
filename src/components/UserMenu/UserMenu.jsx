import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/authSelectors';
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
  const name = useSelector(getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {name}</span>

      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
