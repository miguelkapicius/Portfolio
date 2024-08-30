import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "@/articlesData";
import { Badge } from "@/components/ui/badge";

export function Articles() {
    const [searchArticle, setSearchArticle] = useState<string>("");
    return (
        <main className="space-y-8 pb-12">
            <div className="flex-col md:flex-row flex md:items-center gap-6">
                <h2 className="text-4xl flex-1 font-semibold">Meus Artigos</h2>
                <Input
                    onChange={(event) => setSearchArticle(event.target.value)}
                    className="w-2/3"
                    placeholder="Buscar artigos pelo nome..."
                />
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles
                    .filter((article) =>
                        article.title
                            .toLowerCase()
                            .includes(searchArticle.toLowerCase())
                    )
                    .map((article) => (
                        <ArticleCard
                            key={article.slug}
                            name={article.title}
                            summary={article.summary}
                            id={article.slug}
                            badges={article.badges}
                        />
                    ))}
            </ul>
        </main>
    );
}

interface ArticleCardProps {
    name: string;
    id: string;
    summary: string;
    badges: string[];
}

export function ArticleCard({ name, id, summary, badges }: ArticleCardProps) {
    return (
        <Card className="w-full flex gap-2">
            <div className="space-y-2">
                <CardHeader className="space-y-4 h-max">
                    <CardTitle className="text-lg">{name}</CardTitle>
                    <CardDescription className="max-h-20 overflow-hidden">
                        {summary}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-4 items-center justify-between">
                    <Link
                        className="flex size-full w-max gap-2 items-center"
                        to={`/articles/${id}`}
                    >
                        <Button>
                            Ler mais <ArrowUpRight className="size-4" />
                        </Button>
                    </Link>
                    <div className="flex gap-2 flex-wrap">
                        {badges.map((badge) => (
                            <Badge variant="secondary">{badge}</Badge>
                        ))}
                    </div>
                </CardFooter>
            </div>
        </Card>
    );
}
