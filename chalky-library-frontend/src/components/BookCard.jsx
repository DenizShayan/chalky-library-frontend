export default function BookCard({ book }) {
    return (
        <div className="w-32">
            <imp
                src={book.cover_image_url}
                alt={book.title}
                className="h-40 w-full object-cover rounded-md mb-2"
            />
            <p className="text-sm font-medium truncate">{book.title}</p>
            <p className="text-xs text-slate-500 truncate">{book.author}</p>
        </div>
    );
}