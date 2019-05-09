import PersonProvider from './user_provider'
import PetProvider from './pet_provider'

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/person
export const UserService = new PersonProvider('person')
export const PetsService = new PetProvider('pets')
