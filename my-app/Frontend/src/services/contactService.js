
import api from "./api";

// SEND CONTACT FORM MESSAGE
export const sendContactMessage = async (contactData) => {
  const response = await api.post("/contact", contactData);
  return response.data;
};
