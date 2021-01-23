import {create} from 'apisauce'

const apiClient = create({
  baseURL: 'http://197.210.64.131:9000/api'
});

export default apiClient;