/*Да се напише функция, която получава парола (един ред с произволен текст), като аргумент и проверява,
дали съвпада с фразата &quot;s3cr3t!P@ssw0rd&quot;. При съвпадение да се изведе &quot;Welcome&quot;. При несъвпадение да
се изведе &quot;Wrong password!&quot;.*/

function passwordGuess(input){
    let pass = input[0];

    if (pass === "s3cr3t!P@ssw0rd"){
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"])