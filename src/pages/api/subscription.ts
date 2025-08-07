import { formatDate, isDateValid } from "@/utils/date";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  let subscribedAt = new Date(req.body.subscribed_at);
  if (!isDateValid(req.body.subscribed_at)) {
    subscribedAt = new Date();
  }

  try {
    const result = await fetch(
      "https://script.google.com/macros/s/AKfycbx0hfbB0WzyVEHOLH0W-7MQ2OIhl1miKQ-Mhx3FasGDDK65ncG9Mn1H5TuR47HC9rKu/exec?spreadsheetId=1aitglpd5ybBd67j58dnbM4xlL3XyH6R2iyQT7nG0WAg&sheetId=0&version=1",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          Email: req.body.email ?? "",
          "Subscribed At": formatDate(subscribedAt),
        }),
      }
    );

    if (result.status !== 200) {
      console.error(
        new Error("failed to send email to google sheet", {
          cause: new Error(
            JSON.stringify({ status: result.status, body: result.body })
          ),
        })
      );
      return res.status(500).send("Internal Server Error");
    }

    res.status(200).send("OK");
  } catch (error) {
    console.error(
      new Error("unexpected error when send email to google sheet", {
        cause: error,
      })
    );
    res.status(500).send("Internal Server Error");
  }
}
