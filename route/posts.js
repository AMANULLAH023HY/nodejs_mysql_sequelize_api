import  express  from "express";
import { hello } from "../controller/posts.js";

const router = express.Router();

router.get('/test',hello);

export default router;