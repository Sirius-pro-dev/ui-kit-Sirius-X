import React from 'react';
import './UIModalSchedule.scss';

export interface ModalScheduleProps {
  title: string;
  subtitle?: string[];
  isOpen: boolean;
  onClose: () => void;
  data: {
    dataDay?: {
      day?: string;
    };
    time?: string;
    name?: string;
    classType?: string;
    teacher?: string;
    placeActivity?: string;
    classRoom?: string;
    group?: {
      name?: string;
    };
  };
}

const defaultSubtitle = ['День', 'Время', 'Дисциплина', 'Тип', 'Преподаватель', 'Адрес', 'Аудитория', 'Группа']

const ModalSchedule: React.FC<ModalScheduleProps> = ({ title, subtitle = defaultSubtitle, data, isOpen, onClose }) => {
  const { dataDay, time, name, classType, teacher, placeActivity, classRoom, group } = data;

  const dataMapping: any = {
    'День': dataDay?.day || '-',
    'Время': time || '-',
    'Дисциплина': name || '-',
    'Тип': classType || '-',
    'Преподаватель': teacher || '-',
    'Адрес': placeActivity || '-',
    'Аудитория': classRoom || '-',
    'Группа': group?.name || '-',
  };


  return (
      <div className={`modal-container ${isOpen ? 'open' : ''}`}>
        <div className='modal-wrapper'>
          <div className='modal__title-container'>
            <p className='modal__title'>{title}</p>
            <div className="modal__close-icon" onClick={onClose}>
              <div className="modal__close-cross"></div>
            </div>
          </div>
          <div className="modal__info-wrapper">
            {subtitle.map((sub, index) => (
                <div key={index} className="modal__content">
                  <p className="modal__subtitle">{sub}</p>
                  <p className="modal__data">{dataMapping[sub]}</p>
                  {index !== subtitle.length - 1 && <div className="modal__separator" />}
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ModalSchedule;
