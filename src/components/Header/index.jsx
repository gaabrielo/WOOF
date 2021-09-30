import { HiOutlineUserCircle } from 'react-icons/hi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';

import { Container, Content, Icons } from './styles';
import { Logo } from '../Logo';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="logoWrapper">
          <Logo />
        </div>
        <button type="button">
          <VscMenu />
        </button>

        <nav>
          <ul>
            <li>
              <Link to="/">New releases</Link>
            </li>
            <li>
              <Link to="/create">Create product</Link>
            </li>
          </ul>
        </nav>

        <Icons>
          <HiOutlineUserCircle />
          <RiShoppingBagLine />
        </Icons>
      </Content>
    </Container>
  );
}
