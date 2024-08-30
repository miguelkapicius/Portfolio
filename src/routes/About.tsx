import euImage from "../assets/eu.png";

export function About() {
    const birthDate = new Date("2005-09-29");
    const xpDate = new Date("2023-01-01");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let xp = today.getFullYear() - xpDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return (
        <main className="space-y-8 h-full">
            <h2 className="text-4xl font-semibold">Sobre Mim</h2>
            <section className="flex flex-col lg:flex-row lg:items-start gap-16 justify-between w-full">
                <img
                    className="rounded lg:w-1/3 object-cover"
                    src={euImage}
                    alt="Miguel Kapicius"
                />
                <div className="space-y-12 lg:w-2/3">
                    <section className="space-y-6">
                        <p>
                            Meu nome é{" "}
                            <strong className="text-popover-foreground ">
                                Miguel
                            </strong>
                            , tenho{" "}
                            <strong className="text-popover-foreground ">
                                {age} anos
                            </strong>{" "}
                            .
                        </p>
                        <p>
                            Sou desenvolvedor Front-end com{" "}
                            <strong className="text-popover-foreground ">
                                {xp} anos de experiência
                            </strong>
                            , tendo conhecimento nas seguintes tecnologias:
                            HTML, CSS, Tailwind, JavaScript, TypeScript,
                            React, Next.js, Vite, Git, GitHub, entre outras...
                        </p>
                        <p>
                            Ao longo da minha carreira trabalhei como operador
                            de telemarketing e auxiliar administrativo, o que me
                            deu uma forte base na comunicação, resolução de
                            problemas e em metodologias ágeis como Scrum e
                            Kanban,{" "}
                            <strong className="text-popover-foreground ">
                                meu objetivo é conseguir ao longo do tempo me
                                tornar um desenvolvedor fullstack
                            </strong>
                            .
                        </p>
                    </section>
                    <section className="flex justify-beetwen md:gap-16">
                        <ul className="flex flex-col gap-6">
                            <h2 className="text-xl font-bold">Profissional</h2>
                            <li className="space-y-2">
                                <h3 className="font-medium">
                                    Auxiliar Administrativo
                                </h3>
                                <span className="block font-light text-sm">
                                    AMI Especialidades & Ensino
                                </span>
                                <span>nov 2023 - ago 2024</span>
                            </li>
                            <li className="space-y-2">
                                <h3 className="font-medium">
                                    Operador de Telemarketing
                                </h3>
                                <span className="block font-light text-sm">
                                    Neobpo
                                </span>
                                <span>dez 2023 - mar 2024</span>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-6">
                            <h2 className="text-xl font-bold">Acadêmica</h2>
                            <li className="space-y-2">
                                <h3 className="font-medium">
                                    Engenharia de Software (Noturno)
                                </h3>
                                <span className="block font-light text-sm">
                                    FIAP - Paulista
                                </span>
                                <span>jan 2024 - dez 2027</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </main>
    );
}
