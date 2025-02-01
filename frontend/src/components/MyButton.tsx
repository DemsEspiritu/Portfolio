

export default function MyButton(props: { count: number, handleCount: () => void }) {
    return (
        <div>
            <button onClick={props.handleCount}>
                {props.count}
            </button>
        </div>
    )
}
