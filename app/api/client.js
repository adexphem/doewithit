import {create} from 'apisauce'

const apiClient = create({
  baseURL: 'http://197.210.64.131:9000/api'
});

apiClient.get('/listings').then(response => {
  if(!response.ok) {
    response.problem
  }
})