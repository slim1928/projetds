console.log("A");
function call1( ){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("B");
            
            resolve("E");
    
        }, 2000);
    })
}
function call2(data ){
    return new Promise((resolve,reject) => {
       // setTimeout(() => {
            console.log("c");
            resolve(data );
    
        //}, 2000);
    })
}
function call3(data ){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("D");
            console.log(data);
            resolve("F");
    
        }, 2000);
    })
}
function call4(data ){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("E");
            console.log(data);
            resolve("F");
    
        }, 2000);
    })
}
function call4(data ){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("F");
            console.log(data);
            resolve("F");
    
        }, 2000);
    })
}


function call4(data) {
    console.log(data);
    console.log("G");

}


call1().then(data =>call2(data))
        .then((data,data1) => call3(data))
        .then(data => call4(data));

