export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'RPFMI',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'The House of Restoration',
    },
    // NEW: Hero Section with defaults
    {
      name: 'heroSection',
      title: 'Hero Section (Homepage)',
      type: 'object',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Large hero background image (recommended: 1920x1080px)',
        },
        {
          name: 'title',
          title: 'Main Title',
          type: 'string',
          initialValue: 'Prayer, Praise & Power',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Join the Fire. Transform Nations. Experience God.',
        },
        {
          name: 'buttons',
          title: 'Call-to-Action Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Button Text',
                  type: 'string',
                },
                {
                  name: 'link',
                  title: 'Button Link',
                  type: 'string',
                  description: 'Use /page-name for internal links, or full URL for external',
                },
                {
                  name: 'style',
                  title: 'Button Style',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Primary (Yellow)', value: 'primary'},
                      {title: 'Secondary (White)', value: 'secondary'},
                      {title: 'Accent (Purple)', value: 'accent'},
                    ],
                  },
                  initialValue: 'primary',
                },
              ],
              preview: {
                select: {
                  title: 'text',
                  subtitle: 'link',
                },
              },
            },
          ],
          validation: (Rule) => Rule.max(3),
        },
        {
          name: 'overlay',
          title: 'Background Overlay',
          type: 'object',
          description: 'Add a color overlay to make text more readable',
          fields: [
            {
              name: 'enabled',
              title: 'Enable Overlay',
              type: 'boolean',
              initialValue: true,
            },
            {
              name: 'color',
              title: 'Overlay Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Dark (Black)', value: 'dark'},
                  {title: 'Light (White)', value: 'light'},
                  {title: 'Red', value: 'red'},
                  {title: 'Purple', value: 'purple'},
                ],
              },
              initialValue: 'dark',
            },
            {
              name: 'opacity',
              title: 'Overlay Opacity',
              type: 'number',
              validation: (Rule) => Rule.min(0).max(100),
              initialValue: 60,
              description: 'Percentage (0-100)',
            },
          ],
        },
      ],
    },
    {
      name: 'serviceTimes',
      title: 'Service Times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'service', title: 'Service Name', type: 'string'},
            {name: 'day', title: 'Day', type: 'string'},
            {name: 'time', title: 'Time', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'address', title: 'Address', type: 'text'},
        {name: 'phone', title: 'Phone', type: 'string'},
        {name: 'email', title: 'Email', type: 'string'},
      ],
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'facebook', title: 'Facebook URL', type: 'url'},
        {name: 'instagram', title: 'Instagram URL', type: 'url'},
        {name: 'youtube', title: 'YouTube URL', type: 'url'},
      ],
    },
    {
      name: 'announcementBanner',
      title: 'Announcement Banner',
      type: 'object',
      fields: [
        {name: 'enabled', title: 'Show Banner', type: 'boolean'},
        {name: 'message', title: 'Message', type: 'string'},
        {name: 'link', title: 'Link (optional)', type: 'url'},
      ],
    },
  ],
}
