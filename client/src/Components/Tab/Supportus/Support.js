import React from 'react'
import './Support.css'
import {Card,CardDeck,Button} from 'react-bootstrap'
const Support = () => {
    return (
        <div>
            <h2 className='container'>Support us</h2>

            <h4 className='container'>
                Your donation will go towards site cost and management
            </h4>

            <CardDeck className='card-deck'>
                <Card>
                    
                    <Card.Body>
                    <Card.Title className='container'><h3>(1)  KO-Fi</h3></Card.Title>
                    <Card.Text>
                        <h5>
                            <li>You, are my strange addiction. </li>
                            <li>My doctor can’t explain.</li>
                            <li>My symptoms or my pain.</li>
                            <li> You are my strange addiction.</li>
                           
                        </h5>
                        <Card.Footer className='footer'>
                        <Button variant="primary" >Support</Button>{' '}
                        </Card.Footer>
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card className='card-deck1'>
                    
                    <Card.Body>
                    <Card.Title className='container'><h3>(2)  COINS</h3></Card.Title>
                    <Card.Text>
                        <h5>
                            <li>If all the kings, had their queens on their thrones. </li>
                            <li>To all of the queens who are fighting alone,</li>
                            <li>  you are not dancing on your own.</li>
                            <li> (FOR ADVANCED CHAPTERS) */</li>
                            <li>  You are my strange addiction.</li>
                        </h5>
                    </Card.Text>
                    <Card.Footer className='footer'>
                        <Button variant="primary" >Support</Button>{' '}
                        </Card.Footer>
                    </Card.Body>
                    
                </Card>
                <Card>
                   
                    <Card.Body>
                    <Card.Title className='container'><h3>(3) VIP</h3></Card.Title>
                    <Card.Text>
                        <h5>
                            <li>Disobey me, then baby, it’s off with your head. </li>
                            <li>No damsel in distress. Don’t need to save me. </li>
                            <li>You can’t tame me.</li>
                            <li>[TIERED; MONTHLY SUBSCRIPTION; COMES LATER]</li>
                        </h5>
                    </Card.Text>
                    <Card.Footer className='footer'>
                        <Button variant="primary" >Support</Button>{' '}
                        </Card.Footer>
                    </Card.Body>
                    
                </Card>
            </CardDeck>
        </div>
    )
}

export default Support
