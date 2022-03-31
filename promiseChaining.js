let fetchData = function(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Processing Data Complete');
            resolve({id: 1, message: 'nice work!'});
        }, 2000);
    });
}

// TODO: https://www.youtube.com/watch?v=zu6I2FXakLI