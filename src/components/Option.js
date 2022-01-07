const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                props.handleDeleteOption(props.optionText);
                }}
            >
                remove option
            </button>
        </div>
    );
};

export {Option};