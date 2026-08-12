function FilterBar({ method, onMethodChange }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <label htmlFor="method" className="text-sm font-medium text-slate-700">
        Filter by brew method
      </label>

      <select
        id="method"
        value={method}
        onChange={(event) => onMethodChange(event.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-slate-500"
      >
        <option value="all">All methods</option>
        <option value="Pour Over">Pour Over</option>
        <option value="French Press">French Press</option>
        <option value="Aeropress">Aeropress</option>
        <option value="Espresso">Espresso</option>
        <option value="Chemex">Chemex</option>
      </select>
    </div>
  );
}

export default FilterBar;
