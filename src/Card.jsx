import React from "react"

import Button from '@material-ui/core/Button';

function Card(props) {
    const style = {
        background: 'linear-gradient(45deg, #4e9eff 20%, #4e9eff 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 36,
        padding: '9px 8px',
        marginTop: '10px',
        
        boxShadow: '0 2px 4px 1px rgba(33, 203, 243, .3)',
      };

    return (
        <div className="item">
            <div className="left">
                <div className="img">
                    <img src={props.imgsrc} alt="Project1" />
                </div>
            </div>
            <div className="right">
                <h2 className="project-title">{props.title}</h2>
                <h3 className="project-sub-title"></h3>
                <p className="project-desc">{props.projectd}</p>
               
                
                    
                <Button  className="btn" style={style} target="_blank" href={props.link}>Preview</Button>
                
            </div>
        </div>
    )
};


export default Card