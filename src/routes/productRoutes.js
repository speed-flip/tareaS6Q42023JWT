import { Router } from "express";

import checkAuth from "../middleware/checkAuth.js";
import { getProducts } from "../controllers/productController.js";

const router = Router();

router.get('', checkAuth, getProducts);

export default router;
