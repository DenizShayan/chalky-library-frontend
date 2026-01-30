import { useMemo, useState } from "react";
import { mockBooks } from "../data/mockBooks";
import BookGroup from "../components/BookGroup";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";

export default function Library() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState("library"); // "library" | "group" | "search"
  const [activeGroup, setActiveGroup] = useState("A-B");

  //Simple ghrouping based on the first letter of the title (demo purpose)

  const groups = useMemo(() => {
    const getFirst = (s) => (s?.trim()?.[0] || "").toUpperCase();

    const ab = mockBooks.filter((b) => ["A","B"].includes(getFirst(b.title)));
    const cde =mockBooks.filter((b) =>
    ["C", "D", "E"].includes(getFirst(b.title))
    );

    return {"A-B":ab, "C-D-E":cde };
  }, []);

  const filteredBooks = useMemo(() => { 
  const q= query.trim().toLowerCase();
  if (!q) return [];
  return mockBooks.filter((b) => b.title.toLowerCase().includes(q));
}, [query]);

function handleBack() {
  setView("library");
  setActiveGroup("A-B");
  setQuery("");
}

function handleSeeMore(groupKey) {
  setActiveGroup(groupKey);
  setView("group");
}

function handleSearchChange(val) {
  setQuery(val);
  if (val.trim().length > 0) setView("search");
  else setView("library");
}

return (
  <div>
    <SearchBar value={query} onChange={handleSearchChange} />

    {(view === "group" || view === "search") && (
      <BackButton onClick={handleBack} />
    )}

    {view === "library" && (
      <>
        <BookGroup
          title="A–B"
          books={(groups["A-B"] || []).slice(0, 4)}
          onSeeMore={() => handleSeeMore("A-B")}
        />
        <BookGroup
          title="C–D–E"
          books={(groups["C-D-E"] || []).slice(0, 4)}
          onSeeMore={() => handleSeeMore("C-D-E")}
        />
      </>
    )}

    {view === "group" && (
      <BookGroup title={activeGroup} books={groups[activeGroup] || []} />
    )}

    {view === "search" &&
      (filteredBooks.length === 0 ? (
        <p className="text-sm text-slate-500">No results found.</p>
      ) : (
        <BookGroup title="Search results" books={filteredBooks} />
      ))}
  </div>
);
}