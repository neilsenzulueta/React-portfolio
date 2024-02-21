import { Link } from 'react-router-dom';
import Navbar from './navBar';

export default function Nav() {
    return (
      <Navbar
        links={[
          <Link key={1} className="nav-link text-light" to="/">
            About me
          </Link>,
          <Link key={2} className="nav-link text-light" to="/Portfolio">
            Portfolio
          </Link>,
        ]}
      />
    );
  }

