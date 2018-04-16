import axios from "axios";
const orgApi = {
  getAll: () => axios.get('/api/races').then(results => results.data),
  getById: id => axios.get(`/api/races/${id}`).then(results => results.data),
  create: org => axios.post('/api/races', org).then(results => results.data),
  update: org => axios.put(`/api/races/${org.id}`, org),
  delete: id => axios.delete(`/api/races/${id}`)
};
export {
  orgApi as default
};
