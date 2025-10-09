import { server } from "helpers/config";
import { Speaker } from "models/speaker";

export const getSpeakers = async (): Promise<Speaker[]> => {
  const url = `${server}/api/v1/speakers`;

  const res = await fetch(url);
  const speakers = await res.json();
  return speakers;
};
