import React, {Component} from 'react';
import db from '../../firebase/firebase';
import './Post.css';


class Post extends Component {
  constructor () {
    super ();
    this.state = {
      post: ''
    };
  }

 
  handleOnChange(e){ 
    this.setState({[e.target.name]: e.target.value});
     }

  postNew = (e) => {
    e.preventDefault();
    db.collection('post').add ({
        post : this.state.post
      });this.setState({post: '' });
  }

  render () {
    return (
      <div className = 'container'>
        <h2>Comparte:</h2>
        <textarea className="tex" name="Post" onChange = {this.handleOnChange} value = {this.state.post} rows="3" cols="40" placeholder="¿Cuál es tu nuevo descubrimiento?"></textarea>
        <button  className="BtnD-enviarPost" onClick={this.postNew}>Enviar</button>
      </div>
    )
  }
}

export default Post;
