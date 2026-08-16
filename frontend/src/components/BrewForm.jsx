import { useEffect, useState } from "react";
import { createBrew, updateBrew } from "../brewService";

function BrewForm({ brewToEdit, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    coffee: "",
    method: "",
    rating: "",
    notes: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Populate the form when editing an existing brew
  useEffect(() => {
    if (brewToEdit) {
      setFormData({
        coffee: brewToEdit.coffee || "",
        method: brewToEdit.method || "",
        rating: brewToEdit.rating || "",
        notes: brewToEdit.notes || "",
      });
    } else {
      setFormData({
        coffee: "",
        method: "",
        rating: "",
        notes: "",
      });
    }

    setError("");
  }, [brewToEdit]);

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Validate form
  function validateForm() {
    if (!formData.coffee.trim()) {
      return "Please enter the coffee/beans name.";
    }

    if (!formData.method.trim()) {
      return "Please select a brew method.";
    }

    if (!formData.rating) {
      return "Please select a rating.";
    }

    if (!formData.notes.trim()) {
      return "Please enter some tasting notes.";
    }

    const rating = Number(formData.rating);

    if (rating < 1 || rating > 5) {
      return "Rating must be between 1 and 5.";
    }

    return "";
  }

  // Submit form
  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const brewData = {
        coffee: formData.coffee.trim(),
        method: formData.method,
        rating: Number(formData.rating),
        notes: formData.notes.trim(),
      };

      if (brewToEdit) {
        // EDIT existing brew
        await updateBrew(brewToEdit.id, brewData);
      } else {
        // CREATE new brew
        await createBrew(brewData);
      }

      // Tell App.jsx that the operation was successful
      onSuccess();
    } catch (error) {
      console.error("Form submission error:", error);

      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {brewToEdit ? "Edit Brew" : "Add Brew"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {brewToEdit
                ? "Update the details of your brew."
                : "Log a new coffee brew."}
            </p>
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="text-2xl text-gray-400 hover:text-gray-700"
            aria-label="Close form"
          >
            ×
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Coffee / Beans */}
          <div>
            <label
              htmlFor="coffee"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Coffee / Beans
            </label>

            <input
              type="text"
              id="coffee"
              name="coffee"
              value={formData.coffee}
              onChange={handleChange}
              placeholder="e.g. Ethiopian Yirgacheffe"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          {/* Brew Method */}
          <div>
            <label
              htmlFor="method"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Brew Method
            </label>

            <select
              id="method"
              name="method"
              value={formData.method}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">Select a method</option>
              <option value="Pour Over">Pour Over</option>
              <option value="French Press">French Press</option>
              <option value="Espresso">Espresso</option>
              <option value="AeroPress">AeroPress</option>
              <option value="Chemex">Chemex</option>
              <option value="Cold Brew">Cold Brew</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label
              htmlFor="rating"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Rating
            </label>

            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">Select a rating</option>
              <option value="5">★★★★★ — Excellent</option>
              <option value="4">★★★★☆ — Very Good</option>
              <option value="3">★★★☆☆ — Good</option>
              <option value="2">★★☆☆☆ — Fair</option>
              <option value="1">★☆☆☆☆ — Poor</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Tasting Notes
            </label>

            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the flavour, aroma, body, acidity..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-amber-700 px-5 py-3 font-medium text-white transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Saving..." : brewToEdit ? "Update Brew" : "Save Brew"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BrewForm;
