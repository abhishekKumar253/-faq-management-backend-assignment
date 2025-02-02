import express from "express";
import { createFAQ, deleteFAQ, getFAQs, updateFAQ } from "../controllers/faq.controller.js";


const router = express.Router();

router.get("/get-faqs", getFAQs);
router.post("/create-faq", createFAQ);
router.put("/update-faq/:id", updateFAQ); 
router.delete("/delete-faq/:id", deleteFAQ); 

export default router;