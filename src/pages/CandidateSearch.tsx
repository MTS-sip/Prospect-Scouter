import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
import CandidateSearchControls from '../components/CandidateSearchControls';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadCandidates = async () => {
    setLoading(true);
    const users = await searchGithub();
    const details = await Promise.all(users.map((user: any) => searchGithubUser(user.login)));
    setCandidates(details);
    setCurrentIndex(0);
    setLoading(false);
  };

  const saveCandidate = () => {
    const current = candidates[currentIndex];
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    localStorage.setItem('savedCandidates', JSON.stringify([...saved, current]));
    goToNext();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    loadCandidates();
  }, []);

  if (loading) return <p style={{ padding: '1rem' }}>Loading candidates...</p>;

  if (currentIndex >= candidates.length) {
    return <p style={{ padding: '1rem' }}>No more candidates available.</p>;
  }

  const candidate = candidates[currentIndex];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Candidate Search</h2>
      <CandidateCard candidate={candidate} />
      <CandidateSearchControls onAccept={saveCandidate} onSkip={goToNext} />
    </div>
  );
};

export default CandidateSearch;

