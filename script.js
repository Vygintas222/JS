//slaptazodis
console.group('passwords')
let password = 15

if (password < 16){
    console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo')
}




 let pass = 21
if (pass > 20){
    console.log('Slaptažodis tinkamas')

}else if (pass > 15){
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
}



console.groupCollapsed






console.group('amzius')
//amzius

let age = 19

if (age <=6){
    console.log('Iki 6 metų į mokyklą neina.')
}else if(age <= 10){
    console.log('7-10 metų eina į pradinę klasę.')
}else if ( age <= 14){
    console.log('11-14 metų eina į pagrindinę.')
}else if (age <= 18){
    console.log('15-18 metų eina į gimnaziją.')
}else {
    console.log('19+ mokyklą baigė')
}


console.groupCollapsed


let Age = 1
if(Age <0){
   console.log('įvestas amžius yra per mažas') 
}else if (Age >120){
    console.log('įvestas amžius yra per didelis')
}



let AGE = 18
if(AGE === 6){
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas')
}else if (AGE===10){
    console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas')
}else if (AGE===14){
    console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas')
}else if (AGE===18){
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs')
}