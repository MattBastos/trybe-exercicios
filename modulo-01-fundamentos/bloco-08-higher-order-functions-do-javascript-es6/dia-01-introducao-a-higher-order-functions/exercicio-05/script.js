const battleMembers = {
  mage: {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  },
  warrior: {
    healthPoints: 200,
    strength: 30,
    weaponDamage: 2,
    damage: undefined,
    armor: 3,
  },
  dragon: {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  },
}

const dragonAttack = (dragon) => {
  const minDamage = 15;
  const dragonDamage = Math.floor((Math.random() * (battleMembers.dragon.strength - minDamage + 1) + minDamage));
  return dragonDamage;
};

const warriorAttack = (warrior) => {
  const minDamage = battleMembers.warrior.strength;
  const maxDamage = minDamage * battleMembers.warrior.weaponDamage;
  const warriorDamage = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage);
  return warriorDamage;
};

const mageAttack = (mage) => {
  const mageMana = battleMembers.mage.mana;
  const minDamage = battleMembers.mage.intelligence;
  const maxDamage = minDamage * 2;
  const turnStatus = {
    manaSpent: 0,
    damageDealt: 'Not enough mana points!'
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage);
    turnStatus.manaSpent = 15;
    turnStatus.damageDealt = mageDamage;
    return turnStatus;
  }
  return turnStatus;
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(battleMembers.warrior);
    battleMembers.warrior.damage = warriorDamage;
    battleMembers.dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStatus = mageAttack(battleMembers.mage);
    const mageDamage = mageTurnStatus.damageDealt;
    battleMembers.mage.damage = mageDamage;
    battleMembers.mage.mana -= mageTurnStatus.manaSpent;
    battleMembers.dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(battleMembers.dragon);
    battleMembers.mage.healthPoints -= dragonDamage;
    battleMembers.warrior.healthPoints -= dragonDamage - battleMembers.warrior.armor;
    battleMembers.dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());