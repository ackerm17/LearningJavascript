const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');



const createUser = () => {
    return {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        id: faker.datatype.uuid(),
    };
}

const createCompany = () => {
    return {
        name : faker.company.name(),
        id : faker.datatype.uuid(),
        address: {street: faker.address.streetAddress(), city: faker.address.city(), country: faker.address.country(), state: faker.address.state(), zipcode: faker.address.zipCode()}
    };
}

const newUser = createUser();
const newCompany = createCompany();
const both = [createUser(), createCompany()];
app.get("/api/users/new", (req, res) => {
    res.json(newUser);
});

app.get("/api/company/new", (req, res) => {
    res.json( newCompany );
});

app.get("/api/user/company", (req, res) => {
    res.json( both );
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);