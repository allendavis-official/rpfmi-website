export default {
  name: "sermon",
  title: "Sermons",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Sermon Title",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pastor",
      title: "Pastor/Speaker",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "scripture",
      title: "Scripture Reference",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "audioUrl",
      title: "Audio URL",
      type: "url",
      description: "Link to sermon audio",
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "YouTube or Vimeo link",
    },
    {
      name: "sermonNotes",
      title: "Sermon Notes PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
    {
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "series",
      title: "Sermon Series",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "pastor",
      media: "image",
    },
  },
};
