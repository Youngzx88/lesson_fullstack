import React from "react";
import './sidebar.css'

interface Props{
  children: React.ReactNode,
  isVisible: boolean
}

const SidebarComponents:React.FC<Props> = (props) =>{
  const divStyle = (props: Props):React.CSSProperties => ({
    width: props.isVisible?"23rem":"0rem",
  })
  return (
    <div id="mySidenav" className="sidenav" style={divStyle(props)}>
        {props.children}
    </div>
  )
}

export default SidebarComponents