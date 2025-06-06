import { Suspense, useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import LorenzoBandini from "../assets/Lorenzo_Bandini.jpg";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader, GLTF } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";

function NerdEmoji() {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/src/assets/models/nerd_emoji_3d.glb",
      (gltf: GLTF) => {
        gltf.scene.scale.set(2, 2, 2);
        setModel(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("An error happened:", error);
      }
    );
  }, []);

  useFrame(({ clock }) => {
    if (modelRef.current) {
      const t = clock.getElapsedTime();
      modelRef.current.rotation.y = Math.sin(t * 1.5) * 0.45;
    }
  });

  if (!model) {
    return null;
  }

  return <primitive ref={modelRef} object={model} position={[0, 0, 0]} />;
}

function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 45 }}
      className="w-full h-full"
      dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <NerdEmoji />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Environment preset="studio" />
    </Canvas>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen-[30] flex items-center justify-center bg-main pt-24 pb-16 p</section>x-4">
      <div className="absolute inset-0 bg-linear-to-b from-main/50 to-main" />

      <div className="container relative flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-7xl mx-auto">
        {/* Mobile: Foto prima */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:hidden rounded-full overflow-hidden border-4 border-second shadow-2xl">
          <img
            src={LorenzoBandini}
            alt="Lorenzo Bandini"
            className="object-cover w-full h-full"
            loading="eager"
          />
        </div>

        {/* Contenuto principale */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 order-1">
          {/* Desktop: Foto nel layout normale */}
          <div className="hidden lg:block relative w-48 h-48 rounded-full overflow-hidden border-4 border-second shadow-2xl">
            <img
              src={LorenzoBandini}
              alt="Lorenzo Bandini"
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>

          <div className="space-y-3 lg:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-light leading-tight">
              Software Developer
            </h1>
            <p className="text-lg sm:text-xl text-second max-w-[500px] lg:max-w-[600px] leading-relaxed">
              Passionate about creating innovative solutions and building
              exceptional digital experiences
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              className="bg-second text-main hover:bg-second/90 w-full sm:w-auto"
              asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button
              variant="outline"
              className="border-second text-second hover:bg-second/10 w-full sm:w-auto hover:text-second"
              asChild>
              <a href="#projects">View projects</a>
            </Button>
          </div>
        </div>

        {/* Emoji 3D - ultima su mobile */}
        <div className="h-[240px] sm:h-[280px] lg:h-[400px] w-full flex items-center justify-center order-2">
          <ThreeScene />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-second">
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
