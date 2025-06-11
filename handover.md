# Handover Document for Embassy of the Free Mind Project

## Introduction
This project is a SvelteKit-based web application that provides a digital catalog of books and prints related to wisdom, symbolism, and free thinking. The application allows users to browse, search, and filter a unique collection of books by various criteria such as author, place of publication, year, and digitalization status.

## API Integration and Data Fetching
The core data fetching and transformation logic is located in `src/lib/index.js`. Key functions include:

- `arrayToObject(array, keyField, valueField)`: Utility to convert arrays of metadata into objects for easier access.
- `getBooks(pageNr, filters, customFetch)`: Fetches books from the API with support for pagination and multiple filters (search term, author, place, digitalized status, year range).
- `getFilterOptions(filterName, nRows, pageNr, customFetch, sort)`: Retrieves filter options for authors, places, years, and digitalized status.
- `getPreviewFilters(customFetch)`: Fetches initial filter options for the UI.
- `yearsToCenturies(years)`: Converts year-based filter data into century-based groupings for display.

The API URLs and keys are managed via environment variables.

## Components

### BookList (`src/lib/book-list.svelte`)
Displays a list of books passed as a prop. For each book, it shows:
- Book images using the `BookViewer` component if available, otherwise a placeholder image.
- Book title, author, publication year, and place.
- A "More details" link (currently a placeholder).

The component includes responsive styling for different screen sizes.

### BookViewer (`src/lib/book-viewer.svelte`)
A component to display book images with navigation controls. Features include:
- JavaScript-enabled mode with left/right buttons to navigate images.
- No-JavaScript fallback using URL query parameters and form submissions to navigate images.
- Uses Svelte stores to synchronize the current image index with the URL.
- Responsive image sizing and accessible buttons.

## Digital Catalog Page

### Load Function (`src/routes/digital-catalog/+page.js`)
Handles server-side data loading for the digital catalog page:
- Reads pagination parameters for results, authors, and places from URL search parameters.
- Calculates year filters from explicit year or century parameters.
- Builds a filter object with search term, author, place, digitalized status, and year range.
- Fetches books and filter options using functions from `src/lib/index.js`.
- Returns all data for use in the page component.

### Page Component (`src/routes/digital-catalog/+page.svelte`)
The main UI for the digital catalog page:
- Imports and integrates components such as header, breadcrumbs, search, filters, book list, pagination, and footer.
- Uses reactive state and effects to fetch books when filters or pagination change.
- Displays search input, filter controls (with different layouts for big and small screens), book list, and pagination controls.
- Includes CSS for layout, styling, and responsiveness.

## Specific Things Used
- **SvelteKit Routing and Page Data Loading:** Uses `load` functions and page props to manage server-side data fetching and client-side reactivity.
- **Reactive Statements and Effects:** Utilizes Svelte's `$state` and `$effect` for reactive data updates.
- **No-JavaScript Fallback:** The `BookViewer` component supports users without JavaScript by using URL parameters and form submissions.
- **Filter Options and Pagination Handling:** Pagination and filters are managed via URL parameters, allowing bookmarking and sharing of filtered views.
- **Environment Variables:** API URLs and keys are injected via environment variables for security and configurability.

## Styling and Responsiveness
- The app uses CSS variables for colors and fonts.
- Components include responsive design considerations for different screen sizes.
- The book list and viewer adapt layout and sizing based on viewport width.

---

This document provides an overview of the key code and specific implementation details to assist in understanding and maintaining the project.
