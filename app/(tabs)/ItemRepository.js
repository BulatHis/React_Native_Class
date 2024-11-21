import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosClient from './AxiosClient';

class ItemRepository {
    apiClient;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    // Получение данных с API
    getItems = () => this.apiClient.get({ url: '/posts' });

    // Локальное сохранение данных
    saveItemLocally = async (item) => {
        try {
            const items = await this.getLocalItems();
            items.push(item);
            await AsyncStorage.setItem('items', JSON.stringify(items));
        } catch (error) {
            console.error('Error saving item locally:', error);
        }
    };

    // Получение локальных данных
    getLocalItems = async () => {
        try {
            const items = await AsyncStorage.getItem('items');
            return items ? JSON.parse(items) : [];
        } catch (error) {
            console.error('Error retrieving local items:', error);
            return [];
        }
    };

    // Удаление локального элемента
    deleteLocalItem = async (id) => {
        try {
            const items = await this.getLocalItems();
            const filteredItems = items.filter((item) => item.id !== id);
            await AsyncStorage.setItem('items', JSON.stringify(filteredItems));
        } catch (error) {
            console.error('Error deleting local item:', error);
        }
    };

    // Отправка изменения на сервер
    changeItem = (item) =>
        this.apiClient.post({
            url: '/posts/1',
            data: item,
        });
}

export default ItemRepository;