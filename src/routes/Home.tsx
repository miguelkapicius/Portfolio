import { Button } from "@/components/ui/button";
import { HandMetal, Linkedin, Mails } from "lucide-react";
import { Link } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Keyboard from '@/components/Keyboard';  // Add this import

export function Home() {

    return (
        <main className="flex overflow-y-hidden flex-col lg:flex-row items-center justify-around gap-12 h-full lg:h-4/6">
            <section className="space-y-6">
                <div className="space-y-4">
                    <h2 className=" text-2xl md:text-5xl font-semibold">
                        Olá, eu sou{" "}
                        <strong className="text-popover-foreground">
                            Miguel
                        </strong>{" "}
                        <HandMetal className="inline" /> <br /> Dev Front-end
                    </h2>
                    <p className="max-w-lg text-base md:text-xl text-muted-foreground">
                        Transformo ideias em interfaces, conectando design,
                        acessibilidade e usabilidade em cada linha de código.
                    </p>
                </div>
                <div className="flex items-center gap-4 max-w-lg">
                    <Button className="flex items-center gap-2 w-full" asChild>
                        <Link target="_blank" to="https://www.linkedin.com/in/miguelkapicius" className="flex items-center gap-2">
                            <span>LinkedIn</span> <Linkedin className="size-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-full"
                        asChild
                    >
                        <Link target="_blank" to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqTgCgLhcmPWDQbjRVCswHJshZqXLDKZGFRhvxnjCtVQFGSMcFSVqVcGZXljXJxFCsmXJV" className="flex items-center gap-2">
                            <span>Mensagem</span> <Mails className="size-4" />
                        </Link>
                    </Button>
                </div>
            </section>
            <section className="flex flex-col items-center gap-2">
                <div className="mt-6 p-4 rounded-lg">
                    <Canvas style={{ width: '300px', height: '300px' }} camera={{ position: [0, 5, 5], fov: 50}}>
                        <ambientLight intensity={2} />
                        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
                        <Keyboard />
                    </Canvas>

                </div>
            </section>
        </main>
    );
}
