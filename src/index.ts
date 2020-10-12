import { getCompetetion } from "./endpoints/competition";
import { getFirstKey, getChanges } from "./endpoints/changes";
import { getStartlist } from "./endpoints/competitors";
import { getResult, getSplit } from "./endpoints/results";
import { CompetitionInfo, Changes, Runner } from "./types";

export const Competetion = async () =>
  new Promise<CompetitionInfo>(async (resolve) => {
    resolve(await getCompetetion());
  });

export const GetKey = async () =>
  new Promise<string>(async (resolve) => {
    resolve(await getFirstKey());
  });

export const CheckForChanges = async (key: string) =>
  new Promise<Changes>(async (resolve) => {
    resolve(await getChanges(key));
  });

export const GetStartlist = async (cls: number) =>
  new Promise<Runner[]>(async (resolve) => {
    resolve(await getStartlist(cls));
  });

export const GetResult = async (cls: string) =>
  new Promise<Runner[]>(async (resolve) => {
    resolve(await getResult(cls));
  });

export const GetSplit = async (cls: string, control: number | string) =>
  new Promise<Runner[]>(async (resolve) => {
    resolve(await getSplit(cls, control));
  });
