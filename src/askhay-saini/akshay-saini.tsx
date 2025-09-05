import { secondHighest, secondLargest } from ".";

const AkshaySainiPlaylist = () => {
  return (
    <div>
      <div>second largest</div>
      {secondLargest([1, 2, 3, 4, 5])}
      <div>second highest</div>
      {secondHighest("sdfa12345")}
    </div>
  );
};

export default AkshaySainiPlaylist;
