import "./SearchFilters.css";

function SearchFilters({
  filters,
  handleChange,
  handleSearch,
}) {
  return (
    <div className="search-filters">

      <select
        name="bloodGroup"
        value={filters.bloodGroup}
        onChange={handleChange}
      >
        <option value="">Blood Group</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>

      <input
        type="text"
        name="city"
        placeholder="City"
        value={filters.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="state"
        placeholder="State"
        value={filters.state}
        onChange={handleChange}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchFilters;