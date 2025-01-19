import { createFileRoute } from "@tanstack/react-router";
import MultiBoundingBox from "@/pages/多物体包围盒";

export const Route = createFileRoute("/_mainLayout/boundingbox02")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MultiBoundingBox />;
}
