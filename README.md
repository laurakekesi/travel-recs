# Travel Reccos

A travel recommendations app for discovering and sharing places to eat, drink, and visit by city. The public site is a React frontend backed by [Sanity](https://www.sanity.io/); content is managed in a Sanity Studio with a moderation workflow for user-submitted recommendations.

## Features

- Browse cities and search by name
- View approved recommendations per city (restaurants, cafes, bars, bakeries, activities)
- Submit new cities and recommendations from the app (stored as pending until approved)
- Moderate submissions in Sanity Studio (pending queue, approve/reject)
- Recommendation detail pages with category-specific fields (cuisine, meal types, price level, etc.)

## Project structure

```
travel-recs/
├── client/          # React app (Create React App)
└── studio/          # Sanity Content Studio
```

| Package | Purpose |
|---------|---------|
| `client/` | Public-facing web app at [http://localhost:3000](http://localhost:3000) |
| `studio/` | CMS for cities, recommendations, and users |

Both apps use Sanity project `26828cl1` and dataset `production`.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- A [Sanity](https://www.sanity.io/) account with access to this project
- For local writes from the client (add city / add recommendation): a Sanity API token with create permissions

## Setup

### 1. Install dependencies

```bash
cd client && npm install
cd ../studio && npm install
```

### 2. Configure the client (optional, for submissions)

Reads and public content work without a token. To create cities or recommendations from the app, add a token in the client directory:

```bash
# client/.env
REACT_APP_SANITY_TOKEN=your_sanity_api_token
```

Create a token in [Sanity Manage](https://www.sanity.io/manage) → your project → **API** → **Tokens**. Use a token with **Editor** (or sufficient write) permissions, and keep it out of version control.

Restart the React dev server after changing `.env`.

### 3. Log in to Sanity Studio

From `studio/`, run the dev server (see below) and sign in with your Sanity account when prompted.

## Development

Run the frontend and studio in separate terminals.

**React app**

```bash
cd client
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

**Sanity Studio**

```bash
cd studio
npm run dev
```

Follow the CLI URL (typically [http://localhost:3333](http://localhost:3333)).

### Useful scripts

| Location | Command | Description |
|----------|---------|-------------|
| `client/` | `npm start` | Dev server |
| `client/` | `npm run build` | Production build |
| `client/` | `npm test` | Run tests |
| `studio/` | `npm run dev` | Studio dev server |
| `studio/` | `npm run build` | Build studio |
| `studio/` | `npm run deploy` | Deploy hosted studio |

## Content model

- **City** — name, slug, description, country, image, optional `bestOfIntro` for the city page
- **Recommendation** — place details, category, price level, tags, city reference, image, status (`pending` / `approved` / `rejected`), votes, optional submitter
- **Best Of Entry** — curated highlight linking a city + recommendation, with headline, blurb, and sort order
- **User** — name, email, saved recommendations

### Seed city data

From `studio/`, with a write-capable API token:

```bash
SANITY_API_TOKEN=your_token npm run seed:montreal   # Montreal only
SANITY_API_TOKEN=your_token npm run seed:europe     # Amsterdam, Barcelona, Copenhagen, Cork, Dublin, Galway, London, Paris, Rome
SANITY_API_TOKEN=your_token npm run seed:all        # Everything
```

Scripts upsert by slug (safe to re-run). City data lives in `studio/data/`.

New recommendations from the app are created with `status: "pending"`. Only `approved` items appear on city pages. Use **Pending Recommendations** in the studio sidebar to review them.

## App routes

| Path | Page |
|------|------|
| `/` | City search and list |
| `/city/:slug` | City detail and recommendations |
| `/recommendation/:slug` | Single recommendation |

## Tech stack

- **Frontend:** React 19, React Router, `@sanity/client`, Create React App
- **CMS:** Sanity v4, Structure Tool, Vision (GROQ playground)

## License

Private / unlicensed (see `studio/package.json`). Adjust as needed for your use.
