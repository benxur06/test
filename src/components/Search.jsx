import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  //preventDefault()
  let searchedText = search.slice(3);
  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.search.value;
    navigate(`/search?q=${value}`);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSearch}
      className="flex items-center my-8"
    >
      <input
        type="text"
        defaultValue={searchedText}
        className="w-3/4 border-2 h-[40px] px-2"
        placeholder="search"
        name="search"
      />

      <button className="w-1/4 bg-green-500 text-white h-[40px]">search</button>
    </form>
  );
};

export default Search;
