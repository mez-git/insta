import express from "express";
 import isAuthenticated from "../middleware/isAuthenticated.js";

import { getMessage, sendMessage } from "../controlles/message.controller.js";

const router = express.Router();

router.route('/send/:id').post(isAuthenticated, sendMessage);
router.route('/all/:id').get(isAuthenticated, getMessage);
 
export default router;