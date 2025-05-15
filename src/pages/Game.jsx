import { useEffect, useState } from "react"
import { Ressources } from "../components/Ressources"
import { Quests } from "../components/Quests";
import { Map } from "../components/Map";
import { useRessources } from "../Store/Zustand";
import { Link, useNavigate } from "react-router-dom";

export function Game() {

    const ressources = useRessources(state => state.ressources);
    const addAvailableSurvivor = useRessources(state => state.addAvailableSurvivor)
    const addTotalSurvivor = useRessources(state => state.addTotalSurvivor)
    const removeWood = useRessources(state => state.removeWood)
    const consumeMeat = useRessources(state => state.consumeMeat)
    const time = useRessources(state => state.time)
    const increaseTime = useRessources(state => state.increaseTime)
    const resetRessource = useRessources(store => store.resetRessource)

    const navigate = useNavigate()

        useEffect(() => {
        const interval = setInterval(()=>{
            increaseTime(1);
        },1000);
        return () => {
            clearInterval(interval);
        }
    },[]);

        useEffect(() => {
        if(time % 1 == 0){
            if(ressources.meat <= 1){
                resetRessource();
                navigate('/leaderboard');
            }
            consumeMeat();
        }
    }, [time]);

    const [quests, setQuest] = useState([
        {
          "id": 1,
          "title": "Reconstruire l'Abri",
          "description": "Utilise du bois et de la pierre pour reconstruire un abri effondré pour les nouveaux survivants.",
          "completed": false,
          "reward": {
            "survivor": 2
          }
        },
        {
          "id": 2,
          "title": "Chasse en Forêt",
          "description": "Organise une expédition pour chasser du gibier dans la forêt.",
          "completed": false,
          "reward": {
            "meat": 10
          }
        },
        {
          "id": 3,
          "title": "Renforcer les Palissades",
          "description": "Améliore les défenses du camp avec du bois et de la pierre.",
          "completed": false,
          "reward": {
            "survivor": 1,
            "stone": 5
          }
        },
        {
          "id": 4,
          "title": "Secourir un Groupe Isolé",
          "description": "Envoie des survivants expérimentés pour secourir un petit groupe coincé dans les montagnes.",
          "completed": false,
          "reward": {
            "survivor": 3,
            "meat": 2
          }
        },
        {
          "id": 5,
          "title": "Stock de Bois Urgent",
          "description": "Collecte rapidement du bois pour éviter le gel nocturne.",
          "completed": false,
          "reward": {
            "wood": 20
          }
        },
        {
          "id": 6,
          "title": "Extraction de Pierre",
          "description": "Lance une opération d’extraction dans la carrière voisine.",
          "completed": false,
          "reward": {
            "stone": 15
          }
        },
        {
          "id": 7,
          "title": "Cuisiner pour la Tribu",
          "description": "Utilise du bois pour allumer un feu et cuisiner de la viande pour nourrir le camp.",
          "completed": false,
          "reward": {
            "survivor": 1
          }
        },
        {
          "id": 8,
          "title": "Construction d'un Grenier",
          "description": "Bâtis un grenier avec du bois pour mieux stocker les ressources.",
          "completed": false,
          "reward": {
            "wood": 5,
            "stone": 5
          }
        },
        {
          "id": 9,
          "title": "Étrangers à la Porte",
          "description": "Des étrangers demandent l’asile. Fournis-leur un abri et de la nourriture.",
          "completed": false,
          "reward": {
            "survivor": 2
          }
        },
        {
          "id": 10,
          "title": "Rituels de Survie",
          "description": "Organise un rituel de cohésion autour d’un feu sacré.",
          "completed": false,
          "reward": {
            "survivor": 1,
            "meat": 3
          }
        }
      ])

    const handleValidateQuest = (questId) => {
      const updateQuest = quests.map(quest => quest.id === questId ? {...quest, completed: true} : quest )

      setQuest(updateQuest)
    }

    const map = useRessources(store => store.map)
    const addBuilding = useRessources(store => store.addBuilding)

    const addSurvivor = () => {
      addAvailableSurvivor()  
      addTotalSurvivor()
    }

    const changeType = (x, y) => {
      if(ressources.wood >= 5) {
      const newMap = [...map];
      newMap[x][y].type = 'cabin';
      addBuilding(newMap);
      addSurvivor(); 
      removeWood() 
      }
    }

    return (
      <div className="w-full h-full flex flex-col justify-start items-center bg-blue-50 p-2">
        <div className="flex items-start w-full gap-2">
          <Quests quests={quests} onValidateQuest={handleValidateQuest} />
          <Ressources
            availableSurvivor={ressources.availableSurvivor}
            totalSurvivor={ressources.totalSurvivor}
            meat={ressources.meat}
            wood={ressources.wood}
            stone={ressources.stone}
          />
        </div>
        <Map map={map} addCabin={(x, y) => changeType(x, y)} />
        <Link to="/" className={`py-3 bg-orange-300 px-10 text-black rounded-2xl text-center`}>Go back</Link>
      </div>
    );
}