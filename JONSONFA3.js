let num;
var pattern = "";
do {
    num = prompt("Please enter a number:");
} while (isNaN(num) || num === "" || num === null);
if (num % 2 == 0) {
    for (let i = num; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            pattern += i + " ";
        }
        pattern += "<br>";
    }

    document.getElementById("pattern").innerHTML = pattern;
}
else {
    for (let i = num; i >= 1; i--) {
        for (let j = 1; j <= num; j++) {
            pattern += i + " ";
        }
        pattern += "<br>";
    }
        document.getElementById("pattern").innerHTML = pattern;
}

let contacts = [];
function addContact() {
const name = document.getElementById("contactInput").value.trim();
if (contacts.length >= 7) {
    for (let i = 0; i < contacts.length - 1; i++) {
        contacts[i] = contacts[i + 1];
    }
    contacts.length--;
}
    contacts[contacts.length] = name;
    document.getElementById("contactInput").value = "";
    dispContacts();
}
function removeContact() {
    if (contacts.length > 0) {
        contacts.length--; // Remove last
        dispContacts();
    }
}
function dispContacts() {
    let output = "";
    for (let i = 0; i < contacts.length; i++) {
        output += contacts[i] + " ";
    }
    document.getElementById("contactList").innerText = output.trim();
}