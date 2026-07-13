export default function AsyncConcepts() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Core Concepts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
        <div className="bg-slate-50 p-4 rounded border border-slate-100">
          <strong className="block text-lg mb-1 text-slate-800">Form Data</strong>
          The <code>FormData</code> interface provides a way to construct a set of key/value pairs representing form fields and their values, making it easy to capture user input without binding every input to state.
        </div>
        <div className="bg-slate-50 p-4 rounded border border-slate-100">
          <strong className="block text-lg mb-1 text-slate-800">Promises</strong>
          An object representing the eventual completion (or failure) of an asynchronous operation. A Promise is in one of three states: <em>pending</em>, <em>fulfilled</em>, or <em>rejected</em>.
        </div>
        <div className="bg-slate-50 p-4 rounded border border-slate-100">
          <strong className="block text-lg mb-1 text-slate-800">Async / Await</strong>
          Syntactic sugar on top of Promises. <code>async</code> makes a function return a Promise, and <code>await</code> makes a function pause execution and wait for a Promise to resolve before continuing.
        </div>
        <div className="bg-slate-50 p-4 rounded border border-slate-100">
          <strong className="block text-lg mb-1 text-slate-800">JSON</strong>
          JavaScript Object Notation. It is the standard text-based format for representing structured data, essential for transmitting data between a server and web application.
        </div>
      </div>
    </div>
  );
}