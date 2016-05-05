'use strict';

export default function(){
    var n = '';
    for(var i=0; i<6; i++){
        n+=Math.floor(Math.random()*10);
    }
    return n;
}