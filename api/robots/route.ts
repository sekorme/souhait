import { NextResponse } from "next/server";

export function GET() {
    const robots = `
User-agent: *
Allow: /
Disallow: /admin
Disallow: /login
Disallow: /register
Sitemap: https://souhaittravel.com/sitemap.xml
  `;

    return new NextResponse(robots, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
