Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90,
})
camera=document.getElementById("camera")
Webcam.attach('#camera')
function snapshot(){
    Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captureimage">'      
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z3zzF4OPr/model.json",modelloaded)
function modelloaded() {
    console.log("modelloaded")
}
function check(){
    img=document.getElementById("captureimage")
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
    if (error){ 
        console.log(error)
    }    else {
 console.log(results)
 document.getElementById("result_emotion_name").innerHTML=results[0].label
 document.getElementById("result_emotion_name2").innerHTML=results[1].label 
 var result=results[0].label
 var result2=results[1].label
 if (result=="best") {
     document.getElementById("update_emoji").innerHTML="&#128077;"
 }
 if (result=="amazing") {
    document.getElementById("update_emoji").innerHTML="&#128076;"
}
if (result=="victory") {
    document.getElementById("update_emoji").innerHTML="&#9996;"
}
if (result2=="best") {
    document.getElementById("update_emoji2").innerHTML="&#128077;"
}
if (result2=="amazing") {
   document.getElementById("update_emoji2").innerHTML="&#128077;"
}
if (result2=="victory") {
   document.getElementById("update_emoji2").innerHTML="&#9996;"
}
}}
    
