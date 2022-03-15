import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#22223b',
    border: 'none',
  },
};

export interface IModalProps {
  open: boolean;
  width?: string;
  height?: string;
  header: string;
  children?: JSX.Element;
  close: () => void;
}

const ModalComponent = ({
  open,
  width,
  height,
  header,
  children,
  close,
}: IModalProps): JSX.Element => {
  Modal.defaultStyles.overlay.backgroundColor = '#0000006c';

  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalWrapper
        style={{
          width: width || '300px',
          height: height || 'min-content',
        }}
      >
        <ModalHeader>
          {header}
          <CloseButton onClick={close}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>
        {children}
      </ModalWrapper>
    </Modal>
  );
};

const WrappedModal = styled.div``;

const ModalWrapper = styled.div``;

const ModalHeader = styled.div`
  padding: 5px 0px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  color: #fff;
`;

const CloseButton = styled.div`
  -webkit-app-region: no-drag;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: auto;
`;

export default ModalComponent;
