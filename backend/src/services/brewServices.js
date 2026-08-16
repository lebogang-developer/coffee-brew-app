import prisma from "../config/db";

// GET all brews
export async function getAllBrews() {
  return await prisma.brew.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

// GET brew by id
export async function getBrewById(id) {
  return await prisma.brew.findUnique({
    where: {
      id: Number(id),
    },
  });
}

// CREATE a new brew
export async function createBrew(data) {
  return await prisma.brew.create({
    data: {
      coffee: data.coffee,
      method: data.methos,
      rating: Number(data.rating),
      notes: data.notes,
    },
  });
}

// UPDATE/EDIT an existing brew
export async function updateBrew(id, data) {
  return await prisma.brew.update({
    where: {
      id: Number(id),
    },
    data: {
      coffee: data.coffee,
      method: data.methos,
      rating: Number(data.rating),
      notes: data.notes,
    },
  });
}

//DELETE a brew
export async function deleteBrew(id) {
  return await prisma.brew.delete({
    where: {
      id: Number(id),
    },
  });
}
