import { faker } from '@faker-js/faker'

export const createUser = (overrides = {}) => {
  const timestamp = Date.now()

  return {
    nome: faker.person.fullName(),
    email: `${faker.internet.username()}_${timestamp}@qa.com.br`,
    password: 'teste',
    administrador: 'true',
    ...overrides
  }
}
