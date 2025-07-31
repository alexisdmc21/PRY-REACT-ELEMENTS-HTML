import React from "react";

const Input = React.forwardRef((props, ref) => {
    return (
        <div>
            <input 
                ref={ref}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className={props.className}
                {...props}
            />
        </div>
    );
});

export default Input;