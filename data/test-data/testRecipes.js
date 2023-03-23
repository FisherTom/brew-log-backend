module.exports = [
  {
    name: "Pale Ale",
    abv: 5.5,
    target_fg: 1012,
    target_og: 1046,
    description:
      "A crisp and refreshing American Pale Ale with a balanced hop profile.",
    image_url: "https://example.com/images/pale_ale.jpg",
    notes: "Great for a hot summer day.",
    created_by: "John Doe",
    volume: {
      value: 20,
      unit: "liters",
    },
    boil_volume: {
      value: 25,
      unit: "liters",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 67,
            unit: "celsius",
          },
          duration: 60,
        },
      ],
      fermentation: {
        temp: {
          value: 20,
          unit: "celsius",
        },
      },
    },
    ingredients: {
      malt: [
        {
          name: "Pale Malt",
          amount: {
            value: 4.0,
            unit: "kilograms",
          },
        },
        {
          name: "Crystal Malt",
          amount: {
            value: 0.5,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Cascade",
          amount: {
            value: 40,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Cascade",
          amount: {
            value: 30,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "American Ale",
    },
  },
  {
    name: "Stout",
    abv: 6.0,
    target_fg: 1016,
    target_og: 1050,
    description: "A rich and roasty stout with chocolate and coffee notes.",
    image_url: "https://example.com/images/stout.jpg",
    notes: "Perfect for a winter evening.",
    created_by: "Jane Smith",
    volume: {
      value: 20,
      unit: "liters",
    },
    boil_volume: {
      value: 24,
      unit: "liters",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 68,
            unit: "celsius",
          },
          duration: 60,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
    },
    ingredients: {
      malt: [
        {
          name: "Pale Malt",
          amount: {
            value: 3.5,
            unit: "kilograms",
          },
        },
        {
          name: "Roasted Barley",
          amount: {
            value: 0.6,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Fuggles",
          amount: { value: 40, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "East Kent Goldings",
          amount: {
            value: 20,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Irish Ale",
    },
  },
  {
    name: "IPA",
    abv: 6.5,
    target_fg: 1010,
    target_og: 1060,
    description:
      "A bold and hoppy India Pale Ale with strong citrus and pine notes.",
    image_url: "https://example.com/images/ipa.jpg",
    notes: "Great for hop lovers.",
    created_by: "Alice Johnson",
    volume: {
      value: 20,
      unit: "liters",
    },
    boil_volume: {
      value: 26,
      unit: "liters",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius",
          },
          duration: 60,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: "celsius",
        },
      },
    },
    ingredients: {
      malt: [
        {
          name: "Pale Malt",
          amount: {
            value: 5.0,
            unit: "kilograms",
          },
        },
        {
          name: "Munich Malt",
          amount: {
            value: 0.3,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Citra",
          amount: {
            value: 50,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Simcoe",
          amount: {
            value: 30,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Amarillo",
          amount: {
            value: 20,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "California Ale",
    },
  },
];
