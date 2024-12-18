import { ActivitiesByAgeGroup } from "./Types/Types";

const activitiesByAgeGroup: ActivitiesByAgeGroup = {
  Fascia1: ["3. Regolegalità", "6. Miele e Api"],
  Fascia2: ["1. Storia della cascina Carla e Bruno Caccia", "2. Bruno Caccia", "3. Regolegalità", "6. Miele e Api", "9. Il gioco non è un azzardo"],
  Fascia3: [
    "1. Storia della cascina Carla e Bruno Caccia",
    "2. Bruno Caccia",
    "4. I beni confiscati",
    "5. Le mafie e il cibo",
    "6. Miele e Api",
    "7. Ricicliamo attività artistiche e manuali",
    "8. La mafia attraverso il cinema: percezioni culturali",
    "9. Il gioco non è un azzardo",
  ],
  Fascia4: [
    "1. Storia della cascina Carla e Bruno Caccia",
    "2. Bruno Caccia",
    "4. I beni confiscati",
    "5. Le mafie e il cibo",
    "6. Miele e Api",
    "7. Ricicliamo attività artistiche e manuali",
    "8. La mafia attraverso il cinema: percezioni culturali",
    "10. Chi non gioca vince",
  ],
};

/**
 * Initialize the age group selector with event listener to update the activities container
 * according to the selected age group */
export function initializeAgeGroupSelector(): void {
  const ageGroupSelect = document.getElementById("ageGroup") as HTMLSelectElement;
  const activitiesContainer = document.getElementById("activitiesContainer") as HTMLDivElement;

  /**
   * Updates the activities container with checkboxes for each activity
   * corresponding to the selected age group. Clears the container
   * before adding new elements. If no valid age group is selected,
   * displays a message prompting the user to select an age group.
   */
  function updateActivities(): void {
    const selectedAgeGroup = ageGroupSelect.value;
    activitiesContainer.innerHTML = "";

    const activities = activitiesByAgeGroup[`Fascia${selectedAgeGroup}`];
    if (activities) {
      activities.forEach((activity) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = activity.replace(/\s+/g, "-"); // replace empty spaces fo a correct id
        checkbox.name = "activities";
        checkbox.value = activity;

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = activity;

        const container = document.createElement("div");
        container.appendChild(checkbox);
        container.appendChild(label);

        activitiesContainer.appendChild(container);
      });
    } else {
      activitiesContainer.innerHTML = "<p>Seleziona una fascia di età per vedere le attività disponibili.</p>";
    }
  }

  ageGroupSelect.addEventListener("change", updateActivities);
  updateActivities();
}
