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

export const settingsQuery = `*[_type == "settings"][0] {
  siteName,
  tagline,
  heroSection,
  serviceTimes,
  contactInfo,
  socialMedia,
  announcementBanner
}`;

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
