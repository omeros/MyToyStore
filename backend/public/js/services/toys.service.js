
// frontend service

const TOY_URL = '/api/toy/'

export const toysService = {
    query,
    remove,
    save,
    getById,
}

function query() {
     console.log(' query toy in front ')
    return axios.get(TOY_URL).then(res => res.data)
    
}

function getById(id) {
  return axios.get(TOY_URL+ id).then(res => res.data)
}
function remove(toyId) {
  return axios.delete(TOY_URL + toyId).then(res => res.data)
}

function save(toy) {
    if (toy._id) { 
        console.log(' toy in save in sevice', toy)
        return axios.put(TOY_URL+toy._id , toy).then(res => res.data)
    } else {
        console.log('saving without _id')
        return axios.post(TOY_URL , toy).then(res => res.data)
    }
}








