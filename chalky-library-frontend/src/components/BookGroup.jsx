import BookCard from './BookCard';

// Displays a group of books with a title
export default function BookGroup({ title, books }) {
    return (
        <section class="mb-6" >
            <h2 className="text-lg font-semibold mb-3">{title}</h2>

            <div className=" gap-4 overflow-x-auto">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </section>
    );
}