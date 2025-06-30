import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;



    console.log('Received contact form data:', { name, email, subject, message });

    return res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
