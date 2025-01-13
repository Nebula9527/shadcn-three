import Fox01 from "@/pages/fox01";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/fox01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Fox01 />;
}
