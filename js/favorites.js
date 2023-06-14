let date = new Date('jun 14 2023 14:00:00');
let interval = setInterval(update, 1000);

function update() {
    let newDate = new Date();
    let diff = date - newDate
    let minutes = timer(Math.floor(diff/1000/60)%60);
    // let hours = timer(Math.floor(diff/1000/60/60)%24);
    // let seconds = timer(Math.floor(diff/1000)%60);

    document.getElementById('timer').innerHTML = `${minutes} min`;
}

function timer(argument) {
    if(argument > 9) {
        return argument
    }
    else {
        return argument = "0" + argument;
    }
};

let date2 = new Date('jun 14 2023 12:49:10');
let interval2 = setInterval(update2, 1000);

function update2() {
    let newDate2 = new Date;
    let diff2 = date2 - newDate2
    let minutes2 = timer2(Math.floor(diff2/1000/60)%60);
    // let hours1 = timer(Math.floor(diff2/1000/60/60)%24);
    // let seconds1 = timer(Math.floor(diff2/1000)%60);

    document.getElementById('timer2').innerHTML = `${minutes2} min`;  
}

function timer2(argument) {
    if(argument > 9) {
        return argument
    }
    else {
        return argument = "0" + argument;
    }
};


let date3 = new Date('jun 14 2023 12:56:10');
let interval3 = setInterval(update3, 1000)

function update3() {
    let newDate3 = new Date;
    let diff3 = date3 - newDate3
    let minutes3 = timer3(Math.floor(diff3/1000/60)%60);
    // let hours1 = timer(Math.floor(diff3/1000/60/60)%24);
    // let seconds1 = timer(Math.floor(diff3/1000)%60);
    
    document.getElementById('timer3').innerHTML = `${minutes3} min`;  
}

function timer3(argument) {
    if(argument > 9) {
        return argument
    }
    else {
        return argument = "0" + argument;
    }
};


let date4 = new Date('jun 14 2023 13:16:00');
let interval4 = setInterval(update4, 1000);

function update4() {
    let newDate4 = new Date();
    let diff4 = date4 - newDate4
    let minutes4 = timer4(Math.floor(diff4/1000/60)%60);
    // let hours = timer(Math.floor(diff4/1000/60/60)%24);
    // let seconds = timer(Math.floor(diff4/1000)%60);
    
    document.getElementById('timer4').innerHTML = `${minutes4} min`;  
}

function timer4(argument) {
    if(argument > 9) {
        return argument
    }
    else {
        return argument = "0" + argument;
    }
};

let date5 = new Date('jun 14 2023 13:24:00');
let interval5 = setInterval(update5, 1000);

function update5() {
    let newDate5 = new Date();
    let diff5 = date5 - newDate5
    let minutes5 = timer5(Math.floor(diff5/1000/60)%60);
    // let hours = timer(Math.floor(diff5/1000/60/60)%24);
    // let seconds = timer(Math.floor(diff5/1000)%60);

    document.getElementById('timer5').innerHTML = `${minutes5} min`;  
}

function timer5(argument) {
    if(argument > 9) {
        return argument
    }
    else {
        return argument = "0" + argument;
    }
};

let date6 = new Date('jun 14 2023 14:13:00');
let interval6 = setInterval(update6, 1000);

function update6() {
    let newDate6 = new Date();
    let diff6 = date6 - newDate6
    let minutes6 = timer6(Math.floor(diff6/1000/60)%60);
    // let hours = timer(Math.floor(diff6/1000/60/60)%24);
    // let seconds = timer(Math.floor(diff6/1000)%60);

    document.getElementById('timer6').innerHTML = `${minutes6} min`;
}

function timer6(argument) {
    if(argument > 9) {
        return argument;
    }
    else{
        return argument = "0" + argument;
    }
};