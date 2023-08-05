import React from "react";
import "./ContactModal.css";
import { X } from "@phosphor-icons/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose(): void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <div
      className="modal-overlay"
      aria-hidden={Boolean(!isOpen)}
      // onClick={onClose}
    >
      <div className="modal" aria-hidden={Boolean(!isOpen)}>
        <div className="modal-header">
          <h5>Contato</h5>
          <button onClick={onClose}>
            <X size={32} weight="bold" color="var(--gray-0)" />
          </button>
        </div>
        <p>
          Possuí alguma oportunidade para conversar ou um projeto que precise
          ser desenvolvido? Ou está interessado apenas em trocar uma idea sobre
          desenvolvimento?
        </p>
        <p>Me envie uma mensagem e vamos conversar!</p>

        <div className="input-container">
          <label>Nome / Empresa</label>
          <input></input>
        </div>

        <div className="input-container">
          <label>Assunto</label>
          <input></input>
        </div>

        <div className="input-container">
          <label>Mensagem</label>
          <textarea />
        </div>

        <div className="button-container">
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}
