import { useState } from "react"
import "semantic-ui-css/semantic.min.css"
import {
  Header,
  Menu,
  Container,
  Image,
  Input,
  Loader,
  Dimmer,
  Segment,
} from "semantic-ui-react"

import Test from '../../components/test/Test'
import BookList from '../../components/book/list'

const index = () => {
  const [loading] = useState(false)
  
  return (
    <>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            {/* <Image  */}
            Book Mngr
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item name="logout" />
          </Menu.Menu>
        </Container>
      </Menu>
      <Container className="main">
      <BookList></BookList>
        <Segment attached="top">
          <Header as="h3">Semantic UI React Fixed Template</Header>
        </Segment>
        {/* <Dimmer.Dimmable as={Segment} dimmed={loading} className='book-list'>
          <Dimmer active={loading} inverted>
            <Loader>Loading</Loader>
          </Dimmer>
        </Dimmer.Dimmable> */}
        
      </Container>
      <style jsx global>{`
                .ui.fixed.menu {
                    background-color: #F4F4F4;
                }
                a.header.item {
                    border none !important;
                    color: rgba(0, 0, 0, .6) !important;
                }
                #__next, .main.container, .book-list {
                    height: 100%;
                }
                .main.container {
                    margin-top: 5em;
                }
            `}</style>
    </>
  );
};

export default index
