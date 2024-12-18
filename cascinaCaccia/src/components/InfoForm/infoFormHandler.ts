import { FormDataRequest } from "./Types/Types";

const API_URL = "http://localhost:8080/api/formreq/all";

/**
 * Sets up event listeners for the forms in the page, specifically for the "infoForm"
 * and handles the submission of the form by sending a POST request to the API
 * with the form data and shows an alert with the result of the request.
 */
export function setupFormHandlers(): void {
  const infoForm = document.getElementById("infoForm") as HTMLFormElement;

  if (infoForm) {
    infoForm.addEventListener("submit", async (event: SubmitEvent) => {
      event.preventDefault();

      const selectedActivities = Array.from(document.querySelectorAll<HTMLInputElement>("input[name='activities']:checked")).map(
        (checkbox) => checkbox.value
      );

      const data: FormDataRequest = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        surname: (document.getElementById("surname") as HTMLInputElement).value,
        phoneNumber: (document.getElementById("phoneNumber") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        association: (document.getElementById("association") as HTMLInputElement).value,
        ageGroup: (document.getElementById("ageGroup") as HTMLSelectElement).value,
        activities: selectedActivities,
        additionalInfo: (document.getElementById("additionalInfo") as HTMLTextAreaElement).value,
      };

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const result = await response.json();
          alert("Richiesta inviata con successo!");
          console.log("Response:", result);
        } else {
          throw new Error(`Errore nella richiesta: ${response.status}`);
        }
      } catch (error) {
        alert("Errore durante l'invio della richiesta.");
        console.error("Error:", error);
      }
    });
  }
}
