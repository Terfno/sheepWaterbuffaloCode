var makeSheepWaterbuffalo = (clearChar) => {
    var cache=[]
    var binary = String(String(clearChar).charCodeAt(0).toString(2))
    for(i=0;i<binary.length;i++){
        if(binary[i]==="1"){
            cache.push(":sheep:")
        }else if(binary[i]==="0"){
            cache.push(":water_buffalo:")
        }
    }
    return cache
}

var makeShortWolfCrocodile = (sheepWaterbuffalo) => {
    var sheepWaterbuffalo = sheepWaterbuffalo
    var cache = []
    var counter = sheepWaterbuffalo.length
    for(i=0;i<counter;i++){
        if(sheepWaterbuffalo[i]===":sheep:" && sheepWaterbuffalo[i+1]!=":sheep:"){
            cache.push(sheepWaterbuffalo[i])
        }else if(sheepWaterbuffalo[i]===":water_buffalo:" && sheepWaterbuffalo[i+1]!=":water_buffalo:"){
            cache.push(sheepWaterbuffalo[i])
        }else if(sheepWaterbuffalo[i]===":sheep:" && sheepWaterbuffalo[i+1]===":sheep:"){
            cache.push(":wolf:")
            i++
        }else if(sheepWaterbuffalo[i]===":water_buffalo:" && sheepWaterbuffalo[i+1]===":water_buffalo:"){
            cache.push(":crocodile:")
            i++
        }
    }
    return cache
}

var makeShortBearElephant = (wolfCrocodile) => {
    var wolfCrocodile = wolfCrocodile
    var cache=[]
    var counter = wolfCrocodile.length
    for(i=0;i<counter;i++){
        if(wolfCrocodile[i]===":sheep:" && wolfCrocodile[i+1]!==":sheep:"){
            cache.push(wolfCrocodile[i])
        }else if(wolfCrocodile[i]===":water_buffalo:" && wolfCrocodile[i+1]!==":water_buffalo:"){
            cache.push(wolfCrocodile[i])
        }else if(wolfCrocodile[i]===":wolf:" && wolfCrocodile[i+1]!==":wolf:"){
            cache.push(wolfCrocodile[i])
        }else if(wolfCrocodile[i]===":crocodile:" && wolfCrocodile[i]!==":crocodile:"){
            cache.push(wolfCrocodile[i])
        }else if(wolfCrocodile[i]===":wolf:" && wolfCrocodile[i+1]===":wolf:"){
            cache.push(":bear:")
            i++
        }else if(wolfCrocodile[i]===":crocodile:" && wolfCrocodile[i+1]===":crocodile:"){
            cache.push(":elephant:")
            i++
        }
    }
    return cache
}

var makeSWC = (encodeChar) => {
    var encodeChar = encodeChar
    return makeShortBearElephant(makeShortWolfCrocodile(makeSheepWaterbuffalo(encodeChar)))
}

var encode = (clearText) => {
    var text = String(clearText)
    var counter = text.length
    for(i=0;i<counter;i++){
        console.log(makeSWC(text[i]))
    }
}

// test for encode
// ここのテキストによって1文字だけencodeして終了したり、逆に無限ループしたりする
// 例えば"abcdef"だと無限ループするが、"abcde"だとaだけencodeして終了する。
var testtext=""
encode(testtext)
// test for encode
