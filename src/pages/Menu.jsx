import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import GameIcon from "@/assets/img/icons/shed.svg"
import { subtitle } from "../assets/sentance";

export function Menu({version}) {

    const onCreditShow = () => alert("@credit created by Antony");

    return (
        <div className='bg-blue-300 w-full h-screen flex flex-col justify-center items-center gap-2'>
            <div className="isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 flex flex-col items-center p-5 gap-5">
                <img src={GameIcon} className="w-16 animate-bounce" alt="shed" />
                <h1 className="text-center font-bold text-7xl text-amber-50">Survive React</h1>
                <h3 className="text-center rotate-5 mb-5">{subtitle}</h3>
                <nav className="flex flex-col justify-items-center gap-2">
                    <Link to="game" className={`py-3 bg-green-300 px-10 text-black rounded-2xl text-center`}>Play</Link>
                    <Link to="leaderboard" className={`py-3 bg-orange-300 px-10 text-black rounded-2xl text-center`}>Leader Board</Link>
                    <Link to="settings" className={`py-3 bg-orange-300 px-10 text-black rounded-2xl text-center`}>Settings</Link>
                    <Button value="Credits" color="bg-purple-300" action={() => onCreditShow()}/>
                </nav>
                <i className="text-center">{version}</i>
            </div>
        </div>
    )
}