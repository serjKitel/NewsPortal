export interface IResponse {
    readonly status: string;
    sources: Array<ISources>;
}

export interface IView {
    articles: Array<INews>;
    readonly status: string;
    totalResult: number;
}

export type Callback<T> = {
    (data: T): void;
};

export interface IApiKey {
    [key: string]: string | null;
}

export interface IResp {
    endpoint: string;
    options?: IApiKey;
}

export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface INews {
    status: string;
    source: {
        id: string;
        name: string;
    };
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
}
