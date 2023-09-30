import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '4090586375a64200a8adff31f7698e90',
        });
    }
}

export default AppLoader;
