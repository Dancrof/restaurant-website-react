import React from 'react';
import './content.css';

import banner1 from '../img/banner/banner.jpg'
import banner2 from '../img/banner/banner2.jpg'
import banner3 from '../img/banner/banner3.png'

function Content() {
    return (
        <div className="content">
            <div className="info">
                <img src={banner1} alt="" />
                <div className="breakfast">
                    <h3 className="info__title">breakfast</h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum optio voluptatum deleniti molestiae facilis impedit quam doloribus repellat, velit eveniet inventore atque laborum neque consequuntur commodi iusto quae laudantium?
                    Iure, fuga corrupti? Ipsam quibusdam placeat modi consequuntur delectus commodi amet? Cum odio ipsam natus ullam blanditiis sapiente, quod ad culpa eligendi, similique cupiditate molestias facilis cumque dolor quos nemo!
                    </p>
                    <button className="btn">ver mas</button>
                </div>
            </div>
            <div className="info">
                <img src={banner2} alt="" />
                <div className="lunch">
                    <h3 className="info_title">Lunch</h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum optio voluptatum deleniti molestiae facilis impedit quam doloribus repellat, velit eveniet inventore atque laborum neque consequuntur commodi iusto quae laudantium?
                    Iure, fuga corrupti? Ipsam quibusdam placeat modi consequuntur delectus commodi amet? Cum odio ipsam natus ullam blanditiis sapiente, quod ad culpa eligendi, similique cupiditate molestias facilis cumque dolor quos nemo!
                    </p>
                    <button className="btn">ver mas</button>
                </div>
            </div>
            <div className="info">
            <img src={banner3} alt="" />
                <div className="diner">
                    <h3 className="info_title">Diner</h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum optio voluptatum deleniti molestiae facilis impedit quam doloribus repellat, velit eveniet inventore atque laborum neque consequuntur commodi iusto quae laudantium?
                    Iure, fuga corrupti? Ipsam quibusdam placeat modi consequuntur delectus commodi amet? Cum odio ipsam natus ullam blanditiis sapiente, quod ad culpa eligendi, similique cupiditate molestias facilis cumque dolor quos nemo!
                    </p>
                    <button className="btn">ver mas</button>
                </div>
            </div>
        </div>
    );
}

export default Content
