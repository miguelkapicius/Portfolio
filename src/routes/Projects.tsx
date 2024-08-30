import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ProjectsProps {
    name: string;
    desc: string;
    stack: string[];
    deploy_url: string;
    github_url?: string;
}

interface ProjectCardProps {
    name: string;
    desc: string;
    stack: string[];
    deploy_url: string;
    github_url?: string;
}

export function Projects() {
    const [projects] = useState<ProjectsProps[]>([
        {
            name: "E-Pit",
            desc: "Projeto proposto pela Tech Mahindra em parceria com a FIAP em 2024, o projeto consiste em uma plataforma contendo um jogo fantasy baseado na Formula E, estatísticas sobre pilotos e equipes",
            stack: [
                "JavaScript",
                "React",
                "Tailwind",
                "Vite",
                "Node.js",
                "Express",
                "MongoDB",
            ],
            deploy_url: "https://mahindra-challenge-2024.vercel.app/",
            github_url:
                "https://github.com/miguelkapicius/Mahindra_Challenge_2024",
        },
        {
            name: "AMI Website",
            desc: "Website desenvolvido para clínica odontológica AMI Especialidades & Ensino",
            stack: ["JavaScript", "React", "Tailwind", "Vite"],
            deploy_url:
                "https://amiespecialidades.com/",
        },
        {
            name: "Global Solution Blue Future | Landing Page",
            desc: "O projeto visa criar uma plataforma integrada para monitoramento da qualidade da água, tanto no mar aberto quanto regiões costeiras de comunidades dependente da pesca. Utilizando sensores conectados a placas Arduino, o sistema mede parâmetros críticos como temperatura, PH, salinidade e níveis de poluição. Os dados são coletados, processados, armazenados e apresentados em uma interface web de fácil utilização.",
            stack: ["HTML", "CSS", "JavaScript", "Arduino"],
            deploy_url: "https://gab-gouvea.github.io/GS-LANDINGPAGE/",
            github_url: "https://github.com/miguelkapicius/GS-BlueFuture",
        },
        {
            name: "NLW Expert | Notes",
            desc: "O projeto foi desenvolvido durante o evento NLW Expert promovido pela Rocketseat, consiste em uma aplicação que salva notas tanto por texto quanto por input de voz",
            stack: ["TypeScript", "React", "Tailwind", "Vite"],
            deploy_url: "https://nlw-miguelkapicius.vercel.app/",
            github_url: "https://github.com/miguelkapicius/nlw",
        },
    ])

    const [searchProject, setSearchProject] = useState<string>("");

    return (
        <main className="space-y-8 pb-12">
            <div className="flex-col md:flex-row flex md:items-center gap-6">
                <h2 className="text-4xl flex-1 font-semibold">Meus Projetos</h2>
                <Input
                    onChange={(event) => setSearchProject(event.target.value)}
                    className="w-2/3"
                    placeholder="Buscar projetos pelo nome..."
                />
            </div>
            {projects
                .filter((projects) =>
                    projects.name
                        .toLowerCase()
                        .includes(searchProject.toLowerCase())
                )
                .map((project) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        desc={project.desc}
                        stack={project.stack}
                        deploy_url={project.deploy_url}
                        github_url={project.github_url}
                    />
                ))}
        </main>
    );
}

export function ProjectCard({
    name,
    desc,
    stack,
    deploy_url,
    github_url,
}: ProjectCardProps) {
    return (
        <Card className="w-full flex gap-2">
            <div className="space-y-2">
                <CardHeader>
                    <CardTitle className="text-xl">{name}</CardTitle>
                    <CardDescription>{desc}.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="flex flex-wrap gap-2 items-center">
                        {stack.map((tech) => (
                            <li>
                                <Badge variant="secondary">{tech}</Badge>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-4">
                    <Button>
                        <Link
                            target="_blank"
                            className="flex gap-2 items-center"
                            to={deploy_url}
                        >
                            Conhecer projeto <ArrowUpRight className="size-4" />
                        </Link>
                    </Button>
                    {github_url && (
                        <Button variant="outline">
                            <Link
                                target="_blank"
                                className="flex gap-2 items-center"
                                to={github_url}
                            >
                                <Github className="size-4" /> GitHub
                            </Link>
                        </Button>
                    )}
                </CardFooter>
            </div>
        </Card>
    );
}
