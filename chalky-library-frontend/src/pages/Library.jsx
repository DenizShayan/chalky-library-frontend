import { useState } from "react";
import { mockBooks } from "../data/mockBooks";
import BookGroup from "../components/BookGroup";
import SearchBar from "../components/SearchBar";

export default function Library() {
  const [query, setQuery] = useState("");

  const filteredBooks = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar value={query} onChange={setQuery} />
      <BookGroup title="Results" books={filteredBooks} />
    </div>
  );
}
