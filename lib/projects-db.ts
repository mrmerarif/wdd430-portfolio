// lib/projects-db.ts

export type Project = {
  id: number;
  title: string;
  type: "opensource" | "school";
};

export const projects: Project[] = [
  { id: 1, title: "Few Steps Meals", type: "school" },
  { id: 2, title: "My Portfolio Website", type: "school" },
  { id: 3, title: "Volunteer Project Planner", type: "opensource" }
];
