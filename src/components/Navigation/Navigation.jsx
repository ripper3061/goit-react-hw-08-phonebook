import { Link } from 'components/AuthNav/AuthNav.styled';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <Link to="/">Home</Link>

      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
}
