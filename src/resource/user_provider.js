import HttpRequest from './http_request'

class PersonProvider extends HttpRequest {
  createUser(data) {
    return this.create('/register', data)
  }

  loginUser(data) {
    return this.create('/login', data)
  }

  verifyToken(data) {
    return this.create('/verify', data)
  }

  like(data) {
    return this.create('/user/like', data)
  }

  dislike(data) {
    return this.create('/user/dislike', data)
  }

  setProfile(data) {
    return this.create('/user/update', data)
  }
}

export default PersonProvider
