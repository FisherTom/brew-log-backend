module.exports = [
  {
    name: "Pale stale and Ale",
    style: "Pale Ale",
    abv: 5.5,
    target_fg: 1012,
    target_og: 1046,
    description:
      "A crisp and refreshing American Pale Ale with a balanced hop profile.",
    image_url: "https://example.com/images/pale_ale.jpg",
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
        },
        {
          name: "Cascade",
          amount: {
            value: 30,
            unit: "grams",
          },
          add: "end",
        },
      ],
      yeast: "American Ale",
    },
  },
  {
    name: "The Big Kahuna",
    style: "Stout",
    abv: 6.0,
    target_fg: 1016,
    target_og: 1050,
    description: "A rich and roasty stout with chocolate and coffee notes.",
    image_url: "https://example.com/images/stout.jpg",
    notes: "Try adding some coffee or cacao nibs to enhance the flavour.",
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
        {
          temp: {
            value: 75,
            unit: "celsius",
          },
          duration: 15,
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
        },
        {
          name: "East Kent Goldings",
          amount: {
            value: 20,
            unit: "grams",
          },
          add: "end",
        },
      ],
      yeast: "Irish Ale",
    },
  },
  {
    name: "Hopocalypse Now",
    style: "IPA",
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
        },
        {
          name: "Simcoe",
          amount: {
            value: 30,
            unit: "grams",
          },
          add: "middle",
        },
        {
          name: "Amarillo",
          amount: {
            value: 20,
            unit: "grams",
          },
          add: "end",
        },
      ],
      yeast: "California Ale",
    },
  },
  {
    name: "Trappist Treasure",
    style: "Belgian Tripel",
    abv: 9.0,
    target_fg: 1008,
    target_og: 1080,
    description:
      "A strong and complex Belgian-style ale with fruity and spicy notes.",
    image_url: "https://example.com/images/belgian_tripel.jpg",
    notes:
      "Aim for a high attenuation to achieve a dry finish, which is crucial for the style, by carefully managing fermentation temperatures, starting on the lower end and gradually raising the temperature as fermentation progresses.",
    created_by: "Bob Brown",
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
            value: 64,
            unit: "celsius",
          },
          duration: 30,
        },
        {
          temp: {
            value: 66,
            unit: "celsius",
          },
          duration: 30,
        },
        {
          temp: {
            value: 68,
            unit: "celsius",
          },
          duration: 30,
        },
      ],
      fermentation: {
        temp: {
          value: 24,
          unit: "celsius",
        },
      },
    },
    ingredients: {
      malt: [
        {
          name: "Pilsner Malt",
          amount: {
            value: 7.0,
            unit: "kilograms",
          },
        },
        {
          name: "Aromatic Malt",
          amount: {
            value: 0.3,
            unit: "kilograms",
          },
        },
        {
          name: "Candi Sugar",
          amount: {
            value: 1.0,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Styrian Goldings",
          amount: {
            value: 40,
            unit: "grams",
          },
          add: "start",
        },
        {
          name: "Saaz",
          amount: {
            value: 20,
            unit: "grams",
          },
          add: "middle",
        },
        {
          name: "Tettnang",
          amount: {
            value: 20,
            unit: "grams",
          },
          add: "end",
        },
      ],
      yeast: "Belgian Abbey",
    },
  },
  {
    name: "Pulp Friction",
    style: "Double IPA",
    abv: 8.5,
    target_fg: 1010,
    target_og: 1075,
    description:
      "An intensely hoppy and bitter double IPA with a solid malt backbone.",
    image_url: "https://example.com/images/double_ipa.jpg",
    notes:
      "Make sure to wait untill fermentation has finished before adding your dry hops to get the best flavour.",
    created_by: "Carol White",
    volume: {
      value: 20,
      unit: "liters",
    },
    boil_volume: {
      value: 28,
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
        {
          temp: {
            value: 75,
            unit: "celsius",
          },
          duration: 10,
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
            value: 6.0,
            unit: "kilograms",
          },
        },
        {
          name: "Munich Malt",
          amount: {
            value: 1.0,
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
          name: "Columbus",
          amount: {
            value: 60,
            unit: "grams",
          },
          add: "start",
        },
        {
          name: "Simcoe",
          amount: {
            value: 40,
            unit: "grams",
          },
          add: "middle",
        },
        {
          name: "Citra",
          amount: {
            value: 40,
            unit: "grams",
          },
          add: "end",
        },
        {
          name: "Mosaic",
          amount: {
            value: 40,
            unit: "grams",
          },
          add: "dry hop",
        },
      ],
      yeast: "California Ale",
    },
  },
  {
    name: "Route 66",
    style: "American Pale Ale",
    abv: 5.5,
    target_fg: 1012,
    target_og: 1050,
    description:
      "A well-balanced and hoppy American Pale Ale with citrus and floral notes.",
    image_url: "https://example.com/images/american_pale_ale.jpg",
    notes:
      "You can adjust the recipe by adding some rye malt. Do not over hop this should be an easy drinking style.",
    created_by: "David Smith",
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
            value: 65,
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
            value: 5.0,
            unit: "kilograms",
          },
        },
        {
          name: "Crystal Malt",
          amount: {
            value: 0.3,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Cascade",
          amount: {
            value: 30,
            unit: "grams",
          },
          add: "start",
        },
        {
          name: "Cascade",
          amount: {
            value: 30,
            unit: "grams",
          },
          add: "middle",
        },
        {
          name: "Cascade",
          amount: {
            value: 30,
            unit: "grams",
          },
          add: "end",
        },
      ],
      yeast: "American Ale",
    },
  },
  {
    name: "Nutty Professor",
    style: "English Bitter",
    abv: 4.5,
    target_fg: 1010,
    target_og: 1040,
    description:
      "A traditional English Bitter with a malty backbone and earthy hop character.",
    image_url: "https://example.com/images/english_bitter.jpg",
    created_by: "Eva Green",
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
            value: 67,
            unit: "celsius",
          },
          duration: 60,
        },
      ],
      fermentation: {
        temp: {
          value: 18,
          unit: "celsius",
        },
      },
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Pale",
          amount: {
            value: 4.0,
            unit: "kilograms",
          },
        },
        {
          name: "Crystal Malt",
          amount: {
            value: 0.4,
            unit: "kilograms",
          },
        },
        {
          name: "Biscuit Malt",
          amount: {
            value: 0.2,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Fuggles",
          amount: {
            value: 30,
            unit: "grams",
          },
          add: "start",
        },
        {
          name: "Fuggles",
          amount: {
            value: 20,
            unit: "grams",
          },
          add: "middle",
        },
        {
          name: "Cascade",
          amount: {
            value: 15,
            unit: "grams",
          },
          add: "end",
        },
      ],
      yeast: "English Ale",
    },
  },
];
