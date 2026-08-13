import { useState } from 'react'

export default function EditorPage() {
  const [code, setCode] = useState(`#include <stdio.h>\n\nint main() {\n  printf("Hello, iCode!\n");\n  return 0;\n}`)
  const [output, setOutput] = useState('')

  async function runCode() {
    // This calls a stubbed API that returns canned output for now.
    try {
      const res = await fetch('/api/run', { method: 'POST', body: JSON.stringify({ code }) })
      const json = await res.json()
      setOutput(json.output)
    } catch (err) {
      setOutput('Error running code (stubbed).')
    }
  }

  function resetCode() {
    setCode(`#include <stdio.h>\n\nint main() {\n  printf("Hello, iCode!\n");\n  return 0;\n}`)
    setOutput('')
  }

  function clearOutput() {
    setOutput('')
  }

  return (
    <main className="min-h-screen p-8">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Editor (Monaco stub)</h2>
        <p className="mb-4 text-sm text-gray-300">This page demonstrates editor integration and Run / Reset / Clear controls. Monaco editor will be integrated here in Phase 1 spike.</p>

        <textarea className="w-full h-48 p-2 bg-[#071018] text-sm" value={code} onChange={(e) => setCode(e.target.value)} />

        <div className="flex gap-2 mt-3">
          <button onClick={runCode} className="px-3 py-1 bg-green-500 rounded">Run</button>
          <button onClick={resetCode} className="px-3 py-1 bg-yellow-500 rounded">Reset</button>
          <button onClick={clearOutput} className="px-3 py-1 bg-gray-600 rounded">Clear</button>
        </div>

        <div className="mt-4 bg-[#001219] p-3 rounded">
          <h3 className="text-sm font-medium">Output</h3>
          <pre className="text-sm mt-2">{output || '— no output —'}</pre>
        </div>
      </section>
    </main>
  )
}
