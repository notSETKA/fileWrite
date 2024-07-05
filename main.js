const https = require('https');
const fs = require('fs');


https.get('https://jsonplaceholder.typicode.com/users', (resp) => {
    let data = '';

    
    resp.on('data', (chunk) => {
        data += chunk;
    });

    
    resp.on('end', () => {
        const users = JSON.parse(data);
        const parsedUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }));

        
        fs.writeFile('users.json', JSON.stringify(parsedUsers, null, 4), (err) => {
            if (err) throw err;
            console.log('Data written to users.json');
        });
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});

const fs = require('fs');


const randomText = 'Th1s 1s Matr1x. Run!';


fs.writeFile('text.txt', randomText, (err) => {
    if (err) throw err;
    console.log('message addet to Matrix!');


    fs.readFile('text.txt', 'utf8', (err, data) => {
        if (err) throw err;


        const wordCount = data.split(" ").filter(word => word.length > 0).length;
        console.log(`Matrix contains ${wordCount} words`);
    });
});

const fs = require('fs');

//es chatgpts shevaqmenvine imitoro jsonplaceholder asakebi araaq
const users = [
    { id: 1, fullname: 'John Doe', age: 25 },
    { id: 2, fullname: 'Jane Smith', age: 17 },
    { id: 3, fullname: 'Emily Johnson', age: 22 },
    { id: 4, fullname: 'Michael Brown', age: 19 },
    { id: 5, fullname: 'Sarah Davis', age: 16 },
    { id: 6, fullname: 'David Wilson', age: 30 },
    { id: 7, fullname: 'Linda Martinez', age: 21 },
    { id: 8, fullname: 'James Anderson', age: 18 },
    { id: 9, fullname: 'Patricia Taylor', age: 20 },
    { id: 10, fullname: 'Robert Moore', age: 15 }
];

fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
    if (err) throw err;
    console.log('Users data written to users.json');

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) throw err;

        const users = JSON.parse(data);

        const filteredUsers = users.filter(user => user.age > 18);

        fs.writeFile('filtered_users.json', JSON.stringify(filteredUsers, null, 4), (err) => {
            if (err) throw err;
            console.log('Filtered data written to filtered_users.json');
        });
    });
});
