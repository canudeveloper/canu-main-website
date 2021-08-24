function clearAndUpper(string) {
  return string.replace(/-/, '').toUpperCase()
}

export default function pascalize(string) {
  return string.replace(/(^\w|-\w)/g, clearAndUpper)
}
