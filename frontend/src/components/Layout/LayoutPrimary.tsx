import * as S from "./Container/ContainerAtom";

const Container: React.FC<{ children: any }> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
