import express from "express";
const router = express.Router();


// @route               GET /api/brews
// @description         get all brews
// @access              Public

router.get("/", (req, res) => {
  const brews = [
    {
      id: 1,
      beans: "Zimbabwean highlands",
      method: "Espresso",
      Coffeegrams: "15",
      Watergrams: "200",
    },
    {
      id: 2,
      beans: "Nigerian dark roast",
      method: "Drip coffee",
      Coffeegrams: "10",
      Watergrams: "120",
    },
    {
      id: 3,
      beans: "Italian Decaf",
      method: "V60",
      Coffeegrams: "20",
      Watergrams: "180",
    },
    {
      id: 4,
      beans: "Ethiopian Yirgacheffe",
      method: " French press",
      Coffeegrams: "30",
      Watergrams: "500",
    },
    {
      id: 5,
      beans: "Colombian Supremo",
      method: "Aeropress",
      Coffeegrams: "18",
      Watergrams: "220",
    },
    {
      id: 6,
      beans: "Kenyan AA",
      method: "Chemex",
      Coffeegrams: "25",
      Watergrams: "400",
    },
  ];

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
