import React from 'react'
import Perfil from '../../assets/camilafrancatti.jpg';
import Background from '../../assets/background.jpg';

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={Background} alt='Imagem de Fundo'/>
            <Content>
                <UserInfo>
                    <UserPicture src={Perfil} alt='Imagem de Perfil' />
                    <div>
                        <h4>Camila Francatti</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para o curso de html e css no bootcamp dio Orange Tech+... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }