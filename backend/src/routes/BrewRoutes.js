import express from "express";

import {
  getBrews,
  getBrew,
  addBrew,
  editBrew,
  removeBrew,
} from "../controllers/brewController.js";

const router = express.Router();

// GET /api/brews
// Get all brews
router.get("/", getBrews);

// GET /api/brews/:id
// Get one brew
router.get("/:id", getBrew);

// POST /api/brews
// Create a new brew
router.post("/", addBrew);

// PUT /api/brews/:id
// Update a brew
router.put("/:id", editBrew);

// DELETE /api/brews/:id
// Delete a brew
router.delete("/:id", removeBrew);

export default router;