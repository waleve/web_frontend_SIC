import React from 'react';

export class Book extends React.Component{
    constructor(props) {
        super(props);
        this.props = {
            name:null,
            author:null,
            language:null,
            time:null,
            price:null,
            image:null,
            order:null,
        }
    };

    render() {
        const info = this.props;
        return(
            <div className="responsive">
                <div className="gallery">
                        <img src={info.image} alt="book1" width="600" height="800"></img>
                    <div className="desc">{info.name}</div>
                </div>
            </div>
        )
    }

}

