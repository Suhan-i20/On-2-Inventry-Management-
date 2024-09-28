const httpStatus = require("http-status");
const CatchAsync = require("../utils/CatchAsync");
const RawMaterialService = require("../services/RawMaterial.service");

class RawMaterialController {
  static addRawMaterial = CatchAsync(async (req, res) => {
    const res_obj = await RawMaterialService.addRawMaterial(req.body);
    res.status(httpStatus.CREATED).json(res_obj);
  });

  static updateRawMaterial = CatchAsync(async (req, res) => {
    const res_obj = await RawMaterialService.updateRawMaterial(req.params.id, req.body);
    res.status(httpStatus.OK).json(res_obj);
  });

  static getRawMaterials = CatchAsync(async (req, res) => {
    const res_obj = await RawMaterialService.getRawMaterials(req.query);
    res.status(httpStatus.OK).json(res_obj);
  });

  static deleteRawMaterial = CatchAsync(async (req, res) => {
    const res_obj = await RawMaterialService.deleteRawMaterial(req.params.id);
    res.status(httpStatus.OK).json(res_obj);
  });
}

module.exports = RawMaterialController;
