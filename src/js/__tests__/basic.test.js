import {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../app';

describe('check inheritance of Character', () => {
  test('return class Bowman', () => {
    const expected = { name: 'Bowman', attack: 25, defense: 25 };
    const received = new Bowman('Bowman', 25, 25);
    expect(received).toEqual(expected);
  });
  test('return class Swordsman', () => {
    const expected = { name: 'Swordsman', attack: 40, defense: 10 };
    const received = new Swordsman('Swordsman', 40, 10);
    expect(received).toEqual(expected);
  });
  test('return class Magician', () => {
    const expected = { name: 'Magician', attack: 10, defense: 40 };
    const received = new Magician('Magician', 10, 40);
    expect(received).toEqual(expected);
  });
  test('return class Undead', () => {
    const expected = { name: 'Undead', attack: 25, defense: 25 };
    const received = new Undead('Undead', 25, 25);
    expect(received).toEqual(expected);
  });
  test('return class Zombie', () => {
    const expected = { name: 'Zombie', attack: 40, defense: 10 };
    const received = new Zombie('Zombie', 40, 10);
    expect(received).toEqual(expected);
  });
  test('return class Daemon', () => {
    const expected = { name: 'Daemon', attack: 10, defense: 40 };
    const received = new Daemon('Daemon', 10, 40);
    expect(received).toEqual(expected);
  });
});
