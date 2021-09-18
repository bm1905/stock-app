import axios from 'axios';

class AxiosService {

    axiosInstance = {};

    constructor() {
        this.initInstance();
    }

    initInstance() {
        this.axiosInstance  = axios.create({
            baseURL: 'http://localhost:3001/api/v1',
            timeout: 5000
        });
        
        return this.axiosInstance;
    }

    getInstance() {
        return this.axiosInstance || this.initInstance();
    }
}

export default new AxiosService();