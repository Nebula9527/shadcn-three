import { createFileRoute } from "@tanstack/react-router";
import AxesHelper from "@/pages/assistantTools";
// 辅助工具，坐标系和控制器
export const Route = createFileRoute("/_mainLayout/assistantTools")({
  component: AxesHelper,
});

function RouteComponent() {
  return <div>Hello "/_mainLayout/axesHepler"!</div>;
}
