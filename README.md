# Syncfusion Angular Gantt Chart with Google Sheets

A sample Angular app that loads task data from a public Google Sheet CSV and renders it in a Syncfusion Angular Gantt chart.

## Overview

This app fetches CSV from Google Sheets, parses it with `papaparse`, and displays tasks using `@syncfusion/ej2-angular-gantt`. It maps sheet columns to task fields and supports start date, duration, and progress.

## Setup

Requirements: Node.js 18+ and Angular CLI.

Install and run:

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Google Sheets

The sheet ID is set in `src/app/app.component.ts`:

```ts
private SHEET_ID = '1RvJOMnnV0YNcVHqdTF7ux17bIobec18aJ17Nbiiup1U';
```

Required headers:

- `Task ID`
- `Task Name`
- `Start Date`
- `Duration`
- `Progress`

Header mapping:

- `TaskID` from `Task ID`
- `TaskName` from `Task Name`
- `StartDate` from `Start Date`
- `Duration` from `Duration`
- `Progress` from `Progress`

## Notes

- The sheet must be publicly accessible via CSV export.
- Update `mapSheetDataToGanttData()` if headers differ.
- Syncfusion Material theme styles are imported in `src/styles.css`.

## Scripts and dependencies

Use `npm start`, `npm build`, or `npm test`.

Key dependencies:

- `@angular/core`
- `@syncfusion/ej2-angular-gantt`
- `papaparse`
- `@syncfusion/ej2-material-theme`
