import React, { useState } from 'react'
import './cards.scss'
// import img from './img.png'

export default function Cards(props) {

    const [visible, setVisible] = useState(false)

  return (
            <div className="cards_item">
                <div className="cards_item_wraper">
                    <div className="cards_item_img__wraper">
                        <img src={props.img} alt="card img" className="cards_item_img" />
                    </div>
                    <h1 className='cards_item_tittle'>{props.tittle}</h1>
                </div>
                <div className="cards_item_body">
                    <span className="cards_item_body__descr">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    {visible?<span className="cards_item_body__descr"> Est, blanditiis ut. Dicta officiis odit id illum in. Amet pariatur perferendis ipsum, quis nesciunt iste facere animi quidem voluptatum, ab explicabo.</span>:null}
                     <button className='cards_item_body_btn'
                     onClick={()=>{setVisible(!visible)}}>
                        {visible?'Show less ↑':'Show more ↓'}
                     </button>
                </div>
            </div>
  )
}
