import { FC } from "react"
import { Wrapper, LogoImage, SearchContainer } from "./Header.styles"
import Logo from "../../../assets/images/logo.svg"
import IconButton from "../../shared/IconButton"
import { FaBars, FaSearch } from "react-icons/fa"
import TextInput from "../../shared/TextInput"
import { useState } from "react"
import ProfileDropdown from "../ProfileDropdown"
import { useHistory } from "react-router-dom"

interface HeaderProps {
  initialSearch?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const [search, setSearch] = useState(props.initialSearch ?? '')
  const history = useHistory()

  function handleOnSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!search.trim()) return;
    
    history.push('/search/' + encodeURI(search))
  }

  return (
    <Wrapper>
      <LogoImage src={Logo} alt="Reddit" onClick={() => history.push("/")} />
      <SearchContainer className="hide-in-mobile">
        <form onSubmit={handleOnSubmit}>
          <TextInput
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            icon={<FaSearch />}
          />
        </form>
      </SearchContainer>
      <section className="hide-in-desktop">
        <IconButton icon={<FaBars />} />
      </section>
      <ProfileDropdown />
    </Wrapper>
  )
}

Header.defaultProps = {
  initialSearch: ''
}

export default Header
