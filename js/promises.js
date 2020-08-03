

const githubAPI = (username) => {
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': GITHUB_API_KEY}}).then((response) => response.json());
};

githubAPI("JessRG").then((users) => {
    let date = "";
    for(let data of users) {
        if (data.type === "PushEvent") {
            date = new Date(data.created_at).toDateString();
            break;
        }
    }
    return date;
}).then(date => document.getElementById("theDate").innerText = date);

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