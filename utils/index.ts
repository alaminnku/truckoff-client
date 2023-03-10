// Current year
export const currentYear = new Date().getFullYear();

// Brand array
export const brands = [
  "Ford",
  "Freightliner",
  "Fuso",
  "Hino",
  "Isuzu",
  "Iveco",
  "Kenworth",
  "Mack",
  "Mercedes-Benz",
  "Mitsubishi",
  "Toyota",
  "Volvo",
  "Western Star",
];

// Format price to us
export const formatPrice = (price: string) =>
  parseFloat(price).toLocaleString("en-us");
