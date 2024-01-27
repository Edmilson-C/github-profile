import InputText from '../common/inputs/InputText'

import HeroImage from '../../assets/images/hero-image-github-profile.png'

const Header = () => (
  <header
    className="pt-8 w-screen flex justify-center bg-cover"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${HeroImage})`,
      height: '30vh'
    }}
  >
    <InputText type="text" className="w-auto" size="lg" placeholder="Username" />
  </header>
)

export default Header
