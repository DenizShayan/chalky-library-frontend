import BookCard from "./BookCard";

export default function BookGroup({ title, books, onSeeMore }) {
  return (
    <section className="mt-6">
      <div className= "mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>

        {onSeeMore && (
          <button
            type="button"
            onClick={onSeeMore}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            See more books →
          </button>
        )}
      </div>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      ">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
