const STRAPI_URL: string = "http://localhost:1337";

export const fetchImages = async () => {
  try {
    // fetch images from Strapi backend
    const response = await fetch(`${STRAPI_URL}/api/upload/files`);

    // if response is not ok
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `Error fetching images: ${response.status} ${response.statusText} - ${errorDetails}`
      );
    }

    // return fetched images
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(`Failed to fetch images: ${error.message}`);
  }
};

export const fetchFoods = async () => {
  try {
    // fetch foods from Strapi backend
    const response = await fetch(`${STRAPI_URL}/api/foods?populate=*`);

    // if response is not ok
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `Error fetching Foods: ${response.status} ${response.statusText} - ${errorDetails}`
      );
    }

    // return fetched foods
    const result = await response.json();
    return result;
  } catch (error: any) {
    // throw new error
    throw new Error(`Failed to fetch images: ${error.message}`);
  }
};

export const deleteImage = async (imageId: number) => {
  try {
    // make a DELETE request using image id.
    const response = await fetch(`${STRAPI_URL}/api/upload/files/${imageId}`, {
      method: "DELETE",
    });

    // if response is not ok
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `Error deleting food entry: ${response.status} ${response.statusText} - ${errorDetails}`
      );
    }
  } catch (error: any) {
    console.log(error);
    // throw new error
    throw new Error(`Failed to delete entry: ${error.message}`);
  }
};
