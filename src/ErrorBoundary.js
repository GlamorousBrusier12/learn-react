import { Link, Redirect } from "react-router-dom";
import { Component } from "react";

class ErrorBoundary extends Component{
    state = {hasError:false, redirect:false};

    static getDerivedStateFromError() {
        return {hasError:true}
    }
    componentDidCatch(err, info){
        // log the error to the error monitor
        console.log("Error Boundary caught an error: ", err, info);
        setTimeout(() => {
            this.setState({redirect:true});
        }, 3000);
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }else if(this.state.hasError){
            return(
                <h2>This is an Error Please Click <Link to='/'>here</Link> to go to the home page</h2>
            );
        }
        // if there is an error then it goes to the if condition 
        // othewise it renders the childern components
        return this.props.children;
    }
}
export default ErrorBoundary;