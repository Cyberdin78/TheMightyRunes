const game = {
    player: {
        hp: 100,
        runes: [],
        location: "Dorfplatz"
    },
    
    log: function(message) {
        const output = document.getElementById('output');
        output.innerHTML += `<br>> ${message}`;
        output.scrollTop = output.scrollHeight;
    },

    processCommand: function(cmd) {
        switch(cmd.toLowerCase()) {
            case "status":
                this.log(`HP: ${this.player.hp} | Runen: ${this.player.runes.join(", ") || "Keine"}`);
                break;
            case "erkunden":
                this.log("Du gehst tiefer in den Dungeon... es ist dunkel und feucht.");
                break;
            default:
                this.log("Unbekannter Befehl. Versuche: 'status' oder 'erkunden'.");
        }
    }
};

function handleInput() {
    const input = document.getElementById('command');
    game.processCommand(input.value);
    input.value = "";
}
