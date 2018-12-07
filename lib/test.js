var makeSheepWaterbuffalo = (clearText) => {
    console.log("makeSheepWaterbuffalo")
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
var char = " "
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
// test for makeSheepWaterbuffalo-------------------------------------------------

var makeShortWolfCrocodile = (sheepWaterbuffalo) => {
    console.log("makeShortWolfCrocodile")
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

// test for makeShortWolfCrocodile
var array_wc = [":sheep:",":water_buffalo:",":sheep:",":sheep:",":sheep:",":water_buffalo:",":water_buffalo:",":water_buffalo:"]
console.log(makeShortWolfCrocodile(array_wc))
//// result
// [ ':sheep:',
//   ':water_buffalo:',
//   ':wolf:',
//   ':sheep:',
//   ':crocodile:',
//   ':water_buffalo:' ]
//// result
// test for makeShortWolfCrocodile-------------------------------------------------

var makeShortBearElephant = (wolfCrocodile) => {
    console.log("makeShortBearElephant")
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

// test for makeShortBearElephant
var array_be=[":sheep:",":wolf:",":wolf:",":water_buffalo:",":crocodile:",":crocodile:",":sheep:"]
console.log(makeShortBearElephant(array_be))
//// result
// [ ':sheep:', ':bear:', ':water_buffalo:', ':elephant:', ':sheep:' ]
//// result
// test for makeShortBearElephant-------------------------------------------------


// test for 3 function
test=" "
console.log(makeShortBearElephant(makeShortWolfCrocodile(makeSheepWaterbuffalo(test))))
//// result
// [ ':wolf:', ':elephant:', ':sheep:' ]
//// result/
// test for 3 function-------------------------------------------------

var makeSWC = (encodeChar) => {
    var encodeChar = encodeChar
    return makeShortBearElephant(makeShortWolfCrocodile(makeSheepWaterbuffalo(encodeChar)))
}

// test for makeSWC
var clearText = "a"
console.log(makeSWC(clearText))
//// result
// [ ':wolf:', ':elephant:', ':sheep:' ]
//// result
// test for makeSWC