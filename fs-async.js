const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err)
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
    
        const second = result;

        writeFile('./content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        {flag: 'a'},
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        }
        )
    })
})

console.log('starting next task');



// setTimeout and setInterval are asynchronous

// console.log('first');

// setTimeout(() => {
//     console.log('second')
// }, 0)

// console.log('third');


// console.log('first');

// setInterval(() => {
//     console.log('second')
// }, 2000)

// console.log('third');