(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "Jesus",
        lastName: "Garza",
        sayHello: function () {
            return `Hello from ${this.firstName} ${this.lastName}!`;
        }
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    const discount = .12;
    shoppers.forEach(function (cust) {
        let str = `${cust.name} spent $${cust.amount}`;
        if (cust.amount > 200) {
            str += ` Discount: ${discount * 100}% Amount after discount: $${cust.amount - cust.amount * discount}`;
        }
        console.log(str);
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Head First Java",
            author: {
                firstName: "Kathy",
                lastName: "Sierra"
            }
        },
        {
            title: "SQL Queries For Mere Mortals",
            author: {
                firstName: "John",
                lastName: "Viescas"
            }
        },
        {
            title: "Spring in Action",
            author: {
                firstName: "Craig",
                lastName: "Walls"
            }
        },
        {
            title: "A Brief History of Time",
            author: {
                firstName: "Stephen",
                lastName: "Hawking"
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (let i = 0; i < books.length; i++) {
        console.log(`Book # ${i+1}\nTitle: ${books[i].title}` +
            `\nAuthor: ${books[i].author.firstName} ${books[i].author.lastName}` +
            '\n---');
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    console.log("\n***** Bonus *****\n\n");
    const createBook = function (title, author) {
        const name = author.split(" ");
        return {
            title,
            author: {
                firstName: name[0],
                lastName: name[1]
            }
        };
    }

    const booksArr = [
        createBook("The Salmon of Doubt", "Douglas Adams"),
        createBook("Head First Java", "Kathy Sierra"),
        createBook("SQL Queries For Mere Mortals", "John Viescas"),
        createBook("Spring in Action", "Craig Walls"),
        createBook("A Brief History of Time", "Stephen Hawking")
    ]

    const showBookInfo = function (book) {
        return `\nTitle: ${book.title}` +
            `\nAuthor: ${book.author.firstName} ${book.author.lastName}` +
            '\n---';
    }

    for (let i = 0; i < booksArr.length; i++) {
        console.log(`Book # ${i+1} ${showBookInfo(booksArr[i])}`);
    }
})();
