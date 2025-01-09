const { faker } = require('@faker-js/faker');
const fs = require('fs');


const userData = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phone: faker.phone.number('###########'), 
  email: faker.internet.email(),
  senha: faker.internet.password(12, true)
};


fs.writeFileSync('cypress/fixtures/data.json', JSON.stringify(userData, null, 2));
