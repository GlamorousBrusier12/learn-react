import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";

class Details extends Component{

    state = {loading:true, showModal:false};

    adopt= ()=>(window.location = 'http://bit.ly/pet-adopt')

    toggleModal = ()=> this.setState({showModal : !this.state.showModal});

    async componentDidMount(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
        this.setState(
            Object.assign(
                {
                    loading:false,
                },
                json.pets[0]
            )
        );
    };
    render(){
        const {animal, name, city, state, breed, description, images, showModal} = this.state;
        return (
            <div className = 'details'>
                <Carousel images={images}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal}-${breed}-${city}, ${state}`} </h2>
                    <ThemeContext.Consumer>
                    {
                        ([theme])=>(
                            <button onClick={this.toggleModal} style={{backgroundColor:theme}} >Adopt {name}</button>
                        )
                    }
                    </ThemeContext.Consumer>

                    <p> ${description} </p>
                    {
                        showModal?(
                            <Modal>
                                <div>
                                    <h1>Do you wanna adopt {name}?</h1>
                                    <div className='buttons'>
                                        <button onClick={this.adopt} >Yes</button>
                                        <button onClick={this.toggleModal} >No</button>
                                    </div>
                                </div>
                            </Modal>
                        ):null
                    }
                </div>
            </div>
        );
    }
}


const DetailsWithRouter = withRouter(Details);
// errors with in the details component will be handeled by the errorboundary now
export default ()=>(
    <ErrorBoundary>
        <DetailsWithRouter/>
    </ErrorBoundary>
)