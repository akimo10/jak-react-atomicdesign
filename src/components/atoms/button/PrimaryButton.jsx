import styled from "styled-components";
import { BaseButton } from "./BaseButon";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//既に作成しているstyledが存在する場合、styled(component)``で追加記述を書ける
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
