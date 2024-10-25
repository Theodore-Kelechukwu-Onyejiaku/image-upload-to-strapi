export default {
  routes: [
    {
      // Path defined with a URL parameter
      method: "POST",
      path: "/foods/favorite-food",
      handler: "api::food.food.uploadImage",
    },
  ],
};
