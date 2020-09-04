/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
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
  constructor(name, attack, defense) {
	  super(name, 25, 25);
  }
}

class Swordsman extends Character {
  constructor(name, attack, defense) {
	  super(name, 40, 10);
  }
}

class Magician extends Character {
  constructor(name, attack, defense) {
	  super(name, 10, 40);
  }
}

class Undead extends Character {
  constructor(name, attack, defense) {
	  super(name, 25, 25);
  }
}

class Zombie extends Character {
  constructor(name, attack, defense) {
	  super(name, 40, 10);
  }
}

class Daemon extends Character {
  constructor(name, attack, defense) {
	  super(name, 10, 40);
  }
}


// {name: "Daemon", attack: 10, defense: 40}
export default Character;
export {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
};
