import { createFileRoute } from "@tanstack/react-router";
import First3d from "@/pages/first3d";

export const Route = createFileRoute("/_mainLayout/first3d")({
  component: First3d,
});
