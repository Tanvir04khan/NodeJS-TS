#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { getUserInput } = require("./utils");

(async () => {
  // Get the app name from arguments
  const appName = process.argv[2];

  const suggestedAppName = path.basename(process.cwd());

  if (!appName) {
    appName = await getUserInput(
      `❓ Please enter your app name (Default: ${suggestedAppName}): `
    );

    if (!appName) {
      appName = suggestedAppName;
    }
  }

  // Define paths
  const targetDir = path.join(process.cwd(), appName);
  const templateDir = path.join(__dirname, "../template");

  // Check if directory exists
  if (fs.existsSync(targetDir)) {
    console.error(`❌ A folder with name '${appName}' already exists.`);
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

  console.log(`✅ Project '${appName}' created successfully!`);

  // Install dependencies
  console.log("📦 Installing dependencies...");

  execSync("npm install", { cwd: targetDir, stdio: "inherit" });

  console.log("\n");
  console.log("🧑‍💻 Start Coding...");
  console.log("\n");
  console.log(`➡️ cd ${appName} && npm run dev`);
})();
