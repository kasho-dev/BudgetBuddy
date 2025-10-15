function dashboard() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-[#34373D] rounded-md p-4 h-24"></div>
        <div className="bg-[#34373D] rounded-md p-4 h-24"></div>
        <div className="bg-[#34373D] rounded-md p-4 h-24"></div>
      </div>
    </div>
  );
}

export default dashboard;
