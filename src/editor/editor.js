import React, { Component } from 'react';
import './editor.css';
import ToolBar from '../editTools/toolbar';
import { fetchPost } from '../services/dbservice';
import { withRouter } from 'react-router-dom';
import EditorMenu from '../editor-menu/editorMenu';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    }
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.fetchPost = this.fetchPost.bind(this);
    this.populateEditor = this.populateEditor.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.fetchPost(this.props.match.params.id);
    } else {
      document.getElementById('postTitle').focus();
    }
  }

  handleDrop(e) {
    console.log("drop");
    e.preventDefault();
    if (e.dataTransfer.files[0].type.match("image.*")) {
      let reader = new FileReader();
      reader.onload = function (file) {
        var dataURI = file.target.result;
        var img = document.createElement("img");
        img.src = dataURI;
        img.style.maxWidth = "560px";
        const editor = document.getElementById("editor");
        editor.appendChild(img);
        //document.execCommand("insertImage",false,dataURI);
      }
      reader.readAsDataURL(e.dataTransfer.files[0])
    } else {
      console.log("cheating")
    }
  }

  handleDragOver(e) {
    console.log("drag");
    e.preventDefault();
  }

  fetchPost(id) {
    fetchPost(id).then(post => {
      if (post) {
        this.populateEditor(post, id)
      }
      else {
        console.log("post not found");
        this.props.history.push("/editor");
      }
    });
  }

  populateEditor(post, id) {
    console.log("populating ", post);

    this.setState({ id: id });
    const editor = document.getElementById("editor");
    editor.innerHTML = post.text;
    const title = document.getElementById("postTitle");
    title.innerHTML = post.title ? post.title : "Enter a title";
    editor.focus();
  }

  render() {
    return (
      <div>
        <EditorMenu id={this.props.match.params.id} />
        <ToolBar id={this.props.match.params.id} />
        <div className="postContainer">
          <div id="postTitle" contentEditable placeholder="Enter a title"></div>
          <div id="editor" contentEditable placeholder="Write your story..." onDrop={e => this.handleDrop(e)} onDragOver={e => this.handleDragOver(e)}>
          </div>
        </div>
      </div>


    )
  }
}


export default withRouter(Editor);