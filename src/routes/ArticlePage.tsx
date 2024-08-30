import { useParams } from "react-router-dom";
import { articles } from "@/articlesData";
import { Badge } from "@/components/ui/badge";

export function ArticlePage() {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);

    return (
        <>
            <header className="space-y-6 mb-8 text-center">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {article?.badges.map((category) => (
                        <Badge variant="secondary">{category}</Badge>
                    ))}
                    <span className="text-sm text-muted-foreground">
                    {article?.date && new Intl.DateTimeFormat('pt-BR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }).format(new Date(`${article.date}T00:00:00`))}
                    </span>
                </div>
                <h3 className="text-3xl">{article?.title}</h3>
                <summary className="list-none">{article?.summary}</summary>
                {article?.img && (
                    <img
                        className="w-full object-cover rounded"
                        src={article?.img.url}
                        alt={article?.img.alt}
                    />
                )}
            </header>
            <main className="space-y-4">
                {article?.content.map((p) => (
                    <p>{p}</p>
                ))}
            </main>
        </>
    );
}
