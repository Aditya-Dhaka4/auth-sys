import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {

            console.log("Mongodb is connected");
        })

        connection.on('error', (err) => {
            console.log('Error cannot connect to mongodb ' + err);
        })
        process.exit();
    } catch (error) {
        console.log('something went wrong');
    }
}