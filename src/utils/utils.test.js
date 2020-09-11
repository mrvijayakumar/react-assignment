import { doSort , doFilter , pluck} from './index';


const data = [{name: "Switzerland"},{name: "Afghanistan"},];
const orderBy  = true;

it('doSort' , () => {
    expect(doSort(data ,  'name' , orderBy)).toEqual([{name: "Afghanistan"},{name: "Switzerland"}],);
});



it('doFilter' , () => {
    expect(doFilter(data , "Afg")).toEqual([{name: "Afghanistan"},],);
});



