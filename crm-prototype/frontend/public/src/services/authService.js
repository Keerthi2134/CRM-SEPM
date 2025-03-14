import axios from 'axios';

const API_URL = 'http://localhost:8000/auth/';

const register = async (username, email, password) => {
    const response = await axios.post(`${API_URL}register`, { username, email, password });
    return response.data;
};

export default { register };
