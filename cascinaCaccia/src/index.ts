import { initializeAgeGroupSelector } from "./components/Activities/ageGroupActivities";
import { setupFormHandlers } from "./components/InfoForm/infoFormHandler";

document.addEventListener("DOMContentLoaded", () => {
  initializeAgeGroupSelector();
  setupFormHandlers();
});
