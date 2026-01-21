interface Objectpagination {
    keyword : string,
    regex? : RegExp
}
const searchHelpers = (queri : Record <string,any>) : Objectpagination =>{
    let ObjectSearch : Objectpagination = {
       keyword : ""
    }  
    if(queri.keyword){
        ObjectSearch.keyword = queri.keyword;
        const regex = new RegExp(ObjectSearch.keyword,"i");
        ObjectSearch.regex = regex;
    }
    return ObjectSearch
}
export default searchHelpers;