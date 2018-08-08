import React, { Component } from 'react';
import {
    BtnBold, BtnItalic, BtnUnderline, BtnBullet, BtnNumberedList, BtnHyperlink, BtnUploadImage,
    BtnAlignCenter, BtnAlignLeft, BtnAlignRight, BtnJustify
} from './tools';
import './toolbar.css'; 
import Modal from '../modal/modal';

export default class ToolBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLinkModal: false
        }

        this.sel = null;
        this.closeModal = this.closeModal.bind(this);
        this.showLinkModal = this.showLinkModal.bind(this);
        this.addLink = this.addLink.bind(this);
    }

    closeModal(){
        this.setState({
            showLinkModal: false
        })
    }

    showLinkModal(){
        this.sel = window.getSelection().getRangeAt(0);
        this.setState({
            showLinkModal: true
        })
    }
    
    addLink(){
        document.getElementById('editor').focus();
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(this.sel);
        let link = document.getElementById('urlInput').value;
        link = (link.indexOf('://') === -1) ? 'http://' + link : link;
        document.execCommand('insertHTML', false, '<a href="' + link + '" target="_blank">' + window.getSelection() + '</a>');
        this.setState({
            showLinkModal: false
        });
        
    }

    getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        return text;
    }

    render() {

        return (
            <div id="toolbar">
                <div className="tool-buttons">
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <span className="tool-separator"></span>
                    <BtnBullet />
                    <BtnNumberedList />
                    <span className="tool-separator"></span>
                    <BtnHyperlink clickHandle={this.showLinkModal}/>
                    <BtnUploadImage />
                    <span className="tool-separator"></span>
                    <BtnAlignCenter />
                    <BtnAlignLeft />
                    <BtnAlignRight />
                    <BtnJustify />
                    
                </div>
                <Modal show={this.state.showLinkModal} closeText="cancel" submitText="ok" onClose={this.closeModal}
                        onSubmit={this.addLink}>
                        <p>Enter or paste a URL</p>
                        <input type="text" id="urlInput"/>
                </Modal>
            </div>
        )
    }
}


