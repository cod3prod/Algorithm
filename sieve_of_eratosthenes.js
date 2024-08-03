let isPrime = Array(1001).fill(1);
isPrime[0] = 0;
isPrime[1] = 0;

for(let i = 2; i*i <= 1000; i++){
    for(let j=i*i ; j <= 1000; j += i){
        isPrime[j] = 0;
    }
}