
# Fullstack Taskiflow: Next.js 14, Server Actions, React, Prisma, Tailwind, MySQL

## Getting Started
![Captura de pantalla 2024-01-25 105028](https://github.com/lexand-dev/trello-power-clone/assets/105961651/328dd3c9-f74c-4096-8341-92ceca9f4d09)


Key Features:
- Auth 
- Organizations / Workspaces
- Board creation
- Unsplash API for random beautiful cover images
- Activity log for entire organization
- Board rename and delete
- List creation
- List rename, delete, drag & drop reorder and copy
- Card creation
- Card description, rename, delete, drag & drop reorder and copy
- Card activity log
- Landing page
- MySQL DB
- Prisma ORM
- shadcnUI & TailwindCSS

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/lexand-dev/trello-power-clone.git
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
```

### Setup Prisma

Add MySQL Database (I used [Aiven](https://aiven.io/))

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```
## Available commands

Running commands with npm `npm run [command]`


| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |