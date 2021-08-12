export default {
  title: "Chef",
  name: "chef",
  type: "document",
  fields: [
    {
      title: "Chef's Name",
      name: "name",
      type: "string"
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      title: "Bio",
      name: "bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }
      ]
    }
  ]
}