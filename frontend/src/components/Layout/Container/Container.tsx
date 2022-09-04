import * as S from "./ContainerAtom";

const Container: React.FC<{ children: any }> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
