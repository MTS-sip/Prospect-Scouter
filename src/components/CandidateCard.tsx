import { Candidate } from '../interfaces/Candidate.interface';

interface Props {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: Props) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '1rem',
        overflow: 'hidden',
        width: '300px',
        marginBottom: '1rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* Top half - avatar */}
      <div
        style={{
          background: '#fff',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={candidate.avatar_url}
          alt={candidate.login}
          width="100"
          height="100"
          style={{ borderRadius: '50%' }}
        />
      </div>

      {/* Bottom half - info */}
      <div
        style={{
          background: '#000',
          color: '#fff',
          padding: '1rem',
        }}
      >
        <p><strong>Name:</strong> {candidate.name || 'N/A'}</p>
        <p><strong>Username:</strong> {candidate.login}</p>
        <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
        <p>
          <strong>Email:</strong>{' '}
          {candidate.email ? (
            <a href={`mailto:${candidate.email}`} style={{ color: 'inherit' }}>
              {candidate.email}
            </a>
          ) : (
            'N/A'
          )}
        </p>
        <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default CandidateCard;




