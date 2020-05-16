export const slugify = str =>
  str
    // replace forward slash and spaces with dash
    .replace(/\/|\s+/g, '-')
    // replace duplicate dashes with single dash
    .replace(/[\s-]+/g, '-')
    .toLowerCase()
    .trim();
