import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, Environment } from '@react-three/drei'
import * as THREE from 'three'

function PlaneModel() {
  const mesh = useRef<THREE.Group>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalScroll
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    
    const isMobile = state.size.width < 768
    const xRange = isMobile ? 1.5 : 4
    const x = Math.sin(scrollProgress * Math.PI * 2) * xRange
    const y = 3 - scrollProgress * 10
    const z = Math.cos(scrollProgress * Math.PI) * (isMobile ? 1.5 : 3)
    
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, x, 0.05)
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, y, 0.05)
    mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, z, 0.05)
    
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, Math.sin(scrollProgress * Math.PI * 2) * 0.2, 0.1)
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, scrollProgress * Math.PI * 4 + Math.PI / 2, 0.1)
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, Math.sin(scrollProgress * Math.PI * 2) * 0.5, 0.1)
  })

  // Create a paper plane geometry
  const paperPlaneGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.lineTo(1, -0.5)
    shape.lineTo(0, 1.5)
    shape.lineTo(-1, -0.5)
    shape.lineTo(0, 0)

    const extrudeSettings = {
      steps: 1,
      depth: 0.02,
      beveled: false
    }

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    return geometry
  }, [])

  return (
    <group ref={mesh}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* 3D Paper Plane Style */}
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.5}>
          {/* Main Body */}
          <mesh geometry={paperPlaneGeometry} castShadow>
            <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
          </mesh>
          
          {/* Right Fold */}
          <mesh rotation={[0, 0.4, 0]} position={[0.1, 0, 0]} castShadow>
             <mesh geometry={paperPlaneGeometry}>
                <meshStandardMaterial color="#f8fafc" side={THREE.DoubleSide} />
             </mesh>
          </mesh>

          {/* Left Fold */}
          <mesh rotation={[0, -0.4, 0]} position={[-0.1, 0, 0]} castShadow>
             <mesh geometry={paperPlaneGeometry}>
                <meshStandardMaterial color="#f8fafc" side={THREE.DoubleSide} />
             </mesh>
          </mesh>

          {/* Bottom Fold / Fin */}
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0, -0.1, 0.2]} scale={[0.3, 1, 1]} castShadow>
             <mesh geometry={paperPlaneGeometry}>
                <meshStandardMaterial color="#e2e8f0" side={THREE.DoubleSide} />
             </mesh>
          </mesh>
        </group>
      </Float>
    </group>
  )
}

export default function Plane3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      <Canvas shadows alpha>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <Environment preset="city" />
        <PlaneModel />
      </Canvas>
    </div>
  )
}
