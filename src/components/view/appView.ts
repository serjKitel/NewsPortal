import News from './news/news';
import Sources from './sources/sources';
import { IView, IResponse, INews, ISources } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IView): void {
        const values: INews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IResponse): void {
        const values: ISources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
