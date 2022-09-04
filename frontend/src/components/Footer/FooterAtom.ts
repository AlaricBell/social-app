import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 576px) {
    max-width: 540px;
  }

  @media (max-width: 768px) {
    max-width: 720px;
  }

  @media (max-width: 992px) {
    max-width: 960px;
  }

  @media (max-width: 1200px) {
    max-width: 1140px;
  }
`;

export const ContainerFluid = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
`;
