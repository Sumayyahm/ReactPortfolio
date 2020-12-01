import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react';
import resume from "../access/SumayyahMariamResume.pdf"

const style = {
  fontFamily: 'Cambria',
  color: 'dimgray'
}

function Contact() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Contact Me</Button>}
    >
      <Modal.Header style={style}>Contact Information</Modal.Header>
      <Modal.Content>
        <Modal.Description style={style}>
         <p>Email Address: sumayyahmariam018@gmail.com</p>
         <p>Phone Number: +1 (512) 888 4232</p>
         <p><a href={resume} target="_blank">Resume</a>    &emsp;     <a href="https://github.com/Sumayyahm" target="_blank"><Icon name='github' />Github Profile</a>   &emsp;      <a href="https://www.linkedin.com/in/sumayyahmariam/" target="_blank"><Icon name='linkedin alternate' />LinkIn Profile</a></p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Contact