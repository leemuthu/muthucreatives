import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Send the bare apex domain to the canonical www host with a single 301 so
// search engines only index one version of the site. Only the exact apex host
// is matched, so localhost and *.vercel.app previews are untouched.
export function middleware(request: NextRequest) {
  if (request.headers.get("host") === "muthucreatives.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = "www.muthucreatives.com";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
