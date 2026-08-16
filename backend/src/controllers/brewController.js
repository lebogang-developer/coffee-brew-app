import {
  getAllBrews,
  getBrewId,
  createBrew,
  updateBrew,
  deleteBrew,
  getBrewById,
} from "../services/brewServices.js";

// GET /api/brews
export async function getBrews(req, res) {
  try {
    const brews = await getAllBrews();
    res.status(200).json(brews);
  } catch (error) {
    console.error("Error fetching brews", error);
    res.status(500).json({
      mesaage: "Failed to fetch brews",
    });
  }
}

// GET /api/brews/:id
export async function getBrew(req, res) {
  try {
    const { id } = req.params;
    const brew = await getBrewId(id);

    if (!brew) {
      return res.status(404).json({
        mesaage: "Brew not found!",
      });
      res.status(200).json(brew);
    }
  } catch (error) {
    console.error("Error fetching brew", error);
    res.status(500).json({
      mesaage: "Failed to fetch brews",
    });
  }
}

// POST /api/brews
export async function addbrews(req, res) {
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
        message: "All fields are required!",
      });
    }
    const brew = await createBrew({
      coffee: coffee.trim(),
      method: methos.trim(),
      rating,
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
export async function editBrew(req, res) {
  try {
    const { id } = req.params;
    const { coffee, methos, rating, notes } = req.body;

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
        mesaage: "Brew not found!",
      });
    }
    const brew = await updateBrew(id, {
      coffee: coffee.trim(),
      method: methos.trim(),
      rating,
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
export async function removeBrew(req, res) {
  try {
    const { id } = req.params;

    //Check if brew exists
    const exiistingBrew = await getBrewById(id);

    if (!exiistingBrew) {
      return res.status(400).json({
        message: "Brew not found!",
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
