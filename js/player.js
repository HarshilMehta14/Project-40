class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "Players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            Distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('Players');
        //playerInfoRef.remove();
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}
