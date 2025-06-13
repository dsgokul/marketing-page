import axios, { type AxiosResponse } from "axios";

const apiUrl = import.meta.env.PUBLIC_FORM_SUBMISSION_API_URL;

export const submitForm = async (data: any) => {
  console.log(apiUrl);

  try {
    const response = await axios.post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: any) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
