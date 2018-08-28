import React, { Component } from 'react';
import Navbar from './navigation';
import Footer from './footer';

class Main extends Component {
    constructor() {
        super()

        this.state = {
            selectedID: '',
            title: '',
            body: '',
            posts: [
                
            ]            
        }
    }

    addPost = () => {
        const { title, body, posts } = this.state;

        let post = {
            _id: posts.length + 1,
            title: title,
            body: body
        }

        console.log(this.state);

        const postsCopy = this.state.posts;
        postsCopy.push(post);

        this.setState({
            posts: postsCopy
        });

        console.log(this.state);
    }

    renderPosts = () => {
        let postsJSX = [];

        this.state.posts.map(post => {
            postsJSX.push(
                <div onClick={() => this.setState({ selectedID: post._id})} key={post._id} className='post'>
                    <span>{post._id}</span>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            )
        })

        return postsJSX;
    }

    renderSelectedPost = () => {
        let selectedPost = <div>no selected post</div>

        this.state.posts.map(post => {
            if(post._id == this.state.selectedID) {
                selectedPost = (
                    <div key={post._id}>
                        <span>{post._id}</span>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                )
            }
        });

        return selectedPost;
    }
    
    render() {
        return (
            <div className='app'>
            <Navbar />
                <input type='text' value={this.state.title} onChange={event => this.setState({title: event.target.value})}/>
                <textarea value={this.state.body} onChange={event => this.setState({body: event.target.value})}/>
                <button type='button' onClick={this.addPost}>Add Post</button>
                <div className='posts'>
                    <div className='posts__list'>
                        {this.renderPosts()}
                    </div>
                    <div className='posts__detail'>
                        {this.renderSelectedPost()}
                    </div>

                </div>
            <Footer />
            </div>
        );
    }
}

export default Main;