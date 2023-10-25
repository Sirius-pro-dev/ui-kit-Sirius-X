import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <section className="spinner-block">
      <section
        className="comet-spinner"
        tabIndex={1}
        aria-label="comet spinner"
      >
        <div className="inner-circle"></div>
        <div className="comet"></div>
      </section>
    </section>
  );
};

export default Loader;
