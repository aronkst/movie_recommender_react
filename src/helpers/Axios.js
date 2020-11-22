import axios from 'axios'

const Axios = async (url, method, values = null) => {
  let res

  switch (method) {
    case 'GET':
      res = await axios.get(`http://localhost:8080/api${url}`, values)
      break
    case 'POST':
      res = await axios.post(`http://localhost:8080/api${url}`, values)
      break
    case 'DELETE':
      res = await axios.delete(`http://localhost:8080/api${url}`, values)
      break
    default:
      return null
  }

  return res.data
}

export default Axios
