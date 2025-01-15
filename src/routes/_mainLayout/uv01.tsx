import { createFileRoute } from "@tanstack/react-router";
import UV01 from "@/pages/uv01";

export const Route = createFileRoute("/_mainLayout/uv01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UV01 />;
}
