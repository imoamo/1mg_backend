const express = require("express");
const SingleRouter = express();
const SingleProductModel = require("../models/SingleProduct");

// Some Operations;

SingleRouter.post("/create", async (req, res) => {
    const { poster, title, price, feautres } = req.body;

    product_exist = await SingleProductModel.findOne({ title });

    if (product_exist) {
        res.status(500).json({
            message: "Product already present"
        });

    } else {
        try {
            const Single_Product = new SingleProductModel({ poster, title, price, feautres });
            await Single_Product.save();
            res.status(200).json({
                message: "Product created Successfully",
            });

        } catch (error) {
            res.status(500).json({
                message: "Error while craeating the Product", error
            });
        }
    }
});


SingleRouter.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {

        const Single_Product = await SingleProductModel.findById({ _id: id });

        // Check if the product exists
        if (!Single_Product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product found", Single_Product
        });


    } catch (error) {
        res.status(500).json({
            message: `Error while retrieving the product`,
            error: error.message
        });
    }

});


module.exports = SingleRouter;