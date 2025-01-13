import BufferGeometry01 from "@/pages/geometry01";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/geometry01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BufferGeometry01 />;
}
