import React from 'react';
import { logout } from '../utils/auth';

const Logout = () => {
  logout();
  return <p>Log Out...</p>
};

export default Logout;
