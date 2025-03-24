import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
      <Link to="/" style={{ marginLeft: '1rem' }}>Home</Link>
      <Link to="/SavedCandidates">Potential Candidates</Link>
    </nav>
  );
};

export default Nav;


