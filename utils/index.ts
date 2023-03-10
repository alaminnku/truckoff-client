// Current year
export const currentYear = new Date().getFullYear();

// Brands
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

// Locations
export const locations = [
  ["NSW", "New South Wales"],
  ["VIC", "Victoria"],
  ["QLD", "Queensland"],
  ["WA", "Western Australia"],
  ["SA", "South Australia"],
  ["NT", "Northern Territory"],
  ["TAS", "Tasmania"],
];

// Format price to us
export const formatPrice = (price: string) =>
  parseFloat(price).toLocaleString("en-us");
