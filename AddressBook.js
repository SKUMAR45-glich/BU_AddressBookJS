

//UC1 : Create Contact

function Contact(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
    validate.validateContact(this);
}


let validate = {

    firstName: firstName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(firstName),
    lastName: lastName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(lastName),
    address: address => new RegExp('^[A-Za-z0-9]{1,}$').test(address),
    city: city => new RegExp('^[A-Za-z]{1,}$').test(city),
    state: state => new RegExp('^[A-Za-z]{1,}$').test(state),
    zip: zip => new RegExp('^[0-9]{7}$').test(zip),
    phone: phone => new RegExp('^[91 ]{1,0}[1-9][0-9]{9}$').test(phone),
    email: email => new RegExp('^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*[@][A-Za-z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$').test(email),

    validateContact: function (contact) {
        for (let key in contact) {
            if (!validate[key](contact[key])) {
                throw key + ' is not valid';
            }
               
        }
            
    }
};