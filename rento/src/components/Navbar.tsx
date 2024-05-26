import { CartButton, LinksDropdown, Logo, NavLinks, ToggleMode } from '.';

function Navbar() {
  return (
    <nav className="bg-muted py-4">
        <div className="align-element flex justify-between items-center">
            <Logo />
            <NavLinks />
            <LinksDropdown />
            <div className='flex justify-center items-center gap-x-4'>

                <ToggleMode />
                <CartButton />
            
            </div>

        </div>
    </nav>
  )
}

export default Navbar;
