export default function NavigationButton({text, onClick}) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}