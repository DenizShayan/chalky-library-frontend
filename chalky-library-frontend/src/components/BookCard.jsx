export default function BookCard({ book }) {
    return (
      <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
        <div className="mb-3 h-40 w-full rounded-lg bg-slate-200" />
        <p className="text-sm font-semibold leading-5 truncate">{book.title}</p>
        <p className="text-xs text-slate-500 truncate">{book.author}</p>
      </div>
    );
  }
  