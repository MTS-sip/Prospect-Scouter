import { Candidate } from '../interfaces/Candidate.interface';

interface Props {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: Props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <img src={candidate.avatar_url} alt={candidate.login} width="100" />
      <p><strong>Name:</strong> {candidate.name || 'N/A'}</p>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
      <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
      <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
      <p><strong>GitHub:</strong> <a href={candidate.html_url} target="_blank">View Profile</a></p>
    </div>
  );
};

export default CandidateCard;