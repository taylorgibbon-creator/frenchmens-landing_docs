# Frenchmen's Landing Document Hub

This is a publish-ready React website for the Frenchmen's Landing document/resource hub.

## What's included

- Searchable document cards
- Category filter
- Links to documents, forms, portals, meetings, and email contacts
- Mobile-friendly design
- Vite React setup for Vercel or Netlify

## Run on your computer

1. Install Node.js from https://nodejs.org
2. Open this project folder in Terminal or Command Prompt.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local address shown in the terminal, usually:

```text
http://localhost:5173
```

## Publish on Vercel

1. Create a GitHub account if you do not already have one.
2. Create a new GitHub repository.
3. Upload all files from this folder to that repository.
4. Go to https://vercel.com and create an account.
5. Select "Add New Project".
6. Import the GitHub repository.
7. Use these settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

8. Click Deploy.

## Publish on Netlify

1. Create a Netlify account at https://netlify.com.
2. Choose "Add new site".
3. Connect the GitHub repository.
4. Use these settings:

```text
Build command: npm run build
Publish directory: dist
```

5. Click Deploy.

## Important Google Drive note

For residents to open the Google Drive and Google Docs links, each linked file needs sharing permissions that allow access, such as:

```text
Anyone with the link can view
```

If a file is private, the website will still open the link, but visitors may see an access denied message.

## Editing links

To add, remove, or change document links, open:

```text
src/App.jsx
```

Then edit the `documents` list near the top of the file.
