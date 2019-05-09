import HttpRequest from './http_request'

class PetProvider extends HttpRequest {
  sendMessage(data) {
    return this.create('/send-message', data)
  }

  getAll() {
    return this.fetch('/pets')
  }

  getById(id) {
    return this.fetch('/pets/' + id)
  }

}

export default PetProvider
