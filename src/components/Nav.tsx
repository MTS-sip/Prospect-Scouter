import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{
      padding: '1rem',
      background: 'transparent',
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '2rem',
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/SavedCandidates" style={{ color: 'white', textDecoration: 'none' }}>Potential Candidates</Link>
    </nav>
  );
};

export default Nav;
