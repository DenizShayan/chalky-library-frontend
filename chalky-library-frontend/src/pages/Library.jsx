import { mockBooks } from "../data/mockBooks";
import BookCard from "../components/BookCard";

export default function Library() {
    return (
        <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
                {mockBooks.map((b) => (
                    <BookCard key={b.id} book={b} />
                ))}
            </div>
        </div>
    );
}