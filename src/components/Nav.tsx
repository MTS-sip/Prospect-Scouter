import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '1rem',
      background: 'transparent',
      position: 'relative',
      zIndex: 1, // ensures it's visually on top if needed
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '2rem' }}>
        Home
      </Link>
      <Link to="/SavedCandidates" style={{ color: 'white', textDecoration: 'none' }}>
        Potential Candidates
      </Link>
    </nav>
  );
};

export default Nav;

