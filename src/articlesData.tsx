interface Article {
    slug: string;
    date: string;
    title: string;
    content: string[];
    summary: string;
    badges: string[];
    img: {
        url: string,
        alt: string,
    }
}

export const articles: Article[] = [
    // {
    //     slug: "primeiro-artigo",
    //     date: "2024-08-29",
    //     title: "Introdução ao Desenvolvimento Web com React",
    //     img: {
    //         url:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    //         alt:"",
    //     },
    //     content: [],
    //     summary:
    //         "Lorem, ipsum dolorsit amet consectetur adipisicing elit. Sint fugiat voluptatem adipisci, optio inventore excepturi nemo? Voluptates vel, quibusdam, impedit explicabo totam obcaecati eos necessitatibus debitis perferendis, ex repellendus itaque!",
    //     badges: ["Front-end", "React"],
    // },
];
