function random(number){
    return Math.floor(Math.random()*number);;
}

export function getRandomColor() {
    return 'rgb('+random(255)+','+random(255)+','+random(255)+')';
}
