/**
 * Created by Sam on 10/28/2015.
 */
var audioSections = dataArray();
var myAudio = document.getElementById("audio_player");
var totalAudioPage = audioSections.length;

window.onload=function(){
    document.getElementById("pageNumber").innerHTML = "1 / " + totalAudioPage;
};

var timeUpdate = function(){
    var cTime = parseInt(myAudio.currentTime);
    changeAudioImageSrc(cTime);
};

var changeAudioImageSrc = function(time){
    for(var i=0;i < totalVideoPage; i ++){
        var firstSection = videoSections[i];
        if(firstSection.time == time){
            var imgUrl = "course/" + firstSection.image;
            document.getElementById("imgView").src = imgUrl;
            document.getElementById("pageNumber").innerHTML = i+1 + " / " + totalVideoPage;
            break;
        }
        if(i < totalVideoPage - 1){
            var tmpNum = i + 1 ;
            var secondSection = videoSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = "course/" + firstSection.image;
                document.getElementById("imgView").src = imgUrl;
                document.getElementById("pageNumber").innerHTML = tmpNum + " / " + totalVideoPage;
                break;
            }
        }else if(i == totalVideoPage - 1){
            var secondSection = videoSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = "course/" + firstSection.image;
                document.getElementById("imgView").src = imgUrl;
                document.getElementById("pageNumber").innerHTML = tmpNum + " / " + totalVideoPage;
                break;
            }
        }
    }
};
