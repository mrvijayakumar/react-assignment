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
export function pluck(obj : any, name : string) {
    let result = [];
    for(let i in obj){
        if(obj[i].hasOwnProperty(name)){
            result.push(obj[i][name]);
        }
    }
    return result;
}