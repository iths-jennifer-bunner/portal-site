import React from 'react'
import "./BreadcrumbComponent.scss"

function BreadcrumbComponent(props) {
    return (
        <div className="breadcrumb-container">
            <div className="ZS-symbol">
                <img src="/images/ZS_Symbol@4x.png" className="ZS-symbol__logo" alt="Zignsec Symbol"></img>
            </div>
            <h2 className="pageTitle"><span className="pageTitle-line">{props.title}</span></h2>
            <div className="ZS-symbol">
                <img src="/images/ZS_Symbol@4x.png" className="ZS-symbol__logo" alt="Zignsec Symbol"></img>
            </div>
        </div>
    )
}

export default BreadcrumbComponent
