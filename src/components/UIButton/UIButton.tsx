import React from 'react';
import './UIButton.scss';

export interface UIButtonProps {
  label: string;
  disabled?: boolean;
}

const UIButton = (props: UIButtonProps) => {
  return (
    <button className="button__wrapper" disabled={props.disabled}>
      <span className="button__text">{props.label}</span>
    </button>
  );
};

export default UIButton;
