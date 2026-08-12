function BrewCard({ brew }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {brew.coffee}
          </h2>

          <p className="mt-1 text-sm text-slate-500">{brew.method}</p>
        </div>

        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
          ⭐ {brew.rating}/5
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{brew.notes}</p>

      <div className="mt-5 flex gap-3">
        <button className="rounded-lg border px-4 py-2 text-sm">Edit</button>

        <button className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white">
          Delete
        </button>
      </div>
    </article>
  );
}

export default BrewCard;
