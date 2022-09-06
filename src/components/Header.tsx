import styled from "@emotion/styled/macro"

const Inner = styled.div``
const Logo = styled.p``
const Gnb = styled.div``
const UserInput = styled.input``
const Link = styled.a`
    
`

const Header: React.FC = () => {
    return (
        <header>
            <Inner className="inner">
                <Logo>
                    <Link>
                        <img 
                            className="desk"
                            src=""
                        />
                        <img 
                            className="mob"
                        />
                    </Link>
                </Logo>
            </Inner>
        </header>
    )
}

export default Header