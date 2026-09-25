import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { NextResponse } from "next/server"

import { MAX_VIDEO_BYTES } from "@/lib/upload"

// Issues short-lived client tokens so routine videos upload straight from the
// browser to Vercel Blob without passing through this server.
export async function POST(request: Request): Promise<NextResponse> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "Video uploads are not configured." }, { status: 503 })
  }

  const body = (await request.json()) as HandleUploadBody

  try {
    const json = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith("routines/")) throw new Error("Invalid upload path.")
        return {
          allowedContentTypes: ["video/*"],
          maximumSizeInBytes: MAX_VIDEO_BYTES,
          // Random suffix keeps each video URL unguessable.
          addRandomSuffix: true,
        }
      },
    })
    return NextResponse.json(json)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 })
  }
}
