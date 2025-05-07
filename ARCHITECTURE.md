# Architettura della Soluzione

## Struttura dell'Applicazione
L'applicazione è organizzata in modo modulare per garantire una chiara separazione delle responsabilità e una facile manutenibilità. La struttura principale è la seguente:

### Cartelle Principali
- **`src/`**: Contiene il codice sorgente dell'applicazione.
  - **`index.js`**: Punto di ingresso principale dell'applicazione.
  - **`components/`**: Contiene i componenti modulari come `ingredientInput.js`, `recipeDisplay.js` e `uiRenderer.js`.
  - **`recipeGenerator.js`**: Logica per generare ricette basate sugli input forniti.
- **`public/`**: Contiene risorse statiche come immagini e file HTML, inclusi `app.html` e altri file statici.
  - **`index.html`**: Pagina principale dell'applicazione.
  - **`assets/`**: Risorse aggiuntive come immagini e icone.
- **`config/`**: Contiene file di configurazione.
  - **`playwright.config.js`**: Configurazione per i test end-to-end con Playwright.
- **`e2e-tests/`**: Contiene i test end-to-end per l'applicazione.
  - **`ui.test.js`**: Test per verificare il caricamento dell'interfaccia utente e la generazione delle ricette.
- **`test-results/`**: Contiene i risultati dettagliati dei test, inclusi i file di contesto degli errori e i file di traccia.
- **`dist/`**: [RIMOSSA] Questa directory non è più presente poiché i file generati automaticamente non sono necessari.
- **`results/`**: [RIMOSSA] I risultati dei test sono ora consolidati in `test-results/`.

## Architettura dei Test
L'approccio ai test è suddiviso in due categorie principali:

### Test Unitari

I test unitari devono essere progettati per essere molto rapidi, in modo da poter essere eseguiti frequentemente durante lo sviluppo. Devono concentrarsi su singole unità di codice, come funzioni o componenti, e non dipendere da risorse esterne o configurazioni complesse.

- I test unitari si trovano nella directory `src/tests/`.
- Utilizzano **Vitest** come framework di test.
- Ogni file di test corrisponde a un modulo specifico, ad esempio:
  - `index.test.js` testa il file `index.js`.
  - `ingredientInput.test.js` testa il componente `ingredientInput.js`.
  - `recipeDisplay.test.js` testa il componente `recipeDisplay.js`.

### Test End-to-End
- I test end-to-end si trovano nella directory `e2e-tests/`.
- Utilizzano **Playwright** per simulare interazioni utente e verificare il comportamento dell'applicazione.
- Esempi di test:
  - `ui.test.js` verifica il caricamento dell'interfaccia utente e la generazione delle ricette.

### Test End-to-End con Playwright

I test end-to-end si trovano nella directory `e2e-tests/` e utilizzano Playwright per simulare interazioni utente e verificare il comportamento dell'applicazione.

#### Configurazione di Playwright
- **`testDir`**: Directory dei test (`e2e-tests`).
- **`baseURL`**: `http://localhost:8081`.
- **`headless`**: I test vengono eseguiti in modalità headless per velocità.
- **`trace`**: Tracce abilitate per il debugging.

#### Esecuzione dei Test

Per eseguire tutti i test:

```bash
npx playwright test
```

Per eseguire un test specifico:

```bash
npx playwright test e2e-tests/<nome-del-test>.test.js
```

#### Debugging

- **Errori di Connessione**: Assicurati che il server sia in esecuzione.
- **Errori 404**: Verifica i percorsi dei file.
- **Conflitti di Porta**: Modifica la porta nel file di configurazione.

## Struttura dei Test

La struttura dei test è organizzata per tipologia e runner, seguendo le seguenti linee guida:

### Tipologie di Test
- **Unit Test**: Testano singole unità di codice, come funzioni o componenti.
- **End-to-End (E2E) Test**: Verificano il comportamento complessivo dell'applicazione simulando interazioni utente.
- **Integration Test**: Testano l'interazione tra più moduli o componenti.

### Runner di Test
- **Vitest**: Utilizzato per unit test e test di integrazione.
- **Playwright**: Utilizzato per test end-to-end.

### Struttura delle Cartelle

```
tests/
  unit/
    vitest/
      index.test.js
      ingredientInput.test.js
      recipeDisplay.test.js
      recipeGenerator.test.js
  e2e/
    playwright/
      staticFiles.e2e.test.js
      ui.e2e.test.js
  integration/
    vitest/
      api.test.js
      database.test.js
  helpers/
    mockData.js
    testUtils.js
src/
  ...existing code...
config/
  constants.js
  playwright.config.js
  vitest.config.js
```

Questa struttura garantisce chiarezza, modularità e scalabilità, facilitando l'aggiunta di nuovi test e il supporto per nuovi runner.

## Approccio allo Sviluppo
L'approccio allo sviluppo segue i principi di modularità, testabilità e iterazione continua:

1. **Modularità**:
   - Ogni funzionalità è implementata come un modulo separato.
   - I componenti sono riutilizzabili e indipendenti.

2. **Test-Driven Development (TDD)**:
   - Scrivere i test prima di implementare la funzionalità.
   - Garantire che ogni modulo sia completamente testato.

3. **Iterazione Continua**:
   - Implementare funzionalità in piccoli incrementi.
   - Eseguire i test frequentemente per identificare e correggere i problemi rapidamente.

## Workflow di Sviluppo

1. **Setup dell'Ambiente**:
   - Avviare il server di sviluppo con `npm start` o `npm run start:app`.
   - Assicurarsi che l'applicazione sia accessibile su `http://localhost:${PORT}`.

2. **Scrittura del Codice**:
   - Implementare nuove funzionalità nei file appropriati all'interno di `src/`.
   - Aggiungere nuovi componenti nella directory `src/components/`.

3. **Scrittura dei Test**:
   - Scrivere test unitari per ogni nuova funzionalità in `src/tests/`.
   - Scrivere test end-to-end per verificare il comportamento complessivo in `e2e-tests/`.

4. **Esecuzione dei Test**:
   - Eseguire i test unitari con `npm test`.
   - Eseguire i test end-to-end con `npm run test:e2e`.

5. **Debugging**:
   - Analizzare i risultati dei test in `results/` e `test-results/`.
   - Utilizzare i file di traccia e di contesto degli errori per identificare i problemi.

6. **Deployment**:
   - Preparare l'applicazione per la produzione assicurandosi che tutti i test passino.
   - Distribuire i file statici dalla directory `public/`.

## Utilizzo dell'Ambiente di Sviluppo

### Configurazione del Server HTTP
Per servire correttamente i file statici, il server HTTP deve essere avviato dalla directory `public/`. Utilizzare il comando:

```bash
npm start
```

Questo comando avvia un server HTTP sulla porta `${PORT}`. Assicurarsi che la porta non sia giù in uso. In caso contrario, terminare il processo che utilizza la porta con:

```bash
lsof -i :${PORT}
kill -9 <PID>
```

### Esecuzione dei Test

#### Test End-to-End
I test end-to-end utilizzano Playwright per verificare il comportamento dell'applicazione. Per eseguire i test:

```bash
npx playwright test
```

Se si desidera eseguire un test specifico, ad esempio per verificare la raggiungibilità dei file statici:

```bash
npx playwright test e2e-tests/static-files.test.js
```

#### Test Unitari
I test unitari utilizzano Vitest. Per eseguirli:

```bash
npm test
```

### Debugging

#### Errori di Connessione
Se i test end-to-end falliscono con errori `ERR_CONNECTION_REFUSED`, verificare che il server HTTP sia in esecuzione e che stia servendo i file dalla directory corretta (`public/`).

#### Errori 404
Se i test restituiscono errori `404 Not Found`, assicurarsi che i file richiesti siano presenti nella directory `public/` e che il percorso sia corretto.

#### Conflitti di Porta
Se la porta `${PORT}` è occupata, utilizzare i comandi sopra indicati per liberarla o modificare la porta nel file `package.json` alla voce `start`.

## Manutenzione della Documentazione

È fondamentale mantenere il file `ARCHITECTURE.md` aggiornato ogni volta che vengono apportate modifiche significative all'architettura del progetto. Questo include:

- Aggiunta o rimozione di directory o file principali.
- Modifiche alla struttura dei test o ai framework utilizzati.
- Cambiamenti nei workflow di sviluppo o nelle configurazioni principali.

Mantenere la documentazione allineata garantisce che tutti i membri del team abbiano una visione chiara e aggiornata del progetto, migliorando la collaborazione e riducendo il rischio di errori dovuti a informazioni obsolete.

Seguendo questa architettura e workflow, l'applicazione rimane manutenibile, testabile e pronta per l'espansione futura.