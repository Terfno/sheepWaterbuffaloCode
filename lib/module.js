var makeSWC = (clearText) => {
    var result = ""
    var cache=[]
    var cache_1=[]
    var cache_2=[]
    var counter_1 = String(clearText).length
    for(i=0;i<counter_1;i++){
        var binary = String(String(clearText).charCodeAt(i).toString(2))
        for(j=0;j<binary.length;j++){
            if(binary[j]==="1"){
                cache.push(":sheep:")
            }else if(binary[j]==="0"){
                cache.push(":water_buffalo:")
            }
        }
        for(j=0;j<cache.length;j++){
            if(cache[j]===":sheep:" && cache[j+1]!=":sheep:"){
                cache_1.push(cache[j])
            }else if(cache[j]===":water_buffalo:" && cache[j+1]!=":water_buffalo:"){
                cache_1.push(cache[j])
            }else if(cache[j]===":sheep:" && cache[j+1]===":sheep:"){
                cache_1.push(":wolf:")
            }else if(cache[j]===":water_buffalo:" && cache[j+1]===":water_buffalo:"){
                cache_1.push(":crocodile:")
            }
        }
        for(j=0;j<cache_1.length;j++){
            if(cache_1[j]===":sheep:"){
                cache_2.push(":sheep:")
            }else if(cache_1[j]===":water_buffalo:"){
                cache_2.push(":water_buffalo:")
            }else if(cache_1[j]===":wolf:" && cache_1[j+1]!="wolf"){
                cache_2.push(":wolf:")
            }else if(cache_1[j]===":crocodile:" && cache_1[j+1]!=":crocodile:"){
                cache_2.push(":crocodile:")
            }else if(cache_1[j]===":wolf:" && cache_1[j+1]===":wolf:"){
                cache_2.push(":bear:")
            }else if(cache_1[j]===":crocodile:" && cache_1[j+1]===":crocodile:"){
                cache_2.push(":elephant:")
            }
        }
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

console.log("hoge="+makeSWC("omaebakajaneenosindekoiya"))

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
