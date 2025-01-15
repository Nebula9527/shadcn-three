import { createFileRoute } from "@tanstack/react-router";
import Tween from "@/pages/tween";

export const Route = createFileRoute("/_mainLayout/tween")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Tween />;
}
