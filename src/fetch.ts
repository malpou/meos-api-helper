import axios from "axios";
import { getJSON } from "./utils";

export async function getData(url: string): Promise<any> {
  return new Promise<object>((resolve, reject) => {
    axios
      .get(url)
      .then((res) => resolve(getJSON(res)))
      .catch((e) => reject(e));
  });
}

// This is a test to see if CI will run
