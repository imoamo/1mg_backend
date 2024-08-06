const express = require('express');
const ProductRouter = express();
const authMiddleWare = require('../middleware/authMiddleware');
const productModel = require('../models/ProductModel');



// CRUD Operations...

ProductRouter.post("/create", authMiddleWare, async (req, res) => {
    const { poster, title, price, userId, username } = req.body;

    try {
        const Product = new productModel({ poster, title, price, userId, username });
        await Product.save();
        res.status(200).json({
            message: "Product created Successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: "Error while craeating the Product", error
        });
    }
});


ProductRouter.get("/", authMiddleWare, async (req, res) => {
    const { userId } = req.body;

    try {
        const Product = await productModel.find({ userId });
        res.status(200).json({
            message: "All Products", Product
        });

    } catch (error) {
        res.status(500).json({
            message: "Error while getting all Product", error
        });
    }
});


ProductRouter.delete("/delete/:id", authMiddleWare, async (req, res) => {
    const { id } = req.params;

    try {
        await productModel.findByIdAndDelete({ _id: id });
        res.status(200).json({
            message: `Product deleted successfully with id : ${id}`
        });

    } catch (error) {
        res.status(500).json({
            message: `Error while deleting the note`,
            error
        });
    }
});

module.exports = ProductRouter;