import './App.css';
import TechnologyCard from './components/TechnologyCard';
import ProgressHeader from './components/ProgressHeader';

function App() {
  const technologies = [
    {
      id: 1, 
      title: 'React Components', 
      description: 'Изучение базовых компонентов',
      status: 'completed'
    },
    {
      id: 2, 
      title: 'JSX Syntax', 
      description: 'Освоение синтаксиса JSX', 
      status: 'in-progress'
    },
    {
      id: 3, 
      title: 'State Management', 
      description: 'Работа с состоянием компонентов', 
      status: 'not-started'
    }
  ];

return (
    <>
    <div className="technology-progress">
        <ProgressHeader technologies={technologies} />
        </div>
        <div className="technology-list">
            <h2>Список задач</h2>
            {technologies.map(technology => (
                <TechnologyCard
                    key={technology.id}
                    title={technology.title}
                    description={technology.description}
                    status={technology.status}
                />
            ))}
        </div>
    </>
);
}

export default App;
