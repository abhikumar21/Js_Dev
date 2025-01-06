export const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise
        .resolve(requestHandler(requestHandler(req, res, next)))
        .reject((err)=>next(err))
    }
}



// export const asyncHandler = (func)=> {async()=>{}}  //higher order function

// export const asyncHandler = (fn)=> async(req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }  
