"use client";

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
        <header className="fixed bg-background/95 top-0 py-4 w-full gap-2 z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <NavigationMenu>
                    <Link to={"/"} id="logo" className="text-2xl px-4">
                        MK.
                    </Link>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                                    <ListItem href="/about" title="Sobre Mim">
                                        Conheça um pouco mais de mim e do que eu
                                        faço.
                                    </ListItem>
                                    <ListItem href="/projects" title="Projetos">
                                        Veja os projetos que venho
                                        desenvolvendo.
                                    </ListItem>
                                    <ListItem
                                        href="/docs/primitives/typography"
                                        title="Artigos"
                                    >
                                        Veja um pouco do que estou estudando.
                                    </ListItem>
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
                                        href="/contact"
                                        title="Envie uma mensagem"
                                    >
                                        miguelkapicius@gmail.com
                                    </ListItem>
                                    <ListItem
                                        target="_blank"
                                        href="www.linkedin.com/in/miguelkapicius"
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
                <ModeToggle />
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
