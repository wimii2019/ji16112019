
//var x = 15;

const cacheWynikow = []
let pozycja = 0;
//zadanie 1
function foo(x){
  if(x%5==0 && x%3==0){
    console.log('FizzBuzz')
  }
  else if(x%5==0){
    console.log('Buzz')
  }
  else if(x%3==0){
    console.log('Fizz')
  }
  else{

  }
}

//zadanie 2
function trojkatPascala(n) {
    let tab = {};
    for(let row = 0; row < n; row++) {
        tab[row] = [];
        for(let col = 0; col < row+1; col++) {
            if(col === 0 || col === row) {
                tab[row][col] = 1;
            } else {
                tab[row][col] = tab[row-1][col-1] + tab[row-1][col];
            }
        }
    }
    return tab;
}

//zadanie 4 5
function czyPierwsza(n)
  {
    console.log('czy pierwsza dla: '+n)
    let y=n
    for(var p=2;p<n;p++)
      if(y%p==0)
      {
        cacheWynikow[pozycja] = false
        pozycja+=1
        return false
      }
      cacheWynikow[pozycja] = true
      pozycja+=1
    return true
  }

function filtrowanie(n) {
  console.log('Pierwotna tablica');
  console.log(n);
  return n.filter(function (e){
    if(e === '' || e === null || e === false){
      return false;
    }
    else {
      return true;
    }
  })
}


console.log('Zadanie 1')
foo(15)

console.log('Zadanie 2')
console.log(trojkatPascala(5))

console.log('Zadanie 4')
console.log(czyPierwsza(23))
console.log(czyPierwsza(6))

console.log('Zadanie 5')
console.log(cacheWynikow);

console.log('Zadanie 6');
console.log(filtrowanie([1,2,null,false,'',7,99]));
