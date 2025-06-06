import { Suspense, useEffect, useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'
import LorenzoBandini from "../assets/Lorenzo_Bandini.jpg"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { GLTFLoader, GLTF } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three'

function NerdEmoji() {
  const [model, setModel] = useState<THREE.Group | null>(null)
  const modelRef = useRef<THREE.Group>(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      '/src/assets/models/nerd_emoji_3d.glb',
      (gltf: GLTF) => {
        gltf.scene.scale.set(2, 2, 2)
        setModel(gltf.scene)
      },
      undefined,
      (error) => {
        console.error('An error happened:', error)
      }
    )
  }, [])

  useFrame(({ clock }) => {
    if (modelRef.current) {
      const t = clock.getElapsedTime()
      modelRef.current.rotation.y = Math.sin(t * 1.5) * 0.45
    }
  })

  if (!model) {
    return null
  }

  return <primitive ref={modelRef} object={model} position={[0, 0, 0]} />
}

function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <NerdEmoji />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="studio" />
    </Canvas>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-main py-12">
      <div className="absolute inset-0 bg-linear-to-b from-main/50 to-main" />
      
      <div className="container relative px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-second">
            <img
              src={LorenzoBandini}
              alt="Lorenzo Bandini"
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-light">
              Software Developer
            </h1>
            <p className="text-xl text-second max-w-[600px]">
              Passionate about creating innovative solutions and building exceptional digital experiences
            </p>
          </div>
          <div className="flex gap-4">
            <Button 
              className="bg-second text-main hover:bg-second/90"
              asChild
            >
              <a href="#contact">Get in touch</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-second text-second hover:bg-second/10"
              asChild
            >
              <a href="#projects">View projects</a>
            </Button>
          </div>
        </div>
        
        <div className="h-[400px] w-full flex items-center justify-center">
          <ThreeScene />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-second"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  )
}
