// app/api/projects/[id]/route.ts
import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // Required for your Next.js 16 setup

  const numericId = Number(id);

  // Validate ID
  if (Number.isNaN(numericId)) {
    return NextResponse.json(
      { error: "Invalid id. Must be a number." },
      { status: 400 }
    );
  }

  const project = await getProjectById(numericId);

  // Not found
  if (!project) {
    return NextResponse.json(
      { error: "Project not found." },
      { status: 404 }
    );
  }

  // Success
  return NextResponse.json(project);
}