import { NextResponse } from "next/server";
import { submitLead } from "@/lib/leads";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const result = await submitLead({ ...json, type: json.type || "lead_magnet" });
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, reason: "delivery_error", message: "Malformed request payload." },
      { status: 400 }
    );
  }
}
