class Codebreaker {

    constructor(secret = this.generateSecret()) {
        this.secret = secret;
    }

    guess(value) {
        let respuesta = "";
        for (let i = 0; i < this.secret.length; i++) {
            const secretCharacter = this.secret[i];
            if (value.indexOf(secretCharacter) != -1) {
                const valueCharacter = value[i];
                respuesta += secretCharacter == valueCharacter ? 'X' : '_';
            }
        }
        respuesta = respuesta.split("")
            .sort()
            .join("");
        return respuesta;
    }

    generateSecret() {
        let inBuildSecret = "";
        while (inBuildSecret.length < 4) {
            const generatedValue = Math.floor(Math.random() * 10);
            if (inBuildSecret.indexOf(String(generatedValue)) == -1) {
                inBuildSecret += String(generatedValue);
            }
        }
        return inBuildSecret;
    }

    setSecret(secret) {
        this.secret = secret;
    }
}

module.exports = Codebreaker;