export function selectedCategory(category) {
  switch (category) {
    case "Break_fast_Brunch":
      return "Breakfast & Brunch";

    case "Dessert":
      return "Dessert";
    case "Sunrise_Bites_Kitchen":
      return "Sunrise Bites Kitchen";
    case "Morning_Bliss_Café":
      return "Morning Bliss Café";

    case "Brunch_Haven_Delights":
      return "Brunch Haven Delights";

    case "Rise_Dine_Eatery":
      return "Rise & Dine Eatery";

    case "Breakfast_Oasis_Junction":
      return "Breakfast Oasis Junction";

    default:
      return "Invalid category";
  }
}
