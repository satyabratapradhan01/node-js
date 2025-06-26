const add = (a, b) => {
    return a + b;
};

const subs = (a, b) => {
    return a - b;
};

const div = (a, b) => {
    return a * b;
};

const mult = (a, b) => {
    return a / b;
};

// module.exports.add = add; 
// module.exports.subs = subs; 
// module.exports.div = div; 
// module.exports.mult = mult; 

module.exports = {add, subs, div, mult};