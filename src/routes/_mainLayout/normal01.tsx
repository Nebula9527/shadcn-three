import { createFileRoute } from "@tanstack/react-router";
import Normal01 from "@/pages/normal01";

export const Route = createFileRoute("/_mainLayout/normal01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Normal01 />;
}
