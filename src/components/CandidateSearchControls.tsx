interface ControlsProps {
  onAccept: () => void;
  onSkip: () => void;
}

const CandidateSearchControls = ({ onAccept, onSkip }: ControlsProps) => {
  return (
    <div
      style={{
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
        gap: '1rem',
      }}
    >
      <button
        onClick={onSkip}
        style={{
          backgroundColor: 'red',
          color: 'black',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          cursor: 'pointer',
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
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          cursor: 'pointer',
        }}
      >
        +
      </button>
    </div>
  );
};

export default CandidateSearchControls;