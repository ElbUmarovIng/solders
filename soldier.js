const soldier = {
    name: `ахмед`,
    zdorove: 10,
    orujie: {
        names: `калаш`,
        potron: 30
    },
    pripasi: 3,

    fier: function () {
        this.orujie.potron -= 1
        console.log(`бах-бах`);
        if (this.orujie.potron === 0) {
            return `Обойма пуста. Перезаредитесь`
        }
    },
    recharge: function () {
        this.orujie.potron = 30;
        this.pripasi -= 1
        console.log(`перезарядка...`);
        if (this.pripasi === 0) {
            return `не осталось припасов`
        }
    },
    hurt: function () {
        this.zdorove -= 1
        if (this.zdorove === 0) {
            console.log(`Ты проиграл`);
        }
    }
}


console.log(soldier.fier());



