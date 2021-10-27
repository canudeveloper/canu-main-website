/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import pascalize from '../../utils/pascalize'
import Headline from './Headline'
import Hero from './Hero'
import HeroSlider from './HeroSlider'
import ImageGrid from './ImageGrid'
import VideoPlayer from './VideoPlayer'

const components = {
  Headline,
  Hero,
  HeroSlider,
  ImageGrid,
  VideoPlayer,
}

export default function Slice({ slice }) {
  const type = pascalize(slice.__component.replace('slices.', ''))
  const Component = components[type]

  return <Component {...slice} />
}
