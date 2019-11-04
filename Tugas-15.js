function diagonal() {
    var ab = 8;
    var bc = 6;
    console.log('Diketahui : ', 'AB =', ab, 'BC =', bc);
    console.log('Ditanyakan : AC?');
    var ac = Math.pow(ab, 2) + Math.pow(bc, 2);
    console.log('Jawab:  AC = ab2+bc2 =', Math.sqrt(ac));

}
diagonal();