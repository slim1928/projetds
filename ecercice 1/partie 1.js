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
function call4(data) {
    console.log(data);
    console.log("G");

}

async function call() {
  var data= await call1();
      data=await call2(data);
      data1 = await call3(data);
       await call4(data1); 

}
call();    

