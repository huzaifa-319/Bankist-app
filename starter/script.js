'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent=0 in pig game

  movements.forEach(function (mov, i, arr) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
const calPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calPrintBalance(account1.movements);
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);
const createUsernames = function (acc) {
  acc.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
///////////////////////////////////////////
//simple array methods


let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

console.log(arr.slice());
console.log([...arr]);

//splice

//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

//CONCATINATE

const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

//JOIN

console.log(letter.join(' - '));
//////////////////////////////////
//THE NEW "AT" METHOD

const arr = [23, 11, 64, 98];
console.log(arr[0]);

console.log(arr.at(0));

//getting the alst element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));

console.log('huzaifa'.at(4));
console.log('huzaifa'.at(-1));
/////////////////////////////////////////
//LOOPING ARRAY "FOREACH"

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
if (movement > 0) {
  console.log(`Movement ${i + 1}: You deposited ${movement}`);
} else console.log(`Movement ${i + 1}: You Withdraw ${Math.abs(movement)}`);
}

console.log('///////////////////////////FOREACH METHOD///////////////////////');

movements.forEach(function (mov, i, arr) {
  // if (movement > 0) {
    //   console.log(`You deposited ${movement}`);
    // } else console.log(`You Withdraw ${Math.abs(movement)}`);
    if (mov > 0) {
      console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else console.log(`Movement ${i + 1}: You Withdraw ${Math.abs(mov)}`);
  });
  
  /////////////////////////////////////////
  //FOREACH WITH SETS AND MAPS
  //MAP
  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
  currencies.forEach(function (val, key, mao) {
    console.log(`${key}: ${val}`);
  });
  
  //SET
  const currenciesNuique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
  console.log(currenciesNuique);
  
  currenciesNuique.forEach(function (val, _, set) {
    console.log(`${val}: ${val}`);
  });
  
  /////////////////////////////////////////////////
  //THE MAP METHOD
  
  const eroToUsd = 1.1;
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  // const movementsUSD = movements.map(function (mov) {
    //   return mov * eroToUsd;
    // });
    const movementsUSD = movements.map(mov => mov * eroToUsd);
    
    console.log(movements);
    console.log(movementsUSD);
    
    const movementsUSDfor = [];
    
    for (const mov of movements) {
      movementsUSDfor.push(mov * eroToUsd);
    }
    console.log(movementsUSDfor);
    
    const movementsDescitption = movements.map(
      (mov, i, arr) =>
        `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(mov)}`,
    );
    
    console.log(movementsDescitption);
    
    
    /////////////////////////////////////////
    //FILTER METHOD
    
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
const depositsfor = [];
for (const mov of movements) if (mov > 0) depositsfor.push(mov);
console.log(depositsfor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

//////////////////////////////////////////////////////
//REDUCE METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//accumulatoris like a snowball
const balance = movements.reduce((acc, curr) => acc + curr, 0); //Arrow function
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2);

//Maximun values from the maovement array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else {
    return mov;
}
}, movements[0]);

console.log(max);

////////////////////////////////////////////////////////////
//THE MAGIC OF CHAINING METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
// PIPELINE
const totalDepositsInUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * euroToUsd)
.reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUSD);

*/
