function myFunction() {
    var A_y = document.getElementById("A_yen");
    var B_y = document.getElementById("B_yen");
    var A_g = document.getElementById("A_gram");
    var B_g = document.getElementById("B_gram");
    var A_u = document.getElementById("A_unit");
    var B_u = document.getElementById("B_unit");



    if (A_y.value === "") {
        alert("Aの価格が入力されていません");
        return;
    }
    if (isNaN(A_y.value)) {
        alert("Aの価格が数値ではありません");
        return;
    }
    if (A_g.value === "") {
        alert("Aの重さが入力されていません");
        return;
    }
    if (isNaN(A_g.value)) {
        alert("Aの重さが数値ではありません");
        return;
    }

    if (A_u.value === "g"){

    let A_yen = (A_y.value);
    let A_gram = (A_g.value);
    let A_yen2 = (A_yen) / (A_gram);
    //let A_yen3 = (A_yen2) * 10;
    //let A_yen4 = (Math.round(A_yen3));
    //let A_yen5 = (A_yen4) / 10;

    var output_A = "A：" + "1gあたり" + (A_yen2) + "円" + " / 100gあたり" + (A_yen2) * 100 + "円";

    var A = document.getElementById("A");
    A.innerHTML = output_A;

    }

    if (A_u.value === "kg"){

    let A_yen = (A_y.value);
    let A_gram = (A_g.value) * 1000;
    let A_yen2 = (A_yen) / (A_gram);
    //let A_yen3 = (A_yen2) * 10;
    //let A_yen4 = (Math.round(A_yen3));
    //let A_yen5 = (A_yen4) / 10;
    
    var output_A = "A：" + "1gあたり" + (A_yen2) + "円" + " / 100gあたり" + (A_yen2) * 100 + "円";

    var A = document.getElementById("A");
    A.innerHTML = output_A;

    }

    if (B_u.value === "g") {

        let B_yen = (B_y.value);
        let B_gram = (A_g.value);
        let B_yen2 = (B_yen) / (B_gram);
        //let B_yen3 = (B_yen2) * 10;
        //let B_yen4 = (Math.round(B_yen3));
        //let B_yen5 = (B_yen4) / 10;

        var output_B = "B：" + "1gあたり" + (B_yen2) + "円" + " / 100gあたり" + (B_yen2) * 100 + "円";

        var B = document.getElementById("B");
        B.innerHTML = output_B;

    }

    if (B_u.value === "kg") {

        let B_yen = (B_y.value);
        let B_gram = (A_g.value) * 1000;
        let B_yen2 = (B_yen) / (B_gram);
        //let B_yen3 = (B_yen2) * 10;
        //let B_yen4 = (Math.round(B_yen3));
        //let B_yen5 = (B_yen4) / 10;

        var output_B = "B：" + "1gあたり" + (B_yen2) + "円" + " / 100gあたり" + (B_yen2) * 100 + "円";

        var B = document.getElementById("B");
        B.innerHTML = output_B;

    }
}