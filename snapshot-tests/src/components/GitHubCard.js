//imports
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function GitHubCard () {
    return (
        <div>
            <Container>
                <Card>
                    <Row>
                        <Col><h1>CKline22</h1></Col>
                    </Row>
                    <Row>
                        <Col><img src="https://place-puppy.com/300x300" alt="puppy picture"/></Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>I like spending time outside. I also like lorem ipsum</p>
                        <p>Sit sunt amet voluptate magna. Nulla minim velit ex ullamco adipisicing nulla. Incididunt nostrud culpa officia laboris esse nulla non pariatur sint amet ad.</p>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default GitHubCard;