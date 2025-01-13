import { createFileRoute } from "@tanstack/react-router";
import Texture01 from "@/pages/texture01";

export const Route = createFileRoute("/_mainLayout/texture01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Texture01 />;
}
