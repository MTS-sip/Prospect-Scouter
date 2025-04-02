import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [saved, setSaved] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedCandidates');
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  const handleReject = (login: string) => {
    const updated = saved.filter(candidate => candidate.login !== login);
    setSaved(updated);
    localStorage.setItem('savedCandidates', JSON.stringify(updated));
  };

  if (saved.length === 0) {
    return <p style={{ padding: '1rem' }}>No candidates have been accepted.</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '1rem', color: 'white' }}>Potential Candidates</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr 1fr 1fr 1fr 100px', backgroundColor: 'black', color: 'white', padding: '0.5rem', fontWeight: 'bold' }}>
        <div>Image</div>
        <div>Name</div>
        <div>Location</div>
        <div>Email</div>
        <div>Company</div>
        <div>Profile</div>
        <div>Reject</div>
      </div>
      {saved.map((candidate, index) => (
        <div
          key={candidate.login}
          style={{
            display: 'grid',
            gridTemplateColumns: '100px 1fr 1fr 1fr 1fr 1fr 100px',
            backgroundColor: index % 2 === 0 ? '#333' : 'black',
            color: 'white',
            padding: '0.5rem',
            alignItems: 'center'
          }}
        >
          <img src={candidate.avatar_url} alt={candidate.login} style={{ width: '80px', borderRadius: '8px' }} />
          <div>{candidate.login}</div>
          <div>{candidate.location || 'N/A'}</div>
          <div><a href={`mailto:${candidate.email}`} style={{ color: '#61dafb' }}>{candidate.email || 'N/A'}</a></div>
          <div>{candidate.company || 'N/A'}</div>
          <div><a href={candidate.html_url} target="_blank" rel="noreferrer" style={{ color: '#61dafb' }}>GitHub</a></div>
          <div>
          <button
  onClick={() => handleReject(candidate.login)}
  style={{
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '2rem',
    height: '2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    lineHeight: 1,
  }}
>
  -
</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;







