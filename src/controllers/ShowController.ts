import { Request, Response } from "express";
import ShowDAO from "../daos/ShowDAO";
import { ShowModel, validateShowInputs } from "../domains/ShowModel";
//prova-felipe
export default class ShowController {
  private showDAO: ShowDAO;

  constructor() {
    this.showDAO = new ShowDAO();
  }

  async save(req: Request, res: Response) {
    const errorMessages = validateShowInputs(req.body);

    if (errorMessages.length === 0) {
      const { id, title, premiere, isRunning, language, mainGenre, posterUrl } =
        req.body;

      const show = new ShowModel({
        id,
        title,
        premiere: new Date(premiere),
        isRunning,
        language,
        mainGenre,
        posterUrl,
      });

      const savedShow = await this.showDAO.save(show);
      return res.status(201).json({ show: savedShow });
    }

    return res.status(400).json({ errorMessages });
  }

  async search(req: Request, res: Response) {
    const title = req.params.title as string;

    try {
      const shows = await ShowModel.find({
        title: { $regex: title, $options: "i" },
      });

      return res.status(200).json({ shows });
    } catch (error) {
      console.error("Error during search:", error);
      return res.status(500).json({ error: "Error when searching for shows" });
    }
  }
}
//prova-felipe
