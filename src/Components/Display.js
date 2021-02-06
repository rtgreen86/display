import React, { useReducer } from 'react';
import Character from './Character';

const charCount = 80 * 25;
const dotCount = 7 * 8;
const defaultChar = (new Array(dotCount)).fill(false)
const defaultDisplay = (new Array(charCount)).fill(defaultChar);
const reducer = (state, eventArgs) => eventArgs;
const getDisplay = (activeCharIdx, activeDotIdx) => defaultDisplay.map((char, charIdx) => (charIdx !== activeCharIdx
    ? char
    : char.map((dot, dotIdx) => dotIdx !== activeDotIdx)
));

export default function Display() {
  const [{ charIdx, dotIdx }, dispatch] = useReducer(reducer, {});
  return (
    <div className="display" onMouseOut={() => dispatch({})}>
      {getDisplay(charIdx, dotIdx).map((dots, charIdx) => (
        <Character key={String(charIdx)} charIdx={charIdx} dots={dots} onMouseMove={dispatch} />
      ))}
    </div>
  );
}
