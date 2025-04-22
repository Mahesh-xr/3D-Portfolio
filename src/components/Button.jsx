import React from "react";

const Button = ({text, className, id}) => {


  return (
    <a className={`${className ?? ''} cta-wrapper`}
    onClick={e=>{
      e.preventDefault()
      const target = document.getElementById('counter')
      if(target && id){
        const offset = window.innerHeight().top + window.scrollY - c+offset;;
        window.scrollTo({
          top,
          behavior:"smooth"
        })
      }
    }}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
