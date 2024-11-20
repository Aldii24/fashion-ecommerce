import { LuSearch } from "react-icons/lu";

const SearchForm = () => {
  return (
    <form
      action="/search"
      className="flex flex-1 items-center gap-2 px-3 shadow-md py-2 border-[1px] border-gray-300 rounded-md"
    >
      <LuSearch size={20} className="text-gray-300" />
      <input
        type="text"
        name="query"
        placeholder="Apa yang kamu cari?"
        className="w-full outline-none bg-transparent placeholder:text-sm text-sm"
      />
    </form>
  );
};

export default SearchForm;
