const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/brews";

// GET all brews
export async function getBrews() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch brews!");
  }

  return response.json();
}

// GET single brew
export async function getBrew(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch brew!");
  }

  return response.json();
}

// CREATE brew
export async function createBrew(brew) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(brew),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create brew!");
  }

  return data;
}

// UPDATE brew
export async function updateBrew(id, brew) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(brew),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update brew!");
  }

  return data;
}

// DELETE brew
export async function deleteBrew(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete brew!");
  }

  return data;
}
