export default function SearchBar({ value, onChange}) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            placeholder="Search books..."
            className="w-full mb-4 p-2 border rounded"
        />
    );
}