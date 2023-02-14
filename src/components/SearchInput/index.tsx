import { ChangeEvent, InputHTMLAttributes } from 'react';
import { BiSearch } from 'react-icons/bi';
import * as S from './styles';
import debounce from '../../utils/debounce';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (Event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  ...rest
}: SearchInputProps) => {
  const controledOnChange = onChange
    ? debounce((Event: ChangeEvent<HTMLInputElement>) => onChange(Event))
    : undefined;

  return (
    <S.Container>
      <BiSearch />
      <input
        type="text"
        id="search"
        autoComplete="off"
        onChange={controledOnChange}
        {...rest}
      />
    </S.Container>
  );
};

export { SearchInput };
