import Header from './components/Header';
import AsyncConcepts from './components/AsyncConcepts';
import AsyncFormDemo from './components/AsyncFormDemo';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Header />
      <main className="max-w-5xl mx-auto px-4">
        <AsyncConcepts />
        <AsyncFormDemo />
      </main>
    </div>
  );
}

export default App;