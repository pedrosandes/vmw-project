import * as S from "./styles"

import video from "../../assets/videos/video.mp4"
import cape from "../../assets/img/capa-video.png"

/* Content  */
import { paragraphs, minimo, recomendados, premium } from "./content"

const SobreContent = () => {
  return(
    <S.Wrapper>
      <S.Container>
        <S.Navigation>
          <S.Link href="#valorant">O QUE É VALORANT?</S.Link>
          <S.Link href="#configs">Configurações do PC para jogar Valorant</S.Link>
          
          <ul>
            <li>
              <S.Link href="#minimos">Mínimo</S.Link>
            </li>
            <li>
              <S.Link href="#recomendados">Recomendados</S.Link>
            </li>
            <li>
              <S.Link href="#premium">Premium</S.Link>
            </li>
          </ul>
          <S.Link href="#artigo">Artigo completo</S.Link>
        </S.Navigation>

        <S.ContentTexts>

          <S.Title>
            Valorant: o que é e tudo que precisa saber sobre o FPS da Riot
          </S.Title>

          <S.Paragraph>
            Jogo de tiro criado pela mesmo produtora de{' '}
            <span>League of Legends</span>, saiba tudo sobre 
            Valorant e conheça os melhores produtos para aproveitar o FPS
          </S.Paragraph>

          <S.Paragraph>
            {paragraphs.firstParagraph}
          </S.Paragraph>

          <S.Paragraph>
            {paragraphs.secondParagraph}
          </S.Paragraph>

          <S.Paragraph>
            {paragraphs.thirdParagraph}
          </S.Paragraph>
          
          <S.Paragraph>
            {paragraphs.fourthParagraph}
          </S.Paragraph>

          <S.Title id="valorant">O que é valorant?</S.Title>

          <S.Video controls poster={cape}>
            <source src={video} type="video/mp4"/>
          </S.Video>

          <S.Paragraph>
          Lançado em <span>2020</span>, Valorant é um jogo de tiro online 
          e multiplayer no qual dois grupos com cinco jogadores 
          se enfrentam nos diversos mapas de Valorant, inspirados 
          em locais do mundo real. Dependendo do mapa disputado, 
          cada lado da disputa deverá alcançar um objetivo determinado 
          ou impedir o outro lado de conseguir conquistar essa meta.
          </S.Paragraph>

          <S.Paragraph>
            {paragraphs.fifthParagraph}
          </S.Paragraph>

          <S.Paragraph>
            {paragraphs.sixthParagraph}
          </S.Paragraph>

          <S.Paragraph>
            {paragraphs.seventhParagraph}
          </S.Paragraph>

          <S.Title id="configs">Configurações do PC para jogar Valorant</S.Title>

          <S.Paragraph>
            {paragraphs.eighthParagraph}
          </S.Paragraph>

          <S.Paragraph>
          {paragraphs.ninthParagraph}
          </S.Paragraph>

          <S.Title id="minimos">Requisitos mínimos</S.Title>

          <S.List>
            {minimo.map(item =>  <S.ListItem>{item}</S.ListItem>) }
          </S.List>
          
          <S.Title id="recomendados">Requisitos Recomendados</S.Title>

          <S.List>
          {recomendados.map(item => <S.ListItem>{item}</S.ListItem>)}
          </S.List>

          <S.Title id="premium">Requisitos Premium</S.Title>

          <S.List>
          {premium.map(item => <S.ListItem>{item}</S.ListItem>)}
          </S.List>

          <S.Title id="artigo">Artigo completo</S.Title>

          <S.Paragraph>Para ler o artigo completo acesse esse{' '}
            <span><a href="https://www.buscape.com.br/console-de-video-game/conteudo/valorant#inicio" target="_blank" rel="noreferrer" >Link</a></span>. 
            Autor do artigo <span>Filipe Salles</span>.</S.Paragraph>
        </S.ContentTexts>
      </S.Container>
    </S.Wrapper>
  )
}

export default SobreContent