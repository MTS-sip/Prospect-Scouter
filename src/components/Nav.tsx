import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: 'transparent', 
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          marginRight: '2rem',
          fontWeight: 'bold',
        }}
      >
        Home
      </Link>
      <Link
        to="/SavedCandidates"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Potential Candidates
      </Link>
    </nav>
  );
};

export default Nav;

