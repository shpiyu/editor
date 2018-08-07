import React, { Component } from 'react';
import './posts.css';
import Post from './post';
import NewPostBtn from './NewPostBtn';
import Header from '../header/header';
import { loadAllPosts, deletePost } from '../services/dbservice';
import { withRouter } from 'react-router-dom';
import Modal from '../modal/modal';

class Posts extends Component {



    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.loadAllPosts = this.loadAllPosts.bind(this);
        this.state = {
            posts: [],
            showDeleteModal: false,
            deleteModalId: null
        };

        this.loadAllPosts();

    }

    loadAllPosts() {
        loadAllPosts().then((posts) => {
            this.setState({
                posts: posts
            });
            console.log(posts);

        });
    }

    handleDelete(id) {
        this.setState({
            showDeleteModal: true,
            deleteModalId: id
        });
    }

    deletePost() {
        this.closeModal();
        deletePost(this.state.deleteModalId).then((res) => {
            console.log(this.state.deleteModalId);
            this.loadAllPosts();
        });




    }

    handleClick(id) {
        console.log("clicked ", id);
        this.props.history.push(`/editor/${id}`);
    }

    closeModal() {
        this.setState({
            showDeleteModal: false
        });
    }


    render() {
        if (this.state.posts && Object.keys(this.state.posts).length > 0) {
            var posts = Object.keys(this.state.posts).map((key) => {
                return <Post
                    key={key}
                    id={key}
                    handleDelete={this.handleDelete}
                    handleClick={this.handleClick}
                    title={this.state.posts[key].title} />
            });
        } else {
            console.log("empty posts")
        }
        return (
            <div>
                <Header />
                <div className="posts">


                    {posts}

                    <NewPostBtn />
                    <Modal show={this.state.showDeleteModal} closeText="cancel" submitText="delete" onClose={this.closeModal}
                        onSubmit={this.deletePost}>
                        Are you sure you want to delete this post?
                    </Modal>
                </div>
            </div>
        )
    }
}

export default withRouter(Posts);