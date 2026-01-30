export default function BackButton({ onClick }) {
    return (
        <button 
            type="button"
            onClick= {onClick}
            className="mb-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800 transition"
        >
            ← Back
        </button>
    );
}