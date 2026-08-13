const API_URL = "http://localhost:5000/api/brews";

//GET all brews
export async function getBrews() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch brews!");
  }
  return response.json();
}

//GET single brew
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
      "content-type": "application/json",
    },
    body: JSON.stringify(brew),
  });
  if (!response.ok) {
    throw new Error("Failed to create brew!");
  }
  return response.json();
}

// UPDATE brew
export async function updateBrew(id, brew) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(brew),
  });
  if (!response.ok) {
    throw new Error("Failed to update brew!");
  }
  return response.json();
}

// DELETE brew
export async function deleteBrew(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete brew!");
  }

  return response.json();
}
