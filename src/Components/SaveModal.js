import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import API from '../API'



const ModalBasicExample = (props) => (

  <Modal id="modal" trigger={<Button id= "stoprecording">stop recording</Button>} basic size='small'>
    {/* actions={['Snooze', { key: 'done', content: 'Done', positive: true }]} */}
    <Header icon='archive' content='Want to save it? :)' />
    <Modal.Content>
      <p>
        Would you like to save your amazing song?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick= { () => props.closeModal() } basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted onClick= {() => props.saveSong()  }>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal> 
)

export default ModalBasicExample