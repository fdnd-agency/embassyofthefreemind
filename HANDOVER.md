# Project Handover

## Current Status
The project has a solid technical foundation with a modular structure. We have set up the integration with the Directus CMS, and the front-end is built using SvelteKit. The design implementation follows the FDND conventions.
We've shifted away from the original focus. We didn't have access to all the original data in a CMS which could be filtered. So we fully focused on the redesign of the homepage instead of the online catalogue.

## Key Features

- **Home Page**: We spent most our time iterating the home page and building it with our own design usesing components. The homepage consists of a navbar, hero, sectionwithlinks, exhibitions, onlinecollection, sponsorbar & footer component.
- **Exhibitions Page**: This feature is fully functional and fetches content dynamically from the Directus database.
- **Component Architecture**: We have created reusable components to maintain consistency and scalability.
- **CMS Setup**: The data model is configured in Directus, and the API connection is established.

## Challenges & Attention Points
- **Data Integration**: Although the complete data model exists, currently only the **Exhibitions** page is connected to the database. Other pages still need to be linked to the CMS data. the original API the Embassy of the Free Mind uses has 30000 books. A lot more books need to be added to the CMS to create an in depth modern filtering interface.
- **Access & Credentials**: You will need to contact the project lead (or Joost) to get the necessary API keys and login credentials for the Directus admin panel.

## Recommended First Steps
1. **Read the Docs**: Start by reviewing `docs/technical-documentation.md` to understand the project structure.
2. **Get Access**: Request the environment variables and CMS access.

## Recommended Next Steps (any order)
* **Connect More Pages**: Use the Exhibitions page as a reference to start fetching data for other parts of the website.
* **Add more data**: fill the CMS with the necessary content.
* **Redesign new Pages**: Most pages do not have a set design.
