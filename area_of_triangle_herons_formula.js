let s1 = 5;
let s2 = 10;
let s3 = 12;

if ((s1 + s2) > s3 && (s1 + s3) > s2 && (s2 + s3) > s1) {
    let semiperimeter = (s1 + s2 + s3) / 2

    let area = Math.sqrt(semiperimeter * (semiperimeter - s1) * (semiperimeter - s2) * (semiperimeter - s3))

    console.log(area)
}
else{
    console.log("write correct sides.")
}

