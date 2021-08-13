export default {
  title: "Recipe",
  name: "recipe",
  type: "document",
  fields: [
    {
      title: "Recipe's Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLenght: 96,
      },
    },
    {
      title: "Chef",
      name: "chef",
      type: "reference",
      to: { type: "chef" },
    },
    {
      title: "Recipe Main Image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Ingredient",
      name: "ingredient",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Ingredient",
              name: "ingredient",
              type: "reference",
              to: [{ type: "ingredient" }],
            },
            {
              title: "Whole Number",
              name: "wholeNumber",
              type: "number",
            },
            {
              title: "Fraction",
              name: "fraction",
              type: "string",
              options: {
                list: ["1/2", "1/3", "1/4", "3/4", "2/3"],
              },
            },
            {
              title: "Unit",
              name: "unit",
              type: "string",
              options: {
                list: ["grams", "cup", "Tbsp", "tsp"],
              },
            },
          ],
          preview: {
            select: {
              title: "Ingredient.name",
              name: "ingredient.name",
              media: "ingredient.image",
              wholeNumber: "wholeNumber",
              fraction: "fraction",
              unit: "unit"
            },
            prepare({
              title,
              subtitle,
              media,
              wholeNumber = "(No whole number set)",
              fraction = "(No fraction set)",
              unit = "(No unit set)",
            }) {
              return {
                title,
                subtitle: `${wholeNumber} ${fraction} ${unit}`,
                media,
              }
            }
          }
        },
      ],
    },
    {
      title: "Instructions",
      name: "instructions",
      type: "array",
      of: [{type: "block"}]
    },
    {
      name: "likes",
      title: "Likes",
      type: "number"
    }
  ],
  initialValue: {
    likes: 0,
  }
};
