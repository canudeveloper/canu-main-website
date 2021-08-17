import Headline from './Headline'

const components = {
  Headline,
}

export default function Section({ type, fields }) {
  const Component = components[type.replace('section', '')]

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...fields} />
}
