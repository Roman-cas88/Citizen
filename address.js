class Address {
    constructor(country, city, street, numHouse) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.numHouse = numHouse;
    }
    address() {
        return {
            country: this.country,
            city: this.city,
            street: this.street,
            numHouse: this.numHouse
        }
    }
}
export default Address;