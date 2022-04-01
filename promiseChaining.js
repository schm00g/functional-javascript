let fetchData = function(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Data Complete');
            resolve({id: 1, message: 'nice work!'});
        }, 2000);
    });
}

let parseData = function(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedOutput = `Parsed the data for id: ${data.id} with message: ${data.message}`;
            resolve({parsed: parsedOutput});
        });
    })
}

let echoData = function(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data.parsed);
        }, 2000);
    });
};