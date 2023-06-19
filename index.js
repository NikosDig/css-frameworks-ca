function createAnimal(name, type, food) {
  return {
    name: name,
    type: type,
    food: food,
    eat() {
      console.log(
        `Hi my name is ${this.name} , i am a ${this.type}, and i like to eat ${this.food}`
      );
    },
  };
}

const myra = createAnimal("Myra", "Dog", "pig ears");
myra.eat();
