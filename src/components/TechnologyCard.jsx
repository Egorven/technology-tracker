import './TechnologyCard.css';

function TechnologyCard({ title, description, status }) {
    let cardClass = `technology-card status-${status}`;
    let statusIconClass = `status-icon status-${status}`;

    return (
        <div className={cardClass}>
            <div className="technology-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span className={statusIconClass}></span>{status}</p>
            </div>
        </div>
    );
}

export default TechnologyCard;