import React from "react";
import './scrolling.css'
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import sponsor4 from "../../assets/sponsor4.png";
import sponsor5 from "../../assets/sponsor5.png";
import sponsor6 from "../../assets/sponsor6.png";
import sponsor7 from "../../assets/sponsor7.png";
import sponsor8 from "../../assets/sponsor8.png";



const Scrolling = (props) => {
    
    return (
        <>
            <div class="marquee">
                <div class="marquee-content">
                    <div class="slider">
                       <div class="slides">
                       <img class="image" src={sponsor1} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor2} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor3} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor4} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor5} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor6} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor7} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor8} alt="" />
                        </div> 
                    </div>

                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor1} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor2} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor3} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor4} alt="" />
                        </div> 
                    </div>
                    <div class="slider">
                    <div class="slides">
                       <img class="image" src={sponsor5} alt="" />
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
};

export default Scrolling;