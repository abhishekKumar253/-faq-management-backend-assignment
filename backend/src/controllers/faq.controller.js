import FAQ from "../models/faq.model.js";
import { translateText } from "../services/translateService.js";
import { redis } from "../db/redis.js";

export const getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";

    const cachedFAQs = await redis.get(`faqs:${lang}`);
    if (cachedFAQs) {
      return res.json(JSON.parse(cachedFAQs));
    }

    let faqs = await FAQ.find();

    if (lang !== "en") {
      faqs = await Promise.all(
        faqs.map(async (faq) => {
          faq.question = await translateText(faq.question, lang);
          return faq;
        })
      );
    }

    await redis.set(`faqs:${lang}`, JSON.stringify(faqs), { EX: 3600 });

    res.json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ error: "Server error while fetching FAQs" });
  }
};

export const createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();

    await redis.del("faqs:en");
    res.status(201).json(newFAQ);
  } catch (error) {
    console.error("Error creating FAQ:", error);
    res.status(500).json({ error: "Could not save FAQ" });
  }
};

export const updateFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;

    const updatedFAQ = await FAQ.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true }
    );

    if (!updatedFAQ) {
      return res.status(404).json({ error: "FAQ not found" });
    }

    await redis.del("faqs:en");
    res.json(updatedFAQ);
  } catch (error) {
    console.error("Error updating FAQ:", error);
    res.status(500).json({ error: "Error while updating FAQ" });
  }
};

export const deleteFAQ = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFAQ = await FAQ.findByIdAndDelete(id);

    if (!deletedFAQ) {
      return res.status(404).json({ error: "FAQ not found" });
    }

    const lang = req.query.lang || "en";
    await redis.del(`faqs:${lang}`);

    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    res.status(500).json({ error: "Error while deleting FAQ" });
  }
};
