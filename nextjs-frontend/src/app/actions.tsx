"use server";

const STRAPI_URL: string = "http://localhost:1337";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export async function uploadMultipleOrSingleAction(
  prevState: any,
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

export async function LinkByUploadAction(prevState: any, formData: FormData) {
  try {
    // Convert formData into an object to extract data
    const data = Object.fromEntries(formData);

    // Create a new FormData object to send to the server
    const formDataToSend = new FormData();
    formDataToSend.append("files", data.files); // The image file
    formDataToSend.append("ref", data.ref); // The reference type for Food collection
    formDataToSend.append("refId", data.refId); // The ID of the food entry
    formDataToSend.append("field", data.field); // The specific field to which the image is linked, i.e. "cover"

    // Make the API request to Strapi to upload the file and link it to the specific entry
    const response = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "post",
      body: formDataToSend,
    });

    const result = await response.json();

    // Handle potential errors from the API response
    if (result.error) {
      return {
        uploadError: result.error.message,
        uploadSuccess: null,
      };
    }

    // Return success if the upload and linking is successful
    return {
      uploadSuccess: "Image linked to a food successfully!",
      uploadError: null,
    };
  } catch (error: any) {
    // Catch any errors that occur during the process
    return {
      uploadError: error.message,
      uploadSuccess: null,
    };
  }
}

export async function linkFromGalleryAction(
  prevState: any,
  formData: FormData
) {
  try {
    const data = Object.fromEntries(formData);

    const response = await fetch(`${STRAPI_URL}/api/foods/${data?.refId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          cover: data?.imageId,
        },
      }),
    });

    const result = await response.json();

    if (result.error) {
      return {
        uploadError: result.error.message,
        uploadSuccess: null,
      };
    }
    return {
      uploadSuccess: "Image linked to a food successfully!",
      uploadError: null,
    };
  } catch (error: any) {
    return {
      uploadError: error.message,
      uploadSuccess: null,
    };
  }
}

export async function uploadAtEntryCreationAction(
  prevState: any,
  formData: FormData
) {
  try {
    const data = Object.fromEntries(formData);

    // upload file
    const uploadResponse = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "post",
      body: formData,
    });

    // get result of upload
    const uploadedImage = await uploadResponse.json();

    // if error
    if (uploadedImage.error) {
      return {
        uploadError: uploadedImage.error.message,
        uploadSuccess: null,
      };
    }

    // create entry
    const newEntry = {
      data: {
        name: data.name,
        cover: uploadedImage[0]?.id,
      },
    };

    // Create entry API request
    const response = await fetch(`${STRAPI_URL}/api/foods`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
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
      uploadError: null,
      uploadSuccess: "Images uploaded successfully",
    };
  }
}

export async function updateImageAction(prevState: any, formData: FormData) {
  try {
    const data = Object.fromEntries(formData);
    const newImageData = {
      name: data.name || prevState.imageSelected.name,
      alternativeText:
        data.alternativeText || prevState.imageSelected.alternativeText,
      caption: data.caption || prevState.imageSelected.caption,
    };
    const imageId = data.imageId;

    const form = new FormData();
    form.append("fileInfo", JSON.stringify(newImageData));

    const response = await fetch(`${STRAPI_URL}/api/upload?id=${imageId}`, {
      method: "post",
      body: form,
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
      uploadSuccess: "Image info updated successfully",
    };
  } catch (error: any) {
    return {
      uploadError: error.message,
      uploadSuccess: null,
    };
  }
}
