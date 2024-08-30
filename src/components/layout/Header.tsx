import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { forwardRef } from "react";
import { Download } from "lucide-react";

export function Header() {
    return (
        <header className="fixed bg-background/95 top-0 w-full flex justify-center items-center gap-2 z-50">
            <div className="w-full md:max-w-5xl mx-auto py-4 flex items-center justify-center md:justify-between">
                <NavigationMenu>
                    <Link
                        to={"/"}
                        id="logo"
                        className="hidden md:inline-block text-2xl px-4"
                    >
                        MK.
                    </Link>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                                    <Link to={"/"}>
                                        <ListItem title="Home">
                                            Voltar para o início
                                        </ListItem>
                                    </Link>
                                    <Link to={"/about"}>
                                        <ListItem title="Sobre Mim">
                                            Conheça um pouco mais de mim e do
                                            que eu faço.
                                        </ListItem>
                                    </Link>
                                    <Link to={"/projects"}>
                                        <ListItem title="Projetos">
                                            Veja os projetos que venho
                                            desenvolvendo.
                                        </ListItem>
                                    </Link>
                                    <Link to={"/articles"}>
                                        <ListItem title="Artigos">
                                            Veja um pouco do que estou
                                            estudando.
                                        </ListItem>
                                    </Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Contato
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid grid-cols-2 gap-3 p-4 md:w-[300px] lg:w-[500px]">
                                    <ListItem
                                        target="_blank"
                                        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqTgCgLhcmPWDQbjRVCswHJshZqXLDKZGFRhvxnjCtVQFGSMcFSVqVcGZXljXJxFCsmXJV"
                                        title="Envie uma mensagem"
                                    >
                                        miguelkapicius@gmail.com
                                    </ListItem>
                                    <ListItem
                                        target="_blank"
                                        href="https://www.linkedin.com/in/miguelkapicius"
                                        title="Meu LinkedIn"
                                    >
                                        linkedin.com/in/miguelkapicius
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link
                                    to="/curriculo.pdf"
                                    target="_blank"
                                    download
                                    className="flex gap-2 items-center"
                                >
                                    Currículo <Download className="size-4" />
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="hidden md:inline-block">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}

const ListItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
