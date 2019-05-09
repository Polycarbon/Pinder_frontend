import HttpRequest from './http_request'

class PersonProvider extends HttpRequest {
  createUser(data) {
    return this.create('/register', data)
  }

  verifyUser(data) {
    return this.create('/login', data)
  }
}

export default PersonProvider
