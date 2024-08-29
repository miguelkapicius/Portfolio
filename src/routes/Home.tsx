import { Resizeable } from "@/components/home/Resizeable";
import { Button } from "@/components/ui/button";
import { HandMetal, Linkedin, Mails, SeparatorVertical } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <main className="flex flex-col lg:flex-row items-center justify-around h-full lg:h-4/6">
            <section className="space-y-6">
                <div className="space-y-4">
                    <h2 className=" text-3xl md:text-5xl font-semibold">
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
                <Resizeable />
                <span className="text-muted-foreground text-xs flex gap-2 items-center">
                    Arraste para redimensionar <SeparatorVertical />
                </span>
            </section>
        </main>
    );
}
