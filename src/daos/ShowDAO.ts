import { Show, ShowModel } from "../domains/ShowModel";

export default class ShowDAO {
  async save(show: Show) {
    const savedShow = await ShowModel.create(show);
    return savedShow;
  }
}
