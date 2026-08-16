import BrewCard from "./BrewCard";

function BrewList({ brews, onEdit, onDelete, deletingId }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {brews.map((brew) => (
        <BrewCard
          key={brew.id}
          brew={brew}
          onEdit={onEdit}
          onDelete={onDelete}
          deletingId={deletingId}
        />
      ))}
    </div>
  );
}

export default BrewList;
