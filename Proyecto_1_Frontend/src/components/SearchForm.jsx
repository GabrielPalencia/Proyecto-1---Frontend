const SearchForm = ({ searchTerm, setSearchTerm }) => (
  <div className="mb-8">
    <input
      type="text"
      placeholder="Buscar lanzamiento (ej: Starlink)..."
      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      aria-label="Buscar lanzamientos"
    />
  </div>
);
export default SearchForm;