import { useState } from "react";

import Navbar from "../components/Navbar";
import BrewList from "../components/BrewList";
import FilterBar from "../components/FilterBar";

function Home() {
  const [method, setMethod] = useState("all");

  // Temporary brews data
  const brews = [
    {
      id: 1,
      coffee: "Ethiopian Yirgacheffe",
      method: "Pour Over",
      rating: 5,
      notes: "Bright, fruity and very clean.",
    },
    {
      id: 2,
      coffee: "Brazil Santos",
      method: "French Press",
      rating: 4,
      notes: "Smooth with chocolate and nutty notes.",
    },
  ];

  const filteredBrews =
    method === "all" ? brews : brews.filter((brew) => brew.method === method);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Brews: {filteredBrews.length}
          </h1>
          <p className="mt-2 text-slate-500">
            Keep track of every cup you brew.
          </p>
        </div>

        <FilterBar onMethodChange={setMethod} />

        <BrewList brews={filteredBrews} />
      </main>
    </div>
  );
}

export default Home;
