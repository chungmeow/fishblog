import React from 'react';

export default function Header(props) {
    const header = props.header;
    return (
        <header className="masthead" style={header.imgPath}>
            <div className="overlay"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className={header.headingType}>
                            <h1>{header.headingTitle}</h1>
                            { !!header.subheading && <span className="subheading">{header.subheading}</span> }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}