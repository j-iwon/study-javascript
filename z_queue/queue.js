set Timeout(() => {
    console.log("timer");
});

setImmediate(() => {
    console.log("check");
});