const express = require('express');
const cors = require('cors');
const dbConnect = require('./Config/config');
const ProductRouter = require('./Routes/ProductRouter');
const UserRouter = require("./Routes/UserRouter");
const SingleRouter = require('./Routes/SingleProductRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", UserRouter);

app.use("/product", ProductRouter);

app.use("/single", SingleRouter);

app.get("/", (req, res) => {
    res.status(200).send('Welcome to home page');
});


app.listen(8080, async () => {
    try {
        await dbConnect();
        console.log(`DB Connected Successfully`)
    } catch (error) {
        console.log(error);
    }
    console.log(`Server was running on port 8080`)
});