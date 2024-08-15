console.log(8);
// Dave Gray
// const fetchData = (callback)=>{
//     setTimeout(()=>{
//         console.log('data fetched');
//         callback('here is your data');
//     },1000)
// }
//     const displayD = (data)=>{
//         console.log(data);
//     }

//     fetchData(displayD);

// Promises

const myPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("data fetching");
        } else {
            reject("error fetching");
        }
    }, 1000);
});

myPromises
    .then((data) => {
        console.log(data + " thankyou");
    })
    .catch((error) => {
        console.log("error");
    });


const fetchdata = () => { 
    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{
                resolve('data fetched');
            },1000)
        })
}

const ProcessD=(data)=>{
    return new Promise(
        (reslove,reject)=>{
            setTimeout(()=>{
                reslove(`{$data} processed`)
            })
        }
    )
}