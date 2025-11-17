import './ProgressHeader.css';

function ProgressHeader({ technologies }) {
    const total = technologies.length;
    const completed = technologies.filter(tech => tech.status === 'completed').length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
        <div className="progress-header">
            <h2>Прогресс по дорожной карте</h2>
            <p>Всего технологий: {total}</p>
            <p>Изучено: {completed}</p>
            <div className="progress-bar-container">
                <div className="progress-bar">
                    <div 
                        className="progress-bar-fill" 
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <span>{percentage}%</span>
            </div>
        </div>
    );
}

export default ProgressHeader;