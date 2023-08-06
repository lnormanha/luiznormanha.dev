import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;
const resendKey = await import.meta.env.RESEND_API_KEY;

const resend = new Resend(resendKey);

export const post: APIRoute = async ({ request }) => {
  const body = await request.json();

  const emailResponse = await resend.sendEmail({
    ...body,
  });

  return new Response(JSON.stringify(emailResponse));
};
