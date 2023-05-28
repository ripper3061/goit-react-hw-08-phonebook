import { Link } from 'components/AuthNav/AuthNav.styled';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Link to="/">Home</Link>

      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
}
