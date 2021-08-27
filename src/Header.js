import React from 'react';

export default function Header() {
    return (
        <header className="masthead" style={{backgroundImage: "url('img/home-bg.jpg')"}}>
            <div className="overlay"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>The Fishy Blog</h1>
                            <span className="subheading">So Fishy Fishy</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}