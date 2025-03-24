interface ControlsProps {
  onAccept: () => void;
  onSkip: () => void;
}

const CandidateSearchControls = ({ onAccept, onSkip }: ControlsProps) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={onAccept}>+</button>
      <button onClick={onSkip} style={{ marginLeft: '0.5rem' }}>-</button>
    </div>
  );
};

export default CandidateSearchControls;  
 