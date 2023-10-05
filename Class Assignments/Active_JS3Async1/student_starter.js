// STEP     |       TIME
// #1       |       2s
// #2       |       1.4s
// #3       |       2.5s
// #4       |       3s
// #5       |       1s

// CALLBACKS ------------------------------------------------------------------------
let order_callbacks = () => {
    setTimeout(() => {
        console.log('#1');  // this is the 'work' of step one
        // next event goes here - after step one is complete
        setTimeout(() => {
            console.log('#2');
            setTimeout(() => {
                console.log('#3');
                setTimeout(() => {
                    console.log('#4');
                    setTimeout(() => {
                        console.log('#5');
                    }, 1000);
                }, 3000);
            }, 2500);
        }, 1400);
    }, 2000);
}

//order_callbacks();


// PROMISES ------------------------------------------------------------------------
let open = true;
// pass a function and a number of milliseconds to complete
let order_promise = (work, time) => {
    return new Promise (( resolve, reject ) => {
        if (open) {
            setTimeout(() => {
                console.log("doing work...");
                resolve ( work() ) }, time)
        }
        else {
            reject( console.log("CLOSED, SORRY"))
        }
    })
}

order_promise(() => console.log('#1'), 2000).then(
    order_promise(() => console.log('#2'), 1400).then(
        order_promise(() => console.log('#3'), 2500).then(
            order_promise(() => console.log('#4'), 3000).then(
                order_promise(() => console.log('#5'), 1000)
            )
        )
    )
)
// now chain your remaining process events using promises (.then)

// ASYNC/AWAIT -----------------------------------------------------------------------------
async function start_async() {
    await order_promise(() => console.log('#1'), 2000)
    await order_promise(() => console.log('#2'), 1400)
    await order_promise(() => console.log('#3'), 2500)
    await order_promise(() => console.log('#4'), 3000)
    await order_promise(() => console.log('#5'), 1000)
   // await remaining process events here
    console.log('done');
}
//start_async();