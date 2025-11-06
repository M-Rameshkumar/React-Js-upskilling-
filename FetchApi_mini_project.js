let api = "https://fakestoreapi.com/products";

//step 3
let body = document.body;
let section = document.createElement("section");
body.appendChild(section);


section.style.cssText = `
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:10px;
`;

//step 1 is creating async function
let app = async (url) => {


    let res = await fetch(url);
    let data = await res.json();
    console.log(data);


    // step 2 :get particular data from the response

    for (let d of data) {

        let artical = document.createElement("article");


        artical.innerHTML = `
        <img src="${d.image}" height="150px"/>  
        <p>${d.title}</p>        <p>${d.price}</p>
        <p>${d.category}</p>
        `;


        artical.style.cssText = `
        border: 0.5px solid grey;   
        width:400px;
        height:300px;
        padding:10px;
        border-radius:10px; 
        
        `;


        section.append(artical);


    }

};

app(api);


