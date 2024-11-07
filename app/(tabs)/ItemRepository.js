import AxiosClient from './AxiosClient';

class ItemRepository {
    apiClient;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getItems = () => this.apiClient.get({ url: '/posts' });

    changeItem = (item) => this.apiClient.post({
        url: '/posts/1',
        data: item,
    });
}

export default ItemRepository;