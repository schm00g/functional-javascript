let allGood = true;

/*
    pending   | hasn't settled no value yet
    fulfilled | settled successfully (calling resolve()) 
    rejected  | settled unsuccessfully  (calling reject())
*/
let fetchSomeData = new Promise((resolve, reject) => {
    if(!allGood){
        reject("error fetching data")
    } else {
        resolve({
            id: 1,
            message: 'nice work!'
        })
    }
})

// consuming the promise
fetchSomeData.then(fetchedData => {
    console.log('then: ', fetchedData);
}).catch(err => {
    console.error('catch: ', err);
})