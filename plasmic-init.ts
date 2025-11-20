import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "bSV8jZmwKUXbKUfHtNz4tk",  // ID of a project you are using
      token: "9iBemKsQJXBZyuNkmPFeALoYxQEuX8TvwerKDW8phrol1XoW7qd6pTXSpI7qQD3VrVoD8e7f36YK3oyZMnLAw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})