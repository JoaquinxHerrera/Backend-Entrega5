// //

// const formProducts = document.getElementById('productForm')
// // const inputProduct = document.getElementById('inputProduct')
// const ulProducts = document.getElementById('ulProducts')

// function productManagerTune(usuario){
//     const socket = io({
//         auth:{
//             usuario
//         }
//     })
//     formProducts?.addEventListener('submit', event =>{
//         event.preventDefault()
//         const title = document.getElementById('inputTitle').value;
//         const description = document.getElementById('inputDescription').value;
//         const code = document.getElementById('inputCode').value;
//         const price = document.getElementById('inputPrice').value;
//         const stock = document.getElementById('inputStock').value;
//         const category = document.getElementById('inputCategory').value;
//         const thumbnail = document.getElementById('inputThumbnail').value;

//         socket.emit('product', {
//             title,
//             description,
//             code,
//             price,
//             stock,
//             category,
//             thumbnail
//         })
//         formProducts.reset()
//     })


//     socket.on('products', (products)=>{
//         ulProducts.innerHTML = ''
//        for (const product of products) {
//             const li = document.createElement('li')
//             li.innerHTML = `<b>ID: </b> ${product.id} - <b>Title: </b> ${product.title}  - <b>Description: </b> ${product.description} - <b>Code: </b> ${product.code} - <b>Price: </b> ${product.price} - <b>Stock: </b> ${product.stock} - <b>Category: </b> ${product.category}`
//             ulProducts?.appendChild(li)
//        }
//     })
    
// }



