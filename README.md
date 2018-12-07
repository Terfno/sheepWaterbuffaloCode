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

そしてそれぞれの文字で改行を入れると以下のようになる。
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
