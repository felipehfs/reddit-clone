import {FC} from 'react';
import { Wrapper, LogoImage,  SearchContainer} from './Header.styles'
import Logo from '../../../assets/images/logo.svg'
import IconButton from '../../shared/IconButton'
import { FaBars, FaSearch } from 'react-icons/fa'
import TextInput from '../../shared/TextInput';
import { useState } from 'react';
import ProfileDropdown from '../ProfileDropdown';

const Header: FC = props => {
    const [search, setSearch] = useState('');
    return (
        <Wrapper>
            <LogoImage src={Logo} alt="Reddit" />
            <SearchContainer className="hide-in-mobile">
                <form>
                    <TextInput
                        type="text" 
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        icon={<FaSearch />} />
                </form>
            </SearchContainer>
            <section className="hide-in-desktop">
                <IconButton icon={<FaBars />} />
            </section>
           <ProfileDropdown />
        </Wrapper>
    )
}

export default Header;