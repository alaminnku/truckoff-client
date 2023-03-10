// Current year
export const currentYear = new Date().getFullYear();

// Brands
export const brands = [
  ["ford", "Ford"],
  ["freightliner", "Freightliner"],
  ["fuso", "Fuso"],
  ["hino", "Hino"],
  ["isuzu", "Isuzu"],
  ["iveco", "Iveco"],
  ["kenworth", "Kenworth"],
  ["mercedesBenz", "Mercedes-Benz"],
  ["mitsubishi", "Mitsubishi"],
  ["toyota", "Toyota"],
  ["volvo", "Volvo"],
  ["westernStar", "Western Star"],
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
