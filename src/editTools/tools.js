import React from 'react';


export const BtnBold = () => {
    return (
        <button onClick={() => document.execCommand("bold", false, null)}> <i className="fas fa-bold"></i> </button>
    )
}

export const BtnItalic = () => {
    return (
        <button onClick={() => document.execCommand("italic", false, null)}> <i className="fas fa-italic"></i> </button>
    )
}

export const BtnUnderline = () => {
    return (
        <button onClick={() => document.execCommand("underline", false, null)}> <i className="fas fa-underline"></i> </button>
    )
}

export const BtnBullet = () => {
    return (
        <button title="add a bullet list" onClick={() => document.execCommand("insertUnorderedList", false, null)}><i className="fas fa-list-ul"></i></button>
    )
}

export const BtnNumberedList = () => {
    return (
        <button title="add a numbered list" onClick={() => document.execCommand("insertOrderedList", false, null)}><i className="fas fa-list-ol"></i></button>
    )
}

export const BtnAlignCenter = () => {
    return (
        <button onClick={() => document.execCommand("justifyCenter", false, null)}><i className="fas fa-align-center"></i></button>
    )
}
export const BtnAlignLeft = () => {
    return (
        <button onClick={() => document.execCommand("justifyLeft", false, null)}><i className="fas fa-align-left"></i></button>
    )
}
export const BtnAlignRight = () => {
    return (
        <button onClick={() => document.execCommand("justifyRight", false, null)}><i className="fas fa-align-right"></i></button>
    )
}
export const BtnJustify = () => {
    return (
        <button onClick={() => document.execCommand("justifyFull", false, null)}><i className="fas fa-align-justify"></i></button>
    )
}

export const BtnHyperlink = (props) => {
    return (
        <button title="cretae a hyperlink"
            onClick={props.clickHandle}>
            <i className="fas fa-link" ></i>
        </button>
    )
}

export const BtnUploadImage = () => {
    return (
        <span>
            <input title="upload an image"
                type="file"
                id="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={() => {
                    const file = document.querySelector("input[type=file]").files[0];
                    const editor = document.getElementById("editor");
                    let reader = new FileReader();
                    let dataURI;

                    reader.addEventListener("load",
                        function () {
                            dataURI = reader.result;
                            const img = document.createElement("img");
                            img.src = dataURI;
                            editor.appendChild(img);
                        }, false);
                    if (file) {
                        reader.readAsDataURL(file);
                    }
                }}>

            </input>
            <label htmlFor="file" className="tool-btn fas fa-image">
            </label>
        </span>
    )
}


