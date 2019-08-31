/// <summary>
/// 何でも屋さん
/// </summary>

/// <summary>
/// 日付のフォーマッター
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

/// <summary>
/// 連続するデータを分割する obj=値 , page=現在のページ , display=１ページで表示する件数
/// </summary>
export function Pages(obj,Nowpage,display){

    var objLength = obj.length;  
    if(display > objLength){
       display = objLength;
   }
return obj.slice((Nowpage -1)*display,((Nowpage -1)*display)+display);

}
/// <summary>
/// 何ページまで表示できるか
/// </summary>
export function NowPage(obj,display){
    var objLength = obj.length;
    var page = 1;
    if(objLength > display){
      page = Math.ceil(objLength/display);
    }
    return page;
}
