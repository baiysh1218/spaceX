import axios from 'axios';

const API = 'https://api.spacexdata.com/v3';

export const api = {
  fetchAllLaunches: async () => {
    const response = await axios.get(`${API}/launches`);
    return response.data;
  },
};
