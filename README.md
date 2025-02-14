# Ignite Node TS

A simple and efficient Node.js + TypeScript boilerplate generator.

## 🚀 Getting Started

Use `npx` to create a new Node.js + TypeScript project in seconds:

```sh
npx ignite-node-ts <app-name>
```

This will create a new folder named `<app-name>` with a fully configured **Node.js + TypeScript** setup.

## 📦 Features

- TypeScript support with separate **dev** and **prod** configurations
- Bundling & obfuscation for production
- Built-in **concurrently** setup for development
- Pre-configured **ESLint**
- Ready-to-use **debugging setup**

## 🛠 Project Structure

```
<app-name>/
├── src/
│   ├── index.ts
│   ├── utils/
│   └── ...
├── dist/   (compiled output)
├── tsconfig.app.json (PROD tsconfig)
├── tsconfig.node.json (DEV tsconfig)
├── package.json
└── README.md
```

## 📖 Usage

### Development Mode

Start the development server with **watch mode**:

```sh
npm run dev
```

### Production Build

Compile and bundle the code for production:

```sh
npm run build
```

Run the built code:

```sh
npm start
```

## 🛠 Customization

- Modify `tsconfig.app.json` and `tsconfig.node.json` as needed
- Update `package.json` scripts to fit your workflow
- Extend `src/index.ts` with your application logic

## 🔥 Contributing

Feel free to open issues and pull requests for improvements.
