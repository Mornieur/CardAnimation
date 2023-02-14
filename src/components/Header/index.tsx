import Link from 'next/link';
import { SearchInput } from '../SearchInput';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.HeaderItems>
        <div className="items">
          <section className="pagesSection">
            <Link href={'/'}>About</Link>
            <Link href={'/Characters'}>Characters</Link>
            <Link href={'/'}>Recommendation</Link>
          </section>
          <section className="searchSection">
            <SearchInput placeholder="Procure aqui..." />
          </section>
        </div>
      </S.HeaderItems>
    </S.Container>
  );
};
