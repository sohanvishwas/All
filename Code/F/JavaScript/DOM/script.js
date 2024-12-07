// const allImages=document.images
// const allImages=[...document.images]
// const allImages=document.getElementsByTagName('img')
// const cssimage=document.getElementsByClassName('css-image')[0]
// const cssimage=document.getElementById('css-image')
// const cssimage1=document.querySelector('.css-image')
// const cssimage2=document.querySelectorAll('.css-image')
// const cssimage3=document.querySelector('#css-image')
// const cssimage4=document.querySelectorAll('#css-image')

// const jsImage=document.querySelector('[alt="javascript roadmap"]')
// jsImage.src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
// const li=document.querySelector('ul li')

// const ul=document.querySelector('ul')
// const imageInsideUl=ul.querySelector('.css-image')

// const jspath=document.querySelector("body > ul > li:nth-child(1)")


// const allImages=document.querySelectorAll('img')

// const imagesUrl =[
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszZywpjYZMjnmWr_To6dbqFGyg123av4jow&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYF-0qIlSXQmQNiOgG--FOO3BmFHG9tbpRVg&s'
// ]

// allImages[0].src=imagesUrl[0]
// allImages[1].src=imagesUrl[1]
// allImages[2].src=imagesUrl[2]

// for(let i=0;i<allImages.length;i++){
//     allImages[i].src=imagesUrl[i]
// }

// allImages.forEach((image,i)=>{
//     image.src=imagesUrl[i]
// })






// const paragraph=document.querySelector('p')
// console.log(paragraph.innerHTML);

// paragraph.innerHTML='<h4>Hii</h4>'
// paragraph.innerText='<h4>Hiii!!!</h4>'
// paragraph.textContent='<h4>Hiii!!!</h4>'


// How to apply styles in JavaScript -
// document.querySelector('h1').style.color="blue"
// document.querySelector('h1').style.backgroundColor="green"
// h1.style.color='blue'
// h1.style.backgroundColor='green'



//  Change all <a> tag elements color
// const allLinks=document.querySelectorAll('a')
// for(let i=0;i<allLinks.length;i++){
//     allLinks[i].style.color='teal'
// }
// OR
// for(const link of allLinks){
    // link.style.color='teal'
    // link.style.textDecoration='none'
    // link.style.fontWeight='700'
    // link.style.fontFamily='cursive'
    // link.style.fontSize='18px'

    // link.style.cssText=`
    //   color:teal;
    //   text-decoration-line: none;
    //   font-weight:700;
    //   font-family: cursive;
    //   font-size: 18px; `

    // link.className = 'green-link'
    // link.className = 'wavy-link'

    // link.setAttribute('class', 'green-Link')

    // link.classList.add('green-link')
    // link.classList.remove('my-link')
    // link.classList.toggle('my-link')

  // }

// document.querySelector('h1').classList.add('hidden')

const firstLink = document.querySelector("body > p:nth-child(3) > a.my-link")

