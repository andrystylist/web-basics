function golf(par, golpes) {
    if (golpes === 1) {
        return ("Hole-in-one!");
    }
    else if (golpes <= par - 2) {
        return ("Eagle");
    }
    else if (golpes === par - 1) {
        return ("Birdie");
    }
    else if (golpes === par) {
        return ("par");
    }
    else if (golpes === par + 1) {
        return ("Bogey");
    }
    else if (golpes === par + 2) {
        return ("Double Bogey");
    }
    else if (golpes >= par + 3){
        return ("Go Home!");
    }       
}

console.log(golf(4, 15));

//par promedio de golpes esperados , golpes numero de golpes que en realidad hizo el golfista
