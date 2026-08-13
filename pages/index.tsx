import Link from 'next/link'

export default function Home() {
  const sampleCode = `#include <stdio.h>

int main() {
  int x = 10;
  int *p = &x;
  *p = 20;
  printf("%d", x);
  return 0;
}`

  return (
    <main className="min-h-screen p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">MASTER PROGRAMMING — NOT JUST SYNTAX</h1>
        <p className="mb-6 text-lg">Understand every concept. Explore edge cases. Debug broken programs. Combine concepts. Discover multiple solutions.</p>
        <div className="flex gap-4 mb-8">
          <Link href="/editor"><a className="px-4 py-2 bg-cyan-500 text-black rounded">START LEARNING — IT'S FREE</a></Link>
          <a className="px-4 py-2 border border-gray-600 rounded">EXPLORE C PROGRAMMING</a>
        </div>

        <div className="bg-[#071018] p-4 rounded shadow">
          <pre className="text-sm"><code>{sampleCode}</code></pre>
        </div>

        <p className="mt-6 text-sm text-gray-300">Interactive pointer visualization demo coming soon on the editor page.</p>

      </section>
    </main>
  )
}
