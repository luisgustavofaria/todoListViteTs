import {
  Container,
  ContainerHeader,
  ContainerHeaderDiv01,
  ContainerHeaderDiv02,
  StyledLabel,
} from './styles';
import coreNotesDesktop from '../../assets/core-notes-desktop.svg';
import deleted from '../../assets/deleted.svg';
import search from '../../assets/search.svg';

export function Header() {
  return (
    <Container>
      <ContainerHeader>
        <ContainerHeaderDiv01>
          <img src={coreNotesDesktop} alt="core-notes-desktop" />
          <p>CoreNotes</p>
          <StyledLabel>
            <input type="text" placeholder="Pesquisar Notas" />
            <img src={search} alt="" />
          </StyledLabel>
        </ContainerHeaderDiv01>
        <ContainerHeaderDiv02>
          <img src={deleted} alt="" />
        </ContainerHeaderDiv02>
      </ContainerHeader>
    </Container>
  );
}
