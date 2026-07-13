import { useState } from 'react';

export default function AsyncFormDemo() {
  const [status, setStatus] = useState('idle'); // 'idle', 'pending', 'fulfilled', 'rejected'
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Async function handling the submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Form Data extraction
    const formElement = e.target;
    const formData = new FormData(formElement);
    const formValues = Object.fromEntries(formData.entries());

    setStatus('pending');
    setError(null);
    setData(null);

    try {
      // 2. Promise & Await: Simulating an API call with a 2-second delay
      const simulatedResponse = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (formValues.username.toLowerCase() === 'error') {
            reject(new Error("Simulated network failure. Username cannot be 'error'."));
          } else {
            // 3. JSON: Simulating a JSON string response from a server
            resolve(JSON.stringify({
              message: "Data successfully processed!",
              receivedData: formValues,
              timestamp: new Date().toISOString()
            }));
          }
        }, 2000);
      });

      // 4. Parsing the JSON back into a JavaScript object
      const parsedData = JSON.parse(simulatedResponse);
      
      setData(parsedData);
      setStatus('fulfilled');
      formElement.reset(); // Clear the form on success
      
    } catch (err) {
      setError(err.message);
      setStatus('rejected');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-8">
      {/* Form Section */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Registration Form</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">Username (Type 'error' to test rejection)</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              required 
              className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">Role</label>
            <select 
              id="role" 
              name="role" 
              className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
            </select>
          </div>
          <button 
            type="submit" 
            disabled={status === 'pending'}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            {status === 'pending' ? 'Processing...' : 'Submit Async Request'}
          </button>
        </form>
      </div>

      {/* Response Display Section */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Promise State & JSON Output</h3>
        <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm h-full min-h-[250px]">
          <p className="text-slate-400 mb-2">// Current Status: {status.toUpperCase()}</p>
          
          {status === 'idle' && <p className="text-slate-500">Waiting for form submission...</p>}
          {status === 'pending' && <p className="text-yellow-400 animate-pulse">Awaiting Promise resolution...</p>}
          {status === 'rejected' && <p className="text-red-400">Error: {error}</p>}
          {status === 'fulfilled' && (
            <pre className="overflow-x-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}