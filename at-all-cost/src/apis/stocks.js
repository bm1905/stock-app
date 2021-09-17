import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3001'
});

// Define base URL of Go server here