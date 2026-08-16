function BrewCard({ brew, onEdit, onDelete, deletingId }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Card header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-stone-900">{brew.coffee}</h3>

          <span className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            {brew.method}
          </span>
        </div>

        {/* Rating */}
        <div
          className="shrink-0 text-amber-500"
          title={`${brew.rating} out of 5`}
        >
          {"★".repeat(brew.rating)}

          <span className="text-stone-200">{"★".repeat(5 - brew.rating)}</span>
        </div>
      </div>

      {/* Tasting notes */}
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Tasting Notes
        </p>

        <p className="mt-1 leading-relaxed text-stone-600">{brew.notes}</p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3 border-t border-stone-100 pt-4">
        {/* Edit */}
        <button
          type="button"
          onClick={() => onEdit(brew)}
          className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
        >
          Edit
        </button>

        {/* Delete */}
        <button
          type="button"
          onClick={() => onDelete(brew.id)}
          disabled={deletingId === brew.id}
          className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {deletingId === brew.id ? "Deleting..." : "Delete"}
        </button>
      </div>
    </article>
  );
}

export default BrewCard;
