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
}

export default ItemService;