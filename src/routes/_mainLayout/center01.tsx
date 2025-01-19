import { createFileRoute } from "@tanstack/react-router";
import CenterPoint from "@/pages/几何中心点";

export const Route = createFileRoute("/_mainLayout/center01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CenterPoint />;
}
