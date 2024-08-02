function gcd(x, y){
    if(y === 0){
        return x;
    }
    return gcd(y, x%y);
}

function lcm(x, y){
    return x*y/gcd(x, y);
}
