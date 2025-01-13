import { createFileRoute } from "@tanstack/react-router";
import Texture02 from "@/pages/texture02";

export const Route = createFileRoute("/_mainLayout/texture02")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Texture02 />;
}
