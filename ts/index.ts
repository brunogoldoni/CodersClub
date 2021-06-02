//TYPES
const string: string = `text ${1}`;
const boolean: boolean = true;
const number: number = 10.5;

const array: string[] = ['text01', 'text02'];
const tuple: [number, string] = [1, 'Name'];

 enum Theme {
   DArk = 'dark',
   Light = 'light',
 }

 let any: any = '';
 any = 10;

 let unknown: unknown = '';
 unknown = true;

 function sum( firstNumber: number, secondNumber: number) {
   return firstNumber + secondNumber;
 }

 function sub( firstNumber: number, secondNumber: number): void {
  return undefined;
}

function never( firstNumber: number, secondNumber: number): never {
  while(true) {
    console.log('hello Bruno');
  }
}

function error( firstNumber: number, secondNumber: number): never {
  throw new Error("");
}

const result = sum(10, 20);


let undef = undefined;
let nul = null;

const obj: object = {
  a: '',
}; //any of object


//INTERFACE
interface User {
  name: string;
  age?: number;
}

interface printUserReturn {
  age: number;
  city: string;
}

function printUser(user: User): printUserReturn {
  console.log(user.name);
  console.log(user.age);

  return { age: 25, city: 'Santa Catarina', };
}


//UTILITIES TYPES
interface GithubUserData {
  // id: number;
  // url: string;
  // name: string;
  // user: string;
  // login: string;
  // node_id: string;
  // html_url: string;
  readonly following: string;
  readonly followers: string;
  // avatar_url: string;
  // gravatar_id: string;
  // organization: string
}

//PARTIAL
function printUserDataPartial(user: Partial<GithubUserData>) {
  console.log(user.following);
}

//PICK
function printUserDataPick(user: Pick<GithubUserData, "followers" | "following">) {
  console.log(user.followers);
}

//OMIT
function printUserDataOmit(user: Omit<GithubUserData, "login">) {
  console.log(user.followers);
  console.log(user.following);
}

//READONLY
const newGithubUserData: Readonly<GithubUserData> = {
  followers: '190',
  following: '190',
}

//GENERICS: - São funcionalidades que permitem a passagem de tipos. " <> "

// S: State | T: Type | K: Key | V: Value | E: Element


// function print(param: number | string | object)
function print<S>(param: S) {
  let value: S = param;

  console.log(param)
}

function printNumber(number: number) {
  print<number>(number);
}

print<string>('text1');


function useState<S extends number | string = string>(initialState?: S) {
  let state = initialState;

  function setState(newState: S) {
    state = newState;

    return state;
  }

  return { state, setState };
}

const state = useState(10);

console.log(state.setState(10));
// console.log(state.setState('Message...'));



//TYPE FUNCTIONS
type Callback = (result: string) => void;

function printItem(callback: Callback) {

}

function callback(name: string) {

}

printItem(callback);



//DECORATOR
function logger(target: any) {
  console.log(target);
}

@logger
class User {
  name: string;

  constructor() {
    this.name = 'Levir';
  }
}



//TYPE ASSERTIONS - (as)
const unk: unknown = '';

const str: string = unk as string;

interface User {
  name: string;
  address: {
    street: string,
  }
}

const user: User = {} as User;