import TreeIcon from "@/assets/img/icons/tree.svg"
import MountainIcon from "@/assets/img/icons/mountain.svg"
import CabinIcon from "@/assets/img/icons/cabin.svg"

export function Cell({type, addCabin}) {

    const randerImage = (type) => {        
        switch(type) {
            case 'tree':
                return  <img className="w-16 h-16" src={TreeIcon} alt="tree" />
            case 'stone' :
                return  <img className="w-16 h-16" src={MountainIcon} alt="tree" />
            case 'cabin': 
                return  <img className="w-16 h-16" src={CabinIcon} alt="cabin" />
            default :
                return <div className="w-16 h-16"></div>
        }
    }

    const handleClick = (type) => {
        switch(type) {
            case 'empty': {
                addCabin();
                break;
            }
        }
    }

    return(
        <>
        <div onClick={() => handleClick(type)}>
            {randerImage(type)}
        </div>
        </> 
    )
} 