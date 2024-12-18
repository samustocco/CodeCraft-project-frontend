export interface FormDataRequest {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  association: string;
  ageGroup: string;
  activities: string[];
  additionalInfo: string;
}
export interface FormDataBooking {}

export interface ActivitiesByAgeGroup {
  [key: string]: string[];
}
