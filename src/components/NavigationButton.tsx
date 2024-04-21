
export default function NavigationButton({text, onClick}: Readonly<{ text: string, onClick: () => void }>) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}