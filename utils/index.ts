// Current year
export const currentYear = new Date().getFullYear();

// Brands
export const brands = [
  ["ford", "Ford"],
  ["fuso", "Fuso"],
  ["hino", "Hino"],
  ["volvo", "Volvo"],
  ["isuzu", "Isuzu"],
  ["iveco", "Iveco"],
  ["toyota", "Toyota"],
  ["kenworth", "Kenworth"],
  ["western", "Western Star"],
  ["mitsubishi", "Mitsubishi"],
  ["mercedes", "Mercedes-Benz"],
  ["freightliner", "Freightliner"],
];

// Locations
export const locations = [
  ["VIC", "Victoria"],
  ["QLD", "Queensland"],
  ["SA", "South Australia"],
  ["NSW", "New South Wales"],
  ["WA", "Western Australia"],
];

// Format price to us
export const formatPrice = (price: string) =>
  parseFloat(price).toLocaleString("en-us");
