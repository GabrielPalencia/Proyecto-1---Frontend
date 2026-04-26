const Loader = () => (
  <div className="flex flex-col items-center justify-center py-20" role="status">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
    <p className="mt-4 text-gray-400 animate-pulse">Cargando lanzamientos...</p>
  </div>
);
export default Loader;