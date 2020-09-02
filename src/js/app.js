/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// TODO: write your code here
// eslint-disable-next-line max-classes-per-file
class Character {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }
}

class Bowman extends Character {

}

class Swordsman extends Character {

}

class Magician extends Character {

}

class Undead extends Character {

}

class Zombie extends Character {

}

class Daemon extends Character {

}


const test1 = new Daemon('Daemon', 10, 40);
console.log(test1);

// {name: "Daemon", attack: 10, defense: 40}
export default Character;
export {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
};
