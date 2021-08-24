/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import pascalize from '../../utils/pascalize'
import Headline from './Headline'
import Hero from './Hero'
import HeroSlider from './HeroSlider'

const components = {
  Headline,
  Hero,
  HeroSlider,
}

export default function Slice({ slice }) {
  const type = pascalize(slice.__component.replace('slices.', ''))
  const Component = components[type]

  return <Component {...slice} />
}
