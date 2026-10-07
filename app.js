function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle('show');
    document.getElementById("button").classList.toggle('show');
}


const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('textArea');
const button = document.getElementById('submit');

button.addEventListener('click', addTask);
function addTask() {
    const clientName = name.value.trim();
    const clientEmail = email.value.trim();
    const clientSubject = subject.value.trim();
    const clientMessage = message.value.trim();
    let confirmation = prompt('Name: '+clientName+'\nEmail: '+clientEmail+'\nSubject: '+clientSubject+'\nMessage: '+clientMessage+'\nAre these information correct? (yes)/(no) ');
    if (confirmation.toLowerCase() === 'yes'){
        alert('Your request has been submitted!');
    } else {
        alert('Please check the details and try again!');
    }
};


const nameTwo = document.getElementById('client-name');
const emailTwo = document.getElementById('client-email');
const number = document.getElementById('number');
const date = document.getElementById('date');
const time = document.getElementById('time');
const numPeople = document.getElementById('people');
const messageTwo = document.getElementById('text');
const buttonTwo = document.getElementById('bt');

buttonTwo.addEventListener('click', bookTable);
function bookTable() {
    const clientNameTwo = nameTwo.value.trim();
    const clientEmailTwo = emailTwo.value.trim();
    const clientNumber = number.value.trim();
    const clientDate = date.value.trim();
    const clientTime = time.value.trim();
    const clientNum = numPeople.value.trim();
    const clientMessageTwo = messageTwo.value.trim();
    let confirmationTwo = prompt(
        'Name: '+clientNameTwo+
        '\nEmail: '+clientEmailTwo+
        '\nNumber: '+clientNumber+
        '\nDate: '+clientDate+
        '\nTime: '+clientTime+
        '\nPeople: '+clientNum+
        '\nMessage: '+clientMessageTwo+
        '\nAre these information correct? (yes)/(no) ');
    if (confirmationTwo.toLowerCase() === 'yes') {
        alert('Your request has been submitted!');
    } else {
        alert('Please check the details carefully and try again!');
    };
};