import React from 'react';

import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="/login">Log In</Link>

      <Link to="/register">Sign Up</Link>
    </div>
  );
}
