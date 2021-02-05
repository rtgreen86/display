import React, { useReducer } from 'react';
import Character from './Character'

function getDefaultData() {
  const charCount = 80 * 25;
  const dotCount = 7 * 8;

  const display = [];
  for (let i = 0; i < charCount; i++) {
    const id = `char-${i}`;
    const dots = [];
    display.push({ id, dots });
    for (let j = 0; j < dotCount; j++) {
      dots.push({
        id: `char-${i}-dot-${j}`,
        light: false
      });
    }
  }
  return display;
}

const dataReducer = (state, event) => {
  const value = event.target.dataset.value;
  return state.reduce((chars, char) => {
    const isMouseOvered = char.dots.some(({id}) => id === value);
    const isLight = char.dots.some(({light}) => light);
    const toggleDots = light => dot => ({...dot, light });
    const toggleDotWithId = (targetId, targetLight) => ({id, light, ...props}) => ({
      ...props,
      id,
      light: id === targetId ? targetLight : light
    });
    return [...chars, (!isMouseOvered && !isLight)
      ? char
      : {
        ...char,
        dots: char.dots.map(toggleDots(isMouseOvered)).map(toggleDotWithId(value, false))
      }
    ];
  }, []);
};

export default function Display() {
  const [data, dispatch] = useReducer(dataReducer, getDefaultData())
  return (
    <div className="display">
      {data.map(({ id, dots }) => (<Character key={id} dots={dots} onMouseMove={dispatch}></Character>))}
    </div>
  );
}
