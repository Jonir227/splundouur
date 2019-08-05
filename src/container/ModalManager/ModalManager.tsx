import React, { useState, createContext, useMemo } from 'react';
import styled from 'styled-components';

interface IModalContextState {
  openModal: (render: JSX.Element) => void;
  closeModal: () => void;
}

export const ModalContext = createContext({} as IModalContextState);

interface IModalManagerState {
  isOpen: boolean;
  render: JSX.Element | null;
}

const ModalBGWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.35);
`;

const ModalWrapper = styled.div`
  background-color: white;
  min-width: 200px;
  min-height: 100px;
`;

const ModalHeader = styled.div`
  height: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const defaultModalState: IModalManagerState = {
  isOpen: false,
  render: null,
};

export const ModalManager: React.FC = ({ children }) => {
  const [modalState, setModalState] = useState<IModalManagerState>(defaultModalState);

  const value = useMemo(
    () => ({
      openModal(render: JSX.Element) {
        setModalState({ isOpen: true, render });
      },
      closeModal() {
        setModalState({ isOpen: false, render: null });
      },
    }),
    [setModalState],
  );

  return (
    <ModalContext.Provider value={value}>
      {modalState.isOpen && (
        <ModalBGWrapper>
          <ModalWrapper>
            <ModalHeader>
              <button onClick={value.closeModal}>close</button>
            </ModalHeader>
            <div>{modalState.render}</div>
          </ModalWrapper>
        </ModalBGWrapper>
      )}
      {children}
    </ModalContext.Provider>
  );
};
