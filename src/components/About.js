import React  from 'react';
const About = ({mode}) => {
  //  const [myStyle, setMyStyle] = useState({
  //   color: "black", 
  //   backgroundColor: "white"
  // })

 let myStyle={
 color:mode==="dark"?"white":"skyblue",
 backgroundColor: mode==="dark"?"skyblue":"grey"
 }
  // const [btnText,setbtnText] = useState("Enable Light Mode")
  
  // const ToggleMode=()=>{
  //   if (myStyle.color==="black") { 
  //     setMyStyle({
  //       color: "white", 
  //       backgroundColor: "black"
  //     })  
  //     setbtnText("Enable Dark Mode")
  //   }else{
  //     setMyStyle({
  //       color: "black", 
  //       backgroundColor: "white"
  //     }) 
  //     setbtnText("Enable Dark Mode")
  //   }
  // }


    return (
    <>
  <h1 className='d-flex justify-content-center my-2' style={{ color:mode==="dark"?"white":"skyblue"}}>About Us</h1>
<div className="contain my-5 mx-3" style={myStyle}>
<div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Goal No.#1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body"  style={myStyle}>
      We are a team of experienced professionals who are passionate about helping businesses succeed. We offer a wide range of services, including web design, development, and marketing. Our goal is to provide our clients with the tools and resources they need to achieve their business goals.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Goal No.#2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body "  style={myStyle}>
      We believe that every business is unique, and we tailor our services to meet the specific needs of each client. We take the time to understand your business and your goals, and we work with you to create a plan that will help you achieve them
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Goal No.#3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body"  style={myStyle}>
      We are committed to providing our clients with the highest quality of service. We are always available to answer your questions and provide you with support. We are confident that you will be satisfied with our work.
      </div>
    </div>
  </div>
</div>
</div>
{/* <div className="container my-3">
<button className="btn btn-primary" onClick={ToggleMode} style={myStyle} type="button" aria-label="">{btnText}</button>
</div> */}
    </>
    );
}

export default About;
