export const reverseAddress = (str: string) => {
  return str.split(', ').reverse().join(', ');
};
