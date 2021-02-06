import { memo } from 'react';
import Dot from './Dot';

export default memo(({
  charIdx, dots, onMouseMove
}) => (
  <div className="char">
    {dots.map((dotIsLight, dotIdx) => (
      <Dot key={String(dotIdx)} charIdx={charIdx} dotIdx={dotIdx} isLight={dotIsLight} onMouseMove={onMouseMove}></Dot>
    ))}
  </div>
));
