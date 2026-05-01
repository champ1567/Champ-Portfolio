/**
 * Smooth-scroll to a section by its id.
 * @param {string} id - The target element's id attribute.
 */
export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Lightweight utility for conditionally joining class names.
 * Filters out falsy values (false, null, undefined, empty strings).
 *
 * @param {...(string | false | null | undefined)} classes
 * @returns {string}
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}
