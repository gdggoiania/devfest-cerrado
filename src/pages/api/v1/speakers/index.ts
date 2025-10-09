import type { NextApiRequest, NextApiResponse } from "next";
import { createSpeaker, getSpeaker } from "back-features/speakers";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    getSpeaker()
      .then((speaker) => {
        response.json(speaker);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  } else if (request.method === "POST") {
    const {
      key,
      id,
      companyTitle,
      mini_bio,
      name,
      photo,
      tech,
      title,
      gde,
      showOnSite,
      topic,
      location,
    } = request.body as any;
    createSpeaker({
      key,
      id,
      companyTitle,
      mini_bio,
      name,
      photo,
      tech,
      title,
      gde,
      showOnSite,
      topic,
      location,
    })
      .then((speaker) => {
        response.json(speaker);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  } else {
    response.status(404);
  }
}
