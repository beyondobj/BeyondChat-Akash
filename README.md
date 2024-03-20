
# BeyondChat-Akash - Enhanced Chatbot UI

BeyondChat-Akash is an advanced chatbot using the [Chatbot UI Lite](https://github.com/mckaywrigley/chatbot-ui-lite) base, leveraging Next.js, TypeScript, and Tailwind CSS technology for an immersive and intuitive user experience.

## Updates & Improvements

BeyondChat-Akash is constantly evolving and we're committed to offering new features and enhancements regularly. We value your input and suggestions to improve our user experience.

**Noteworthy updates:**

- Initial release of BeyondChat-Akash (04/04/2024)

## Local Launch Instructions

**1. Snag the Repo**

```bash
git clone https://github.com/beyondobj/BeyondChat-Akash.git
```

**2. Get all Dependencies**

```bash
npm install
```

**3. Set-Up API Endpoint**

Make a .env.local file in the repo's main directory.

```bash
DEFAULT_MODEL=mistral
DEFAULT_SYSTEM_PROMPT=You are a useful and friendly AI. Ensure to strictly follow the user's instructions. Avoid using emoticons or casual language. Offer accurate and useful information.
API_KEY=yourkey
API_HOST=yourollamaendpoint
```

> API_HOST acts as the endpoint for your compatible service such as an Ollama deployment. For how to add more models on the go, consult `/types/llms.ts`.

**4. Run the App**

```bash
npm start dev
```