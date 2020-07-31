

const githubAPI = (username) => {
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': GITHUB_API_KEY}}).then((response) => response.json());
};

githubAPI("JessRG").then((users) => {
    console.log(new Date(users[0].created_at).toDateString());
});

const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num / 1000);
            } else {
                reject("Something went wrong!");
            }
        }, num);
    });
};

wait(1000).then((time) => console.log(`You'll see this after ${time} ${ time > 1 ? "seconds" : "second" }`));
wait(3000).then((time) => console.log(`You'll see this after ${time} ${ time > 1 ? "seconds" : "second" }`));
wait('whatup').then((time) => {
    if (typeof time === "number")
        console.log(`You'll see this after ${time} ${ time > 1 ? "seconds" : "second" }`);
}).catch(message => console.log(message));