import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="back-drop">
                <div className="modal">
                    {this.props.children}

                    <div className="footer">
                        <button onClick={this.props.onClose} className="footer-btn footer-btn-cancel">
                            {this.props.closeText}
                        </button>
                        <button onClick={this.props.onSubmit} className="footer-btn footer-btn-delete">
                            {this.props.submitText}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
