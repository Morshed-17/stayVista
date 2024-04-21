import { Link } from 'react-router-dom'
import Container from '../Container'
import logoImg from '../../../assets/images/logo.png'
import MenuDropdown from './MenuDropdown'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Logo/>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
