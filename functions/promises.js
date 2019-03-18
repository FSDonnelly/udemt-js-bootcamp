// Callback
const getDataCallback = (num, cb) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            cb(undefined, num * 2)
        } else {
            cb('Number must be provided')
        }
    }, 2000)
}

getDataCallback(2, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err')
            } else {
                console.log(data)
            }
        })
    }
})

// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
       typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(3).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})
// Promise chaining
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return `This is some test data`
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})