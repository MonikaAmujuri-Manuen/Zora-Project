import express from "express";
import Wishlist from "../models/Wishlist.js";
import protect from "../middleware/authMiddleware.js";
import optionalAuth from "../middleware/optionalAuthMiddleware.js";

const router = express.Router();

/* ======================
   GET WISHLIST COUNT
====================== */
router.get("/count", optionalAuth, async (req, res) => {
  if (!req.user) {
    return res.json({ count: 0 });
  }

  const wishlist = await Wishlist.findOne({ user: req.user._id });
  res.json({ count: wishlist ? wishlist.items.length : 0 });
});

/* ======================
   TOGGLE WISHLIST
====================== */
router.post("/toggle", protect, async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user._id;

    if (!productId) {
      return res.status(400).json({ message: "productId is required" });
    }

    // Ensure wishlist exists (upsert)
    const wishlist = await Wishlist.findOneAndUpdate(
      { user: userId },
      { $setOnInsert: { user: userId, items: [] } },
      { new: true, upsert: true }
    );

    // Check if product already exists
    const exists = wishlist.items.some(
      (item) => item.product.toString() === productId
    );

    // Atomic toggle
    const updated = await Wishlist.findOneAndUpdate(
      { user: userId },
      exists
        ? { $pull: { items: { product: productId } } }
        : { $addToSet: { items: { product: productId } } },
      { new: true }
    );

    return res.json({ count: updated.items.length });
  } catch (err) {
    console.error("WISHLIST TOGGLE ERROR:", err);
    return res.status(500).json({ message: "Wishlist toggle failed" });
  }
});

/* ======================
   GET FULL WISHLIST
====================== */
router.get("/", optionalAuth, async (req, res) => {
  if (!req.user) {
    return res.json({ items: [] });
  }

  const wishlist = await Wishlist.findOne({ user: req.user._id })
    .populate("items.product");

  res.json(wishlist || { items: [] });
});

export default router;
