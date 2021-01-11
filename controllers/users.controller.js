import { v4 as uuidv4 } from 'uuid';
import encrypt from '../utils/index.js';

let users = [
    {
        password  :  "Password",
        id: "Id-ul de logare al persoanei",
        libaryCardID : "Serie numerica a cardului de Biblioteca, posibil criptata",
        firstName: "Alex",
        lastName: "Huc",
        age: 21,
        book : "Agonie si Extaz",
        author : "Irving Stone"
    }
];

//GET ALL USERS
export const getUsers = (req, res) => {
    res.send(users);
};

//POST
export const createUser = (req, res) => {
    const user = req.body;

    //npm installl --save uuid
    //Aici am incercat sa reporduc un id al unui card de biblioteca
    //Si l-am bagat direct in libaryCardID al API-ului
    users.push({ ...user, libaryCardID: uuidv4() });

    //Encryptam parola
    const hash = encrypt(user.password);
    users.push({ ...user, password: hash.iv });

    res.send(`User with the username ${user.firstName} added to the Database!`);
};

//GET USER BY libaryCardID
export const getUser = (req, res) => {
    const { libaryCardID } = req.params;

    //Verificare libaryCardID
    const foundUser = users.find((user) => user.libaryCardID == libaryCardID);

    res.send(foundUser);
};

//DELETE BY libaryCardID
export const deleteUser = (req, res) => {
    const { libaryCardID } = req.params;

    //Verificare libaryCardID
    users = users.filter( (user) => user.libaryCardID != libaryCardID );

    res.send(`User with the libaryCardID: ${libaryCardID} deleted from the database`);
};

//UPDATE
export const updateUser = (req, res) => {
    const { libaryCardID } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find( (user) => user.libaryCardID == libaryCardID);

    if(firstName) user.firstName = firstName;
    if(lastName) user.firstName = firstName;
    if(age) user.firstName = firstName;
    if(book) user.book = book;
    if(author) user.author = author;

    res.send(`User with the libaryCardID ${libaryCardID} has been updated`)
};