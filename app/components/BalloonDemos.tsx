'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Demo {
  id: string;
  title: string;
  description: string;
  href: string;
  color: string;
}

const demos: Demo[] = [
  {
    id: 'setmore-plus',
    title: 'Setmore++',
    description: 'Smart availability, deposits, reminders, and admin flags for booking systems.',
    href: '/demos/setmore-plus',
    color: '#3B82F6'
  },
  {
    id: 'ops-autopilot',
    title: 'Ops Autopilot',
    description: 'Automated operational workflows that reduce manual tasks and improve efficiency.',
    href: '/demos/ops-autopilot',
    color: '#10B981'
  },
  {
    id: 'data-reliability',
    title: 'Data Reliability',
    description: 'Tools to ensure data quality, validation, and consistency across systems.',
    href: '/demos/data-reliability',
    color: '#F59E0B'
  }
];

export default function BalloonDemos() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const balloonsRef = useRef<THREE.Mesh[]>([]);
  const velocitiesRef = useRef<THREE.Vector3[]>([]);
  const [balloonPositions, setBalloonPositions] = useState<THREE.Vector3[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

          // Create simple physics objects for DVD-style movement
      const balloons: THREE.Mesh[] = [];
      const velocities: THREE.Vector3[] = [];

      demos.forEach((demo, index) => {
        // Create simple invisible geometry
        const geometry = new THREE.SphereGeometry(1, 16, 16);
        const material = new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          visible: false
        });

        const balloon = new THREE.Mesh(geometry, material);
        
        // Start from different positions
        balloon.position.set(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          0
        );

        scene.add(balloon);
        balloons.push(balloon);
        
        // Set consistent velocity for smooth movement
        const speed = 0.015; // Reduced speed
        velocities.push(new THREE.Vector3(
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed,
          0
        ));
      });

    balloonsRef.current = balloons;
    velocitiesRef.current = velocities;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Simple DVD-style bouncing physics
      balloons.forEach((balloon, i) => {
        const velocity = velocities[i];
        
        // Update position
        balloon.position.add(velocity);
        
        // Perfect boundary bouncing (DVD logo style)
        const bounds = 4;
        if (balloon.position.x > bounds || balloon.position.x < -bounds) {
          velocity.x *= -1; // Perfect bounce
          balloon.position.x = Math.sign(balloon.position.x) * bounds;
        }
        if (balloon.position.y > bounds || balloon.position.y < -bounds) {
          velocity.y *= -1; // Perfect bounce
          balloon.position.y = Math.sign(balloon.position.y) * bounds;
        }
      });

      // Update balloon positions for info cards
      const positions = balloons.map(balloon => balloon.position.clone());
      setBalloonPositions(positions);

      // Circle collision detection and bouncing (only between demo circles)
      for (let i = 0; i < balloons.length; i++) {
        for (let j = i + 1; j < balloons.length; j++) {
          const balloon1 = balloons[i];
          const balloon2 = balloons[j];
          
          // Ensure we only have valid demo circle objects
          if (balloon1 && balloon2 && i < demos.length && j < demos.length) {
            const distance = balloon1.position.distanceTo(balloon2.position);
            const collisionDistance = 2.8; // Circle radius * 2 (adjusted for larger screen size)
            
            if (distance < collisionDistance && distance > 0) {
              // Calculate collision normal
              const normal = new THREE.Vector3()
                .subVectors(balloon2.position, balloon1.position)
                .normalize();
              
              // Separate the circles
              const overlap = collisionDistance - distance;
              const separationVector = normal.clone().multiplyScalar(overlap * 0.5);
              balloon1.position.sub(separationVector);
              balloon2.position.add(separationVector);
              
              // Calculate relative velocity
              const relativeVelocity = new THREE.Vector3()
                .subVectors(velocities[j], velocities[i]);
              
              // Calculate velocity along normal
              const velocityAlongNormal = relativeVelocity.dot(normal);
              
              // Only bounce if circles are moving toward each other
              if (velocityAlongNormal < 0) {
                // Elastic collision that preserves total momentum
                const impulse = -velocityAlongNormal;
                
                // Apply impulse to velocities (equal and opposite)
                const impulseVector = normal.clone().multiplyScalar(impulse);
                velocities[i].sub(impulseVector);
                velocities[j].add(impulseVector);
              }
            }
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-96">
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Overlay with demo information */}
      <div className="absolute inset-0 pointer-events-none">
        {demos.map((demo, index) => {
          const position = balloonPositions[index];
          if (!position) return null;
          
          // Convert 3D position to 2D screen coordinates with better mapping
          const screenX = Math.max(10, Math.min(90, ((position.x / 5) + 1) * 50)); // Clamp to 10-90%
          const screenY = Math.max(10, Math.min(90, ((position.y / 5) + 1) * 50)); // Clamp to 10-90%
          
          return (
            <div
              key={demo.id}
              className="absolute pointer-events-auto transition-transform duration-50 ease-out"
                              style={{
                  left: `${screenX}%`,
                  top: `${screenY}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: Math.round(position.z * 10 + 100), // Depth-based layering
                  width: '280px',
                  height: '280px'
                }}
            >
              <a
                href={demo.href}
                className="w-full h-full bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-gray-300 flex flex-col items-center justify-center p-6 text-center hover:bg-orange-400 hover:shadow-xl transition-colors duration-100 cursor-pointer block"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{demo.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed px-2">{demo.description}</p>
                <span className="text-blue-600 hover:text-blue-500 font-medium text-sm inline-flex items-center">
                  View Demo →
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
