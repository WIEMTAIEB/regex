// Exercice 1
function test1 (){
    let x ="xx"
    let regex=/[" " ,]/g;
     let resultat=regex.test(x)
     //console.log(resultat)
  }
  test1 ()
  // Exercice 2
  function  test2(){
      let name= "wiem"
       let regex=/[eayuoi]/g;
        let resultat=name.match(regex).length
        //console.log(resultat)
  }
  test2()
    // Exercice 3
    function test3(){
        let name1="wiem taieb"
        let regex=/[eayuoi]/g;
        let res =name1.replace(regex,"#")
       // console.log(res)

    }
    test3()
     // Exercice 4
     function test4(){
        let exp="5+6"
        let regex=/[0-9][+-/*][0-9]/g
        let res =regex.test(exp)
       console.log(res)

    }
  test4()
 // ------------------EXercice 5--------------------
function test5(){
    let name="wwww"
    let regex=/^[a][a-zA-Z]{0,16}[c]{1,16}[a-zA-Z]{0,14}$/;
    let resultat=regex.test(name)
    //console.log(resultat)
    }
    test5()
    // ------------------EXercice 6--------------------
    function test6(){
    let chifre="111";
    let regex=/^[0-9]{5}$/;
    let resultat=regex.test(chiffre)
    console.log(chifre)
    }
    test6()


