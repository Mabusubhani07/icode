# Architecture — iCode (Phase 1 scaffold)

This document summarizes the high-level architecture and recommended tech choices for the iCode MVP.

Goals
- Fast development for a polished frontend experience (landing page, dashboard, concept pages)
- Safe prototype for C code editing and future execution
- Clear separation so execution engine can be replaced with WASM or server containers later

Frontend
- Framework: Next.js (React) with TypeScript — SSR for landing page SEO and fast developer DX
- Styling: TailwindCSS for rapid, dark-theme styling
- Editor: Monaco Editor for a desktop-like code editing experience
- Structure: Pages for Landing, Editor, Course/Module/Concept pages

Backend
- API: Next.js API routes (initial prototyping) or a standalone Node.js/TypeScript service for scaling
- DB: PostgreSQL for relational content (courses, modules, users, attempts)
- Cache/Queue: Redis for sessions and job queue when we move to containerized execution

Code Execution (two main approaches)

Option A — Client-side WebAssembly (WASM)
Pros:
- No server execution risk for C code
- Lower server cost
- Fast feedback when feasible
Cons:
- Some libraries and system calls are limited
- Harder to measure real execution time/memory as on a server
- Browser resource constraints

Option B — Server-side containerized execution
Pros:
- Full-featured C execution (gcc/clang), precise control over time and memory, easier to run testcases
- Easier to implement features like file I/O, resource reporting
Cons:
- Requires strict sandboxing (gVisor, Firecracker) and rate limiting
- Higher operational cost and security complexity

Recommendation for MVP
- Start with a safe prototype using a stubbed-run experience (editor UI + fake run) while building the content model and UI.
- Run a Spike to evaluate WASM vs containers and then implement the chosen approach in Phase 2. See issues/spike-execution-approach.

Security notes
- Never run untrusted code on the main host. Use strong isolation (containers, VMs, WASM sandbox).
- Limit run time, memory, and output size. Record resource usage and enforce limits.
- Sanitize all inputs and avoid exposing secrets to execution environments.

CI/CD
- GitHub Actions for lint/build/test
- Deploy frontend to Vercel (Next.js optimized) and backend to a managed container platform for execution when needed


