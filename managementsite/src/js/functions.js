/// <summary>
/// 何でも屋さん
/// </summary>

 export function  DataFormat(date,type){
        var format = 
        {
            1:["年","月","日"]
        }
        var tmp = date.split('-');
        tmp.forEach(function(x,y){
            tmp[y] = x + format[type][y]
        })
        var val= tmp.join('')
        return val;
    }
