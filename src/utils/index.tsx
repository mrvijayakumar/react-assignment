export function doSort(data : any, columnID : any, orderBy : any) {
    const sorted = data.sort((lhs : any, rhs : any) => {
        switch (orderBy) {
            case true:
                return (lhs[columnID] > rhs[columnID]) ? 1 : ((lhs[columnID] < rhs[columnID]) ? -1 : 0);
            case false:
                return (rhs[columnID] > lhs[columnID]) ? 1 : ((rhs[columnID] < lhs[columnID]) ? -1 : 0);
        }
    });
    return sorted;
}
export function doFilter(data : any, value : any) {
    const filteredData = data.filter((item :any)=> {        
      return !!JSON.stringify(Object.values(item)).match(new RegExp(value, 'i'));
    });
    return filteredData;
}
export function pluck(obj : any, name : any) { 
    const isArray = Array.isArray(name), result = [];
    for(let row in obj){
        if(isArray) {
            const tempObj = {} as any;
            for(let col in name){
                if(obj[row].hasOwnProperty([name[col]]))
                    tempObj[name[col]] = obj[row][name[col]];
            }
            Object.keys(tempObj).length !== 0 && result.push(tempObj);
        }
    }
    return result;
}