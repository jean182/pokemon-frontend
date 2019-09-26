import React from 'react';

const PokedexTrigger = ({
  buttonRef,
  onOpen,
  text
}) => <button className="pokedex-btn-trigger" onClick={onOpen} ref={buttonRef}>{text}</button>;

export default PokedexTrigger;
