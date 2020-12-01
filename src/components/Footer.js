import React from "react";
import { Sticky } from 'semantic-ui-react';

const styles ={
    fontFamily: 'Cambria',
    color: 'dimgray',
    backgroundColor: 'whitesmoke',
    paddingTop: '12px',
    textAlign: 'center'
}

function Footer() {
    return (
   <Sticky>
    <div style={styles} className="ui fixed bottom sticky menu">
  
   © 2020 Site built by SumayyahMariam
  
  </div>
  </Sticky>
    )
}

export default Footer;