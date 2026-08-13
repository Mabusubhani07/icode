// Stubbed API route for running code. Returns canned output for now.
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  try {
    // Parse request body and ignore for now
    // In the future, validate and send job to execution service
    const canned = '20' // sample output for the pointer example
    return res.status(200).json({ output: canned })
  } catch (err) {
    return res.status(500).json({ output: 'Internal error (stub).' })
  }
}
