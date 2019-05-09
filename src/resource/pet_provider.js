import HttpRequest from './http_request'

class PetProvider extends HttpRequest {
  sendMessage(data) {
    return this.create('/send-message', data)
  }

  getPets() {
    return this.fetch('/pets')
  }
}

export default PetProvider
