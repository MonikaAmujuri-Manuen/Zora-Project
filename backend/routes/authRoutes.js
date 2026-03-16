import express from "express";
import bcrypt from "bcryptjs";
import admin from "../config/firebaseAdmin.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* FIREBASE LOGIN */
router.post("/firebase-login", async (req, res) => {
  try {
    const { idToken, phoneNumber } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "Firebase ID token is required" });
    }

    let decoded;
    try {
      decoded = await admin.auth().verifyIdToken(idToken);
    } catch (error) {
      console.error("FIREBASE TOKEN VERIFY ERROR:", error);
      return res.status(401).json({ message: "Invalid Firebase token" });
    }

    const phone = decoded.phone_number || phoneNumber;
    const uid = decoded.uid;

    if (!phone) {
      return res.status(400).json({ message: "Phone number not found in Firebase token" });
    }

    // Check if user exists in MongoDB
    let user = await User.findOne({ phone });
   
    if (!user) {
      // Create new user
      user = await User.create({
        name: "User",
        phone,
        firebaseUid: uid,
        role: "user",
      });
    }

    if (!user.name) {
      user.name = "User";
    }

    // Create JWT for your app
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    if (!user.isOnline || user.isModified()) {
      user.isOnline = true;
      await user.save();
    }

    res.json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      isAdmin: user.isAdmin,
      role: user.role,
      token,
    });

  } catch (err) {
    console.error("FIREBASE LOGIN ERROR:", err);
    res.status(500).json({ message: "Firebase login failed" });
  }
});

// GET CURRENT USER
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", authMiddleware, async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      isOnline: false,
    });

    res.json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Logout failed" });
  }
});

export default router;
