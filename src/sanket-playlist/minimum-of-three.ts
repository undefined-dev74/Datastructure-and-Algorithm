/*
This problem is about finding minimum value among three values
like x=10, y=20, z=14 so minimum value will be x=10
**/
export function minimumOfThree(x: number, y: number, z: number): number {
  if (x < y && x < z) return x;
  if (y < x && y < z) return y;
  return z;
}
