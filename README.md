# sheepWaterbuffaloCode
[#kosen16s](https://twitter.com/search?q=%23kosen16s&src=typd) で使用されるsheepWaterbuffaloCode，通称SWCを生成する

## SWCについて
SWCの現在の仕様はASCIIのみに対応している。

### 例 NEMUI
`NEMUI`という単語をSWCによって暗号化(笑)してみる。

まずそれぞれをASCIIに則って10進数に変換する。

すると，`NEMUI`→`78 69 77 85 73`となる。

次にその10進数を2進数に変換する。

すると，`78 69 77 85 73`→`1001110 1000101 1001101 1010101 1001001`となる。

それぞれ`1`を:sheep:，`0`を:water_buffalo:として変換する。

そしてそれぞれの文字で改行またはカンマを入れて区切ると以下のようになる。
```
:sheep: :water_buffalo: :water_buffalo: :sheep: :sheep: :sheep: :water_buffalo: 
:sheep: :water_buffalo: :water_buffalo: :water_buffalo: :sheep: :water_buffalo: :sheep: 
:sheep: :water_buffalo: :water_buffalo: :sheep: :sheep: :water_buffalo: :sheep: 
:sheep: :water_buffalo: :sheep: :water_buffalo: :sheep: :water_buffalo: :sheep:
:sheep: :water_buffalo: :water_buffalo: :sheep: :water_buffalo: :water_buffalo: :sheep:
```

メッセージとしてはこう見える

:sheep: :water_buffalo: :water_buffalo: :sheep: :sheep: :sheep: :water_buffalo: 

:sheep: :water_buffalo: :water_buffalo: :water_buffalo: :sheep: :water_buffalo: :sheep: 

:sheep: :water_buffalo: :water_buffalo: :sheep: :sheep: :water_buffalo: :sheep: 

:sheep: :water_buffalo: :sheep: :water_buffalo: :sheep: :water_buffalo: :sheep:

:sheep: :water_buffalo: :water_buffalo: :sheep: :water_buffalo: :water_buffalo: :sheep:

### 参考にさせていただいた
* [3分でできるnpmモジュール](https://qiita.com/fnobi/items/f6b1574fb9f4518ed520)
* [npm パッケージを作って公開してみた](http://neos21.hatenablog.com/entry/2017/08/10/080000)
* [npm @neos21/neos21](https://www.npmjs.com/package/@neos21/neos21)
* [指定文字の文字コード（ASCIIコード）を調べる](http://www.24w.jp/study_contents.php?bid=javascript&iid=javascript&sid=string&cid=007)
* [JavaScriptで文字列の長さを取得する方法：length()](https://uxmilk.jp/14057)
* [JavaScriptの「this」は「4種類」？？](https://qiita.com/takeharu/items/9935ce476a17d6258e27)
* [JavaScriptにおける数値⇔文字列の型変換あれこれ](https://lealog.hateblo.jp/entry/2013/02/28/005010)
* [ASCIIコード表](http://www9.plala.or.jp/sgwr-t/c_sub/ascii.html)
* [js 与えられた整数を二進数で返す](https://qiita.com/may88seiji/items/e4d017a8663070c8c94e)
* [JavaScriptの配列の使い方まとめ。要素の追加,結合,取得,削除。](https://qiita.com/takeharu/items/d75f96f81ff83680013f)
* [比較演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
* 