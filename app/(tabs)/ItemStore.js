import { makeAutoObservable } from 'mobx';
import ItemService from './ItemService';

class ItemStore {
    items = [];
    isLoading = false;

    itemService;

    constructor() {
        makeAutoObservable(this);
        this.itemService = new ItemService();
    }

    setItems = (items) => {
        this.items = items;
    };

    setIsLoading = (loading) => {
        this.isLoading = loading;
    };

    getItems = () => {
        this.setIsLoading(true);
        this.itemService
            .getItems()
            .then((result) => {
                this.setItems(result);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };
}

export default new ItemStore();