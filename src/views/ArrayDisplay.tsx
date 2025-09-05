// ArrayDisplay.js

type Props = {
  array: number[];
};

const ArrayDisplay: React.FC<Props> = ({ array }) => {
  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          key={index}
          className="array-bar"
          style={{ height: `${value * 5}px` }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default ArrayDisplay;
