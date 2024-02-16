import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

// const app = express();

// ;( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("ERROR: ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,() => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.log("ERROR: ",error);
//         throw error;
//     }
// })()

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err)=>console.log(err))