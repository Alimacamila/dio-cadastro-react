import React from 'react'
import logo from '../../assets/logodio.png'
import Perfil from '../../assets/camilafrancatti.jpg';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='logo da dio' />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src={Perfil} alt='Imagem de Perfil' />
                    ) : (
                        <>
                            <MenuRight href=''>Home</MenuRight>
                            <Button tittle='Entrar' />
                            <Button tittle='Cadastrar' />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }