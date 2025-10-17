// schemas/heroSection.js
export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Main Text',
          type: 'string',
          description: 'The main title text',
        },
        {
          name: 'highlightedText',
          title: 'Highlighted Text',
          type: 'string',
          description: 'The text that will be highlighted with gradient',
        },
      ],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Button Label',
              type: 'string',
            },
            {
              name: 'variant',
              title: 'Button Variant',
              type: 'string',
              options: {
                list: [
                  {title: 'Primary', value: 'primary'},
                  {title: 'Secondary', value: 'secondary'},
                  {title: 'Accent', value: 'accent'},
                ],
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'isExternal',
              title: 'External Link',
              type: 'boolean',
              description: 'Is this an external link?',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon name (optional)',
            },
          ],
        },
      ],
    },
    {
      name: 'featureCards',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'object',
              fields: [
                {
                  name: 'type',
                  title: 'Icon Type',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Calendar', value: 'calendar'},
                      {title: 'Users', value: 'users'},
                      {title: 'Globe', value: 'globe'},
                      {title: 'Heart', value: 'heart'},
                      {title: 'Custom', value: 'custom'},
                    ],
                  },
                },
                {
                  name: 'asset',
                  title: 'Custom Icon',
                  type: 'image',
                  hidden: ({parent}) => parent?.type !== 'custom',
                },
              ],
            },
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'button',
              title: 'Button',
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Button Label',
                  type: 'string',
                },
              ],
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'isExternal',
              title: 'External Link',
              type: 'boolean',
            },
          ],
        },
      ],
    },
    {
      name: 'showScrollIndicator',
      title: 'Show Scroll Indicator',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
