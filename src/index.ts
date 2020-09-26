import { getCompetetion } from "./endpoints/competetion";
import { Changes } from "./endpoints/changes";
import { CompetitionInfo } from "./types";

export const Competetion = async () =>
  new Promise<CompetitionInfo>(async (resolve, reject) => {
    try {
      resolve(await getCompetetion());
    } catch (err) {
      reject(err);
    }
  });

export const GetKey = async () =>
  new Promise<string>(async (resolve, reject) => {
    try {
      resolve(await Changes.getFirstKey());
    } catch (err) {
      reject(err);
    }
  });
