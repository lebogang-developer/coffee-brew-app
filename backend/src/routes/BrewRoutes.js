import express from "express";
const router = express.Router();
import prisma from '../config/db';


// @route               GET /api/brews
// @description         get all brews
// @access              Public

router.get("/", (req, res) => {
  const brews = await prisma.brew.findMany();
  
  res.json(brews);
});

// @route               POST /api/brews
// @description         create new brew
// @access              Public

router.post("/", (req, res) => {
  const { beans, method } = req.body;
  console.log(method);

  res.send(beans);
});

export default router;
