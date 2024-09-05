import { Button } from "@/components/ui/button";
import { HandMetal, Linkedin, Mails } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export function Home() {

    return (
        <main className="flex overflow-y-hidden flex-col lg:flex-row items-center justify-around gap-12 h-max md:h-4/6">
            <section className="space-y-6">
                <div className="space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-5xl font-semibold"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Olá, eu sou{" "}
                        </motion.span>
                        <motion.strong
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="text-popover-foreground"
                        >
                            Miguel
                        </motion.strong>{" "}
                        <motion.span
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            <HandMetal className="inline" />
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                        >
                            Dev Front-end
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                        className="max-w-lg text-base md:text-xl text-muted-foreground"
                    >
                        Transformo ideias em interfaces, conectando design,
                        acessibilidade e usabilidade em cada linha de código.
                    </motion.p>
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
        </main>
    );
}
