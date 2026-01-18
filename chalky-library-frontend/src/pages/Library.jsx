import { mockBooks } from "../data/mockBooks";
import BookGroup from "../components/BookGroup";

export default function Library() {
  return (
    <div className="p-4">
      <BookGroup title="A–B" books={mockBooks} />
    </div>
  );
}
