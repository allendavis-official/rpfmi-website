export const sermonsQuery = `*[_type == "sermon"] | order(date desc) {
  _id,
  title,
  slug,
  pastor,
  date,
  scripture,
  audioUrl,
  videoUrl,
  description,
  image,
  series
}`;

export const sermonQuery = `*[_type == "sermon" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  pastor,
  date,
  scripture,
  audioUrl,
  videoUrl,
  description,
  sermonNotes,
  image,
  series
}`;

export const eventsQuery = `*[_type == "event" && date >= now()] | order(date asc) {
  _id,
  title,
  slug,
  date,
  endDate,
  time,
  location,
  description,
  image,
  registrationLink,
  featured
}`;

export const ministriesQuery = `*[_type == "ministry"] | order(order asc) {
  _id,
  name,
  slug,
  description,
  leader,
  schedule,
  contactEmail,
  image,
  order
}`;

export const settingsQuery = `
  *[_type == "settings"][0]{
    heroSection {
      backgroundImage{
        asset->{
          url
        }
      },
      mainTitle,
      highlightedTitle,
      subtitle,
      buttons[]{
        text,
        link,
        style
      },
      featureCards[]{
        icon,
        title,
        description,
        buttonText,
        buttonLink,
        isDonate
      },
      overlay {
        enabled,
        color,
        opacity
      }
    },
    globalImpact {
      enabled,
      title,
      subtitle,
      footerText,
      backgroundGradient {
        fromColor,
        toColor
      },
      stats[]{
        icon,
        number,
        suffix,
        label
      },
      animationSettings {
        duration,
        staggerDelay
      }
    },
    services {
      enabled,
      title,
      subtitle,
      servicesList[]{
        title,
        description,
        time,
        image{
          asset->{
            url
          }
        },
        gradient
      }
    },
    about {
      enabled,
      title,
      paragraph1,
      paragraph2,
      primaryButton {
        text,
        link
      },
      secondaryButton {
        text,
        link
      },
      image{
        asset->{
          url
        }
      },
      imageAlt,
      gradient
    }
  }
`;

export const announcementsQuery = `*[_type == "announcement"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  author,
  excerpt,
  content,
  featuredImage,
  category
}`;

export const heroSectionQuery = `
  *[_type == "heroSection"][0] {
    title {
      text,
      highlightedText
    },
    subtitle,
    backgroundImage {
      asset -> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
    buttons[] {
      _key,
      label,
      variant,
      link,
      isExternal,
      icon
    },
    featureCards[] {
      _key,
      icon {
        type,
        asset -> {
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        }
      },
      title,
      description,
      button {
        label
      },
      link,
      isExternal
    },
    showScrollIndicator
  }
`;
