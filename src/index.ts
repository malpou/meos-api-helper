import { getCompetetion } from "./endpoints/competetion";
import { CompetitionInfo } from "./types";

export const Competetion = async () =>
  new Promise<CompetitionInfo>(async (resolve, reject) => {
    try {
      resolve(await getCompetetion());
    } catch (err) {
      reject(err);
    }
  });
