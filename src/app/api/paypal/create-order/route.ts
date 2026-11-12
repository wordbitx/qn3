import { NextResponse } from "next/server";
import { COURSE_MAP } from "@/lib/data";
import { createPayPalOrder, isPayPalConfigured, priceForCourse } from "@/lib/paypal";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOT_CONFIGURED = {
  error:
    "PayPal is not configured yet. Please book your free trial on WhatsApp and we will confirm payment with you there.",
};

/**
 * POST /api/paypal/create-order { courseSlug }
 * Creates a PayPal order for a course. The amount always comes from the
 * server-side price list in src/lib/paypal.ts — never from the request.
 * Until the owner configures PayPal credentials AND a course price, this
 * answers 503 and nothing is charged.
 */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { courseSlug?: unknown };
  const slug = typeof body.courseSlug === "string" ? body.courseSlug : "";
  const price = slug ? priceForCourse(slug) : null;

  if (!isPayPalConfigured() || !price) {
    return NextResponse.json(NOT_CONFIGURED, { status: 503 });
  }

  try {
    const course = COURSE_MAP[slug];
    const order = await createPayPalOrder(
      price,
      `Quran Light Institute — ${course ? course.name : slug} (${price.label})`,
    );
    return NextResponse.json({ id: order.id });
  } catch {
    return NextResponse.json(
      { error: "Could not start the PayPal payment. Please try WhatsApp instead." },
      { status: 502 },
    );
  }
}
