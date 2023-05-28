import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Header } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
