
//Création de la classe
class ToyRobot {

    //initialisation des propriétés du robot
    constructor(tableSize) {
        this.tableSize = tableSize; //taille de la table
        this.directions = ["NORTH", "EAST", "SOUTH", "WEST"];// directions possibles
        this.x = null;// position x
        this.y = null;// position y
        this.direction = null;// Direction du robot
    }

    //Placer le robot sur la table
    place(x, y, direction) {
        //vérifie si le robot est sur la table
        if (x >= 0 && x < this.tableSize && y >= 0 && y < this.tableSize) {
            this.x = x;
            this.y = y;
            this.direction = direction;
        }
    }

    //Déplacer le robot
    move() {
        //Vérifie si les datas sont correctes
        if (this.x === null || this.y === null || this.direction === null) {
            return;
        }

        let newX = this.x;
        let newY = this.y;

        switch (this.direction) {
            //si NORTH alors  y+1
            case "NORTH":
                newY++;
                break;
            //si EAsT alors x+1
            case "EAST":
                newX++;
                break;
            //si SOUTH alors y-1
            case "SOUTH":
                newY--;
                break;
            case "WEST":
                //si EAsT alors x-1
                newX--;
                break;
        }
        //vérifie si le robot sera toujours sur la table
        if (newX >= 0 && newX < this.tableSize && newY >= 0 && newY < this.tableSize) {
            this.x = newX;

            this.y = newY;
        }
    }
    //Faire tourner le robot vers la gauche
    left() {
        //Check la data
        if (this.direction === null) {
            return;
        }
        //On détermine l'index de la position en utilisant l'opérateur modulo (afin de boucler dans le tableau et toujours revenir à 0 après 3 ou 3 après 0)
        const index = (this.directions.indexOf(this.direction) - 1 + this.directions.length) % this.directions.length;
        this.direction = this.directions[index];
    }

    //Faire tourner le robot vers la droite
    right() {
        if (this.direction === null) {
            return;
        }
        const index = (this.directions.indexOf(this.direction) + 1) % this.directions.length;
        this.direction = this.directions[index];
    }

    //Affiche la position du robot
    report() {
        if (this.x !== null && this.y !== null && this.direction !== null) {
            console.log(`${this.x},${this.y},${this.direction}`);
        }
    }

    // Exécution des commandes
    executeCommand(command) {

        //décomposition de la commande
        const [action, args] = command.split(" ");
        switch (action) {
            // Si l'action est "PLACE" alors on exécute
            case "PLACE":
                //New tableau avec valeurs converties en nombre
                const [x, y, direction] = args.split(",").map((arg, i) => (i < 2 ? parseInt(arg) : arg));
                //retourne les valeurs et la direction    
                this.place(x, y, direction);
                break;
            // Si l'action est "MOVE" alors on exécute
            case "MOVE":
                this.move();
                break;
            //Si l'action est "LEFT" alors on exécute
            case "LEFT":
                this.left();
                break;
            //Si l'action est "RIGHT" alors on exécute
            case "RIGHT":
                this.right();
                break;
            //Si l'action est "REPORT" alors on exécute
            case "REPORT":
                this.report();
                break;
        }
    }
}

// Exécution du programme avec les exemples donnés:

//défini la taille de la table
const tableSize = 5;

//Les commandes a exécuter dans les exemples
const commands = [
    "PLACE 0,0,NORTH",
    "MOVE",
    "REPORT",
    "PLACE 0,0,NORTH",
    "LEFT",
    "REPORT",
    "PLACE 1,2,EAST",
    "MOVE",
    "MOVE",
    "LEFT",
    "MOVE",
    "REPORT",
];

const robot = new ToyRobot(tableSize);

// Pour chaque commande du tableau d'exemple on exécute le programme
commands.forEach((command) => robot.executeCommand(command));
