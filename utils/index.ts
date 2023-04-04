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

// Processes
export const processes = [
  {
    icon: "",
    content:
      "Our platform gathers truck listings from numerous dealer websites across Australia, providing you with a comprehensive selection in one convenient location.",
  },
  {
    icon: "",
    content:
      "These listings are showcased on TruckOff, enabling you to easily filter and search for your ideal truck.",
  },
  {
    icon: "",
    content:
      "When you spot a truck that catches your eye, simply click the link and you will be directed to the original website where the truck is listed.",
  },
  {
    icon: "",
    content:
      "If you find a truck you want to purchase, you can either speak to our team about financing options, or reach out to the dealer directly to complete the transaction.",
  },
];

// Format price to us
export const formatPrice = (price: string) =>
  parseFloat(price).toLocaleString("en-us");
