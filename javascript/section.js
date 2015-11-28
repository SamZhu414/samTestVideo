/**
 * Created by Sam on 10/28/2015.
 */
var videoSections = dataArray();
var isPlaying = false;
var myVideo = document.getElementById("video_player");
var totalVideoPage = videoSections.length;

window.onload=function(){
    document.getElementById("pageNumber").innerHTML = "1 / " + totalVideoPage;
    for(var i=0;i < totalVideoPage; i ++){
        var sectionObject = new Object();
        sectionObject = videoSections[i];
        var li = document.createElement('li');
        var strTitle = subStringReplaceToPoint(sectionObject.title);

        var listNum = i +1;
        listNum = listNum + ". ";

        var liHtml =  "<div class='title_div_left'>";
        liHtml = liHtml + "<a title='";
        liHtml = liHtml + sectionObject.title;
        liHtml = liHtml + "' onclick='goPage(";
        liHtml = liHtml + sectionObject.time;
        liHtml = liHtml + ")'>";
        liHtml = liHtml + listNum + strTitle;
        liHtml = liHtml + "</a></div><div class='title_div_right'> ";
        liHtml = liHtml + sectionObject.showTime;
        liHtml = liHtml + " </div><div class='clear'></div>" ;
        li.innerHTML = liHtml;
        document.getElementById("listTitle").appendChild(li);
    }
};

var changeVideoImageSrc = function(time){

    for(var i=0;i < totalVideoPage; i ++){
        var firstSection = videoSections[i];
        if(firstSection.time == time){
            var imgUrl = "course/" + firstSection.image;
            document.getElementById("imgView").src = imgUrl;
            document.getElementById("pageNumber").innerHTML = i+1 + " / " + totalVideoPage;
            changeLiStyle(i);
            break;
        }
        if(i < totalVideoPage - 1){
            var tmpNum = i + 1 ;
            var secondSection = videoSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = "course/" + firstSection.image;
                document.getElementById("imgView").src = imgUrl;
                document.getElementById("pageNumber").innerHTML = tmpNum + " / " + totalVideoPage;
                changeLiStyle(i);
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

var goPage = function(index){
    if(!isPlaying){
        myVideo.play();
        myVideo.currentTime = index;
    }else{
        myVideo.currentTime = index;
    }
};

var timeUpdate = function(){
    var cTime = parseInt(myVideo.currentTime);
    changeVideoImageSrc(cTime);
};

var changeLiStyle = function(val){
    //var obj_lis = document.getElementById("listTitle").getElementsByTagName("li");
    //for(m=0;m<obj_lis.length;m++){
    //    obj_lis[m].className="";
    //}
    //obj_lis[val].className = "set-li-color";
};

var subStringReplaceToPoint = function(str){
    if(str.length>11){
        str = str.substring(0,11)+"...";
    }
    return str;
}