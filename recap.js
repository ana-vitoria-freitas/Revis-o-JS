
//Parte A

let upperName = (name) =>{
    return name.toUpperCase();
}

let myFunction = (p1, p2) =>{
    return p1 * p2;
}

let toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit - 32);
}

//Destructuring functions
const handleMouseMove = (event) =>{
    const [clientX, clientY] = event;
    console.log(clientX, clientY);
}

//Destructuring objects
const obj = {first: 'Jane',last: 'Doe'};
const {first} = obj;


const company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
        shirts: {
            colors: ['red', 'green', 'blue'],
        },
        socks: {
            colors: ['cyan', 'magenta', 'yellow'],
        },
    },
};


const {name, products: {shirts: {colors: [...resultShirts]}} ,products: {socks: {colors:[...resultSocks]}}} = company;


const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const cloneClothes = {...clothes};
cloneClothes["shoes"] = {colors: ['yellow', 'purple']};

//métodos de array

let numbers1 = [4,9,16,25];
let raizQuadrada = numbers1.map((item) => {
    return Math.sqrt(item);
});

let numbers2 = [65, 44, 12, 4];

let multiplicadoDez = numbers2.map((item) => {
    return item * 10;
})

let ages = [32, 33, 16, 40];

let overEighteen = ages.filter((age) =>{
    return age >= 18;
})


let data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
];

let dogData = data.filter((obj) => {
    return obj.type == 'dog';
})

let dogAge = dogData.map((obj) =>{
    return obj.age;
})


let sumDogAge = dogAge.reduce ((acumulador, atual) => {
    return acumulador += atual;
})


//Parte B - Hora do jogo!

let getShirtsColorsAmount = (company) => {
    return {products: {shirts: [corRoupas]}} = company;
}

const clothes2 = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const {shirts, socks} = {...clothes2};
let objBlusasMeias = {};
objBlusasMeias.shirts = {...shirts};
objBlusasMeias.socks = {...socks};

const arr = [1, 2, 3];
let arrIntermediario = arr.slice(1, arr.length);
let novoArr = [...arrIntermediario];


const arr2 = [4, 5, 6];
let arrIntermediario2 = arr2.slice(1, arr2.length);
let novoArr2 = [...arrIntermediario2];

let people = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
];

let nomePessoas = people.map((pessoa) => {
    return [pessoa.firstname + " " + pessoa.lastname];
})



