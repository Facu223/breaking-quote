import React from "react";
import SpinnerStyles from './Spinner.module.css'

const Spinner = () => {
  return (
    <div class={SpinnerStyles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
