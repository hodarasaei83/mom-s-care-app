export const PHONE_NUMBER_REGEX = /^(?:\+98|0098|0)?9\d{9}$/

export const normalizePhoneNumber = (value?: string): string => {
  if (!value) return ''
  return value.replace(/[\s\-()]/g, '')
}

export const isValidPhoneNumber = (value?: string): boolean => {
  if (!value) return false
  return PHONE_NUMBER_REGEX.test(normalizePhoneNumber(value))
}
