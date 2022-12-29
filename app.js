// const fs = require('fs');
// const fetchData =async ()=>{
//     let response = await fetch(`https://fakestoreapi.com/products`)

//     const data = await response.json()
//     console.log(data)
//     fs.writeFile('data.json',JSON.stringify(data ,undefined,4),(err)=>{
//         if (err) throw err;

// })
// }
// fetchData()


const displayData=(data)=>{
    container.innerHTML=""
    data.map((item,index)=>{
        container.innerHTML+=`<tr>
        <td>${item.id}</td>
        <td><h4>${item.title}</h4></td>
        <td><img src=${item.image}></td>
        <td>${item.description}</td>
        <td>${item.category}</td>
        <td><button>${item.price}</button></td></td><tr>`
        })
} 

const postData=async ()=>{
    const bodyData = {     
        category:category.value,
        description:description.value,
        id:itemId.value ,
        price:price.value,
        title:title.value, 
    }
    const response = await fetch(`http://localhost:3000/products`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(bodyData)

    }) 
    console.log(response.json())

}
const deleteData=async ()=>{
    const ID = removeId.value
    const response = await fetch(`http://localhost:3000/products/${ID}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },

    })
    console.log(response.json())

}
const callApi =async ()=>{
    const response =await fetch(`https://fakestoreapi.com/products`)
    const data =await response.json()
    console.log(data)
    displayData(data)
    // postData()    
}
callApi()

const removeId = document.querySelector('.removeId');
const deleteBtn = document.querySelector('.deleteBtn')

deleteBtn.addEventListener('click',deleteData)

const category = document.querySelector('#category')
const description = document.querySelector('#description');
const itemId = document.querySelector('#itemId');
const price = document.querySelector('#price')
const title = document.querySelector('#title');
const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click',postData)
const container = document.querySelector('.container') 


