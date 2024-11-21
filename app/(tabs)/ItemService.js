import ItemRepository from './ItemRepository';

class ItemService {
    itemRepository;

    constructor() {
        this.itemRepository = new ItemRepository();
    }

    getItems = async () => {
        const res = await this.itemRepository.getItems();
        return res.data.slice(0, 10);
    };

    getLocalItems = () => this.itemRepository.getLocalItems();

    saveItemLocally = (item) => this.itemRepository.saveItemLocally(item);

    deleteLocalItem = (id) => this.itemRepository.deleteLocalItem(id);
}

export default ItemService;