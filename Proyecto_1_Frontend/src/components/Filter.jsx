export default function FilterSelect({ filter, setFilter }) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
      aria-label="Filtrar por estado del lanzamiento"
    >
      <option value="all">Todos los lanzamientos</option>
      <option value="success">Exitosos</option>
      <option value="failed">Fallidos</option>
    </select>
  );
}