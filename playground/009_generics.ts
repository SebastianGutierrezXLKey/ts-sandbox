// ===============================
// TYPING PRACTICE (GENERICS) - TS
// ===============================

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello!");

console.log(`Output ${output1}`); // Output: Hello!

let output2 = identity<number>(42);

console.log(`Output ${output2}`); // Output: 42

class GenericBox<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

let stringBox = new GenericBox<string>("Sac de fruits");
console.log(`String Box Content: ${stringBox.getContent()}`); // String Box Content