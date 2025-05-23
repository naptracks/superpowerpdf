export const PLANS = [
  {
    name: "Free",
    slug: "free",
    quota: 10,
    pdfweightLimit: 4,
    pagesPerPdf: 10,
    price: {
      amount: 0,
      priceIds: {
        test: "",
        production: "",
      },
    },
  },
  {
    name: "Pro",
    slug: "pro",
    quota: 50,
    pdfweightLimit: 16,
    pagesPerPdf: 1000,
    price: {
      amount: 14,
      priceIds: {
        test: "price_1OFwkFKyaAVRo4WyWjhyIc0n",
        production: "",
      },
    },
  },
];
