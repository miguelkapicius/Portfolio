import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";
import { Toaster } from "../ui/toaster";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
    name: z.string().min(5, {
        message: "Seu nome completo deve conter no mínimo 5 caracteres.",
    }),
    message: z.string().min(5, {
        message: "Sua mensagem deve conter no mínimo 10 caracteres.",
    }),
});

export function ContactForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            message: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
        toast({
            title: "Sua mensagem foi enviada!",
        });

        return;
    }

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    action="https://formspree.io/f/mkgwyvae"
                    className="w-2/3 space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome:</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nome Completo"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mensagem:</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Digite sua mensagem aqui..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Enviar</Button>
                </form>
            </Form>
            {form.handleSubmit(onSubmit) && <Toaster />}
        </>
    );
}
