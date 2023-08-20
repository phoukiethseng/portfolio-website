import { env } from "@/env.mjs";
import emailjs from "@emailjs/browser";

// Initializing emailjs SDK
emailjs.init(env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export { emailjs };
