/**
 * PayPal integration — STRUCTURE ONLY, NOT LIVE.
 *
 * There is no PayPal account, no live checkout and no course prices here.
 * Nothing in this file can take money:
 * - Credentials are read ONLY from environment variables (never hardcoded).
 * - Course amounts must come from the server-side COURSE_PRICES list below,
 *   which is EMPTY on purpose. The owner adds real prices there later.
 * - Until credentials AND a price are configured, the API routes answer
 *   503 "PayPal not configured yet" and the site shows the WhatsApp flow.
 *
 * Used only by the API routes in src/app/api/paypal/ (server-side only).
 * The PayPal client ID used by the browser SDK is the public one,
 * NEXT_PUBLIC_PAYPAL_CLIENT_ID — the secret never leaves the server.
 */

export type PayPalMode = "sandbox" | "live";

function paypalMode(): PayPalMode {
  return process.env.PAYPAL_MODE === "live" ? "live" : "sandbox";
}

export function paypalApiBase(): string {
  return paypalMode() === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

/** True only when the server credentials are present. Secrets are never logged. */
export function isPayPalConfigured(): boolean {
  return Boolean(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);
}

/**
 * Server-side price list — EMPTY ON PURPOSE.
 * The owner sets real course prices here later, e.g.:
 *   "noorani-qaida": { amount: "49.00", currency: "USD", label: "Noorani Qaida — monthly fee" },
 * The browser can never choose its own amount: the API only ever charges
 * the amount from this list.
 */
export type CoursePrice = { amount: string; currency: string; label: string };
export const COURSE_PRICES: Record<string, CoursePrice> = {};

export function priceForCourse(slug: string): CoursePrice | null {
  return COURSE_PRICES[slug] ?? null;
}

async function getAccessToken(): Promise<string> {
  const id = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!id || !secret) throw new Error("PayPal is not configured yet.");
  const res = await fetch(`${paypalApiBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`PayPal token request failed (${res.status}).`);
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

export async function createPayPalOrder(
  price: CoursePrice,
  description: string,
): Promise<{ id: string }> {
  const token = await getAccessToken();
  const res = await fetch(`${paypalApiBase()}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          description,
          amount: { currency_code: price.currency, value: price.amount },
        },
      ],
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`PayPal order creation failed (${res.status}).`);
  return (await res.json()) as { id: string };
}

export async function capturePayPalOrder(orderId: string): Promise<unknown> {
  const token = await getAccessToken();
  const res = await fetch(
    `${paypalApiBase()}/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error(`PayPal capture failed (${res.status}).`);
  return await res.json();
}
