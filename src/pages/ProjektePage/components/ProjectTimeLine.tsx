import React from 'react';

interface Milestone {
  name: string;
  status: 'completed' | 'current' | 'future';
  date?: string;
}

const milestones: Milestone[] = [
  { name: 'Planung\nabgeschlossen', status: 'completed' },
  { name: 'Baugenehmigung\neingereicht', status: 'completed' },
  { name: 'Baugenehmigung\nerteilt', status: 'completed' },
  { name: 'Materiallieferung', status: 'completed' },
  { name: 'Baubeginn', status: 'current' },
  { name: 'Module\ninstalliert', status: 'future' },
  { name: 'DC Fertigstellung', status: 'future', date: 'Plan: April 2025' },
  { name: 'Trafo\ngeliefert', status: 'future' },
  { name: 'AC Fertigstellung -\nNetzanschluss', status: 'future' },
  { name: 'Ertrag', status: 'future', date: 'Plan: April 2025' },
];

const getStatusStyles = (status: Milestone['status']) => {
  switch (status) {
    case 'completed':
      return {
        marker: 'bg-brand-green',
        text: 'text-gray-500',
      };
    case 'current':
      return {
        marker: 'bg-brand-green ring-4 ring-green-200',
        text: 'font-bold text-brand-text-dark',
      };
    case 'future':
    default:
      return {
        marker: 'bg-gray-300',
        text: 'text-gray-500',
      };
  }
};

const ProjectTimeline: React.FC = () => {
  const currentIndex = milestones.findIndex(m => m.status === 'current');
  const progressPercentage = currentIndex >= 0 ? (currentIndex / (milestones.length - 1)) * 100 : 0;

  return (
    <div className="mt-6">
      <div className="relative pt-8">
        {/* Timeline track */}
        <div className="absolute top-[38px] left-0 w-full h-1 bg-gray-300 rounded"></div>
        {/* Timeline progress */}
        <div 
          className="absolute top-[38px] left-0 h-1 bg-brand-green rounded"
          style={{ width: `${progressPercentage}%`}}
        ></div>
        
        <div className="relative flex justify-between w-full">
          {milestones.map((milestone, index) => {
            const styles = getStatusStyles(milestone.status);
            const isCurrent = milestone.status === 'current';

            return (
              <div key={index} className="flex flex-col items-center flex-1 text-center">
                {/* Marker */}
                <div className={`w-3 h-3 rounded-full z-10 ${styles.marker} ${isCurrent ? 'w-4 h-4' : ''}`}></div>
                {/* Text */}
                <p className={`mt-2 text-xs whitespace-pre-line leading-tight ${styles.text}`}>
                  {milestone.name}
                </p>
                {milestone.date && (
                    <p className="text-xs text-gray-500 mt-1">{milestone.date}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;