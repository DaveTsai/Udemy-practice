

const block = document.querySelector("#block")
const button = document.querySelector(`#button`)
const reset = document.querySelector(`#reset`)

button.addEventListener(`click`, async function () {

    const API = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    const JSONData = console.log(API.data.message)
    const newPic = document.createElement(`IMG`);
    newPic.src = API.data.message;
    block.append(newPic)

})
reset.addEventListener('click', () => {
    block.innerHTML = ""
})

