import React, { useState } from 'react';
import './UIModal.scss';
const vectorSvg = require('./Vector.svg')

export interface ModalProps {
  title: string;
  subtitle: string;
  list: string[];
}

const Modal: React.FC<ModalProps> = ({ title, subtitle, list }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <img className="close" src={vectorSvg} alt={'close-icon'} onClick={toggleModal} />
        <h2>{title}</h2>
        <div className="modal-content__info">
          <h3>{subtitle}</h3>
          <ul className="list-ul">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
