import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !AUDIENCE_ID) {
      console.error("Missing Mailchimp env vars", { API_KEY, AUDIENCE_ID });
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const DATACENTER = API_KEY.split("-")[1];

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const errorResponse = await response.json();

    if (!response.ok && errorResponse.title !== "Member Exists") {
      console.error("Mailchimp error:", errorResponse);
      const errorMsg = errorResponse?.title || "Error subscribing email";
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
