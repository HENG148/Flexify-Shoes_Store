import { useEffect, useRef, useState } from "react";

const MenuItems = ({ items, depthlevel }) => {
  
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    };
    document.addEventListener('mousedown', handler);
    document.removeEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  }

  return ( 
    <li className="menu-items">

    </li>
   );
}
 
export default MenuItems;