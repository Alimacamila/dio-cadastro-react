//import { Link } from 'react-router-dom';
//import { Button } from '../../components/Button';
//import banner from '../../assets/bannerfict.png';
//import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import Perfil from '../../assets/camilafrancatti.jpg';

import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
    return ( <>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
            <UserInfo percentual={75} nome='Camila Francatti' image={Perfil} alt='Imagem de Perfil'/>
            <UserInfo percentual={35} nome='Camila Francatti' image={Perfil} alt='Imagem de Perfil'/>
            <UserInfo percentual={60} nome='Camila Francatti' image={Perfil} alt='Imagem de Perfil'/>
            <UserInfo percentual={20} nome='Camila Francatti' image={Perfil} alt='Imagem de Perfil'/>
            <UserInfo percentual={90} nome='Camila Francatti' image={Perfil} alt='Imagem de Perfil'/>
        </Column>

    </Container>
    </>)
}

export { Feed }