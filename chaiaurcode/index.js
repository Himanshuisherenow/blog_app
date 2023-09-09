function addL (lang){
    const li = document.createElement('li');
     li.innerHTML = `${lang}`;

     document.querySelector('.perent').appendChild(li)
    
    
}
    addL("virat");
    addL("nairobi");

    function addname(name){

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(name)); // textnode great approch
        document.querySelector('.perent').appendChild(li);
    }

    addname("rahul");



//edit


const langchange = document.querySelector('li:nth-child(2)');
const newli = document.createElement('li');
newli.textContent = "virat kohli";//replacing rather than changing the text directly
langchange.replaceWith(newli);

langchange.outerHTML = `<li>kohli is king</li>` // why it is not changint the property
let count = Number(document.querySelector(".perent").childElementCount )//or child
let deleteit = setInterval(()=>{
    if(count > 0){
       let a =  document.querySelector('li:last-child')
        console.log(a.textContent)
        a.remove();
         count--;
        }else{
            clearInterval(deleteit);
            console.log("it is stoped")
        }

},2000)