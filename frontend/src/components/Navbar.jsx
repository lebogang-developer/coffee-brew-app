import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/">
          <h1 className="text-xl font-bold text-slate-900">☕ Brew Log</h1>
        </Link>

        <Link
          to="/create"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          + Add Brew
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
