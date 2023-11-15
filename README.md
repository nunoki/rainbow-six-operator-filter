# Rainbow Six operator filter

This is a small tool aimed at players of the game [Tom Clancy's Rainbow Six Siege](https://www.ubisoft.com/en-us/game/rainbow-six/siege), developed by Ubisoft. It allows players to filter out operators by their equipment or characteristics.

Examples when you might want to use this:

- you can't remember which operators have grenades
- you want to check if there is an operator who has both a hard breach charge and a shotgun
- you want to find defenders with a big scope
- you're only interested in playing 3-speeds

The only caveat is that while the scope filter shows the operators that have it, it doesn't show on which gun it is. Possibly something to implement in the future.

The app is developed in Svelte Kit. It contains no backend, with all relevant data contained in the client code. Ideally the configuration file (`operators.ts`) should keep up-to-date with the changes in the game, as each season introduces changes to the operators' equipment.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
