// app/api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/projects-db";

// GET /api/projects
// GET /api/projects?type=opensource
// GET /api/projects?type=school
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  // Validate type if provided
  if (type && type !== "opensource" && type !== "school") {
    return NextResponse.json(
      { error: "Invalid type. Use 'opensource' or 'school'." },
      { status: 400 }
    );
  }

  const projects = await getProjects(type);

  return NextResponse.json(projects);
}