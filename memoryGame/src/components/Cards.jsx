import { useState } from "react";
import Card from '../components/Card'

function Cards(){
    const [items, setItems] = useState([
       {id: 1, img: 'assets/images/downloa-img-1.jpeg', stat: ""},
       {id: 2, img: 'assets/images/downloa-img-2.jpeg', stat: ""},
       {id: 3, img: 'assets/images/downloa-img-3.jpeg', stat: ""},
       {id: 4, img: 'assets/images/downloa-img-4.jpeg', stat: ""},
       {id: 5, img: 'assets/images/downloa-img-5.jpeg', stat: ""},
       {id: 6, img: 'assets/images/downloa-img-6.jpeg', stat: ""},
       {id: 7, img: 'assets/images/downloa-img-7.jpeg', stat: ""},
       {id: 8, img: 'assets/images/downloa-img-8.jpeg', stat: ""},
       {id: 1, img: 'assets/images/downloa-img-1.jpeg', stat: ""},
       {id: 2, img: 'assets/images/downloa-img-2.jpeg', stat: ""},
       {id: 3, img: 'assets/images/downloa-img-3.jpeg', stat: ""},
       {id: 4, img: 'assets/images/downloa-img-4.jpeg', stat: ""},
       {id: 5, img: 'assets/images/downloa-img-5.jpeg', stat: ""},
       {id: 6, img: 'assets/images/downloa-img-6.jpeg', stat: ""},
       {id: 7, img: 'assets/images/downloa-img-7.jpeg', stat: ""},
       {id: 8, img: 'assets/images/downloa-img-8.jpeg', stat: ""}
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}
export default Cards;