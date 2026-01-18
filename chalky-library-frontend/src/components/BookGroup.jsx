import BookCard from "./BookCard";

// Displays a group of books with a title
export default function BookGroup({ title, books }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
