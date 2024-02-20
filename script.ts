const text: string = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
//Task1
let a: RegExpMatchArray[] = [...text.matchAll(/Spain/g)]
console.log(a)

//Task2
let a: RegExpMatchArray[] = [...text.matchAll(/rain/g)]
let ind: number[] = a.map((item, index) => {
    return item.index
}) /
    console.log(ind)

//Task3
let changes: string = text.replace('Spain', 'France')
console.log(changes)

//Task4
let changesRain: string = text.replaceAll('rain', 'sun')
console.log(changesRain)

//Task5
let searching: number = text.search("plain")
console.log(searching)

const regexPassword: RegExp = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;
let password: string = 'Narmin123.!1ls';
console.log(regexPassword.test(password));

const regexAge: RegExp = /^(1[89]|[2-9]\d)$/gm
let age: string = '19'
console.log(regexAge.test(age))

const regexName: RegExp = /([a-zA-Z0-9_\s]+)/g
let name: string = 'Narmin'
console.log(regexName.test(name))

const regexPhoneNumber: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

let phoneNumber: string = '+9996637355'
console.log(regexPhoneNumber.test(phoneNumber))

const regexEmailValidation: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
let email: string = 'narmin@gmail.com'
console.log(regexEmailValidation.test(email))