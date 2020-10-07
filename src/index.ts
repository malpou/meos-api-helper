import { getCompetetion } from "./endpoints/competition";
import { getFirstKey, getChanges } from "./endpoints/changes";
import { getStartlist } from "./endpoints/competitors";
import { getResult, getSplit } from "./endpoints/results";
import { CompetitionInfo, Changes, Runner } from "./types";

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

export const GetStartlist = async (cls: string) =>
  new Promise<Runner[]>(async (resolve, reject) => {
    try {
      resolve(await getStartlist(cls));
    } catch (err) {
      reject(err);
    }
  });

export const GetResult = async (cls: string) =>
  new Promise<Runner[]>(async (resolve, reject) => {
    try {
      resolve(await getResult(cls));
    } catch (err) {
      reject(err);
    }
  });

export const GetSplit = async (cls: string, control: number | string) =>
  new Promise<Runner[]>(async (resolve, reject) => {
    try {
      resolve(await getSplit(cls, control));
    } catch (err) {
      reject(err);
    }
  });
