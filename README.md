# fridge-chef

## Recipe Generation

The recipe maker generates recipes based on the ingredients provided by the user. It uses an AI tool to decide which recipes are most appropriate given the user's ingredients.

## Ingredient Input

Users can input the ingredients they have available. The input is validated to ensure it is a list of ingredients.

## How to Use

1. Input the ingredients you have available.
2. The AI tool will generate a list of recipes based on the provided ingredients.
3. The generated recipe will be displayed with a list of instructions and required ingredients.

## Features

- Recipe Generation: Generates recipes based on user-provided ingredients.
- Recipe Display: Displays the generated recipe with a list of instructions and required ingredients.
- Ingredient Input: Allows users to input ingredients they have available.

## Color Scheme

The UI has a green color scheme.

## Layout

The layout is clean and organized to make it easy to read the recipes.

## Typography

Clean and readable sans-serif fonts are used for easy reading of recipes.

## Iconography

Simple, outline-style icons are used for ingredients and actions.

## Aggiornamenti Recenti

- La directory `dist/` è stata rimossa per semplificare la struttura del progetto.
- I risultati dei test sono ora consolidati nella directory `test-results/`.
- La directory `html/` è stata eliminata poiché era vuota e non necessaria.

## Test End-to-End

I test end-to-end utilizzano Playwright per verificare il comportamento dell'applicazione. Per eseguire i test:

```bash
npx playwright test
```

Se si desidera eseguire un test specifico:

```bash
npx playwright test e2e-tests/<nome-del-test>.test.js
```

### Debugging dei Test

- **Errori di Connessione**: Verifica che il server HTTP sia in esecuzione su `http://localhost:8081`.
- **Errori 404**: Assicurati che i file richiesti siano presenti nella directory corretta.
- **Conflitti di Porta**: Libera la porta o modifica la configurazione nel file `playwright.config.js`.
