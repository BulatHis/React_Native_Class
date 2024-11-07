import axios from 'axios';
import { Platform } from 'react-native';

class AxiosClient {
    static SUCCESS_STATUSES = [200, 201];
    static SERVER_ERROR = 500;

    constructor(config) {
        this.api = axios.create(config);
        this.api.defaults.baseURL = this.getDefaultBaseUrl();
        this.api.defaults.headers.common['App-Platform'] = Platform.OS;
        this.api.defaults.headers.common['Content-Type'] = 'application/json';
    }

    getDefaultBaseUrl = () => 'https://jsonplaceholder.typicode.com';

    get = (config) => this.api.get(config.url, config.config);
    post = (config) => this.api.post(config.url, config.data, config.config);
    put = (config) => this.api.put(config.url, config.data, config.config);
    delete = (config) => this.api.delete(config.url, config.config);
}

export default AxiosClient;