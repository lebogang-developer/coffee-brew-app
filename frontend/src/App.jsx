import { useEffect, useMemo, useState } from "react";

import BrewForm from "./components/BrewForm.jsx";
import BrewList from "./components/BrewList";
import { getBrews, deleteBrew } from "./components/brewService.js";

function App() {
  // All brews from the database
  const [brews, setBrews] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error message
  const [error, setError] = useState("");

  // Show/hide the form
  const [showForm, setShowForm] = useState(false);

  // Brew currently being edited
  const [brewToEdit, setBrewToEdit] = useState(null);

  // Selected filter
  const [selectedMethod, setSelectedMethod] = useState("All");

  // Delete loading state
  const [deletingId, setDeletingId] = useState(null);

  // Fetch brews when the application loads
  useEffect(() => {
    loadBrews();
  }, []);

  // Update browser tab title
  useEffect(() => {
    document.title = `Brews: ${brews.length}`;
  }, [brews.length]);

  // Fetch all brews
  async function loadBrews() {
    try {
      setLoading(true);
      setError("");

      const data = await getBrews();

      setBrews(data);
    } catch (error) {
      console.error("Error loading brews:", error);

      setError(error.message || "Unable to load brews. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Open form for adding a new brew
  function handleAddBrew() {
    setBrewToEdit(null);
    setShowForm(true);
  }

  // Open form for editing a brew
  function handleEditBrew(brew) {
    setBrewToEdit(brew);
    setShowForm(true);
  }

  // Close the form
  function handleCancelForm() {
    setShowForm(false);
    setBrewToEdit(null);
  }

  // Called after successful create/update
  async function handleFormSuccess() {
    setShowForm(false);
    setBrewToEdit(null);

    await loadBrews();
  }

  // Delete a brew
  async function handleDeleteBrew(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this brew?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setError("");

      await deleteBrew(id);

      // Remove the deleted brew immediately from the UI
      setBrews((currentBrews) => currentBrews.filter((brew) => brew.id !== id));
    } catch (error) {
      console.error("Error deleting brew:", error);

      setError(error.message || "Unable to delete brew. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  // Get unique brew methods
  const methods = useMemo(() => {
    const uniqueMethods = [...new Set(brews.map((brew) => brew.method))];

    return uniqueMethods.sort();
  }, [brews]);

  // Filter brews
  const filteredBrews = useMemo(() => {
    if (selectedMethod === "All") {
      return brews;
    }

    return brews.filter((brew) => brew.method === selectedMethod);
  }, [brews, selectedMethod]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Coffee Log
            </p>

            <h1 className="mt-1 text-2xl font-bold text-stone-900 sm:text-3xl">
              ☕ Brew Journal
            </h1>
          </div>

          {/* Add button */}
          <button
            type="button"
            onClick={handleAddBrew}
            className="rounded-lg bg-amber-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:px-5"
          >
            <span className="mr-1">+</span>
            Add Brew
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
            Your coffee history
          </p>

          <h2 className="mt-1 text-3xl font-bold text-stone-900">
            Brews: {brews.length}
          </h2>

          <p className="mt-2 text-stone-600">
            Keep track of your favourite beans, brewing methods and tasting
            notes.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <span>{error}</span>

            <button
              type="button"
              onClick={loadBrews}
              className="ml-4 font-semibold underline hover:no-underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Filter */}
        {!loading && brews.length > 0 && (
          <div className="mb-6 flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-stone-900">Filter brews</h3>

              <p className="text-sm text-stone-500">
                View brews by brewing method.
              </p>
            </div>

            <select
              value={selectedMethod}
              onChange={(event) => setSelectedMethod(event.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-700 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
            >
              <option value="All">All Methods</option>

              {methods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="flex min-h-60 items-center justify-center rounded-xl border border-stone-200 bg-white">
            <div className="text-center">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-stone-200 border-t-amber-700"></div>

              <p className="text-sm text-stone-600">Loading your brews...</p>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && brews.length === 0 && (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
            <div className="text-5xl">☕</div>

            <h3 className="mt-4 text-xl font-bold text-stone-900">
              No brews yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-stone-500">
              Start your coffee journal by recording your first brew.
            </p>

            <button
              type="button"
              onClick={handleAddBrew}
              className="mt-6 rounded-lg bg-amber-700 px-5 py-3 font-semibold text-white transition hover:bg-amber-800"
            >
              Add Your First Brew
            </button>
          </div>
        )}

        {/* No filtered results */}
        {!loading && brews.length > 0 && filteredBrews.length === 0 && (
          <div className="rounded-xl border border-stone-200 bg-white px-6 py-12 text-center">
            <div className="text-4xl">🔎</div>

            <h3 className="mt-3 font-bold text-stone-900">No brews found</h3>

            <p className="mt-1 text-sm text-stone-500">
              There are no brews using the selected method.
            </p>

            <button
              type="button"
              onClick={() => setSelectedMethod("All")}
              className="mt-4 font-semibold text-amber-700 hover:text-amber-800"
            >
              Show all brews
            </button>
          </div>
        )}

        {/* Brew list */}
        {!loading && filteredBrews.length > 0 && (
          <BrewList
            brews={filteredBrews}
            onEdit={handleEditBrew}
            onDelete={handleDeleteBrew}
            deletingId={deletingId}
          />
        )}
      </main>

      {/* Add/Edit Form */}
      {showForm && (
        <BrewForm
          brewToEdit={brewToEdit}
          onSuccess={handleFormSuccess}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
}

export default App;
