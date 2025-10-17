import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");

    if (secret !== process.env.MY_SECRET_TOKEN) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // Revalidate all possible tags for home page
    const homePageTags = ["sermons", "events", "settings", "hero", "home-page"];

    homePageTags.forEach((tag) => {
      revalidateTag(tag);
      console.log(`Revalidated tag: ${tag}`);
    });

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tags: homePageTags,
    });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
