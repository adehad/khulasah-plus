/**
 * Generates a Google Search Console site verification file in the dist folder.
 *
 * Reads the verification ID from GOOGLE_SITE_VERIFICATION_ID env var and creates
 * the corresponding HTML file (e.g., google1234.html).
 *
 * Skips gracefully if env var is not set.
 *
 * @example GOOGLE_SITE_VERIFICATION_ID=1234 bun scripts/google-site-verification.ts
 */
const verificationId = process.env.GOOGLE_SITE_VERIFICATION_ID;

if (!verificationId) {
  console.warn(
    "GOOGLE_SITE_VERIFICATION_ID not set, skipping Google site verification file generation",
  );
  process.exit(0);
}

const filename = `google${verificationId}.html`;
const content = `google-site-verification: ${filename}\n`;

await Bun.write(`dist/${filename}`, content);
console.log(`Created dist/${filename}`);

export {};
