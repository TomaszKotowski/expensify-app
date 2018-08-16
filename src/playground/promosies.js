const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolve data');
        reject('Something went wrong')
    }, 1500)
});

console.log('before');

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error', error)
});

console.log('after');