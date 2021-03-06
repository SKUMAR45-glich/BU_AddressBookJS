﻿

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
    validate.validateContact(this);                                                               //Validation Function
}

//Validation Function

let validate = {

    firstName: firstName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(firstName),                           //FirstName Validation
    lastName: lastName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(lastName),                             //LastName Validation
    address: address => new RegExp('^[A-Za-z0-9]{1,}$').test(address),                                  //Address  
    city: city => new RegExp('^[A-Za-z]{1,}$').test(city),                                              //City
    state: state => new RegExp('^[A-Za-z]{1,}$').test(state),                                           //State
    zip: zip => new RegExp('^[0-9]{6,7}$').test(zip),                                                   
    phone: phone => new RegExp('^[0-9]{2}[ ][1-9][0-9]{9}$').test(phone),                                //Phone
    email: email => new RegExp('^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*[@][A-Za-z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$').test(email),

    validateContact: function (contact) {                                                 //Check
        for (let key in contact) {                                                        //Loop
            if (!validate[key](contact[key])) {                                           //Validation is Wrong
                throw key + ' is not valid';                                                //Show the wrong value
            }
               
        }
            
    }
};


//Add details

let contact1 = new Contact('Saurabh', 'Kumar', 'Airoli', 'Mumbai', 'Maharastra', '478524', '91 9038880216', 'sk@gmail.com');
let contact2 = new Contact('Rajeev', 'Ranjan', 'Rajendra', 'Patna', 'Bihar', '147852', '91 8100802402', 'rr@gail.com');
let contact3 = new Contact('Piyush', 'Rawat', 'Airport', 'Mumbai', 'Maharastra', '447894', '91 9478529630', 'piyush@gmail.com');
let contact4 = new Contact('Saurabh', 'Kiran', 'railway', 'Noida', 'UP', '147852', '91 7418529630', 'skiran@gmail.com');
let contact5 = new Contact('Adipti', 'Gupta', 'ITSector', 'Hyderabad', 'Telagana', '174162', '91 7894561230', 'agupta@gmail.com');



console.log(contact1);                                                                      //Display the first element


//Address Book Array 

let AddressBook = [];                                                                        //Declaration of Array

AddressBook.push(contact1);                                                                  //Push the elements
AddressBook.push(contact2);
AddressBook.push(contact3);
AddressBook.push(contact4);
AddressBook.push(contact5);

console.log(AddressBook);                                                                   //View the elements



//Find and update city 

let cityToFind = 'Adipti';                                                                                    //Name of person City to update
let contact = AddressBook.find(c => c.firstName == cityToFind);                                               //Act
contact.city = 'Banglore';                                                                                   //Update

console.log(contact);                                                                                        //Display the Values


//Delete Contact

let contactToDelete = 'Rajeev';                                                                         //Name of the contact to be deleted
let index = AddressBook.findIndex(c => c.firstName == contactToDelete);                                 //Act
AddressBook.splice(index, 1);                                                                           //Splice: Delete

console.log(AddressBook);                       



//Number Of Contacts

let count = 0;                                                                                           //Initailize Variable
let num = AddressBook.reduce((count) => count + 1, 0);                                                   //Count the number
console.log('Number of Contacts : ', num);                                                               


//Check Duplicates

let checkDuplicate = contact => AddressBook.filter(c => c.firstName == contact.firstName).length != 0;
console.log(checkDuplicate(contact));


//Search and View details By City

let cityToView = 'Mumbai';
let contacts = AddressBook.filter(c => c.city == cityToView);
if (!contacts) {
    let error = "Wrong City Entered";
    console.log(error);
}
console.log(contacts);




//Sorting By name

AddressBook.sort((c1, c2) => c1.firstName < c2.firstName ? -1 : c1.firstName > c2.firstName ? 1 : 0);                           //Sorting Function by Firstname

console.log('Sort By First Name : ', AddressBook);


let sortByCity = addressBook => addressBook.sort((c1, c2) => c1.city < c2.city ? -1 : c1.city > c2.city ? 1 : 0);                 //Sorting Function by City

console.log('Sort By city : ', sortByCity(AddressBook));