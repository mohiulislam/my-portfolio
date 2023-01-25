import {useEffect,useState} from 'react'

function Hooks() {
const [onSmallscreen, setOnSmallscreen] = useState(false);
const chekScreenSize = () => {
  console.log(444);

  setOnSmallscreen(window.innerWidth < 768);
};

useEffect(() => {
  chekScreenSize();
  window.addEventListener("resize", chekScreenSize);
  return () => window.removeEventListener("resize", chekScreenSize);
}, []);

return false;
}

export default Hooks;