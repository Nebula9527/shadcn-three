import { createFileRoute } from "@tanstack/react-router";
import BoundingBox01 from "@/pages/包围盒01/index";

export const Route = createFileRoute("/_mainLayout/boundingbox01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BoundingBox01 />;
}
