interface Product {
  id: number;
  name: string;
  capacity: number;
  dimensions: string;
  functions: string[];
  views: number;
  energyClass: string;
  priceValidDate: string;
  price: number;
  hirePurchase: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1, // normally I would use for example SKU I think
    name: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    capacity: 9,
    dimensions: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    views: 213769, // for popularity sort
    energyClass: "A",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 3199,
    hirePurchase: 60,
    image: "/rekru1.png",
  },
  {
    id: 2,
    name: "WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała",
    capacity: 10.5,
    dimensions: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Wyświetlacz elektroniczny",
    ],
    views: 213721, // for popularity sort
    energyClass: "B",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 3299,
    hirePurchase: 60,
    image: "/rekru2.png",
  },
  {
    id: 3,
    name: "WW90T654DLH, Pralka EcoBubble™ 9 kg, biała",
    capacity: 8,
    dimensions: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    views: 213704, // for popularity sort
    energyClass: "C",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 2999,
    hirePurchase: 60,
    image: "/rekru2.png",
  },
  {
    id: 4,
    name: "WW90T754ATB, Pralka QuickDrive™, 9 kg, biała",
    capacity: 9,
    dimensions: "55 x 60 x 85 cm",
    functions: ["Panel AI Control", "Silnik inwerterowy"],
    views: 213701, // for popularity sort
    energyClass: "D",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 2899,
    hirePurchase: 60,
    image: "/rekru1.png",
  },
  {
    id: 5,
    name: "WW10T654QWE, Pralka EcoBubble™, 10,5 kg, biała",
    capacity: 10.5,
    dimensions: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    views: 213700, // for popularity sort
    energyClass: "E",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 3099,
    hirePurchase: 60,
    image: "/rekru2.png",
  },
  {
    id: 6,
    name: "WW90T654DHL, Pralka EcoBubble™ 9 kg, biała",
    capacity: 8,
    dimensions: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Wyświetlacz elektroniczny",
    ],
    views: 696669, // for popularity sort
    energyClass: "F",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 2799,
    hirePurchase: 60,
    image: "/rekru2.png",
  },
  {
    id: 7, // normally I would use for example SKU I think
    name: "WW90T754ABB, Pralka QuickDrive™, 9 kg, biała",
    capacity: 9,
    dimensions: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    views: 213769, // for popularity sort
    energyClass: "A",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 3199,
    hirePurchase: 60,
    image: "/rekru1.png",
  },
  {
    id: 8,
    name: "WW10T654DDD, Pralka EcoBubble™, 10,5 kg, biała",
    capacity: 10.5,
    dimensions: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    views: 213721, // for popularity sort
    energyClass: "B",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 3299,
    hirePurchase: 60,
    image: "/rekru2.png",
  },
  {
    id: 9,
    name: "WW90T654DPP, Pralka EcoBubble™ 9 kg, biała",
    capacity: 8,
    dimensions: "55 x 60 x 85 cm",
    functions: ["Drzwi AddWash™", "Wyświetlacz elektroniczny"],
    views: 213704, // for popularity sort
    energyClass: "C",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 2999,
    hirePurchase: 60,
    image: "/rekru2.png",
  },
  {
    id: 10,
    name: "WW90T754AAA, Pralka QuickDrive™, 9 kg, biała",
    capacity: 9,
    dimensions: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    views: 213701, // for popularity sort
    energyClass: "D",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 2899,
    hirePurchase: 60,
    image: "/rekru1.png",
  },
  {
    id: 11,
    name: "WW10T654QRT, Pralka EcoBubble™, 10,5 kg, biała",
    capacity: 10.5,
    dimensions: "55 x 60 x 85 cm",
    functions: ["Drzwi AddWash™", "Panel AI Control"],
    views: 213700, // for popularity sort
    energyClass: "E",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 3099,
    hirePurchase: 60,
    image: "/rekru2.png",
  },
  {
    id: 12,
    name: "WW90T654DKK, Pralka EcoBubble™ 9 kg, biała",
    capacity: 8,
    dimensions: "55 x 60 x 85 cm",
    functions: ["Silnik inwerterowy", "Wyświetlacz elektroniczny"],
    views: 696669, // for popularity sort
    energyClass: "F",
    priceValidDate: "15.09.2022 - 21.09.2022",
    price: 2799,
    hirePurchase: 60,
    image: "/rekru2.png",
  },
];

export default products;