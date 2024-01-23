import { ContainerHeader, ContainerInput } from './styles';
import coreNotesDesktop from '../../assets/core-notes-desktop.svg';
import deleted from '../../assets/deleted.svg';
import search from '../../assets/search.svg';

export function Header() {
  return (
    <ContainerHeader>
      <div>
        <img src={coreNotesDesktop} alt="core-notes-desktop" />
        <p>Core Notes</p>
        <ContainerInput>
          <input type="text" />
          <img src={search} alt="" />
        </ContainerInput>
      </div>
      <div>
        <img src={deleted} alt="" />
      </div>
    </ContainerHeader>
  );
}
