import React from 'react';
import { Item } from 'semantic-ui-react';
import image from "../../images/sumprofilepic.jpg";
import "./index.css";
import Contact from "../Contact"

const styles ={
    margin: 20,
    border: "solid",
    padding: 35,
    backgroundColor: "whitesmoke",
    borderWidth: "1px",
    borderColor: "darkgray"
}

const style1 = {
  fontFamily: 'Cambria',
  color: 'dimgray',
  fontSize: '18px'
}

const About = () => (
  <Item.Group style={styles}>
    <Item>
      <Item.Image size='medium' src={image} circular />

      <Item.Content >
          <br></br><br></br><br></br>
        <Item.Header id="about-header" style={style1}>About Me</Item.Header>
        <br></br><br></br>
        {/* <Item.Meta>Description</Item.Meta> */}
        <Item.Description style={style1}>
          <p>My name is Sumayyah Mariam. I have a bachelors degree in Electronics and Communication Engineer
          from India. I am looking for a career in Web Development. I am currently taking classes at the Full Stack Coding Boot
          Camp at the University of Texas, Austin.</p>
          <p>Fun Facts: I was an elementary school teacher before I moved to Texas. I enjoy cooking and
          gardening. I am an avid Netflix viewer and I have a flair for learning languages. I live in Austin, Texas with
          my husband.</p>
          <br></br>
        </Item.Description>
        <Item.Extra>
          <Contact style={style1} />
        </Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>
)

export default About



