//class="favo"である要素(アンカーアグ)を取得
var list = document.getElementsByClassName('favo');
//リストから順にアンカータグを取り出し、そのhref属性をログに出力
for(var i = 0,len = list.length;i < len; i++){
    console.log(list.item(i).href);
}