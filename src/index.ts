import { getCompetetion } from "./endpoints/competition";
import { getFirstKey, getChanges } from "./endpoints/changes";
import { CompetitionInfo, Changes } from "./types";

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
      resolve(await getFirstKey());
    } catch (err) {
      reject(err);
    }
  });

export const CheckForChanges = async (key: string) =>
  new Promise<Changes>(async (resolve, reject) => {
    try {
      resolve(await getChanges(key));
    } catch (err) {
      reject(err);
    }
  });
