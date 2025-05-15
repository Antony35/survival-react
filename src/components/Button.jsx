export function Button({value, color, action, disabled = false}) {
    return (
        <button onClick={action} className={`py-3 ${color} px-10 bg-amber-50 text-black rounded-2xl`} disabled={disabled}>{value}</button>
    )
}
