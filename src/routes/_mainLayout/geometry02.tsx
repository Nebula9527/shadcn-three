import { createFileRoute } from "@tanstack/react-router";
import GeometryGroup from "@/pages/geometry02";

export const Route = createFileRoute("/_mainLayout/geometry02")({
  component: RouteComponent,
});

// 材质分组，每个面设置不同的材质
function RouteComponent() {
  return <GeometryGroup />;
}
