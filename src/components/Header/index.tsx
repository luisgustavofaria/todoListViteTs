import { Container, ContainerHeader } from './styles';
import coreNotesDesktop from '../../assets/core-notes-desktop.svg';
import deleted from '../../assets/deleted.svg';
import search from '../../assets/search.svg';

export function Header() {
  return (
    <Container>
      <ContainerHeader>
        <div>
          <img src={coreNotesDesktop} alt="core-notes-desktop" />
          <p>CoreNotes</p>
          <label>
            <input type="text" placeholder="Pesquisar Notas" />
            <img src={search} alt="" />
          </label>
        </div>
        <div>
          <img src={deleted} alt="" />
        </div>
      </ContainerHeader>
    </Container>
  );
}
