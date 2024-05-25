import {useInView} from "react-intersection-observer";
import React, {useMemo} from "react";
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";

function PhoneLink({ text, count, index }) {
  const { ref: myRef1, inView: visible1 } = useInView();
  
  // Memoize the rendered output
  const PhoneLink = useMemo(() => {
    return (
       <p key={index} className="phoneLink" ref={myRef1}>
         <LettersScrolling text={text} state={"X"} visible={visible1} />
         <span className="count">({count})</span>
       </p>
    );
  }, [text, count, index, visible1]); // Dependencies
  
  return PhoneLink;
}

export default PhoneLink