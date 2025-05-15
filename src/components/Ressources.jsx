import SurvivorIcon from "@/assets/img/icons/survivor.svg"
import MeatIcon from "@/assets/img/icons/meat.svg"
import WoodIcon from "@/assets/img/icons/wood.svg"
import StoneIcon from "@/assets/img/icons/stone.svg"

export function Ressources({availableSurvivor, totalSurvivor, meat, wood, stone}) {

    return (
      <ul className="isolate rounded-xl bg-white/20 w-full shadow-lg ring-1 ring-black/5 flex p-5 gap-5">
        <li className="flex items-center gap-1">
          <img className="w-12" src={SurvivorIcon} alt="survivor" />
          <p className="bg-white text-yellow-900 rounded-2xl py-2 px-3 font-bold">
            {availableSurvivor} / {totalSurvivor}
          </p>
        </li>
        <li className="flex items-center gap-1">
          <img className="w-12" src={MeatIcon} alt="meat" />
          <p className="bg-white text-yellow-900 rounded-2xl py-2 px-3 font-bold">
            {meat}
          </p>
        </li>
        <li className="flex items-center gap-1">
          <img className="w-12" src={WoodIcon} alt="wood" />
          <p className="bg-white text-yellow-900 rounded-2xl py-2 px-3 font-bold">
            {wood}
          </p>
        </li>
        <li className="flex items-center gap-1">
          <img className="w-12" src={StoneIcon} alt="stone" />
          <p className="bg-white text-yellow-900 rounded-2xl py-2 px-3 font-bold">
            {stone}
          </p>
        </li>
      </ul>
    );
}