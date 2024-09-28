const httpStatus = require("http-status");
const CatchAsync = require("../utils/CatchAsync");
const ProductService = require("../services/Product.service");

class ProductController {
  static addProduct = CatchAsync(async (req, res) => {
    const res_obj = await ProductService.addProduct(req.body);
    res.status(httpStatus.CREATED).json(res_obj);
  });

  static updateProduct = CatchAsync(async (req, res) => {
    const res_obj = await ProductService.updateProduct(req.params.id, req.body);
    res.status(httpStatus.OK).json(res_obj);
  });

  static getProducts = CatchAsync(async (req, res) => {
    const res_obj = await ProductService.getProducts(req.query);
    res.status(httpStatus.OK).json(res_obj);
  });

  static deleteProduct = CatchAsync(async (req, res) => {
    const res_obj = await ProductService.deleteProduct(req.params.id);
    res.status(httpStatus.OK).json(res_obj);
  });
}

module.exports = ProductController;
