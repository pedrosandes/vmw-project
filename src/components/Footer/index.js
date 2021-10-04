import { NavLink } from "react-router-dom";
import * as S from "./styles";

/* Icons  */
import { Icons, NavLinks } from "./content";

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Copyright>
          <S.CopyrightTitle>© Copyright Valorant Media Wiki </S.CopyrightTitle>
          <S.CopyrightText>
            Valorant Media Wiki é um site não oficial e não endossada pela Riot
            Games de forma alguma. Riot Games, Valorant e todas as propriedades
            associadas são marcas comerciais ou marcas registradas da Riot
            Games, Inc.
          </S.CopyrightText>
        </S.Copyright>
        <S.FooterNav>
          <S.ListNav>
            {NavLinks.map(({ id, name, route }) => {
              return (
                <li key={id}>
                  <NavLink to={route}>{name}</NavLink>
                </li>
              );
            })}
          </S.ListNav>
        </S.FooterNav>
        <S.CreatedBy>
          <S.TextBy>
            Design e desenvolvimento por <br />
            <S.Author>Pedro Sandes</S.Author>
          </S.TextBy>
          <S.Social>
            {Icons.map(({ id, Link, name, icon }) => {
              return (
                <a key={id} href={Link} target="_blank" rel="author noreferrer">
                  <img src={icon} alt={name} title={name} />
                </a>
              );
            })}
          </S.Social>
        </S.CreatedBy>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
