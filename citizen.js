class Citizen {
	constructor (name, surname, age, registered) {
	this.name = name;
    this.surname = surname;
	this.age = age;
    this.registered = registered; 
}
    register(address) {
        this.address = address;
    };
}

export default Citizen;