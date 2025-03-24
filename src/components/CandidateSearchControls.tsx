interface ControlsProps {
  onAccept: () => void;
  onSkip: () => void;
}

const CandidateSearchControls = ({ onAccept, onSkip }: ControlsProps) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={onSkip} style={{ marginLeft: '0.5rem' }}>-</button>
      <button onClick={onAccept}>+</button>
    </div>
  );
};

export default CandidateSearchControls;  
 