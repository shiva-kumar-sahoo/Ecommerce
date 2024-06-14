"use client";
import { Input } from "@/components/ui/input";

function SearchBox() {
  return (
    <div className="search-box p-4 hidden md:block">
      <Input
        type="text"
        id="search"
        placeholder="Search ...."
        className="w-[35vw] text-black dark:text-white "
      />
    </div>
  );
}

export default SearchBox;
