/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/ Window Binding - When we console.log(this), it logs the whole javascrit language in a page.
* 2. Implicit Binding - whatever is on the right of 'this.' is the nameValuePair in the object being referenced. When we make a function and invoke it wit the object,
it logs the name value pair when paired with this. (${this.example}).
* 3. New Binding - We use the 'new' keyword which makes a new object and 'this.' points to it.
* 4. Explicit Binding - When we have a standalone function not inside the object we will reference, we can use 'call' and 'apply' so that the function will be connected to
a particular object.
*
* write out a code example of each explanation above
*/

// Principle 1 _______________________________________

// code example for Window Binding

console.log(this)


// Principle 2 _______________________________________

// code example for Implicit Binding
let myFriend = {
    name: 'Doggo',
    message: 'I am Doggo',
    speak: function (){
        console.log(`${this.name} says: hi, ${this.message}`);
    }
};
myFriend.speak();

// Principle 3 _______________________________________

// code example for New Binding

function newBinding(message){
    this.speak = message
}

let myBinding = new newBinding('This is the new binding principle for "this"')
console.log(myBinding.speak)

// Principle 4 _______________________________________

// code example for Explicit Binding

function naggingWife(){
    console.log(`${this.name} says ${this.nag}`)
}
let Wife = {
    name: 'Wifey',
    nag: `Do the DISHESSSSS`,
}
naggingWife.call(Wife);