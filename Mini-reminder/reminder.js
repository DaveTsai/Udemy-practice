const form = document.querySelector("#form")
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const list = document.querySelector("#list")


form.addEventListener("submit", (e) => {
    e.preventDefault();  //1.Prevent from action
    let name = input1.value // 2. set the value for name
    let content = input2.value // 3. set the value for tweet
    const newList = document.createElement('li') //4. Create a list 
    newList.innerText = `${name} --- ${content}`; //5.Change the innerText of inputted list
    list.append(newList) //6. Append to the list
    input1.value = ``
    input2.value = ``
})

//7.Create a delete function
list.addEventListener(`click`, (e) => {
    e.target.nodeName === `LI` && e.target.remove();  //check console.log(e) and find target
})
