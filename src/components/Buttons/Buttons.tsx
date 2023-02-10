import React from "react";
interface Props {
    children?: React.ReactNode;
    height: string;
    width: string;
    onClick: () => void;
}
const Buttons: React.FC<Props> = ({
    children,
    height,
    width,
    onClick,
}) => {
    const style = {
        color: 'white',
        backgroundColor: '#ff5722',
        borderRadius: '10px',
        border: '1px solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <button onClick={onClick} style={{ ...style, height, width }}>
            {children}
        </button>);
}
export default Buttons;