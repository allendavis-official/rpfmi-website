export default {
  name: "ministry",
  title: "Ministries",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ministry Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    },
    {
      name: "leader",
      title: "Ministry Leader",
      type: "string",
    },
    {
      name: "schedule",
      title: "Meeting Schedule",
      type: "string",
      description: "e.g., Sundays at 9:00 AM",
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "image",
      title: "Ministry Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "leader",
      media: "image",
    },
  },
};
