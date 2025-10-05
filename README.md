# AI Document Analysis Website

This is a full-stack web app for document analysis using AI (OpenAI). Users can sign up, log in, upload documents (TXT, PDF, DOCX), and get instant analysis results (summaries, key points, sentiment, etc.).

## Features
- User authentication (signup/login)
- Secure document upload
- AI-powered analysis via OpenAI API
- React frontend, Node/Express backend
- MongoDB for user/accounts

## Structure
- `/client`: React frontend UI
- `/server`: Node.js/Express backend API

## Quick Start (Codespaces/Local)
1. Clone the repo: `git clone https://github.com/Praneeth7997/ai.git`
2. Open in Codespaces or VS Code
3. Update environment variables in `/server/.env.example`
4. Start backend:
   ```bash
   cd server
   npm install
   node index.js
   ```
5. Start frontend:
   ```bash
   cd client
   npm install
   npm start
   ```

## Deployment
- Backend: Render, Railway, Heroku
- Frontend: Vercel, Netlify

## Environment Variables
Copy `/server/.env.example` to `/server/.env` and fill in your credentials.

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

## Contributing
Open issues or PRs to suggest features or report bugs.
