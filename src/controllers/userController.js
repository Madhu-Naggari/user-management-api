// src/controllers/userController.js
const prisma = require("../db/prisma");

// GET /users
exports.getUsers = async (req, res) => {
  const { search, sort = "id", order = "asc" } = req.query;

  const users = await prisma.user.findMany({
    where: search
      ? {
          OR: [{ name: { contains: search } }, { email: { contains: search } }],
        }
      : {},
    orderBy: {
      [sort]: order,
    },
  });

  res.json(users);
};

// GET /users/:id
exports.getUserById = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.params.id) },
  });

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
};

// POST /users
exports.createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /users/:id
exports.updateUser = async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });

    res.json(user);
  } catch {
    res.status(404).json({ message: "User not found" });
  }
};

// PATCH /users/:id

exports.patchUser = async (req, res) => {
  const userId = Number(req.params.id);
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "No fields provided" });
  }
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: data,
    });

    res.json(user);
  } catch (error) {
    res.status(404).json({ message: "User not found or invalid data" });
  }
};

// DELETE /users/:id
exports.deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: Number(req.params.id) },
    });

    res.json({ message: "User deleted" });
  } catch {
    res.status(404).json({ message: "User not found" });
  }
};
