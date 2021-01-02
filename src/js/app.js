class Character {
  constructor(name, type) {
    if (name.length < 2 && name.length > 10) throw new Error('Невалидное имя');
    if (type !== 'Bowerman' && type !== 'Swordsman' && type !== 'Magician' &&
     type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie' ) throw new Error ('Невалидный класс');
    this.name = name
    this.type = type
  }
}

class Bowerman extends Character {
    constructor() {
        super(this.name, this.type)
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
}

class Swordsman extends Character {
    constructor() {
        super(this.name, this.type)
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }
}

class Magician extends Character {
    constructor() {
        super(this.name, this.type)
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }
}

class Undead extends Character {
    constructor() {
        super(this.name, this.type)
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
}

class Zombie extends Character {
    constructor() {
        super(this.name, this.type)
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }
}

class Daemon extends Character {
    constructor() {
        super(this.name, this.type)
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }
}