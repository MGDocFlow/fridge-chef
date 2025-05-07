console.log('Script index.js loaded successfully');
import { renderUI } from './components/uiRenderer';
import fs from 'fs';
import path from 'path';
import { getConfig } from '../config/constants.js';

const CONFIG = getConfig();
const PORT = CONFIG.PORT;

if (!CONFIG || !PORT) {
  throw new Error('Configuration or PORT is not defined. Please check your environment settings.');
}

console.log(`Server running on port: ${PORT}`);

// Rimuovo l'uso di fileURLToPath e import.meta.url per evitare errori nell'ambiente di test
const __dirname = '.';

function logTestResults(testName, status, details) {
  const logPath = path.join(__dirname, '../test-results/test-log.json');
  const timestamp = new Date().toISOString();

  const logEntry = {
    testName,
    status,
    details,
    timestamp
  };

  let logs = [];
  if (fs.existsSync(logPath)) {
    logs = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
  }

  logs.push(logEntry);
  fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));
}

function main() {
  console.log('Main script execution started');
  renderUI();
  console.log('Main script execution completed');
}

function initializeApp(env) {
  const PORT = CONFIG[env].PORT;
  console.log(`Server running on port: ${PORT}`);
}

export default initializeApp;
export { logTestResults };
