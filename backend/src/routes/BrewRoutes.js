import express from "express";

import {
  getBrews,
  getBrew,
  addBrew,
  editBrew,
  removeBrew,
} from "../controllers/brewController";
import { deleteBrew } from "../services/brewServices";

const router = express.Router();

// GET /api/brews
// GET all brews
router.get("/", getBrews);

// GET /api/brews/:id
// Get a single brew
router.get("/:id", getBrew);

// POST /api/brews
// Create a new brew
router.post("/", addBrew);

// PUT /api/brews/:id
// Update an existing brew
router.put("/:id", editBrew);

// DELETE /api/brews/:id
// Delete a brew
router.delete("/:id", removeBrewBrew);

export default router;
