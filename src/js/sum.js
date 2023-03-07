export default function sum(n1 = 0, n2 = 0) {
  if (typeof n1 !== 'number') throw new Error(`${n1} is not valid number`);
  if (typeof n2 !== 'number') throw new Error(`${n2} is not valid number`);

  return n1 + n2;
}
