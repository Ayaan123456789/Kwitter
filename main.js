Webcam.set( {
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90


}
);

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(ayaan){
        document.getElementById("result").innerHTML = "<img id='captured_image' src=' "+ayaan+ "'>";
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mgUTM09_H/model.json",modelLoaded);
function modelLoaded() {
    console.log("model is loaded");}




    function Check(){
        img = document.getElementById("captured_image");
        classifier.classify(img,gotResult);
    }
    
    function gotResult(error,results){
        if (error) {
           console.error(error);
       
        }
        else {
           console.log(results);
       document.getElementById("result_object_name").innerHTML = results[0].label;
       document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
       
           
        }
       }