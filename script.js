
//var x = 15;

let cacheWynikowCzyPierwsza = new Map();
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
function triPascal(n) {
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
    if(cacheWynikowCzyPierwsza.get(n) === undefined){
      let y=n
      for(var p=2;p<n;p++)
        if(y%p==0)
        {
          cacheWynikowCzyPierwsza.set(n,false)
          return false
        }
        cacheWynikowCzyPierwsza.set(n,true)
      return true
    }
    else {
     return cacheWynikowCzyPierwsza.get(n);
    }
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

function mapowanieNaDlugoscZnakow(n){
  return n.map(function (e) {
    console.log(e);
    return e.length;
  });
}

function znajdowanieNajczestszegoElementu(n){
  let najwiekszyLicznik = 0;
  let najczestszyObiekt = null;

  let tempMap = new Map()
  n.forEach(function(e){
    if (tempMap.get(e)===undefined) {
      tempMap.set(e,1)
    }
    else {
      let temp =tempMap.get(e)
      tempMap.set(e,temp +=1)
    }
  })
  for (var [key, value] of tempMap.entries()) {
    if(najwiekszyLicznik<value){
      najczestszyObiekt=key;
      najwiekszyLicznik=value;
    }
  }
  return [najczestszyObiekt,tempMap.get(najczestszyObiekt)];
}

function wypelnij( start, stop, krok){
  let rezultat = []
  let wartosc = start

  while(wartosc<=stop){
    rezultat.push(wartosc)
    wartosc+=krok
  }
  return rezultat
}


console.log('Zadanie 1')
foo(15)

console.log('Zadanie 2')
console.log(triPascal(10))

console.log('Zadanie 4')
console.log(czyPierwsza(23))
console.log(czyPierwsza(6))

console.log('Zadanie 5')
console.log(cacheWynikowCzyPierwsza);

console.log('Zadanie 7');
console.log(filtrowanie([1,2,null,false,'',7,99]));

console.log('Zadanie 8');
console.log(znajdowanieNajczestszegoElementu([1,2,2,4,4,4,5,null,null,null,null,null]));

console.log('Zadanie 9');
console.log(mapowanieNaDlugoscZnakow(['raz','imie','rower']));

console.log('Zadanie 10')
console.log(wypelnij(1,15,2));
