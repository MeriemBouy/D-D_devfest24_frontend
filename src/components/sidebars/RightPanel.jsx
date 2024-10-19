import React, { useEffect, useState } from 'react';
// Assure-toi d'avoir importé Font Awesome ou une autre bibliothèque d'icônes
import { FaExclamationTriangle, FaThermometerHalf, FaLeaf } from 'react-icons/fa';

const RightPanel = () => {
  const [alerts, setAlerts] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  useEffect(() => {
    const fetchAlertsAndTasks = () => {
      const sampleAlerts = [
        { message: 'High Energy Consumption Alert', type: 'bg-red-100 text-red-800', icon: <FaExclamationTriangle /> },
        { message: 'Overheating Alert', type: 'bg-yellow-100 text-yellow-800', icon: <FaThermometerHalf /> },
        { message: 'Energy Efficiency Drop Alert', type: 'bg-green-100 text-green-800', icon: <FaLeaf /> },
      ];
      
      const sampleTasks = [
        { description: 'Production Rate Adjustment', timestamp: 'Just now' },
        { description: 'Production Rate Adjustment', timestamp: '15 minutes ago' },
        { description: 'Production Rate Adjustment', timestamp: '1 hour ago' },
        { description: 'Production Rate Adjustment', timestamp: 'Today, 11:23 AM' },
        { description: 'Production Rate Adjustment', timestamp: 'Feb 12, 2024' },
      ];

      setAlerts(sampleAlerts);
      setTasks(sampleTasks);
    };

    fetchAlertsAndTasks();
  }, []);

  const handleAlertClick = () => {
    console.log('Alerts clicked');
  };

  const handleTaskClick = () => {
    console.log('Tasks clicked');
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  return (
    <div>
      {isVisible && (
        <div className="w-full max-w-xs bg-white p-4 shadow-lg rounded-lg relative text-sm"> {/* Réduction de la taille globale du texte */}
          <button 
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={toggleVisibility}
            aria-label="Close"
          >
            &times; {/* X icon */}
          </button>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4 cursor-pointer" onClick={handleAlertClick}>
              Alerts
            </h2>
            <div className="space-y-2">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-2 rounded-md flex items-center ${alert.type}`}>
                  <span className="mr-2">{alert.icon}</span> {/* Ajout de l'icône */}
                  {alert.message}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4 cursor-pointer" onClick={handleTaskClick}>
              Tasks
            </h2>
            <div className="space-y-2">
              {tasks.map((task, index) => (
                <div key={index} className="bg-gray-100 text-gray-800 p-2 rounded-md">
                  <div>{task.description}</div>
                  <span className="text-xs text-gray-500">{task.timestamp}</span> {/* Temps sous la tâche avec écriture plus petite et moins foncée */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Button to reopen the panel */}
      {!isVisible && (
        <button 
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={toggleVisibility}
        >
          Open Panel
        </button>
      )}
    </div>
  );
};

export default RightPanel;
