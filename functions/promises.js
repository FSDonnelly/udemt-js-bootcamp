// Callback
const getDataCallback = (cb) => {
    setTimeout(() => {
        cb(undefined, `This is the data`)
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {

    } else {
        console.log(data)
    }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is promise data`)
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
})