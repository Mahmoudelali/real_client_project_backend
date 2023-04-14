import express from "express";
import {
  getAllSocialMedia,
  createSocialMedia,
  getSocialMediaById,
  updateSocialMedia,
  deleteSocialMedia,
} from "../controllers/social_mediaController.js";

const router = express.Router();

// GET /socialmedia
router.get("/", getAllSocialMedia);

// POST /socialmedia
router.post("/", createSocialMedia);

// GET /socialmedia/:socialMediaId
router.get("/:socialMediaId", getSocialMediaById);

// PUT /socialmedia/:socialMediaId
router.put("/:socialMediaId", updateSocialMedia);

// DELETE /socialmedia/:socialMediaId
router.delete("/:socialMediaId", deleteSocialMedia);

export default router;
