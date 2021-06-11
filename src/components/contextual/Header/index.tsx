import {FC} from 'react';
import { Wrapper, LogoImage,  SearchContainer, Profile} from './Header.styles'
import Logo from '../../../assets/images/logo.svg'
import IconButton from '../../shared/IconButton'
import { FaBars, FaSearch } from 'react-icons/fa'
import TextInput from '../../shared/TextInput';
import { useState } from 'react';
import { Avatar } from '../../shared/Avatar';

const Header: FC = props => {
    const [search, setSearch] = useState('')
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
            <Profile>
                <Avatar size={32} src="https://ui-avatars.com/api/?name=felipe+henrique" alt="Felipe Henrique" />
                <section>
                    <p>Felipe Henrique</p>
                    <small>Felipehfs</small>
                </section>
            </Profile>
        </Wrapper>
    )
}

export default Header;