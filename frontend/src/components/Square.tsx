

export default function Square(props: { numberName: string }) {

    function handleClick() {
        console.log();
        
    }

    return (
        <div>
            <button
                onClick={handleClick}
                value={props.numberName}
                className="p-20 bg-red-500 text-4xl text-white rounded-md">
                {props.numberName}
            </button>
        </div>
    )
}
