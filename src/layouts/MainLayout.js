import React from 'react';
import Menu from '../components/ui/Menu';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default MainLayout;
