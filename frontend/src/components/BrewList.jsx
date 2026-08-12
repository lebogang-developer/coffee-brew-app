import BrewCard from "./BrewCard";

function BrewList({ brews }) {
  if (brews.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <p className="text-slate-500">No brews recorded yet.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {brews.map((brew) => (
        <BrewCard key={brew.id} brew={brew} />
      ))}
    </div>
  );
}

export default BrewList;
