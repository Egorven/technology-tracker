import './TechnologyCard.css';
import TechnologyNotes from './TechnologyNotes';

function TechnologyCard({ id, title, description, notes, status, onUpdateStatus,onNotesChange }) {
  const cardClass = `technology-card status-${status}`;
  const statusIconClass = `status-icon status-${status}`;
  

  const handleClick = () => {
    onUpdateStatus(id);
  };

  return (
    <div className={cardClass} onClick={handleClick}>
      <div className="technology-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><span className={statusIconClass}></span>{status}</p>
        <TechnologyNotes
  techId={id}
  notes={notes}
  onNotesChange={onNotesChange}
/>
      </div>
    </div>
  );
}

export default TechnologyCard;