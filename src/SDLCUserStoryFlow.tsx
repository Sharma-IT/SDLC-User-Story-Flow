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
    {
      name: 'Requirements Gathering',
      color: 'bg-blue-100 hover:bg-blue-200',
      steps: [
        'BA gathers requirements from stakeholders and end-users',
        'BA creates user stories with functionality and acceptance criteria',
        'BA hands over User Stories to SQE for refinement'
      ]
    },
    {
      name: 'Backlog Grooming',
      color: 'bg-purple-100 hover:bg-purple-200',
      steps: [
        'Development team participates in backlog grooming sessions',
        'User stories are prioritised and assigned story points',
        'Stories selected for upcoming sprint based on capacity and priority'
      ]
    },
    {
      name: 'Design and Planning',
      color: 'bg-green-100 hover:bg-green-200',
      steps: [
        'UI designer creates wireframes and mockups in Figma',
        'Development team discusses technical approach and architecture',
        'Potential risks and dependencies are identified and addressed'
      ]
    },
    {
      name: 'Task Breakdown',
      color: 'bg-yellow-100 hover:bg-yellow-200',
      steps: [
        'Selected user stories are broken down into smaller tasks',
        'Tasks are assigned to individual developers based on expertise and availability',
        'Developers provide estimates for task completion'
      ]
    },
    {
      name: 'Sprint Kick-off',
      color: 'bg-orange-100 hover:bg-orange-200',
      steps: [
        'Sprint begins with a kick-off meeting',
        'Development team aligns on sprint goals and tasks',
        'Questions or concerns are addressed before starting development work'
      ]
    },
    {
      name: 'Development',
      color: 'bg-red-100 hover:bg-red-200',
      steps: [
        'Developer creates a new branch from the master branch',
        'Developer implements changes based on Figma specs and User Stories',
        'Developer writes required unit tests',
        'Developer opens a Pull Request (PR) draft against the master branch'
      ]
    },
    {
      name: 'SQE Review',
      color: 'bg-indigo-100 hover:bg-indigo-200',
      steps: [
        'SQE checks out the branch locally and sets up testing environment',
        'SQE reviews and manually tests code changes against the test plan',
        'SQE provides feedback and comments on the PR',
        'SQE refines the test plan based on findings'
      ]
    },
    {
      name: 'Iteration',
      color: 'bg-pink-100 hover:bg-pink-200',
      steps: [
        'Developer reviews SQEs feedback and comments',
        'Developer makes necessary changes to address feedback',
        'SQE verifies the updated changes',
        'Process repeats until changes are satisfactory'
      ]
    },
    {
      name: 'Automated Testing',
      color: 'bg-teal-100 hover:bg-teal-200',
      steps: [
        'SQE creates and runs automated UI integration and E2E tests',
        'SQE writes tests to validate expected CSS properties',
        'SQE creates performance tests if required'
      ]
    },
    {
      name: 'Final Review',
      color: 'bg-cyan-100 hover:bg-cyan-200',
      steps: [
        'SQE approves and gives green-flag to set PR to "Ready for review"',
        'Another developer performs code review',
      ]
    },
    {
      name: 'Merging and Deployment',
      color: 'bg-lime-100 hover:bg-lime-200',
      steps: [
        'PR is merged into the master branch once all requirements are met',
        'Developer closes the project ticket',
        'Changes are deployed to staging and production behind a feature flag',
        'Feature flag is set to off in production and on in staging'
      ]
    },
    {
      name: 'Release Planning',
      color: 'bg-emerald-100 hover:bg-emerald-200',
      steps: [
        'SQE converts test plan into Production Verification Test (PVT) plan',
        'SQE hands over PVT to stakeholders (BA, PM, UI Designer)',
        'SQE and stakeholders organise time to start testing on production'
      ]
    },
    {
      name: 'Production Readiness Review',
      color: 'bg-amber-100 hover:bg-amber-200',
      steps: [
        'Feature flag is turned on (with an individual targeting rule set-up) to start PVT',
        'SQE and stakeholders test changes against PVT plan',
        'Issues are documented in PVT plan under "Triage" section',
        'Feature flag status determined based on severity of issues found'
      ]
    },
    {
      name: 'Post-Deployment Tracking',
      color: 'bg-sky-100 hover:bg-sky-200',
      steps: [
        'New PRs opened for bug fixes or improvements if issues found',
        'SQE adds new automated tests to Zephyr',
        'Team monitors various metrics (Hotjar, GA4, Splunk, Datadog, Sentry)',
        'Metrics such as lead time, cycle time, defect rates collected for a week'
      ]
    },
    {
      name: 'Final Review and Closure',
      color: 'bg-violet-100 hover:bg-violet-200',
      steps: [
        'SQE, PM, and development team review results after a week of monitoring',
        'Team analyses collected metrics together',
        'Decision made on permanent activation if no disruptions or irregularities',
        'Feature flag phased out if change operates smoothly'
      ]
    }
  ];

  const toggleStage = (index: number) => {
    setExpandedStages(prev => ({...prev, [index]: !prev[index]}));
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">SDLC User Story Flow</h2>
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