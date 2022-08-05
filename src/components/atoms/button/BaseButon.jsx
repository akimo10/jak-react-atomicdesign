import styled from "styled-components";

//共通化できそうなスタイルを切り出してコンポーネントにする。
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
