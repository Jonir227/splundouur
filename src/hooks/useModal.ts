import { useContext } from "react";
import { ModalContext } from "../container";

export const useModal = () => useContext(ModalContext);
