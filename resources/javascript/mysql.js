var mysql = require('mysql');

var malzemeAdi,
    parcaNumarasi,
    stoktaKalan,
    ihtiyac,
    alinanFirma,
    gelen;

var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password : "test123"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});

function insert(){
    malzemeAdi = document.getElementById("malzemeAdiInput").value;
    parcaNumarasi = document.getElementById("parcaNumarasiInput").value;
    stoktaKalan = document.getElementById("stoktaKalanInput").value;
    ihtiyac = document.getElementById("ihtiyacInput").value;
    alinanFirma = document.getElementById("alinanFirmaInput").value;
    gelen = document.getElementById("gelenInput").value;

}