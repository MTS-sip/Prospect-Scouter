interface ControlsProps {
  onAccept: () => void;
  onSkip: () => void;
}

const CandidateSearchControls = ({ onAccept, onSkip }: ControlsProps) => {
  return (
    <div style={{
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 1rem',
    }}>
      <button
        onClick={onSkip}
        style={{
          backgroundColor: 'red',
          color: 'black',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer'
        }}
      >
        -
      </button>
      <button
        onClick={onAccept}
        style={{
          backgroundColor: 'green',
          color: 'black',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer'
        }}
      >
        +
      </button>
    </div>
  );
};

export default CandidateSearchControls;