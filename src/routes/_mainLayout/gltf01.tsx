import { createFileRoute } from "@tanstack/react-router";
import Gltf01 from "@/pages/gltf01";

export const Route = createFileRoute("/_mainLayout/gltf01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Gltf01 />;
}
