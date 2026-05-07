# Syncfusion Angular Gantt Chart with Google Sheets

## Repository Description
This repository contains an Angular application that demonstrates loading task data from a public Google Sheets CSV file and rendering it in a Syncfusion Angular Gantt Chart with mapped task fields.

## Overview
This sample fetches CSV data from a Google Sheets document, parses it using the `papaparse` library, and binds the processed data to the `@syncfusion/ej2-angular-gantt` component. It showcases how spreadsheet data can be mapped to Gantt fields such as task ID, name, start date, duration, and progress.

## Features
- Load external data from Google Sheets (CSV format)
- Parse CSV data using PapaParse
- Bind data dynamically to Syncfusion Angular Gantt
- Map spreadsheet columns to Gantt task fields
- Display scheduling information including duration and progress

## Setup

### Prerequisites

- Node.js (LTS version recommended)
- Angular CLI

### Installation & Run

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

## Notes

- The sheet must be publicly accessible via CSV export.
- Update `mapSheetDataToGanttData()` if headers differ.
- Syncfusion Material theme styles are imported in `src/styles.css`.