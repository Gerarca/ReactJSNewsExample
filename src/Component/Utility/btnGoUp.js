import React, {useState} from "react";
import { animateScroll as scroll} from "react-scroll";
import './btnGoUp.css';


function BtnGoUp(){
    const [flag, setButtonFlag] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };    
    window.addEventListener('scroll', checkScrollTop)

    React.useEffect(()=>{
        function handlerScroll(){
          const ishow = 115;
          if(document.documentElement.scrollTop > ishow){
              setButtonFlag(true);
          }
          else {
              setButtonFlag(false);
          }
        }
        window.addEventListener("scroll", handlerScroll);
        return () => window.removeEventListener("scroll", handlerScroll);
    },[])
  
    return(
      <div className="customdiv">
        {(flag) ? 
            <div id="div-totop" className="cmn-divfloat">
              <button className="cmn-btncircle" onClick={scrollTop} >Up</button>
            </div>
        : null } 
      </div>
    )
}
export default BtnGoUp;
 