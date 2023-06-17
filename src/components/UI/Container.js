import "./Container.css"
function Container (props)
{
    const classes = `container ${props.className}`;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Container;