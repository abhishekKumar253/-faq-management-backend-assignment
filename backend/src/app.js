import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./db/config.js";
import faqRoutes from "./routes/faq.routes.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: config.corsOrigin }));
app.use(morgan("combined"));

app.use("/api/faqs", faqRoutes);

export { app };
