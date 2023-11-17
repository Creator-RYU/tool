function myFunction() {
    var yen = document.getElementById("yen");
    var discount = document.getElementById("discount");
    if (yen.value === "") {
        alert("価格が入力されていません");
        return;
    }
    if (isNaN(yen.value)) {
        alert("価格が数値ではありません");
        return;
    }
    if (discount.value === "") {
        alert("割引き率が入力されていません");
        return;
    }
    if (isNaN(discount.value)) {
        alert("割引率が数値ではありません");
        return;
    }

    let discount1 = (discount.value);
    let discount2 = (discount1) / 100;
    let discount3 = (yen.value);
    let discount4 = (discount3) * (discount2);
    let discount5 = (discount3) - (discount4);
    let discount6 = (discount5) * 10;
    let discount7 = (Math.round(discount6));
    let discount8 = (discount7) / 10;
    let discount9 = (discount4) * 10;
    let discount10 = (Math.round(discount9));
    let discount11 = (discount10) / 10;
    var output = "割引後の値段：" + (discount8) + "円" + " （－" + (discount11) + "円）";
    var myOutput = document.getElementById("myOutput");
    myOutput.innerHTML = output;
}