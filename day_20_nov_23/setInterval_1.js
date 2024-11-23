const timer = setInterval(()=>{
    console.log('I am response from interval')
},1000);

setTimeout(()=>{
    clearInterval(timer);
},5000)