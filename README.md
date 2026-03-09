# Minimal Chef AI

Minimal Chef AI is a React-based web application that allows users to generate recipes using AI. By providing a list of ingredients, the app integrates with the Google GenAI API to suggest recipes in markdown format. This project demonstrates the use of React props, state management, and API integration.

https://github.com/user-attachments/assets/e3f7b9d0-3602-4a49-bf87-2aae2c9a0d03

## Features
- Add ingredients to a list dynamically.
- Generate recipes using AI based on the provided ingredients.
- Display recipes in a user-friendly markdown format.

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/minimal-chef-ai.git
   ```
2. Navigate to the project directory:
   ```bash
   cd minimal-chef-ai
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your Google GenAI API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the app in your browser at `http://localhost:5173`.

## Dependencies
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **@google/genai**: Google GenAI SDK for AI content generation.
- **react-markdown**: A React component for rendering Markdown.

## Project Structure
```
minimal-chef-ai/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   ├── assets/            # Project assets
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── ai.js              # AI integration logic
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.
