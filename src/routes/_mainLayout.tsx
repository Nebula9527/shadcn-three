import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
}
