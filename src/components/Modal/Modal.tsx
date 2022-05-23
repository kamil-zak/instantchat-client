import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOutsideClick from '../../hooks/useOutsideClick';
import { ReactNode, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { StyledBackground, StyledContent, StyledTopBar, Wrapper } from './Modal.styles';

interface IModalProps {
  children: ReactNode;
  handleClose: () => void;
}

const modalRoot = document.getElementById('modal');

const Modal = ({ handleClose, children }: IModalProps) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modalRoot?.appendChild(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  });

  const ref = useOutsideClick(handleClose);

  return createPortal(
    <StyledBackground>
      <Wrapper ref={ref}>
        <StyledTopBar>
          <FontAwesomeIcon cursor="pointer" icon={faTimes} onClick={handleClose} />
        </StyledTopBar>
        <StyledContent>{children}</StyledContent>
      </Wrapper>
    </StyledBackground>,
    el,
  );
};

export default Modal;
