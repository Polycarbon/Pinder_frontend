import HttpRequest from './http_request'

class PetProvider extends HttpRequest {

  getAll() {
    return this.fetch('/pets')
  }

  getById(id) {
    return this.fetch('/pets/' + id)
  }

  getByList(data) {
    return this.create('/pets', data)
  }

}

export default PetProvider
