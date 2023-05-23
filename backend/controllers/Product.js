import Products from "../models/ProductModel.js";
import Users from "../models/UserModel.js";

export const getProducts = async (req, res) => {
    try {
        let response;
        if (req.role === 'admin') {
            response = await Products.findAll({
                include: [{
                    model: Users
                }]
            });
        } else {
            response = await Products.findAll({
                where: {
                    userId: req.userId
                },
                include: [{
                    model: Users
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const getProductById = (req, res) => {

}
export const createProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        await Products.create({
            name: name,
            price: price,
            userId: req.userId
        });
        res.status(201).json({ msg: "Produk berhasil ditambah" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const updateProduct = (req, res) => {

}
export const deleteProduct = (req, res) => {

}