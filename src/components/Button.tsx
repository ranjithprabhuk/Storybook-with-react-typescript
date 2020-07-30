import * as React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
export interface IButtonProps {
    children?: React.ReactNode,
    onClick?: (e: any) => void
}

const Button: React.SFC<IButtonProps> = (props) => (
    <button onClick={props.onClick} className={'btn btn-primary'} type="button">
        {props.children}
    </button>
);
Button.defaultProps = {
    children: null,
    onClick: () => { }
};
export default Button;