const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least
// 3 languages in the languages array.
const langFilteredUsers = users.filter((user) => user.languages.length >= 3);
// console.log(langFilteredUsers);

// Use .map to create an array of strings where each element is a user's email address
const usersEmail = users.map((user) => user.email);
// console.log(usersEmail);

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
let reducer = (sum, user) => sum + user.yearsOfExperience;
const totalUsersExp = users.reduce(reducer, 0);
// console.log(totalUsersExp / users.length);

// Use .reduce to get the longest email from the list of users.
reducer = (max, user) => user.email.length > max.length ? user.email : max;
const longestEmail = users.reduce(reducer, '');
// console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
reducer = (a, user) => {
    a.push(user.name);
    return a;
};
const nameConcatenated = users.reduce(reducer, []);
// console.log(nameConcatenated.join(", "));

// BONUS
// Use .reduce to get the unique list of languages from the list of users.
// reducer = (a, user) => {
//     a.push(...user.languages);
//     return a;
// };
// const uniqueLangList = users.reduce(reducer, []);
// console.log(new Set(uniqueLangList));
reducer = (a, user) => {
    const copy = user.languages.splice();
    user.languages.forEach((language) => {
        if(!a.includes(language) && a.length > 0) {
            a.push(language);
        }
    });
    return a;
};
const uniqueLangList = users.reduce(reducer, []);
console.log(uniqueLangList);