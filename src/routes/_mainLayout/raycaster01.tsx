import { createFileRoute } from "@tanstack/react-router";
import Raycaster01 from "@/pages/raycaster01";

export const Route = createFileRoute("/_mainLayout/raycaster01")({
  component: Raycaster01,
});

function RouteComponent() {
  return Raycaster01;
}
