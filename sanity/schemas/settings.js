export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Hero Section
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'mainTitle',
          title: 'Main Title',
          type: 'string',
        },
        {
          name: 'highlightedTitle',
          title: 'Highlighted Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        },
        {
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'text', title: 'Button Text', type: 'string'},
                {name: 'link', title: 'Button Link', type: 'string'},
                {
                  name: 'style',
                  title: 'Button Style',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Primary', value: 'primary'},
                      {title: 'Secondary', value: 'secondary'},
                      {title: 'Accent', value: 'accent'},
                    ],
                  },
                },
              ],
              preview: {
                select: {title: 'text', subtitle: 'style'},
              },
            },
          ],
        },

        // Feature Cards as array
        {
          name: 'featureCards',
          title: 'Feature Cards (Max 4)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'icon', title: 'Icon', type: 'string'},
                {name: 'title', title: 'Title', type: 'string'},
                {name: 'description', title: 'Description', type: 'text'},
                {name: 'buttonText', title: 'Button Text', type: 'string'},
                {name: 'buttonLink', title: 'Button Link', type: 'string'},
                {name: 'isDonate', title: 'Is Donate Button?', type: 'boolean'},
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
                prepare({title, subtitle}) {
                  return {
                    title: title || 'Untitled Card',
                    subtitle: subtitle ? `${subtitle.substring(0, 50)}...` : 'No description',
                  }
                },
              },
            },
          ],
          validation: (Rule) => Rule.max(4).warning('Maximum 4 feature cards allowed'),
        },

        {
          name: 'overlay',
          title: 'Overlay',
          type: 'object',
          fields: [
            {
              name: 'enabled',
              title: 'Enable Overlay?',
              type: 'boolean',
              initialValue: true,
            },
            {
              name: 'color',
              title: 'Overlay Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Dark', value: 'dark'},
                  {title: 'Light', value: 'light'},
                  {title: 'Red', value: 'red'},
                  {title: 'Purple', value: 'purple'},
                ],
              },
            },
            {
              name: 'opacity',
              title: 'Overlay Opacity (%)',
              type: 'number',
              validation: (Rule) => Rule.min(0).max(100),
              initialValue: 60,
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'mainTitle',
          subtitle: 'highlightedTitle',
          media: 'backgroundImage',
        },
        prepare({title, subtitle, media}) {
          return {
            title: title || 'Hero Section',
            subtitle: subtitle ? `Highlight: ${subtitle}` : '',
            media,
          }
        },
      },
    },

    // Global Impact Section
    {
      name: 'globalImpact',
      title: 'Global Impact Section',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Global Impact Section?',
          type: 'boolean',
          initialValue: true,
          description: 'Show or hide the global impact statistics section',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Global Impact Through Faith',
          description: 'Main heading for the section',
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          initialValue: "Witnessing God's power transform lives across nations",
          description: 'Subtitle text below the main heading',
        },
        {
          name: 'footerText',
          title: 'Footer Text',
          type: 'text',
          initialValue: 'Be part of this global movement of faith, prayer, and transformation',
          description: 'Text displayed at the bottom of the section',
        },
        {
          name: 'backgroundGradient',
          title: 'Background Gradient',
          type: 'object',
          fields: [
            {
              name: 'fromColor',
              title: 'From Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Purple', value: 'purple'},
                  {title: 'Blue', value: 'blue'},
                  {title: 'Red', value: 'red'},
                  {title: 'Green', value: 'green'},
                  {title: 'Indigo', value: 'indigo'},
                  {title: 'Pink', value: 'pink'},
                ],
              },
              initialValue: 'purple',
            },
            {
              name: 'toColor',
              title: 'To Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Pink', value: 'pink'},
                  {title: 'Purple', value: 'purple'},
                  {title: 'Red', value: 'red'},
                  {title: 'Blue', value: 'blue'},
                  {title: 'Orange', value: 'orange'},
                  {title: 'Teal', value: 'teal'},
                ],
              },
              initialValue: 'pink',
            },
          ],
        },
        {
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          description: 'Add up to 8 statistics to display',
          of: [
            {
              type: 'object',
              name: 'statistic',
              title: 'Statistic',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Type',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Users', value: 'users'},
                      {title: 'Globe', value: 'globe'},
                      {title: 'Calendar', value: 'calendar'},
                      {title: 'Heart', value: 'heart'},
                      {title: 'Church', value: 'church'},
                      {title: 'Prayer', value: 'prayer'},
                      {title: 'Bible', value: 'bible'},
                      {title: 'Hands Helping', value: 'hands'},
                    ],
                  },
                  initialValue: 'users',
                },
                {
                  name: 'number',
                  title: 'Number Value',
                  type: 'number',
                  description: 'The final number to count up to',
                  validation: (Rule) => Rule.required().min(0),
                },
                {
                  name: 'suffix',
                  title: 'Number Suffix',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'None', value: ''},
                      {title: 'Plus (+)', value: '+'},
                      {title: 'Percent (%)', value: '%'},
                      {title: 'K (Thousand)', value: 'K'},
                      {title: 'M (Million)', value: 'M'},
                    ],
                  },
                  initialValue: '',
                },
                {
                  name: 'label',
                  title: 'Statistic Label',
                  type: 'string',
                  description: 'e.g., "Active Members", "Countries Reached"',
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'number',
                },
                prepare({title, subtitle}) {
                  return {
                    title: title || 'Unlabeled Stat',
                    subtitle: subtitle ? `Count: ${subtitle}` : 'No number set',
                  }
                },
              },
            },
          ],
          validation: (Rule) => Rule.max(8).warning('Maximum 8 statistics allowed'),
        },
        {
          name: 'animationSettings',
          title: 'Animation Settings',
          type: 'object',
          fields: [
            {
              name: 'duration',
              title: 'Animation Duration (ms)',
              type: 'number',
              description: 'How long the counter animation should take in milliseconds',
              initialValue: 2000,
              validation: (Rule) => Rule.min(500).max(10000),
            },
            {
              name: 'staggerDelay',
              title: 'Stagger Delay (ms)',
              type: 'number',
              description: 'Delay between each counter animation start',
              initialValue: 200,
              validation: (Rule) => Rule.min(0).max(1000),
            },
          ],
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Global Impact Section',
            subtitle: 'Statistics and impact metrics',
            media: '📊',
          }
        },
      },
    },

    // Services Section
    {
      name: 'services',
      title: 'Services Section',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Services Section?',
          type: 'boolean',
          initialValue: true,
          description: 'Show or hide the services section',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Services',
          description: 'Main heading for the section',
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          initialValue:
            'Join us for powerful worship, prayer, and spiritual growth throughout the week',
          description: 'Subtitle text below the main heading',
        },
        {
          name: 'servicesList',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'service',
              title: 'Service',
              fields: [
                {
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'time',
                  title: 'Service Time',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'image',
                  title: 'Service Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: 'gradient',
                  title: 'Gradient Colors',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Blue to Purple', value: 'from-blue-500 to-purple-500'},
                      {title: 'Purple to Pink', value: 'from-purple-500 to-pink-500'},
                      {title: 'Teal to Blue', value: 'from-teal-500 to-blue-500'},
                      {title: 'Orange to Red', value: 'from-orange-500 to-red-500'},
                      {title: 'Green to Teal', value: 'from-green-500 to-teal-500'},
                      {title: 'Pink to Rose', value: 'from-pink-500 to-rose-500'},
                      {title: 'Indigo to Purple', value: 'from-indigo-500 to-purple-500'},
                      {title: 'Yellow to Orange', value: 'from-yellow-500 to-orange-500'},
                    ],
                  },
                  initialValue: 'from-blue-500 to-purple-500',
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'time',
                  media: 'image',
                },
                prepare({title, subtitle, media}) {
                  return {
                    title: title || 'Untitled Service',
                    subtitle: subtitle || 'No time set',
                    media,
                  }
                },
              },
            },
          ],
          validation: (Rule) => Rule.max(8).warning('Maximum 8 services allowed'),
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Services Section',
            subtitle: 'Church services and events',
            media: '⛪',
          }
        },
      },
    },

    // About Section
    {
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable About Section?',
          type: 'boolean',
          initialValue: true,
          description: 'Show or hide the about section',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'About RPFMI',
          description: 'Main heading for the section',
        },
        {
          name: 'paragraph1',
          title: 'First Paragraph',
          type: 'text',
          initialValue:
            'Redemption Praise Fire Ministry International is a Spirit-led ministry dedicated to winning souls, raising intercessors, and transforming lives through the power of prayer, praise, and prophetic activation.',
          description: 'First paragraph of the about section',
        },
        {
          name: 'paragraph2',
          title: 'Second Paragraph',
          type: 'text',
          initialValue:
            "Founded with a heart for global impact, we serve communities from the USA to the world, bringing hope to the hopeless and demonstrating God's love through our actions.",
          description: 'Second paragraph of the about section',
        },
        {
          name: 'primaryButton',
          title: 'Primary Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Learn More About Us',
            },
            {
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '/about',
            },
          ],
        },
        {
          name: 'secondaryButton',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Hope Foundation',
            },
            {
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '/hope-foundation',
            },
          ],
        },
        {
          name: 'image',
          title: 'About Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Image displayed in the about section',
        },
        {
          name: 'imageAlt',
          title: 'Image Alt Text',
          type: 'string',
          initialValue: 'RPFMI Community',
          description: 'Accessibility description for the image',
        },
        {
          name: 'gradient',
          title: 'Background Gradient',
          type: 'string',
          options: {
            list: [
              {title: 'Purple to Pink', value: 'from-purple-600 to-pink-600'},
              {title: 'Blue to Purple', value: 'from-blue-600 to-purple-600'},
              {title: 'Teal to Blue', value: 'from-teal-600 to-blue-600'},
              {title: 'Orange to Red', value: 'from-orange-600 to-red-600'},
              {title: 'Green to Teal', value: 'from-green-600 to-teal-600'},
              {title: 'Indigo to Purple', value: 'from-indigo-600 to-purple-600'},
            ],
          },
          initialValue: 'from-purple-600 to-pink-600',
          description: 'Gradient colors for the image background',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'About Section',
            subtitle: 'Organization information and mission',
            media: 'ℹ️',
          }
        },
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Website Settings',
        subtitle: 'Manage Hero, Global Impact, Services & About Sections',
      }
    },
  },
}
