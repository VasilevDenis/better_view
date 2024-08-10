import React, { useState } from 'react';
import New from './New';
import Popular from './Popular';
import Video from './Video';
import Article from './Article';
import './App.css';



interface WrappedComponentProps {
    views: number;
}

function withPopularity<T extends WrappedComponentProps>(Component: React.ComponentType<T>) {
    return function WrappedComponent(props: T) {
        const { views } = props;

        if (views >= 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            );
        } else if (views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            );
        }
        return <Component {...props} />;
    };
}

const WrappedVideo = withPopularity(Video);
const WrappedArticle = withPopularity(Article);


interface ListItem {
    type: 'video' | 'article';
    url?: string;
    title?: string;
    views: number;
}


interface ListProps {
    list: ListItem[];
}

function List({ list }: ListProps) {
    return (
        <>
            {list.map((item, index) => {
                switch (item.type) {
                    case 'video':
                        return (
                            <WrappedVideo key={index} {...item} />
                        );

                    case 'article':
                        return (
                            <WrappedArticle key={item.title} {...item} />
                        );
                }
                return null;
            })}
        </>
    );
}

export default function App() {
    const [list] = useState<ListItem[]>([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&controls=0&showinfo=0',
            views: 50,
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&controls=0&showinfo=0',
            views: 12,
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175,
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532,
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&controls=0&showinfo=0',
            views: 4253,
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}
