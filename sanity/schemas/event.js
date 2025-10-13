export default {
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Event Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "date",
      title: "Event Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date (if multi-day)",
      type: "datetime",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      description: "e.g., 7:00 PM - 9:00 PM",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    },
    {
      name: "image",
      title: "Event Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
    },
    {
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      description: "Show on homepage",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
  },
};
