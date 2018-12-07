var makeSheepWaterbuffalo = (clearText) => {
    var cache=[]
    var binary = String(String(clearText).charCodeAt(0).toString(2))
    for(i=0;i<binary.length;i++){
        if(binary[i]==="1"){
            cache.push(":sheep:")
        }else if(binary[i]==="0"){
            cache.push(":water_buffalo:")
        }
    }
    return cache
}

// test for makeSheepWaterbuffalo
var char = "f"
console.log(makeSheepWaterbuffalo(char))
//// result
// [ ':sheep:',
//   ':sheep:',
//   ':water_buffalo:',
//   ':water_buffalo:',
//   ':sheep:',
//   ':sheep:',
//   ':water_buffalo:' ]
//// result
// test for makeSheepWaterbuffalo

var makeShortWolfCrocodile = (sheepWaterbuffalo) => {
    var sheepWaterbuffalo = sheepWaterbuffalo
    var cache = []
    for(i=0;i<sheepWaterbuffalo.length;i++){
        if(sheepWaterbuffalo[i]===":sheep:" && sheepWaterbuffalo[i+1]!=":sheep:"){
            cache.push(sheepWaterbuffalo[i])
        }else if(sheepWaterbuffalo[i]===":water_buffalo:" && sheepWaterbuffalo[i+1]!=":water_buffalo:"){
            cache.push(sheepWaterbuffalo[i])
        }else if(sheepWaterbuffalo[i]===":sheep:" && sheepWaterbuffalo[i+1]===":sheep:"){
            cache.push(":wolf:")
        }else if(sheepWaterbuffalo[i]===":water_buffalo:" && sheepWaterbuffalo[i+1]===":water_buffalo:"){
            cache.push(":crocodile:")
        }
    }
    return cache
}

// test for makeShortWolfCrocodile
var array = [ ':sheep:',
':sheep:',
':water_buffalo:',
':water_buffalo:',
':sheep:',
':sheep:',
':water_buffalo:' ]
console.log(makeShortWolfCrocodile(array))
//// result
// [ ':wolf:',
//   ':sheep:',
//   ':crocodile:',
//   ':water_buffalo:',
//   ':wolf:',
//   ':sheep:',
//   ':water_buffalo:' ]
//// result
// test for makeShortWolfCrocodile

var makeShortBearElephant = (wolfCrocodile) => {
    var wolfCrocodile = wolfCrocodile
    var cache=[]
    for(i=0;i<wolfCrocodile.length;i++){
        if(wolfCrocodile[i]===":sheep:" && wolfCrocodile[i+1]!=":sheep:"){
            cache.push(wolfCrocodile[i])
        }else if(wolfCrocodile[i]===":water_buffalo:" && wolfCrocodile[i+1]!=":water_buffalo:"){
            cache.push(wolfCrocodile[i])
        }else if(wolfCrocodile[i]===":wolf:" && wolfCrocodile[i+1]!=":wolf:"){
            cache.push(wolfCrocodile[i])
        }else if(wolfCrocodile[i]===":crocodile:" && wolfCrocodile[i]!=":crocodile:"){
            cache.push(wolfCrocodile[i])
        }else if(wolfCrocodile[i]===":wolf" && wolfCrocodile[i+1]===":wolf:"){
            cache.push(":bear:")
        }else if(wolfCrocodile[i]===":crocodile:" && wolfCrocodile[i+1]===":crocodile:"){
            cache.push(":elephant:")
        }
    }
    return cache
}

var makeSWC = (clearText) => {
    var result = ""
    cache = []
    var counter_1 = String(clearText).length
    for(i=0;i<counter_1;i++){
        
        var counter_2 = cache_2.length
        for(j=0;j<counter_2;j++){
            result += String(cache_2[j])
        }
        if(i!=counter_1-1){
            cache.length = 0
            cache_1.length = 0
            cache_2.length = 0
            result += ", "
        }
    }
    return result
}

// console.log("hoge="+makeSWC("omaebakajaneenosindekoiya"))

// ### 参考にさせていただいた
// * [3分でできるnpmモジュール](https://qiita.com/fnobi/items/f6b1574fb9f4518ed520)
// * [npm パッケージを作って公開してみた](http://neos21.hatenablog.com/entry/2017/08/10/080000)
// * [npm @neos21/neos21](https://www.npmjs.com/package/@neos21/neos21)
// * [指定文字の文字コード（ASCIIコード）を調べる](http://www.24w.jp/study_contents.php?bid=javascript&iid=javascript&sid=string&cid=007)
// * [JavaScriptで文字列の長さを取得する方法：length()](https://uxmilk.jp/14057)
// * [JavaScriptの「this」は「4種類」？？](https://qiita.com/takeharu/items/9935ce476a17d6258e27)
// * [JavaScriptにおける数値⇔文字列の型変換あれこれ](https://lealog.hateblo.jp/entry/2013/02/28/005010)
// * [ASCIIコード表](http://www9.plala.or.jp/sgwr-t/c_sub/ascii.html)
// * [js 与えられた整数を二進数で返す](https://qiita.com/may88seiji/items/e4d017a8663070c8c94e)
// * [JavaScriptの配列の使い方まとめ。要素の追加,結合,取得,削除。](https://qiita.com/takeharu/items/d75f96f81ff83680013f)
