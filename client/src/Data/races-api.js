import axios from "axios";
const racesApi = {
    create: races => axios.post('/api/races', races).then(results => results.data),
    getAll: () => axios.get('api/races').then(results => results.data)
};
export {
    racesApi as default
};