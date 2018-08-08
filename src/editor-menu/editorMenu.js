import React, { Component } from 'react';
import { createPost, updatePost } from '../services/dbservice';
import { withRouter } from 'react-router-dom';
import './editorMenu.css';

class EditorMenu extends Component {

    constructor(props) {
        super(props);
        this.previewPost = this.previewPost.bind(this);
        this.createPost = this.createPost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    previewPost() {
        const toolbar = document.getElementById('toolbar');
        const previewModeBtns = document.querySelector('span[class=preview-mode-btns]');
        const previewBtn = document.getElementById('previewBtn');
        const editor = document.getElementById("editor");
        toolbar.style.display = "none";
        previewBtn.style.display = "none";
        previewModeBtns.style.display = 'inline-block';
        editor.setAttribute("contentEditable", false);
    }

    editPost() {
        const toolbar = document.getElementById('toolbar');
        const previewModeBtns = document.querySelector('span[class=preview-mode-btns]');
        const previewBtn = document.getElementById('previewBtn');
        const editor = document.getElementById("editor");
        toolbar.style.display = "block";
        previewBtn.style.display = "inline-block";
        previewModeBtns.style.display = "none";
        editor.setAttribute("contentEditable", true);
        editor.focus();
    }

    createPost() {
        const editor = document.getElementById("editor");
        const html = editor.innerHTML;
        const title = document.getElementById('postTitle').innerHTML;
        let post = { text: html, createdAt: new Date(), title: title }
        createPost(post);
        this.props.history.push("/posts");
    }

    updatePost(id) {
        const editor = document.getElementById("editor");
        const html = editor.innerHTML;
        const title = document.getElementById('postTitle').innerHTML;
        let post = { text: html, createdAt: new Date(), title: title }
        updatePost(id, post);
        this.props.history.push("/posts");
    }


    render() {
        let saveUpdateBtn;
        if (this.props.id) {
            saveUpdateBtn = <button id="updateBtn" onClick={() => this.updatePost(this.props.id)}> UPDATE </button>
        } else {
            saveUpdateBtn = <button id="saveBtn" onClick={this.createPost}> PUBLISH </button>
        }
        return (
            <div className="editor-menu">
                <span onClick={() => this.props.history.push("/posts")}>
                    <i className="fas fa-arrow-left back-btn"></i> <h3>Charles Butler Editor</h3>
                </span>

                <div id="savePreviewBtn">


                    <span className="preview-mode-btns">

                        <button id="editBtn" onClick={this.editPost}> EDIT </button>
                        <button id="printBtn" onClick={() => window.print()}> PRINT </button>
                        {saveUpdateBtn}
                        
                    </span>
                    <button id="previewBtn" onClick={this.previewPost}> PREVIEW </button>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(EditorMenu);