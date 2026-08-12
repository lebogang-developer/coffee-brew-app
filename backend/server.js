import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/brews", (req, res) => {
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

app.post("/api/brews", (req, res) => {
  const { beans, method, Coffeegrams, Watergrams } = req.body;

  res.send(
    `Received brew data: Beans - ${beans}, Method - ${method}, Coffeegrams - ${Coffeegrams}, Watergrams - ${Watergrams}`,
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
