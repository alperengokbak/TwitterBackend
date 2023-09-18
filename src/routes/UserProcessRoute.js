import Router from "express";
import {
  becomeVerifiedUser,
  cancelVerifiedUser,
  sendMessage,
  createMessage,
} from "../controllers/UserController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/messages", sendMessage);
router.post("/createmessage", createMessage);
router.put("/becomeverifieduser", becomeVerifiedUser);
router.put("/cancelVerifiedUser", cancelVerifiedUser);

export default router;
