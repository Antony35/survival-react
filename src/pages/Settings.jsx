import { Link } from "react-router-dom"

export function Settings() {

    return (
        <div className='bg-blue-300 w-full h-screen flex flex-col justify-center items-center gap-2'>
            <p>language: </p>
            <p>sound: true / false</p>
            <Link to="/" className={`py-3 bg-orange-300 px-10 text-black rounded-2xl text-center`}>Go back</Link>
        </div>   
    )
}