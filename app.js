// Configure la table
const tableSize = 5;

// Définie les directions possibles
const directions = {
    north: 'NORTH',
    east: 'EAST',
    south: 'SOUTH',
    west: 'WEST'
};

// Les actions possibles du robot
const actions = {
    PLACE: 'PLACE',
    MOVE: 'MOVE',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    REPORT: 'REPORT'
};

// Configuration du robot
const robot = {
    x: null,
    y: null,
    direction: null
};

// Fonction qui défini l'emplacement du robot sur la table et la direction dans laquelle il va se diriger.
function place(x, y, direction) {
    // Vérifie d'abord si le robot est bien placé sur la table
    if (x >= 0 && x < tableSize && y >= 0 && y < tableSize) {
        // Configure la position du robot
        robot.x = x;
        robot.y = y;
        robot.direction = direction;
    }
}

// Fonction pour bouger le robot
function move() {
    // Check si les commandes sont correctes
    if (robot.x !== null && robot.y !== null && robot.direction !== null) {
        // calcule la prochaine direction du robot
        let newX = robot.x;
        let newY = robot.y;
        switch (robot.direction) {
            case directions.north:
                newY++;
                break;
            case directions.east:
                newX++;
                break;
            case directions.south:
                newY--;
                break;
            case directions.west:
                newX--;
                break;
        }
        // Vérifie si la prochaine position est sur la table avant de valider la new position
        if (nextX >= 0 && nextX < tableSize && nextY >= 0 && nextY < tableSize) {
            // Configure la prochaine position 
            robot.x = nextX;
            robot.y = nextY;
        }
    }
}

// Fonction de rotation vers la gauche
function left() {
    // Check si les commandes sont correctes
    if (robot.x !== null && robot.y !== null && robot.direction !== null) {
        // Calcule de la nouvelle direction
        switch (robot.direction) {
            case directions.north:
                robot.direction = directions.west;
                break;
            case directions.east:
                robot.direction = directions.north;
                break;
            case directions.south:
                robot.direction = directions.east;
                break;
            case directions.west:
                robot.direction = directions.south;
                break;
        }
    }
}

// Fonction de rotation vers la droite
function right() {
    // Check si les commandes sont correctes
    if (robot.x !== null && robot.y !== null && robot.direction !== null) {
        // Calcule de la nouvelle direction
        switch (robot.direction) {
            case directions.north:
                robot.direction = directions.east;
                break;
            case directions.east:
                robot.direction = directions.south;
                break;
            case directions.south:
                robot.direction = directions.west;
                break;
            case directions.west:
                robot.direction = directions.north;
                break;
        }
    }
}

// Rapport sur la position du robot
function report() {
    // Check des valeurs
    if (robot.x !== null && robot.y !== null && robot.direction !== null) {
        console.log(`${robot.x},${robot.y},${robot.direction}`)
    }
};


