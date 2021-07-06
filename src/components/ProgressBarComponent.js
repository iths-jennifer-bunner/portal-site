import React from 'react'
import "./ProgressBarComponent.scss"

export function progressBarClassChanger1(){
    let newScanning = document.getElementById("newScanning");
    let addDocument = document.getElementById("document");
    let documentUploaded = document.getElementById("documentUploaded")
    
    if(newScanning.classList.value === "addDocument-container"){
        newScanning.classList.remove("addDocument-container")
        newScanning.classList.add("addDocument-container-inactive")
    }

    if(addDocument.classList.value === "addDocument-container-inactive"){
        addDocument.classList.remove("addDocument-container-inactive")
        addDocument.classList.add("addDocument-container")
    }

    if(documentUploaded.classList.value === "addDocument-container"){
        documentUploaded.classList.remove("addDocument-container")
        documentUploaded.classList.add("addDocument-container-inactive")
    }
}

export function progressBarClassChanger2(){
    let addDocument = document.getElementById("document");
    let documentUploaded = document.getElementById("documentUploaded")

    if(addDocument.classList.value === "addDocument-container"){
        addDocument.classList.remove("addDocument-container")
        addDocument.classList.add("addDocument-container-inactive")
        documentUploaded.classList.remove("addDocument-container-inactive")
        documentUploaded.classList.add("addDocument-container")
    }
}

function ProgressBarComponent() {
    return (
        <div className="progressbar-container">

            <div id="newScanning" className="addDocument-container">
                <p className="newScanning-container__p">NEW SCANNING</p>
                <div className="newScanning-container__ZS-symbol">
                    <img src="/images/ZS_Symbol@4x.png" className="newScanning-container__ZS-symbol__logo" alt="Zignsec Symbol"></img>
                </div>
            </div>

            <div className="line"></div>

            <div id="document" className="addDocument-container-inactive">
                <p className="addDocument-container__p">ADD DOCUMENT</p>
                <div className="addDocument-container__ZS-symbol">
                    <img src="/images/ZS_Symbol@4x.png" className="addDocument-container__ZS-symbol__logo" alt="Zignsec Symbol"></img>
                </div>
            </div>

            <div className="line"></div>

            <div id="documentUploaded" className="addDocument-container-inactive">
                <p className="documentUploaded-container__p">DOCUMENT UPLOADED</p>
                <div className="documentUploaded-container__ZS-symbol">
                    <img src="/images/ZS_Symbol@4x.png" className="documentUploaded-container__ZS-symbol__logo" alt="Zignsec Symbol"></img>
                </div>
            </div>
        </div>
    )
}

export default ProgressBarComponent
