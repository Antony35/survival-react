import { Cell } from "./Cell";

export function Map({map, addCabin}) {

    return(
        <div className="grid grid-cols-5 p-5 bg-blue-50">
            {
                map.map(column => (
                    column.map((cell) => (
                      <div key={`${cell.column} ${cell.line}`} className="bg-blue-200 border-1 p-2">
                        <Cell type={cell.type} addCabin={() => addCabin(cell.column, cell.line)}/>
                      </div>
                    )) 
                ))
            }
        </div>
    )
}