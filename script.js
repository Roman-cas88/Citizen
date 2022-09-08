import Citizen from "./citizen.js";
import Address from "./address.js";

// Drop menu
document.getElementById("drpMenu").onclick = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Create <main>
const newMain = document.createElement('main');
let foot = document.getElementsByTagName('footer')[0];
newMain.id = "main";
foot.before(newMain);

// add <button> Create
const addButtonCreate = document.createElement('button');
let main = document.getElementById('main');
addButtonCreate.innerText = "Create";
addButtonCreate.className = "btnCreate"
addButtonCreate.id = "buttonCreate";
addButtonCreate.onclick = function () {
    funcCreate()
};
main.append(addButtonCreate);

// Function to add <button> Create citizen with form and remove <button> Create
function funcCreate() {
    // <button> Create citizen
    const addButtonCreateCitizen = document.createElement('button');
    addButtonCreateCitizen.innerText = "Create citizen";
    addButtonCreateCitizen.className = "btnCreate"
    addButtonCreateCitizen.id = "buttonCreateCitizen";
    addButtonCreateCitizen.onclick = function () {
        funcCreateCitizen()
    };
    main.append(addButtonCreateCitizen);
    document.getElementById('buttonCreate').remove();
    const formCitizen = () => {
        return `
        <p>Name:</p>
        <input class="text" id="name">
        <p>Surname:</p>
        <input class="text" id="sname">
        <p>Age:</p>
        <input class="number" type="number" id="age">
        `
    }
    let addFormCitizen = document.createElement('div')
    addFormCitizen.id = "divFormCitizen";
    addFormCitizen.className = "divForms";
    addFormCitizen.innerHTML = formCitizen();
    main.append(addFormCitizen)

};
let citizen1 = {};
let pCheck = document.createElement('p');
pCheck.id = "pCheck";


// function to add address
function funcCreateCitizen() {
    main.append(pCheck);
    if (document.getElementById("name").value == 0 ||
        isFinite(document.getElementById("name").value) ||
        document.getElementById("name").value.length >= 20) {
        document.getElementById('pCheck').innerHTML = "Please check the value";
        document.getElementById('name').style.borderColor = "red";
        document.getElementById('sname').style.borderColor = "black";
        document.getElementById('age').style.borderColor = "black";
        return;
    }

    if (document.getElementById("sname").value == 0 ||
        isFinite(document.getElementById("sname").value) ||
        document.getElementById("sname").value.length >= 20) {
        document.getElementById('pCheck').innerHTML = "Please check the value";
        document.getElementById('sname').style.borderColor = "red";
        document.getElementById('name').style.borderColor = "black";
        document.getElementById('age').style.borderColor = "black";
        return;
    }

    if (document.getElementById("age").value.length >= 3 ||
        document.getElementById("age").value == 0) {
        document.getElementById('pCheck').innerHTML = "Please check the value";
        document.getElementById('age').style.borderColor = "red";
        document.getElementById('sname').style.borderColor = "black";
        document.getElementById('name').style.borderColor = "black";
        return;
    }
    document.getElementById('pCheck').innerHTML = "";

    // Create citizen1
    citizen1 = new Citizen(document.querySelector('#name').value, document.querySelector('#sname').value,
        document.querySelector('#age').value, false)
    document.getElementById('divFormCitizen').remove();
    document.getElementById('buttonCreateCitizen').remove();

    if (citizen1.registered == false) {
        const formAddress = () => {

            return `
<p>Country:</p> <input id="country">
<p>City:</p> <input id="city">
<p>Street:</p> <input id="street">
<p>Number of house:</p> <input id="numHouse">
`
        }
        // <button> Register Citizen
        const addButtonRegisterCitizen = document.createElement('button');
        addButtonRegisterCitizen.innerText = "Register citizen";
        addButtonRegisterCitizen.className = "btnCreate"
        addButtonRegisterCitizen.id = "buttonRegisterCitizen";
        addButtonRegisterCitizen.onclick = function () {
            funcRegister()
        };

        let addFormAddress = document.createElement('div')
        addFormAddress.id = "divFormAddress";
        addFormAddress.className = "divForms";
        addFormAddress.innerHTML = formAddress();
        main.append(addButtonRegisterCitizen);
        main.append(addFormAddress);
    };

    // Function to registered citizen
    const funcRegister = () => {
        main.append(pCheck);
        if (document.getElementById("country").value == 0 ||
            isFinite(document.getElementById("country").value) ||
            document.getElementById("country").value.length >= 20) {
            document.getElementById('pCheck').innerHTML = "Please check the value";
            document.getElementById('country').style.borderColor = "red";
            document.getElementById('city').style.borderColor = "black";
            document.getElementById('street').style.borderColor = "black";
            document.getElementById('numHouse').style.borderColor = "black";
            return;
        }

        if (document.getElementById("city").value == 0 ||
            isFinite(document.getElementById("city").value) ||
            document.getElementById("city").value.length >= 20) {
            document.getElementById('pCheck').innerHTML = "Please check the value";
            document.getElementById('city').style.borderColor = "red";
            document.getElementById('country').style.borderColor = "black";
            document.getElementById('street').style.borderColor = "black";
            document.getElementById('numHouse').style.borderColor = "black";
            return;
        }

        if (document.getElementById("street").value == 0 ||
            isFinite(document.getElementById("street").value) ||
            document.getElementById("street").value.length >= 20) {
            document.getElementById('pCheck').innerHTML = "Please check the value";
            document.getElementById('street').style.borderColor = "red";
            document.getElementById('country').style.borderColor = "black";
            document.getElementById('city').style.borderColor = "black";
            document.getElementById('numHouse').style.borderColor = "black";
            return;
        }

        if (document.getElementById("numHouse").value == 0 ||
            document.getElementById("numHouse").value.length >= 20) {
            document.getElementById('pCheck').innerHTML = "Please check the value";
            document.getElementById('numHouse').style.borderColor = "red";
            document.getElementById('country').style.borderColor = "black";
            document.getElementById('city').style.borderColor = "black";
            document.getElementById('street').style.borderColor = "black";
            return;
        }
        document.getElementById('pCheck').remove();

        // Create citizen1
        const address1 = new Address(document.querySelector('#country').value, document.querySelector('#city').value,
            document.querySelector('#street').value, document.querySelector('#numHouse').value)
        citizen1.register(address1);


        console.log(`${citizen1.name} ${citizen1.surname} ${citizen1.age} ${citizen1.address.country}, ${citizen1.address.city} ${citizen1.address.street}, 
    ${citizen1.address.numHouse}`)
        document.getElementById('divFormAddress').remove();
        document.getElementById('buttonRegisterCitizen').remove();
        let newP = document.createElement('p');
        newP.id = "mewP";
        newP.innerHTML = `Citizen ${citizen1.name} ${citizen1.surname} registered to: ${citizen1.address.country}, ${citizen1.address.city} ${citizen1.address.street}, 
    ${citizen1.address.numHouse}`;

        let btnNew = document.createElement('button')
        btnNew.className = "btnCreate";
        btnNew.innerHTML = "Create New Ctitizen";
        btnNew.id = "btnNew"
        btnNew.onclick = () => {
            location.reload()
        };

        main.append(newP);
        newP.after(btnNew);
        alert('Citizen ' + `${citizen1.name} ${citizen1.surname}` + ' registered');
    }
};