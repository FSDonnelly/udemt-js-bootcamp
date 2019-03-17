// Callback
const getDataCallback = (cb) => {
    setTimeout(() => {
        cb( `This is callback error`, undefined)
        cb( `This is callback error`, undefined)
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is promise data: ${data}`)
        // reject(`This is my promise error`)
        // reject(`This is my promise error`)
    }, 2000)
})

const myPromise = getDataPromise(123)
myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})