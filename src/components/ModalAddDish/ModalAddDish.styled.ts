import styled from "styled-components";
import ReactModal from "react-modal";
import {HTMLAttributes} from "react";

interface WithValidationProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>{
  isCorrect: boolean
}

export const Modal = styled(ReactModal).attrs<ReactModal.Props>(props => ({
  style: {
    overlay: {
      backgroundColor: 'rgba(50,21,91,0.38)',
      backdropFilter: 'blur(3px)',
      overflow: 'hidden',
    }
  }
}))`
  margin: 100px auto 0;
  width: 400px;
`;

export const HeadingInput = styled.input<WithValidationProps>`
  width: 320px;
  height: 55px;
  font-family: Gaegu, sans-serif;
  font-weight: bold;
  font-size: 45px;
  border: ${props => props.isCorrect ? '1px solid #000' : '2px solid #b01515'};
  border-radius: ${props => props.theme.box.borderRadius};
  padding: 5px 20px;

  &:focus {
    filter: ${props => props.theme.box.boxShadow}
  }
`;

export const DescriptionArea = styled.textarea<WithValidationProps>`
  margin-top: 20px;
  width: 320px;
  height: 115px;
  resize: none;
  font-size: 18px;
  padding: 15px 20px;
  border: ${props => props.isCorrect ? '1px solid #000' : '2px solid #b01515'} ;
  border-radius: ${props => props.theme.box.borderRadius};

  &:focus {
    filter: ${props => props.theme.box.boxShadow}
  }
`;