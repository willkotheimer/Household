import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Auth from '../Auth';

export default function Nav(props) {
  // const { user } = props;
  return (
    <>
    <div className="navbar-container p-2 d-flex justify-content-center align-items-center">
      <header className="brand-container">
        <Link to="/" className='brand'>Household</Link>
      </header>
      <nav className="navbar">
        <div className="navbar-items">
          <Link to="/assignchores" className="navbar-item">
            Assign Chores
          </Link>
          <Link to="/stats" className="navbar-item">
            Stats
          </Link>
          <Link to="/inspireme" className="navbar-item">
            Inspire Me
          </Link>
        </div>
      </nav>
      <div className='user-icon-container '>
        <Auth />
      </div>
    </div>
  </>
  );
}
