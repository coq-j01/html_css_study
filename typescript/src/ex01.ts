// ex01.ts
// 기본 타입(Primitive type) : 하나의 값만 가지는 타입

// 명시적 타입선언 vs 암묵적 타입선언
// let myNum1: number //명시
// let myNum2 =123 //암묵 -> js는 암묵적 선언
// ts는 둘 다 가능

// number
let num1: number = 123 
console.log(num1);

// string
let str1: string = 'hello'

// boolean
let bool:boolean = true

// null
let null1:null = null

// undefined
let unde1:undefined = undefined

// 리터럴 타입
let lit1:10=10

// "strictNullChecks":true,
// null 값을 변수에 할당하지 못하도록 한다.
let numA:number = null