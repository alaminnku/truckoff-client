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
  ["NSW", "New South Wales"],
  ["VIC", "Victoria"],
  ["WA", "Western Australia"],
  ["QLD", "Queensland"],
  ["SA", "South Australia"],
];

// Processes
export const processes = [
  {
    icon: "/processes/circle.png",
    content:
      "Our platform gathers truck listings from numerous dealer websites across Australia, providing you with a comprehensive selection in one convenient location.",
  },
  {
    icon: "/processes/filter.png",
    content:
      "These listings are showcased on TruckOff, enabling you to easily filter and search for your ideal truck.",
  },
  {
    icon: "/processes/message.png",
    content:
      "When you spot a truck that catches your eye, simply click the link and you will be directed to the original website where the truck is listed.",
  },
  {
    icon: "/processes/wallet.png",
    content:
      "If you find a truck you want to purchase, you can either speak to our team about financing options, or reach out to the dealer directly to complete the transaction.",
  },
];

// Format price to us
export const formatPrice = (price: string) =>
  parseFloat(price).toLocaleString("en-us");
