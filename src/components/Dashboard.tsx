export function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 w-full h-[calc(100%-84px)] text-white">
      <div className="dashboardGridChildren">Balance Content</div>

      <div className="dashboardGridChildren">Statistics Content</div>

      <div className="dashboardGridChildren">Total Send Content</div>

      <div className="dashboardGridChildren">AI Monex Content</div>

      <div className="dashboardGridChildren col-span-2">Transactions Content</div>
    </div>
  );
}
