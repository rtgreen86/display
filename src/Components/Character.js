export default function Character({
  dots, onMouseMove
}) {
  return (
    <div className="char">
      {dots
        .map(({ light, ...props }) => ({
          className: light ? 'dot light' : 'dot',
          ...props
        }))
        .map(({className, id}) => (<span className={className} key={id} data-value={id} onMouseMove={onMouseMove}></span>))}
    </div>
  );
}
