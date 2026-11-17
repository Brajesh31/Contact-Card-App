# 🚀 Getting started

## Requirements
Install a Node.js version compatible with the dependencies in `package-lock.json`, together with npm.

## Clone and install
```bash
git clone https://github.com/Brajesh31/Contact-Card-App.git
cd Contact-Card-App
npm ci
```

Use `npm install` instead of `npm ci` only when intentionally changing dependencies or when the lockfile needs to be regenerated.

## Start the development server
```bash
npm start
```
Open http://localhost:3000.

## Build
```bash
npm run build
```
The production output is written to `build/`.

## Tests
```bash
npm test -- --watchAll=false
```
The repository currently has no application test files in the documented source inventory. Add tests before treating this command as meaningful project coverage.
