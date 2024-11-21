import { makeAutoObservable } from 'mobx';
import ItemService from './ItemService';

class ItemStore {
    items = [];
    localItems = [];
    isLoading = false;

    itemService;

    constructor() {
        makeAutoObservable(this);
        this.itemService = new ItemService();
    }

    setItems = (items) => {
        this.items = items;
    };

    setLocalItems = (items) => {
        this.localItems = items;
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

    getLocalItems = async () => {
        const items = await this.itemService.getLocalItems();
        this.setLocalItems(items);
    };

    saveItemLocally = (item) => {
        this.itemService.saveItemLocally(item);
        this.getLocalItems();
    };

    deleteLocalItem = (id) => {
        this.itemService.deleteLocalItem(id);
        this.getLocalItems();
    };
}

export default new ItemStore();