import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- 1. Scene Setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050510); // Dark night sky color
scene.fog = new THREE.FogExp2(0x050510, 0.02); // Add fog for night atmosphere
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('container').appendChild(renderer.domElement);

// --- 1.2 Raycasting for Interaction ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const INTERACTIVE_NAMES = ['Door_001', 'Present_001']; // Add more names to this list as needed

let isScrollLocked = false;
window.hasReadLetter = false;

function lockScroll(showPrompt = true) {
    if (isScrollLocked) return;
    isScrollLocked = true;
    document.body.style.overflow = 'hidden';
    
    if (showPrompt) {
        document.getElementById('house-prompt').classList.add('visible');
    }
    
    const door = scene.getObjectByName('Door_001');
    if (door) {
        gsap.to(door.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.5, yoyo: true, repeat: -1 });
    }
}

function unlockScroll() {
    isScrollLocked = false;
    document.body.style.overflow = 'auto';
    document.getElementById('house-prompt').classList.remove('visible');
    
    const door = scene.getObjectByName('Door_001');
    if (door) {
        gsap.killTweensOf(door.scale);
        gsap.to(door.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
    }
}

// --- 2. Lighting (Removed for baked-in lighting) ---
// If your scene looks completely black, ensure your materials are MeshBasicMaterial 
// or have an emissive map/baked texture assigned.

// --- 3. Controls Setup ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableRotate = false; // Disable manual rotation (left click drag)
controls.enablePan = false;    // Disable manual panning (right click drag)
controls.enableZoom = false;   // Scroll is reserved for waypoint navigation

// --- 4. Waypoint Configuration ---
// Define the names of objects in your GLB file that represent camera positions.
const WAYPOINT_CONFIG = [
    {
        name: "camAngle_1", 
        title: "Welcome",
        description: "Initial starting point of the scene."
    },
    {
        name: "camAngle_2", 
        title: "The View",
        description: "A beautiful perspective of the environment."
    },
    {
        name: "camAngle_3", 
        title: "Closer Look",
        description: "Checking out the details of the model."
    },
    {
        name: "camAngle_4", 
        title: "New Perspective",
        description: "Exploring another part of the scene."
    },
    {
        name: "camAngle_5", 
        title: "The Workshop",
        description: "Getting closer to the action."
    },
    {
        name: "camAngle_6", 
        title: "The Chimney",
        description: "A top-down look at the house."
    },
    {
        name: "camAngle_7", 
        title: "The Garden",
        description: "Finishing the tour in the yard."
    },
    {
        name: "camAngle_8", 
        title: "Side View",
        description: "Viewing the house from the side."
    },
    {
        name: "camAngle_9", 
        title: "Back View",
        description: "Checking out the back of the house."
    },
    {
        name: "camAngle_10", 
        title: "Roof Detail",
        description: "A closer look at the roofing."
    },
    {
        name: "camAngle_11", 
        title: "Window Peep",
        description: "Peeking through the window."
    },
    {
        name: "camAngle_12", 
        title: "Doorway",
        description: "Standing at the entrance."
    },
    {
        name: "camAngle_13", 
        title: "Pathway",
        description: "Walking down the path."
    },
    {
        name: "camAngle_14", 
        title: "Tree View",
        description: "Looking at the large tree."
    },
    {
        name: "camAngle_15", 
        title: "Fence",
        description: "Near the perimeter fence."
    },
    {
        name: "camAngle_16", 
        title: "Street View",
        description: "View from the street."
    },
    {
        name: "camAngle_17", 
        title: "Farewell",
        description: "Saying goodbye to the scene."
    },
    {
        name: "camAngle_18", 
        title: "The End",
        description: "See you next year!"
    }
];

let WAYPOINTS = [];

// --- 5. Load Scene and Initialize Scroll ---
const loader = new GLTFLoader();
loader.load('Demonstration.glb', (gltf) => {
    scene.add(gltf.scene);
    
    // Ensure all transforms are up to date
    scene.updateMatrixWorld(true);

    // Extract waypoints from the scene based on names
    WAYPOINTS = WAYPOINT_CONFIG.map(config => {
        const object = gltf.scene.getObjectByName(config.name);
        
        if (object) {
            const position = new THREE.Vector3();
            const quaternion = new THREE.Quaternion();
            
            // Get world coordinates
            object.getWorldPosition(position);
            object.getWorldQuaternion(quaternion);

            // Fix for Unity -> Three.js camera orientation (Rotate 180 deg around Y)
            // Unity cameras look down +Z, Three.js cameras look down -Z.
            quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI));

            return {
                position: position,
                rotation: quaternion,
                title: config.title,
                description: config.description
            };
        } else {
            console.warn(`Waypoint object '${config.name}' not found in GLB.`);
            return null;
        }
    }).filter(wp => wp !== null);

    if (WAYPOINTS.length > 0) {
        // Set initial camera state to Waypoint 0
        camera.position.copy(WAYPOINTS[0].position);
        camera.quaternion.copy(WAYPOINTS[0].rotation);
        
        // Set OrbitControls target slightly in front of camera
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        controls.target.copy(camera.position).add(forward.multiplyScalar(0.1));
        controls.update();
    
        normalizeWaypointRotations();
        setupScrollLogic();

        // Hide loading screen
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
        }
    } else {
        console.error("No valid waypoints found. Please check 'WAYPOINT_CONFIG' names.");
    }
});

// Helper to ensure smooth rotation (shortest path) between waypoints
function normalizeWaypointRotations() {
    for (let i = 1; i < WAYPOINTS.length; i++) {
        const prev = WAYPOINTS[i - 1].rotation;
        const curr = WAYPOINTS[i].rotation;
        
        // Check dot product
        if (prev.dot(curr) < 0) {
            // If negative, we are taking the long way around.
            // Negating the quaternion gives the same rotation but the "shortest path" for interpolation.
            curr.x = -curr.x;
            curr.y = -curr.y;
            curr.z = -curr.z;
            curr.w = -curr.w;
        }
    }
}

// --- 6. Simple Interaction Logic ---
// Mouse Move for Cursor Hover Effect
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    let isHoveringInteractive = false;
    if (intersects.length > 0) {
        let current = intersects[0].object;
        while (current) {
            if (INTERACTIVE_NAMES.includes(current.name)) {
                isHoveringInteractive = true;
                break;
            }
            current = current.parent;
        }
    }

    if (isHoveringInteractive) {
        document.body.classList.add('cursor-pointer');
    } else {
        document.body.classList.remove('cursor-pointer');
    }
});

renderer.domElement.addEventListener('click', (event) => {
    // Calculate mouse position in normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with all objects in the scene
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        let current = intersects[0].object;
        
        // Traverse up the parent chain to check for any names in our list
        while (current) {
            if (INTERACTIVE_NAMES.includes(current.name)) {
                
                if (current.name === 'Door_001') {
                    const isOpen = current.userData.isOpen || false;
                    const targetY = isOpen ? 0 : THREE.MathUtils.degToRad(-95);
                    
                    gsap.to(current.rotation, {
                        y: targetY,
                        duration: 1.5,
                        ease: "power2.inOut",
                        onComplete: () => {
                            if (isScrollLocked) unlockScroll();
                        }
                    });
                    
                    current.userData.isOpen = !isOpen;
                } else if (current.name.startsWith('Present')) {
                    if (window.onPresentOpened) {
                        window.onPresentOpened(current.name);
                    }
                } else if (current.name === 'Paper_001') {
                    // Stop highlight
                    gsap.killTweensOf(current.scale);
                    gsap.to(current.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
                    
                    // Show Letter
                    const letterModal = document.getElementById('letter-modal');
                    letterModal.classList.add('active');
                }
                
                return; // Stop once we find a match
            }
            current = current.parent;
        }
    } else {
        console.log("Clicked on empty space");
    }
});

// --- 7. GSAP ScrollTrigger Logic ---
function setupScrollLogic() {
    const triggerIndex = 3; // Waypoint 4 (camAngle_4)
    const snowStopIndex = 4; // Waypoint 5 (camAngle_5)
    
    // New Stop Logic for Snowman
    const snowmanStopIndex = 14;// Waypoint 14 (camAngle_14)
    let snowmanTriggered = false;

    const totalWaypoints = WAYPOINTS.length;
    
    const lockProgress = (triggerIndex + 1) / totalWaypoints;
    const snowStopProgress = (snowStopIndex + 1) / totalWaypoints;
    const snowmanStopProgress = (snowmanStopIndex) / (totalWaypoints - 1); 

    // Snowman setup
    const snowman = scene.getObjectByName('Snowman_002');
    const smPos1 = scene.getObjectByName('snowMan_pos1');
    const smPos2 = scene.getObjectByName('snowMan_pos2');
    const smPos3 = scene.getObjectByName('snowMan_pos3');

    // Store positions and rotations
    const p1 = new THREE.Vector3();
    const p2 = new THREE.Vector3();
    const p3 = new THREE.Vector3();
    const q1 = new THREE.Quaternion();
    const q2 = new THREE.Quaternion();
    const q3 = new THREE.Quaternion();

    if (snowman && smPos1 && smPos2 && smPos3) {
        smPos1.getWorldPosition(p1);
        smPos2.getWorldPosition(p2);
        smPos3.getWorldPosition(p3);
        
        smPos1.getWorldQuaternion(q1);
        smPos2.getWorldQuaternion(q2);
        smPos3.getWorldQuaternion(q3);
        
        // Initial State (Hidden at Pos 1)
        snowman.position.copy(p1);
        snowman.quaternion.copy(q1); 
        snowman.scale.set(0, 0, 0);
        snowman.visible = false; // Initially hidden

        // Hide markers
        smPos1.visible = false;
        smPos2.visible = false;
        smPos3.visible = false;
    }

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#scroll-height",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const index = Math.round(progress * (totalWaypoints - 1));
                updateUI(index);

                // 1. Hide Start Text on Scroll
                if (progress > 0.005) {
                    const startText = document.getElementById('start-text');
                    if (startText && startText.classList.contains('active')) {
                        startText.classList.remove('active');
                    }
                }

                // 2. Lock at Waypoint 4 if door is closed
                if (!isScrollLocked && progress >= lockProgress && progress < lockProgress + 0.02) {
                    const door = scene.getObjectByName('Door_001');
                    if (door && !door.userData.isOpen) {
                        self.scroll(self.start + (self.end - self.start) * lockProgress);
                        lockScroll();
                    }
                }

                // 3. Stop snow at Waypoint 5
                if (snowSystem) {
                    snowSystem.visible = progress < snowStopProgress;
                }

                // 3.5. Letter Event at Waypoint 12 (Index 11)
                const letterIndex = 11;
                const letterProgress = letterIndex / (totalWaypoints - 1);
                
                if (!window.hasReadLetter && progress >= letterProgress - 0.005 && progress < letterProgress + 0.02) {
                    // Lock exactly at the point
                    if (Math.abs(progress - letterProgress) > 0.001) {
                         self.scroll(self.start + (self.end - self.start) * letterProgress);
                    }
                    
                    lockScroll(false); // Lock without "Enter House" prompt
                    
                    const paper = scene.getObjectByName('Paper_001');
                    if (paper) {
                        // Highlight
                        gsap.to(paper.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.5, yoyo: true, repeat: -1 });
                        
                        // Enable interaction
                        if (!INTERACTIVE_NAMES.includes('Paper_001')) {
                            INTERACTIVE_NAMES.push('Paper_001');
                        }
                    }
                }

                // 4. SLEEP EVENT at Waypoint 14 (Index 13)
                // Stop slightly before exact point to ensure trigger
                const sleepIndex = 13;
                const sleepProgress = sleepIndex / (totalWaypoints - 1);
                
                // Strict check: Must be AT or PAST the point to trigger
                if (!window.hasSlept && progress >= sleepProgress) {
                    window.hasSlept = true;
                    lockScroll(false); // Do not show house prompt
                    
                    // Reset Door to Default
                    const door = scene.getObjectByName('Door_001');
                    if (door) {
                        gsap.to(door.rotation, { y: 0, duration: 1 });
                        door.userData.isOpen = false;
                    }
                    
                    const sleepOverlay = document.getElementById('sleep-overlay');
                    sleepOverlay.classList.add('active');

                    // Sequence:
                    // 1. Fade In (CSS transition 3s)
                    // 2. Wait 3s (Darkness)
                    // 3. Teleport & Wake up
                    setTimeout(() => {
                        // Teleport Logic
                        // We need to jump the scroll to Waypoint 15 (Index 14)
                        const wakeIndex = 14;
                        const wakeProgress = wakeIndex / (totalWaypoints - 1);
                        
                        // Move GSAP timeline instantly
                        self.scroll(self.start + (self.end - self.start) * wakeProgress);
                        
                        // Allow UI update
                        setTimeout(() => {
                            sleepOverlay.classList.remove('active');
                            unlockScroll();
                        }, 3000); // 3s dark screen
                    }, 3000); // 3s fade in
                }

                // 5. END EVENT at Last Waypoint (Index 17)
                if (progress > 0.99 && !window.endGameTriggered) {
                    window.endGameTriggered = true;
                    startEndGameSequence();
                }
            }
        }
    });

    // --- END GAME SEQUENCE ---
    function startEndGameSequence() {
        // 1. Spawn Snowman at Pos 3
        if (snowman && smPos3) {
            snowman.visible = true;
            // Position is already set at init, but ensure it
            snowman.position.copy(p3);
            snowman.quaternion.copy(q3);
            
            gsap.to(snowman.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 1, ease: "back.out" });
        }

        // 2. Present Highlight Logic
        const presents = ['Present_007', 'Present_006', 'Present_004'];
        
        // Map presents to placeholder images (Clash Royale Style)
        const PRESENT_IMAGES = {
            'Present_007': 'https://placehold.co/400x400/b3161b/d4af37?text=Gift+1',
            'Present_006': 'https://placehold.co/400x400/165b33/d4af37?text=Gift+2',
            'Present_004': 'assets/CapybaraCostume.png'
        };

        let currentPresentIndex = 0;

        function highlightPresent(name) {
            const present = scene.getObjectByName(name);
            if (!present) {
                nextPresent(); // Skip if missing
                return;
            }

            // Highlight Effect (Pulse Scale)
            gsap.to(present.scale, { 
                x: present.scale.x * 1.2, 
                y: present.scale.y * 1.2, 
                z: present.scale.z * 1.2, 
                duration: 0.5, 
                yoyo: true, 
                repeat: -1 
            });
            
            // Add to interactive list so click handler picks it up
            if (!INTERACTIVE_NAMES.includes(name)) {
                INTERACTIVE_NAMES.push(name);
            }
        }

        function nextPresent() {
            currentPresentIndex++;
            if (currentPresentIndex < presents.length) {
                highlightPresent(presents[currentPresentIndex]);
            }
        }

        // Start with first present
        highlightPresent(presents[0]);

        // Hook into existing click listener via a global helper or custom event
        window.onPresentOpened = (name) => {
            const present = scene.getObjectByName(name);
            if (present) {
                gsap.killTweensOf(present.scale);
                // "Open" animation (e.g., scale down or fly away)
                gsap.to(present.scale, { x: 0, y: 0, z: 0, duration: 0.5 });
            }

            // --- SNOWMAN CELEBRATION ---
            if (snowman) {
                // Jump
                gsap.to(snowman.position, { 
                    y: snowman.position.y + 1.5, 
                    duration: 0.4, 
                    yoyo: true, 
                    repeat: 1, 
                    ease: "power2.out" 
                });
                // Wiggle
                gsap.fromTo(snowman.rotation, 
                    { z: -0.2 }, 
                    { z: 0.2, duration: 0.1, repeat: 5, yoyo: true, ease: "linear" }
                );
                // Spin head (if separated) or just spin body slightly
                gsap.to(snowman.rotation, { y: snowman.rotation.y + Math.PI * 2, duration: 1, ease: "back.out" });
            }

            // --- Show Card Reveal Overlay ---
            const overlay = document.getElementById('card-reveal-overlay');
            const cardWrapper = document.querySelector('.card-wrapper');
            const cardImage = document.getElementById('card-image');
            const collectBtn = document.getElementById('collect-btn');
            
            // Set image
            if (cardImage && PRESENT_IMAGES[name]) {
                cardImage.src = PRESENT_IMAGES[name];
            }

            // Reset state
            cardWrapper.classList.remove('flipped');
            cardWrapper.classList.remove('spinning');
            collectBtn.classList.remove('visible');
            overlay.classList.add('active');
            
            // Reset rotation manually to 0 for a clean start
            gsap.set(cardWrapper, { rotationY: 0, scale: 1 });
            const cardInner = cardWrapper.querySelector('.card-inner');

            // Handle Card Interaction
            const onCardClick = () => {
                if (cardWrapper.classList.contains('flipped') || cardWrapper.classList.contains('spinning')) return;

                if (name === 'Present_004') { // The special one
                    cardWrapper.classList.add('spinning'); // Block clicks
                    
                    // 1. Spin (Inner) & Scale Up (Wrapper)
                    gsap.to(cardInner, {
                        rotationY: 1080 + 180, // 3 full spins + flip
                        duration: 3,
                        ease: "power2.inOut"
                    });
                    
                    gsap.to(cardWrapper, {
                        scale: 1.15,
                        duration: 3,
                        ease: "power2.inOut",
                        onComplete: () => {
                            // 2. Scale Back & Finalize
                            gsap.to(cardWrapper, {
                                scale: 1,
                                duration: 0.5,
                                ease: "back.out"
                            });
                            
                            cardWrapper.classList.add('flipped'); // logical state
                            
                            // 3. Fireworks
                            triggerFireworks();
                            
                            // 4. Show Button
                            setTimeout(() => {
                                collectBtn.classList.remove('hidden');
                                collectBtn.classList.add('visible');
                            }, 500);
                        }
                    });
                } else {
                    // Normal behavior - Let CSS handle the flip
                    cardWrapper.classList.add('flipped');
                    
                    setTimeout(() => {
                        collectBtn.classList.remove('hidden');
                        collectBtn.classList.add('visible');
                    }, 600);
                }
            };
            
            const onCollectClick = (e) => {
                e.stopPropagation(); // Prevent card flip click
                overlay.classList.remove('active');
                
                // Cleanup listeners to prevent duplicates
                cardWrapper.removeEventListener('click', onCardClick);
                collectBtn.removeEventListener('click', onCollectClick);
                
                // Trigger next present or Grand Finale
                if (currentPresentIndex < presents.length - 1) {
                    nextPresent();
                } else {
                    showGrandFinale();
                }
            };

            cardWrapper.addEventListener('click', onCardClick);
            collectBtn.addEventListener('click', onCollectClick);
        };
        
        function showGrandFinale() {
            const grandFinale = document.getElementById('grand-finale');
            grandFinale.classList.add('active');
            
            // Animate Text
            gsap.to('.final-title', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "back.out(1.7)",
                delay: 0.5
            });
            
            // Animate Cards One by One
            const cards = document.querySelectorAll('.final-card-wrapper');
            gsap.to(cards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.4,
                ease: "back.out(1.2)",
                delay: 1
            });
        }

        // --- Fireworks Helper ---
        function triggerFireworks() {
            const colors = ['#ff0000', '#00ff00', '#ffff00', '#00ffff', '#ff00ff'];
            const container = document.getElementById('card-reveal-overlay');
            const rect = document.querySelector('.card-wrapper').getBoundingClientRect();
            
            // Left Side
            spawnParticles(rect.left, rect.top + rect.height/2, container, colors, -1);
            // Right Side
            spawnParticles(rect.right, rect.top + rect.height/2, container, colors, 1);
        }

        function spawnParticles(x, y, container, colors, direction) {
            for (let i = 0; i < 30; i++) {
                const p = document.createElement('div');
                p.classList.add('firework-particle');
                p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                p.style.left = x + 'px';
                p.style.top = y + 'px';
                container.appendChild(p);
                
                const angle = (Math.random() - 0.5) * Math.PI; // Spread
                const velocity = 100 + Math.random() * 100;
                
                gsap.to(p, {
                    x: Math.cos(angle) * velocity * direction + (Math.random() * 50 * direction),
                    y: Math.sin(angle) * velocity + (Math.random() - 0.5) * 50,
                    opacity: 0,
                    scale: 0,
                    duration: 1 + Math.random(),
                    ease: "power2.out",
                    onComplete: () => p.remove()
                });
            }
        }
    }

    // Build the timeline path through waypoints
    WAYPOINTS.forEach((wp, i) => {
        if (i === 0) return; // Skip first as it's the start

        const linearIndices = [4, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17];
        const currentEase = linearIndices.includes(i) ? "none" : "power2.inOut";

        tl.to(camera.position, {
            x: wp.position.x,
            y: wp.position.y,
            z: wp.position.z,
            ease: currentEase,
            duration: 1
        }, i)
        .to(camera.quaternion, {
            x: wp.rotation.x,
            y: wp.rotation.y,
            z: wp.rotation.z,
            w: wp.rotation.w,
            ease: currentEase,
            duration: 1
        }, i);
    });
}

// --- 8. UI and Interaction ---
function updateUI(index) {
    const uiTitle = document.getElementById('ui-title');
    const uiDesc = document.getElementById('ui-description');
    if (uiTitle && WAYPOINTS[index]) {
        uiTitle.innerText = WAYPOINTS[index].title;
        uiDesc.innerText = WAYPOINTS[index].description;
    }
}

// --- 9. Snowfall Effect ---
const snowGeometry = new THREE.BufferGeometry();
const snowCount = 1500;
const snowPosArray = new Float32Array(snowCount * 3);
const snowVelocities = [];

for(let i = 0; i < snowCount * 3; i+=3) {
    snowPosArray[i] = (Math.random() - 0.5) * 50;    // x
    snowPosArray[i+1] = (Math.random() - 0.5) * 40 + 10; // y
    snowPosArray[i+2] = (Math.random() - 0.5) * 50;    // z
    
    snowVelocities.push((Math.random() * 0.05) + 0.02);
}

snowGeometry.setAttribute('position', new THREE.BufferAttribute(snowPosArray, 3));

const snowMaterial = new THREE.PointsMaterial({
    size: 0.15,
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
});

const snowSystem = new THREE.Points(snowGeometry, snowMaterial);
scene.add(snowSystem);

// --- 10. Animation Loop ---
function animate() {
    requestAnimationFrame(animate);
    
    // Update snow
    const positions = snowSystem.geometry.attributes.position.array;
    for(let i = 0; i < snowCount; i++) {
        positions[i * 3 + 1] -= snowVelocities[i];
        if (positions[i * 3 + 1] < -5) {
            positions[i * 3 + 1] = 20;
        }
    }
    snowSystem.geometry.attributes.position.needsUpdate = true;
    
    // Update OrbitControls target to match camera movement
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    controls.target.copy(camera.position).add(forward.multiplyScalar(0.1));
    
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Handle Resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- 11. UI Event Listeners ---
const closeLetterBtn = document.getElementById('close-letter-btn');
if (closeLetterBtn) {
    closeLetterBtn.addEventListener('click', () => {
        const letterModal = document.getElementById('letter-modal');
        letterModal.classList.remove('active');
        
        window.hasReadLetter = true;
        unlockScroll();
    });
}
