"use server";

const STRAPI_URL: string = "http://localhost:1337";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export async function uploadMultipleImagesAction(
  orevState: any,
  formData: FormData
) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "post",
      body: formData,
    });

    const result = await response.json();

    if (result.error) {
      return {
        uploadError: result.error.message,
        uploadSuccess: null,
      };
    }

    return {
      uploadError: null,
      uploadSuccess: "Images uploaded successfully",
    };
  } catch (error: any) {
    return {
      uploadError: error.message,
      uploadSuccess: null,
    };
  }
}
