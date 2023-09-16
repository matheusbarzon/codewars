MAX_PRIOR_SPELLS = 3;

class ExtendableProxy {
  listSpell = [];

  addListSpell(spellName) {}

  constructor() {
    return new Proxy(this, {
      set: function (target, property, value, receiver) {
        Object.defineProperty(receiver, property, {
          value: function () {
            this.addListSpell(property);
          },
        });
        return Reflect.set(...arguments);
      },
    });
  }
}

class Wand extends ExtendableProxy {
  listSpell = [];

  addListSpell(spellName) {
    if (this.listSpell.length == MAX_PRIOR_SPELLS) {
      this.listSpell.pop();
    }
    this.listSpell = [spellName, ...this.listSpell];
  }

  constructor(spells = {}) {
    super();
    for (let key in spells) {
      Wand.prototype[key] = function () {
        Object.defineProperty(Wand, key, {
          value: function () {
            this.addListSpell(key);
            spells[key]();
          },
        });

        // this.addListSpell(key);
        // spells[key]();
      };
    }
  }

  deletrius() {
    this.listSpell = ["deletrius"];
  }

  prioriIncantatem() {
    let previousListSpell = [...this.listSpell];
    this.addListSpell("prioriIncantatem");
    return previousListSpell;
  }
}

const w = new Wand({
  expelliarmus: function () {},
  alohomora: function () {},
  avadaKedavra: function () {},
});

// const calls = saveFunctionCalls(w);

w.alohomora();
w.expelliarmus;
w.avadaKedavra();

w.unlockTwice = function () {
  this.alohomora();
  this.alohomora();
};
w.unlockTwice();

console.log(w.prioriIncantatem());
// console.log(w.prioriIncantatem());
