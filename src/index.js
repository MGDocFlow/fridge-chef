console.log('Script index.js loaded successfully');
import { renderUI } from './components/uiRenderer';

function main() {
  console.log('Main script execution started');
  renderUI();
  console.log('Main script execution completed');
}

export default main;
