import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const translateText = async (text, targetLang) => {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLang,
      format: "text", 
    });

    return response.data?.data?.translations?.[0]?.translatedText || text;
  } catch (error) {
    console.error("❌ Translation Error:", error.message);

    if (error.response) {
      console.error("🚨 Google API Error:", error.response.data);
    } else if (error.request) {
      console.error("⚠ No response from Google API");
    }

    return text; 
  }
};
