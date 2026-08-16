import prisma from "../config/db.js";

// Get all brews
export async function getAllBrews() {
  return await prisma.brew.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

// Get a single brew by ID
export async function getBrewById(id) {
  return await prisma.brew.findUnique({
    where: {
      id: Number(id),
    },
  });
}

// Create a new brew
export async function createBrew(data) {
  return await prisma.brew.create({
    data: {
      coffee: data.coffee,
      method: data.method,
      rating: Number(data.rating),
      notes: data.notes,
    },
  });
}

// Update an existing brew
export async function updateBrew(id, data) {
  return await prisma.brew.update({
    where: {
      id: Number(id),
    },
    data: {
      coffee: data.coffee,
      method: data.method,
      rating: Number(data.rating),
      notes: data.notes,
    },
  });
}

// Delete a brew
export async function deleteBrew(id) {
  return await prisma.brew.delete({
    where: {
      id: Number(id),
    },
  });
}