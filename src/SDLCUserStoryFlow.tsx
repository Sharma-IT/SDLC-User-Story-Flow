import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface Stage {
  name: string;
  color: string;
  steps: string[];
}

const SDLCUserStoryFlow: React.FC = () => {
  const [expandedStages, setExpandedStages] = useState<Record<number, boolean>>({});

  const stages: Stage[] = [
    { name: 'Requirements Gathering', color: 'bg-blue-100 hover:bg-blue-200', steps: ['BA gathers requirements', 'BA creates user stories', 'BA hands over to SQE'] },
    { name: 'Backlog Grooming', color: 'bg-purple-100 hover:bg-purple-200', steps: ['Team grooming sessions', 'Prioritize and assign points', 'Select for sprint'] },
    { name: 'Design and Planning', color: 'bg-green-100 hover:bg-green-200', steps: ['Create wireframes', 'Discuss technical approach', 'Identify risks'] },
    { name: 'Task Breakdown', color: 'bg-yellow-100 hover:bg-yellow-200', steps: ['Break into smaller tasks', 'Assign to developers', 'Provide estimates'] },
    { name: 'Sprint Kick-off', color: 'bg-orange-100 hover:bg-orange-200', steps: ['Kick-off meeting', 'Align on goals', 'Address concerns'] },
    { name: 'Development', color: 'bg-red-100 hover:bg-red-200', steps: ['Implement changes', 'Write unit tests', 'Open PR draft'] },
    { name: 'SQE Review', color: 'bg-indigo-100 hover:bg-indigo-200', steps: ['Code review', 'Manual testing', 'Provide feedback'] },
    { name: 'Iteration', color: 'bg-pink-100 hover:bg-pink-200', steps: ['Address feedback', 'Verify changes', 'Repeat if necessary'] },
    { name: 'Automated Testing', color: 'bg-teal-100 hover:bg-teal-200', steps: ['Run UI and E2E tests', 'Validate CSS', 'Create performance tests'] },
    { name: 'Final Review', color: 'bg-cyan-100 hover:bg-cyan-200', steps: ['SQE approval', 'Developer review', 'Set to "Ready for review"'] },
    { name: 'Merging and Deployment', color: 'bg-lime-100 hover:bg-lime-200', steps: ['Merge to master', 'Deploy to staging/production', 'Set feature flags'] },
    { name: 'Release Planning', color: 'bg-emerald-100 hover:bg-emerald-200', steps: ['Create PVT plan', 'Handover to stakeholders', 'Organize testing time'] },
    { name: 'Production Readiness Review', color: 'bg-amber-100 hover:bg-amber-200', steps: ['Turn on feature flag', 'Document issues', 'Determine flag status'] },
    { name: 'Post-Deployment Tracking', color: 'bg-sky-100 hover:bg-sky-200', steps: ['Monitor for issues', 'Add tests to Zephyr', 'Monitor metrics'] },
    { name: 'Final Review and Closure', color: 'bg-violet-100 hover:bg-violet-200', steps: ['Review after a week', 'Decide on activation', 'Phase out feature flag'] }
  ];

  const toggleStage = (index: number) => {
    setExpandedStages(prev => ({...prev, [index]: !prev[index]}));
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Comprehensive SDLC User Story Flow</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stages.map((stage, index) => (
          <div key={stage.name} className={`${stage.color} rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105`}>
            <div 
              className="p-4 cursor-pointer"
              onClick={() => toggleStage(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-800">{stage.name}</h3>
                {expandedStages[index] ? <ChevronDown size={20} className="text-gray-600" /> : <ChevronRight size={20} className="text-gray-600" />}
              </div>
              {expandedStages[index] && (
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700">
                  {stage.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="mb-1">{step}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-600 text-center">
        This diagram illustrates the comprehensive flow of user stories through the SDLC process, from inception to completion. Click on each stage to see detailed steps.
      </p>
    </div>
  );
};

export default SDLCUserStoryFlow;