/**
 * food controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::food.food",
  ({ strapi }) => ({
    // create custom controller
    async uploadImage(ctx) {
      const contentType = strapi.contentType("api::food.food");

      // get files
      const { files } = ctx.request;

      // name of input (key)
      const file = files["anyName"];

      const createdFiles = await strapi.plugins.upload.services.upload.upload({
        data: {
          fileInfo: {
            name: file["originalFilename"], // set the original name of the image
            caption: "Caption", // give it a caption
            alternativeText: "Alternative Text", // give it an alternative text
          },
        },
        files: file,
      });

      // send response
      ctx.status = 200;
      ctx.body = {
        data: createdFiles,
      };
    },
  })
);
