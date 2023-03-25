"use strict";
const app = Vue.createApp({
  data() {
    return {
      h1Text: "Today's Meals",
      h2Text: "Filter Meals",
      dietplan: "",
      todaysMealsByDiet: [
        {
          diet: "Meat",
          emojis: "🍖 🍔 ",
          cssClass: "meat-text",
          meals: [
            "Garlic Butter Steak Bites",
            "Swedish Meat Balls",
            "Lemon Baked Chicken",
            "Beef Stroganoff",
          ],
        },
        {
          diet: "Vegetarian",
          emojis: "🥒 🥗 🥛 🧀 ",
          cssClass: "vegetarian-text",
          meals: [
            "Double Cheese & Spring Vegetable Tart",
            "Bean & Halloumi Stew",
            "Creamy Broccoli Gnocchi",
            "Double Bean & Roasted Pepper Chilli",
          ],
        },
        {
          diet: "Vegan",
          emojis: "🥒 🥗 ",
          cssClass: "vegan-text",
          meals: [
            "Chilli Sin Carne",
            "Lentil Bolognese",
            "Black Bean Burger",
            "Chickpea Curry Jacket Potatoes",
          ],
        },
      ],
    };
  },
  computed: {
    dynamicTodaysMeals() {
      return this.dietplan === ""
        ? this.todaysMealsByDiet
        : this.todaysMealsByDiet.filter((mealsList) => {
            return mealsList.diet === this.dietplan;
          });
    },
  },
}).mount("#app");
