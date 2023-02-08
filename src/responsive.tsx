import { CSSObject, css } from "styled-components";

interface  Props{

}

export const Mobile = (props: CSSObject) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};
