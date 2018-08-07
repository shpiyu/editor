import React, { Component } from 'react';
import {
    BtnBold, BtnItalic, BtnUnderline, BtnBullet, BtnNumberedList, BtnHyperlink, BtnUploadImage,
    BtnAlignCenter, BtnAlignLeft, BtnAlignRight, BtnJustify
} from './tools';
import './toolbar.css'; 

export default class ToolBar extends Component {

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
                    <BtnHyperlink />
                    <BtnUploadImage />
                    <span className="tool-separator"></span>
                    <BtnAlignCenter />
                    <BtnAlignLeft />
                    <BtnAlignRight />
                    <BtnJustify />
                </div>
            </div>
        )
    }
}


