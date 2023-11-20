import React, { useState } from 'react';
import './UIModalSchedule.scss';
import Vector from './Vector.svg';

export interface ModalScheduleProps {
  title: string;
  subtitle?: string[];
  data: (string | undefined)[];
}

const defaultSubtitle = ['Дата', 'Время', 'Дисциплина', 'Тип', 'Преподаватель', 'Адрес', 'Аудитория / URL', 'Группа']

const ModalSchedule = ({ title, subtitle = defaultSubtitle, data }: ModalScheduleProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className={`modal-container ${isOpen ? 'open' : ''}`}>
        <div className='modal-wrapper'>
          <div className='modal__title-container'>
            <p className='modal__title'>{title}</p>
            <img className='modal__close-icon' src={Vector} alt={'close-icon'} onClick={toggleModal} />
          </div>
          <div className='modal__info-wrapper'>
            {subtitle.map((sub, index) => (
                <div key={index} className='modal__content'>
                  <p className='modal__subtitle'>{sub}</p>
                  <p className='modal__data'>{data[index] || '-'}</p>
                  {index !== subtitle.length - 1 && <div className='modal__separator' />}
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ModalSchedule;
