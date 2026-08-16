import {
  getAllBrews,
  getBrewById,
  createBrew,
  updateBrew,
  deleteBrew,
} from "../services/brewService.js";

// GET /api/brews
// Get all brews
export async function getBrews(req, res) {
  try {
    const brews = await getAllBrews();

    res.status(200).json(brews);
  } catch (error) {
    console.error("Error fetching brews:", error);

    res.status(500).json({
      message: "Failed to fetch brews",
    });
  }
}

// GET /api/brews/:id
// Get one brew
export async function getBrew(req, res) {
  try {
    const { id } = req.params;

    const brew = await getBrewById(id);

    if (!brew) {
      return res.status(404).json({
        message: "Brew not found",
      });
    }

    res.status(200).json(brew);
  } catch (error) {
    console.error("Error fetching brew:", error);

    res.status(500).json({
      message: "Failed to fetch brew",
    });
  }
}

// POST /api/brews
// Create a new brew
export async function addBrew(req, res) {
  try {
    const { coffee, method, rating, notes } = req.body;

    // Validate required fields
    if (
      !coffee?.trim() ||
      !method?.trim() ||
      rating === undefined ||
      rating === null ||
      rating === "" ||
      !notes?.trim()
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Validate rating
    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        message: "Rating must be a whole number between 1 and 5",
      });
    }

    const brew = await createBrew({
      coffee: coffee.trim(),
      method: method.trim(),
      rating: numericRating,
      notes: notes.trim(),
    });

    res.status(201).json(brew);
  } catch (error) {
    console.error("Error creating brew:", error);

    res.status(500).json({
      message: "Failed to create brew",
    });
  }
}

// PUT /api/brews/:id
// Update a brew
export async function editBrew(req, res) {
  try {
    const { id } = req.params;
    const { coffee, method, rating, notes } = req.body;

    // Validate required fields
    if (
      !coffee?.trim() ||
      !method?.trim() ||
      rating === undefined ||
      rating === null ||
      rating === "" ||
      !notes?.trim()
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Validate rating
    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        message: "Rating must be a whole number between 1 and 5",
      });
    }

    // Check if brew exists
    const existingBrew = await getBrewById(id);

    if (!existingBrew) {
      return res.status(404).json({
        message: "Brew not found",
      });
    }

    const brew = await updateBrew(id, {
      coffee: coffee.trim(),
      method: method.trim(),
      rating: numericRating,
      notes: notes.trim(),
    });

    res.status(200).json(brew);
  } catch (error) {
    console.error("Error updating brew:", error);

    res.status(500).json({
      message: "Failed to update brew",
    });
  }
}

// DELETE /api/brews/:id
// Delete a brew
export async function removeBrew(req, res) {
  try {
    const { id } = req.params;

    // Check if brew exists
    const existingBrew = await getBrewById(id);

    if (!existingBrew) {
      return res.status(404).json({
        message: "Brew not found",
      });
    }

    await deleteBrew(id);

    res.status(200).json({
      message: "Brew deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting brew:", error);

    res.status(500).json({
      message: "Failed to delete brew",
    });
  }
}