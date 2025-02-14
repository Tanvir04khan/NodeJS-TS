#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Get the app name from arguments
const appName = process.argv[2];
if (!appName) {
  console.error("❌ Please provide an app name: npx ignite-node-ts <app-name>");
  process.exit(1);
}

// Define paths
const targetDir = path.join(process.cwd(), appName);
const templateDir = path.join(__dirname, "../template");

// Check if directory exists
if (fs.existsSync(targetDir)) {
  console.error("❌ A folder with this name already exists.");
  process.exit(1);
}

// Copy template files
fs.mkdirSync(targetDir);
fs.cpSync(templateDir, targetDir, { recursive: true });

// Update package.json with the new app name
const packageJsonPath = path.join(targetDir, "package.json");
const packageJson = require(packageJsonPath);
packageJson.name = appName;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Install dependencies
console.log("📦 Installing dependencies...");
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

console.log(`✅ Project ${appName} created successfully!`);
console.log("");
console.log("🧑‍💻 Start Coding...");
console.log("");
console.log(`➡️ cd ${appName} && npm run dev`);
