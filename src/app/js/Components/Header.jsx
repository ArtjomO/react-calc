import React from "react";

export class Header extends React.Component {

    render() {


        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
            </div>
        )
    }
};

