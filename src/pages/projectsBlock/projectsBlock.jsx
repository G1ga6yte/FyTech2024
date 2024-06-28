import React, {useEffect} from "react";
import "./projectsBlock.scss"
import {useNavigate} from "react-router";

function ProjectsBlock (){
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleBackButton = (event) => {
      console.log('Back button pressed');
      // Navigate to desired URL or perform action
      navigate('/home'); // Example: Navigate to the home page
    };
    
    window.onpopstate = function (){
      navigate("/home")
    }
    
    // Listen for the 'popstate' event which occurs when the user navigates through history
    window.addEventListener('popstate', handleBackButton);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);
  
  return(
     <div className="ProjectsBlock">
     
     </div>
  )
}

export default ProjectsBlock