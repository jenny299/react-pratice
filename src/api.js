import { create } from "apisauce"
// define the api
const api = create({
    baseURL: 'https://localhost:5000/api',
    headers: { Accept: 'application/vnd.github.v3+json' },
  })

  export default api;