import React,{Component} from 'react';
import {Grid, Row, Col, Image, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import api from '../api';

class AlbumDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            album: []
        }
    }

    componentWillMount(){
        var data = this.props.match.params;
        api.getAlbumInfo(data)
           .then((data) => {
                console.log(data)
                //Mostrar loading
                this.setState({
                    album: data.album,
                    loading: false
                });
        });
    }


    render(){
        if(this.state.loading) return <p>Loading...</p>;

        return(
            <div>
                <Row className="show-grid">
                    <Col xs={12} md="2">
                        <h4>{this.state.album.name}</h4>
                        <p>
                            <Image src={this.state.album.image[2]['#text']} rounded />
                        </p>
                    </Col>

                    <Col xs={12} md="6">
                        <h4>Songs</h4>
                        <ListGroup>
                            {this.state.album.tracks.track.map((track) =>
                                <ListGroupItem>{track.name}</ListGroupItem>
                            )}
                        </ListGroup>
                    </Col>
                </Row>

                <hr />
                <Row>
                    <Col xs={12} md="9">
                        <Panel style={{'textAlign': 'justify'}}>{this.state.album.wiki.content}</Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AlbumDetail;
