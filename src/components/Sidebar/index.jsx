import { Link, useLocation } from 'react-router-dom';

import { HiOutlineUserCircle, HiUserCircle } from 'react-icons/hi';
import { RiDashboardLine, RiDashboardFill } from 'react-icons/ri';
import { IoPawOutline, IoPawSharp } from 'react-icons/io5';
import { Logo } from '../Logo/index.jsx';

import { Container } from './styles.js';

export function Sidebar() {
  let { pathname } = useLocation();

  return (
    <Container>
      <nav>
        <Link to="/dashboard">
          {pathname === '/dashboard' || pathname === '/dashboard/create' ? (
            <RiDashboardFill />
          ) : (
            <RiDashboardLine />
          )}
        </Link>

        <Link to="/dashboard/newDog">
          {pathname === '/dashboard/newDog' ? <IoPawSharp /> : <IoPawOutline />}
        </Link>

        <Link to="/dashboard/me">
          {pathname === '/dashboard/me' ? (
            <HiUserCircle />
          ) : (
            <HiOutlineUserCircle />
          )}
        </Link>
      </nav>

      <Logo />
    </Container>
  );
}
