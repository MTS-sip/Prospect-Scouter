import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '1rem' }}>
      <Link to="/" style={{ marginLeft: '1rem', color: 'white'}}>Home</Link>
      <Link to="/SavedCandidates">Potential Candidates</Link>
    </nav>
  );
};

export default Nav;


