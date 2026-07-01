function Topbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-20 bg-white shadow-sm flex items-center justify-between px-8 z-40">

      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Overview of your supermarket
        </p>
      </div>

      <div className="flex items-center gap-5">

        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
          SQL Server Connected
        </span>

        <div className="w-11 h-11 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-700">
          F
        </div>

      </div>

    </header>
  );
}

export default Topbar;