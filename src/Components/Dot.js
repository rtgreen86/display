import React from 'react';

export default function Dot({ charIdx, dotIdx, isLight, onMouseMove }) {
  return (<span
    className={isLight ? 'dot light' : 'dot'}
    onMouseMove={() => onMouseMove({ charIdx, dotIdx })}
  ></span>);
}
