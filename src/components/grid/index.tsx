import React, {useState, useEffect, FunctionComponent } from 'react';
import {doSort, doFilter, pluck} from '../../utils';
import {Labels} from '../../languages';
import  './style.css';
type GridProps = {
  preference: any,
  formatter : any
}
const Grid: FunctionComponent<GridProps> = ({formatter, preference}) => {
    const {columndef, gridData, gridUniqueId} = preference;
    const [data, setData] = useState(gridData);
    const [sortColumnName, setSortingColumn] = useState<string>("");
    const [sortOrderAsc, setsortOrderAsc] = useState<boolean>(true);
    const [filterValue, setFilterValue] = useState<string>("");
    const onHeaderColumnClick = (id : string) => {
      setsortOrderAsc(!sortOrderAsc);      
      setSortingColumn(id);      
      setData(doSort(gridData, id, sortOrderAsc));
    }
    const doFilterCb = (e : any) => {
      const value = e.currentTarget.value;     
      setFilterValue(value);
      if(value === "") {setData(gridData); return;}   
      setData(doFilter(dataUsedForFilterBasedOnColumnDefinitions(), value));
    }
    const onViewClick = (uniqueReference : string) => {
      formatter(uniqueReference);
    }
    const dataUsedForFilterBasedOnColumnDefinitions = () => {
      const filter = columndef.filter((item :any)=> { return !item.hasOwnProperty('filter') || (item.hasOwnProperty('filter') && item.filter); }),
            idFromColumnsDefAsObject = pluck(filter, ["id"]), 
            idFromColumnDef = idFromColumnsDefAsObject.map(x => x.id);
      return pluck(gridData, idFromColumnDef);
    }
    useEffect(() => {
      setData(data);
    }, [data]);
    return <>
    <div className="grid-filter">{`${Labels('filter')}`}: <input type="text" value={filterValue} onChange={(e) => doFilterCb(e)} placeholder={`${Labels('filterPlaceholder')}`}  /></div>
    <table>
          <thead>
            <tr>
              {columndef.map((item: any, index : Number) => {
                return !(item.hasOwnProperty('visibility') && item.visibility === 'hidden') && <th className={`${sortColumnName === item.id ? sortOrderAsc ? "headerSortDown" : "headerSortUp" : ""}`} id={item.id} onClick={() => onHeaderColumnClick(item.id)} key={"h"+index}>{item.name}</th>
              })}
            </tr>
          </thead>
          <tbody>
             {data.map((datum: any, index : Number) => {           
               return <tr key={"r"+index}>
                        {columndef.map((def: any, defIndex : Number) => {
                          if(!(def.hasOwnProperty('visibility') && def.visibility === 'hidden')) {
                            if(def.hasOwnProperty("formatter"))
                              return <td className="pointer" key={"c"+defIndex} onClick={() => {onViewClick(datum[gridUniqueId])}}>{def.name}</td>
                            else
                              return <td key={"d"+defIndex}>{datum[def.id]}</td>
                          }
                        })}
                      </tr>
              })}         
          </tbody>
      </table>
    </>
};
export default Grid;