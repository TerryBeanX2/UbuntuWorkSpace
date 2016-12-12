var map = new Map();
map.set('a','hello');
map.set('b','world');

for(let[k,v] of map){
    console.log(k,v);//0、ES6 console: ["a", "hello"],["b", "world"]
}

for(let[k] of map ){
    //只获取k
}