import { NextResponse } from "next/server";
import { capturePayPalOrder, isPayPalConfigured } from "@/lib/paypal";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOT_CONFIGURED = {
  error:
    "PayPal is not configured yet. Please book your free trial on WhatsApp and we will confirm payment with you there.",
};

/**
 * POST /api/paypal/capture-order { orderID }
 * Captures an approved PayPal order. Until the owner configures PayPal
 * credentials, this answers 503 and nothing is charged.
 */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { orderID?: unknown };
  const orderId = typeof body.orderID === "string" ? body.orderID.trim() : "";

  if (!orderId) {
    return NextResponse.json({ error: "Missing PayPal order ID." }, { status: 400 });
  }
  if (!isPayPalConfigured()) {
    return NextResponse.json(NOT_CONFIGURED, { status: 503 });
  }

  try {
    const result = await capturePayPalOrder(orderId);
    return NextResponse.json({ ok: true, result });
  } catch {
    return NextResponse.json(
      { error: "PayPal could not complete the payment. Please try WhatsApp instead." },
      { status: 502 },
    );
  }
}
