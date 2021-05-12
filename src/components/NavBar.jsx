import React, { Component } from 'react'
import styled from 'styled-components'

import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`
    height: 100px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light bg-white',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
