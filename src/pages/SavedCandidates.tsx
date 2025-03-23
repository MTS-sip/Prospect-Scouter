import { useEffect, useState } from 'react';
import { Candidate  } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const SavedCandidates = () => {
  const [saved, setSaved] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedCandidates');
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  if (saved.length === 0) {
    return <p style={{ padding: '1rem' }}>No candidates have been accepted.</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Potential Candidates</h2>
      {saved.map((candidate) => (
        <CandidateCard key={candidate.login} candidate={candidate} />
      ))}
    </div>
  );
};

export default SavedCandidates;




