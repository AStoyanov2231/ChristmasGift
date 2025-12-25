# Christmas Website Context

This project is an interactive 3D "Christmas Journey" website. It utilizes a scroll-driven narrative where the camera moves through a 3D scene based on the user's scroll position, featuring interactive elements, cinematic transitions, and a grand finale.

## Project Overview

*   **Purpose:** A festive, interactive 3D experience featuring a scroll-based camera tour, interactive objects (letters, gifts, doors), and a magical end-game sequence.
*   **Main Technologies:**
    *   **Three.js:** Used for 3D rendering, scene management, raycasting, and particle effects (Snow, Fireworks).
    *   **GSAP & ScrollTrigger:** Drives the camera animation timeline synced with the page scroll and handles complex animations (card spins, element reveals).
    *   **Vite:** The build tool and development server.
    *   **GLTF/GLB:** 3D models (`Demonstration.glb`) containing the environment, camera waypoint objects, and interactables.

## Architecture & Key Components

*   **Scene Setup (`src/main.js`):** Initializes the Three.js scene, camera, renderer, and atmospheric effects (fog, custom snow particle system).
*   **Waypoint System:** 
    *   Camera positions and rotations are defined as objects within the GLB file (named `camAngle_1` through `camAngle_18`).
    *   The script extracts these transforms to build a GSAP timeline.
    *   **Interpolation:** Linear interpolation is used for specific path segments to ensure smooth tracking.
*   **Scroll Logic:** 
    *   A `5000vh` div (`#scroll-height`) provides a long scrollable area for granular control.
    *   GSAP ScrollTrigger maps scroll progress to the camera path.
*   **Interactions (`Raycaster`):** 
    *   **Door (`Door_001`):** Clicking toggles the door state.
    *   **Letter (`Paper_001`):** Located at Waypoint 12. Locks scroll and displays a modal when clicked.
    *   **Presents:** Interactive cards that reveal gifts. The 3rd present (`Present_004`) features a special "Spin & Expand" animation with fireworks.
*   **Grand Finale:**
    *   Triggered after collecting all gifts.
    *   Displays a "Весела Коледа зайче" message with three aligned gift cards using a staggered reveal animation.

## Building and Running

*   **Install Dependencies:** `npm install`
*   **Development Server:** `npm run dev` (Starts Vite server)
*   **Production Build:** `npx vite build` (Standard Vite build command, though not explicitly in `package.json` scripts)

## Development Conventions

*   **Waypoints:** Defined in `WAYPOINT_CONFIG` in `src/main.js`. Must match object names in the GLB file.
*   **Styling:** 
    *   UI elements (Overlays, Modals, Cards) are styled in `src/style.css`.
    *   Uses "Mountains of Christmas" font for headers.
    *   Custom cursors are defined for standard and interactive states.
*   **Coordinate System:** The code relies on `getWorldPosition` from the loaded GLB scene graph.
*   **State Management:** Global flags like `window.hasReadLetter` and `window.hasSlept` are used to track user progress through the narrative events.
