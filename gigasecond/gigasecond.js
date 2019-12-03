//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (newTime) => {
  let startTime = newTime.getTime();
  return new Date(startTime + 1000000000000);
};
