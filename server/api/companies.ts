import express, { Request, Response } from "express";
import { CompaniesSchema } from "../schemas/companies.schema";
import { readJSONFile } from "../services/file.service";
import { validateObject } from "../services/validate.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const obj = await readJSONFile("./testData.json");

    if (obj) {
      const isValid = validateObject(obj, CompaniesSchema);

      if (isValid) {
        return res.status(200).json({ companies: obj });
      }

      return res.status(400).json({ error: "Invalid data in json file" });
    }
  } catch (err) {
    return res.status(400).json({ error: (err as Error).message });
  }
});

export default router;
