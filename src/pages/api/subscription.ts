import { formatDate, isDateValid } from "@/utils/date";
import type { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_SHEET_ACTION_URL = process.env.GOOGLE_SHEET_ACTION_URL ?? "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  let subscribedAt = new Date(req.body.subscribed_at);
  if (!isDateValid(req.body.subscribed_at)) {
    subscribedAt = new Date();
  }

  try {
    const result = await fetch(GOOGLE_SHEET_ACTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        Email: req.body.email ?? "",
        "Subscribed At": formatDate(subscribedAt),
      }),
    });

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
