
const wrapAsync = (fn) => {
    return function(req, res, next) {
        
        try {
            fn(req, res)
        } catch (error) {
            fn(next)
        }
    };
};



module.exports = {
    wrapAsync
};