# Fridge Chef

## Panoramica del Progetto
Fridge Chef è un'applicazione progettata per generare ricette basate sugli ingredienti forniti dagli utenti. Utilizza un'architettura modulare per garantire una chiara separazione delle responsabilità e una facile manutenibilità.

### Funzionalità Principali
- **Input degli Ingredienti**: Gli utenti possono inserire gli ingredienti disponibili. L'input è validato per garantire che sia una lista corretta.
- **Generazione delle Ricette**: Un sistema AI genera ricette basate sugli ingredienti forniti.
- **Visualizzazione delle Ricette**: Le ricette generate vengono mostrate con istruzioni e ingredienti richiesti.

## Struttura dell'Applicazione
L'applicazione è organizzata in modo modulare:

- **`src/`**: Contiene il codice sorgente dell'applicazione.
  - **`index.js`**: Punto di ingresso principale.
  - **`components/`**: Contiene componenti modulari come `ingredientInput.js`, `recipeDisplay.js` e `uiRenderer.js`.
  - **`recipeGenerator.js`**: Logica per generare ricette.
- **`public/`**: Risorse statiche come immagini e file HTML.
  - **`index.html`**: Pagina principale dell'applicazione.
  - **`assets/`**: Risorse aggiuntive come immagini e icone.
- **`config/`**: File di configurazione, inclusi `constants.js` e `playwright.config.js`.
- **`tests/`**: Contiene i test unitari, di integrazione ed end-to-end.
- **`test-results/`**: Risultati dettagliati dei test.

## Architettura dei Test

### Tipologie di Test
- **Unit Test**: Testano singole unità di codice, come funzioni o componenti, utilizzando **Vitest**.
- **End-to-End (E2E) Test**: Verificano il comportamento complessivo dell'applicazione con **Playwright**.
- **Integration Test**: Testano l'interazione tra più moduli o componenti.

### Struttura delle Cartelle dei Test
```
tests/
  unit/
    vitest/
      domUtils.test.js
      index.test.js
      ingredientInput.test.js
  e2e/
    playwright/
      staticFiles.e2e.test.js
      ui.e2e.test.js
  integration/
    vitest/
      api.test.js
      database.test.js
```

### Esecuzione dei Test
- **Unit Test**:
  ```bash
  npm run test:unit
  ```
- **End-to-End Test**:
  ```bash
  npm run test:e2e
  ```
- **Integration Test**:
  ```bash
  npm run test:integration
  ```

## Workflow di Sviluppo

1. **Setup dell'Ambiente**:
   - Avviare il server di sviluppo con `npm start`.
   - Assicurarsi che l'applicazione sia accessibile su `http://localhost:<PORT>`.

2. **Scrittura del Codice**:
   - Implementare nuove funzionalità nei file appropriati in `src/`.
   - Aggiungere nuovi componenti nella directory `src/components/`.

3. **Scrittura dei Test**:
   - Scrivere test unitari per ogni nuova funzionalità in `tests/unit/vitest/`.
   - Scrivere test end-to-end in `tests/e2e/playwright/`.

4. **Esecuzione dei Test**:
   - Eseguire i test unitari con `npm test`.
   - Eseguire i test end-to-end con `npm run test:e2e`.

5. **Debugging**:
   - Analizzare i risultati dei test in `test-results/`.
   - Utilizzare i file di traccia per identificare i problemi.

6. **Deployment**:
   - Preparare l'applicazione per la produzione assicurandosi che tutti i test passino.
   - Distribuire i file statici dalla directory `public/`.

## Debugging dei Test

- **Errori di Connessione**: Verifica che il server HTTP sia in esecuzione su `http://localhost:8081`.
- **Errori 404**: Assicurati che i file richiesti siano presenti nella directory corretta.
- **Conflitti di Porta**: Libera la porta o modifica la configurazione nel file `playwright.config.js`.

## Manutenzione della Documentazione

È fondamentale mantenere questo file aggiornato ogni volta che vengono apportate modifiche significative all'architettura o al workflow del progetto. Questo garantisce una visione chiara e aggiornata per tutti i membri del team.
