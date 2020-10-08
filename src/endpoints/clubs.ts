// TODO
/*
todo: /meos?get=organization
*/
import { Club } from "../types";
import { getData } from "../fetch";

export async function getClubs(): Promise<Club[]> {
  return new Promise<Club[]>(async (resolve, reject) => {
    try {
      const data = await getData("http://localhost:2009/meos?get=competition");
      resolve(createClubs(data));
    } catch (error) {
      reject(error);
    }
  });
}

export async function getClub(id: number): Promise<Club> {
  return new Promise<Club>(async (resolve, reject) => {
    try {
      const data = await getClubs();
      resolve(createClub(data, id));
    } catch (error) {
      reject(error);
    }
  });
}

export function createClubs(data: any): Club[] {
  const clubArr: Club[] = [];
  data.MOPComplete.org.forEach((element: any) => {
    clubArr.push({
      id: +element.$.id,
      name: element._
    });
  });
  return clubArr;
}

export function createClub(data: Club[], id: number): Club {
  let club: Club = {
    id: 888888888,
    name: "Vacant"
  };
  data.forEach((element) => {
    if (id === element.id) club = element;
  });
  return club;
}
