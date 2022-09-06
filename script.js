import Citizen from "./citizen.js";
import Address from "./address.js";

// Create <main>
const newMain = document.createElement('main');
let foot = document.getElementsByTagName('footer')[0];
newMain.id = "main";
foot.before(newMain);

// add <button> Create
const addButtonCreate = document.createElement('button');
let main = document.getElementById('main');
addButtonCreate.innerText = "Create";
addButtonCreate.id = "buttonCreate";
addButtonCreate.onclick = function () {
    funcCreate()
};
main.append(addButtonCreate);


// <button> Create citizen
const addButtonCreateCitizen = document.createElement('button');
addButtonCreateCitizen.innerText = "Create citizen";
addButtonCreateCitizen.id = "buttonCreateCitizen";
addButtonCreateCitizen.onclick = function () {
    funcCreateCitizen()
};

// <button> Register Citizen
const addButtonRegisterCitizen = document.createElement('button');
addButtonRegisterCitizen.innerText = "Register citizen";
addButtonRegisterCitizen.id = "buttonRegisterCitizen";
addButtonRegisterCitizen.onclick = function () {
    funcRegister()
};

// Function to add <button> Create citizen with form and remove <button> Create
function funcCreate() {
    foot.before(addButtonCreateCitizen);
    document.getElementById('buttonCreate').remove();
    const formCitizen = () => {
        return `
        <p>Name: <input  id="name"></p>
        <p>Surname: <input id="sname"></p>
        <p>Age: <input type="number" id="age"></p>
        `
    }
    let addFormCitizen = document.createElement('div')
    addFormCitizen.id = "divFormCitizen";
    addFormCitizen.innerHTML = formCitizen();
    main.append(addFormCitizen)

};
let citizen1 = {};

// function to add address
function funcCreateCitizen() {
    // Create citizen1
    citizen1 = new Citizen(document.querySelector('#name').value, document.querySelector('#sname').value,
        document.querySelector('#age').value, false)
    document.getElementById('divFormCitizen').remove();
    document.getElementById('buttonCreateCitizen').remove();

    const formAddress = () => {
        return `
<p>Country: <input  id="country"></p>
<p>City: <input id="city"></p>
<p>Street: <input id="street"></p>
<p>Number of house: <input type="number" id="numHouse"></p>
`
    }
    let addFormAddress = document.createElement('div')
    addFormAddress.id = "divFormAddress";
    addFormAddress.innerHTML = formAddress();
    main.append(addFormAddress);

    foot.before(addButtonRegisterCitizen);

};


// Function to registered citizen
const funcRegister = () => {
    if (citizen1.registered == false)  {
            // Create citizen1
            const address1 = new Address(document.querySelector('#country').value, document.querySelector('#city').value,
                document.querySelector('#street').value, document.querySelector('#numHouse').value)
            console.log(address1);
            citizen1.register(address1);
            alert('Citizen ' + `${citizen1.name} ${citizen1.surname}` + ' registered');

            console.log(`Citizen ${citizen1.name} ${citizen1.surname} ${citizen1.age} registered at: ${citizen1.address.country}, ${citizen1.address.city}, ${citizen1.address.street}, 
    ${citizen1.address.numHouse}`)
        }
    };

// const formAddress = () => {
//     return `
// <p>Country: <input  id="country"></p>
// <p>City: <input id="city"></p>
// <p>Street: <input id="street"></p>
// <p>Number of house: <input type="number" id="numHouse"></p>
// `
// }
// let addFormAddress = document.createElement('div')
// addFormAddress.id = "divFormAddress";
// addFormAddress.innerHTML = formAddress();
// main.append(addFormAddress)



// Drop menu
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// };