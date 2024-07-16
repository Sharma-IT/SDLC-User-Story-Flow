# SDLC User Story Flow

This React project showcases an interactive visualisation of the Software Development Life Cycle (SDLC) process for user stories, from inception to completion, with emphasis on what it should look like from a Software Quality Engineering perspective.

## Overview

The SDLCUserStoryFlow component provides a comprehensive view of the stages a user story goes through in a typical software development process. It includes 15 stages, each with detailed steps that can be expanded or collapsed for easy viewing.

## Features

- Interactive UI with expandable/collapsible stages
- Color-coded stages for easy identification
- Responsive design (grid layout adapts to different screen sizes)
- Hover effects for improved user experience

## Stages

1. Requirements Gathering
2. Backlog Grooming
3. Design and Planning
4. Task Breakdown
5. Sprint Kick-off
6. Development
7. SQE Review
8. Iteration
9. Automated Testing
10. Final Review
11. Merging and Deployment
12. Release Planning
13. Production Readiness Review
14. Post-Deployment Tracking
15. Final Review and Closure

## Usage

To use this component in your React application:

1. Import the component:
```javascript
import SDLCUserStoryFlow from './SDLCUserStoryFlow';
```

2. Render the component:
```
<SDLCUserStoryFlow />
```

Or to locally host the component on it's own:

1. Run:
```sh
npm install
npm start
```

2. Then navigate to `http://localhost:3000`.

## Dependencies

- Node.js
- React
- Lucide React (for ChevronRight and ChevronDown icons)
- Tailwind CSS (for styling)

## Customisation

You can easily customize the stages, colors, and steps by modifying the stages array in the component (`./src/SDLCUserStoryFlow.tsx`). Each `stage` object contains:

- name: The name of the stage
- color: Tailwind CSS classes for background color
- steps: An array of strings describing each step in the stage

## Contributing

Contributions to improve or extend this SDLC User Story Flow visualisation are welcome. Please feel free to submit pull requests or open issues for any enhancements or bug fixes.

## License

This project is licensed under the GPL 3.0 License - see the [LICENSE](LICENSE) file for details.