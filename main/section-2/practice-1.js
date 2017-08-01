'use strict';

module.exports = function countSameElements(collection) {
          let result = [];
          for(let item of collection){
                    let obj = finds(result,item);
                    if(obj){
                              obj.count++;
                    }else{
                              result.push({key: item, count: 1});
                    }
          }
          return result;

}
function finds(collection,ch){
          for(let item of collection){
                    if(item.key === ch){
                              return item;
                    }
          }
          return null;
}
