import {FC} from 'react';
import { Wrapper, LogoImage,  } from './Header.styles'
import Logo from '../../../assets/images/logo.svg'
import IconButton from '../../shared/IconButton'
import { FaBars } from 'react-icons/fa'

const Header: FC = props => {
    return (
        <Wrapper>
            <LogoImage src={Logo} alt="Reddit" />
            <IconButton icon={<FaBars />} />
        </Wrapper>
    )
}

export default Header;