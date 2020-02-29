//document.getElementById('rightCol').style.display = 'none';
//document.getElementById('stream_pagelet').style.display = 'none';
//document.getElementById('rhc_col').style.display = 'none';


// mobile version
//document.getElementById('m_newsfeed_stream').style.display = 'none';
var stream = document.getElementById('m_newsfeed_stream').innerHTML;
//var stream = document.getElementById('mainContainer').innerHTML;
//var posts = stream.getElementsByClassName('cz db ec');
console.log(stream);
console.log(stream.length);

var start = 0;
var end = stream.length;
//end = 10;

for (pos = 0; pos < end; pos++) {
    //for (i = 2433; i < 2545; i++) {
        //var n = str.search(String.fromCharCode(i));

    //}
    var str = "";
    var ss = "";
    var contin = 0;
    var code = stream.charCodeAt(pos);
    if(code > 2432 && code <2545){
        ss=ss+stream[pos];
        console.log(pos);
        //var targetString = stream.substring(pos, end);
        //var findEnd = targetString.search("</p>");
        //targetString = stream.substring(start, pos);
        //var findStart = targetString.search("<p>");
        console.log(code);
        console.log(stream[pos]);
        var fend = pos;
        var fstart = pos;
        var br_run = false;
        var str1 = "";
        var str2 = "";
        var inner = 0;
        var validContent = true;
        for (fend = pos; fend < end; fend++) {

            if(stream.substring(fend, fend+1)=="<"){
                if(stream.substring(fend, fend+2)=="<br>"){
                    fend = fend + 3;
                    continue;
                }
                if(stream.substring(fend, fend+2)=="</"){
                    if(br_run){
                        br_run = false;
                        while(stream[fend]!=">"){
                            fend = fend + 1;
                        }
                        //fend = fend + 1;
                    }else{
                        if(stream.substring(fend, fend+4)=="</p>"){
                            validContent = false;
                        }else {
                            validContent = true;
                        }
                        break;
                    }
                }else {
                    if (br_run) {

                    } else {
                        br_run = true;
                    }
                }
            }
            if(!br_run && stream.substring(fend, fend+1)==">"){
                validContent = false;
                break;
            }
            if(!br_run){
                str2=str2+stream[fend];
            }

        }
        pos = fend;
        if(!validContent){
            continue;
        }
        for (fstart = pos-1; fstart > 0; fstart--) {

            if(stream.substring(fstart, fstart+1)==">"){
                break;
            }
            str2 = stream[fstart]+str2;

        }
        var ak = stream.substring(fstart,fend+4);
        var bk = stream.substring(fstart-4,fend+4+4);
        //console.log(ak);
        //console.log(bk);
        //console.log(str);
        console.log(str2);
        //break;
        pos = fend;
        /*if(contin<1){
            str = stream[pos];
            contin= 2;
        }else{
            str=str+stream[pos];
            //str.append(stream[pos]);
            //str = str + stream[pos];
        }*/
    }/*else{
        if(contin>1) {
            if(code>31 && code < 33){
                ss=ss+stream[pos];
            }else {
                contin = 0;
                console.log("ending");
                console.log(str);
            }
        }
    }*/
    //console.log(ss);

}

/*function strEncodeUTF16(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i)
    }
    return arr
}


var arr = strEncodeUTF16('€13,56ব');

console.log(arr);*/

//var ab  = "<div class="dx"></div><div id="m-top-of-feed"></div><div class="dy dz ea"><div role="article" class="cy background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/ffb/1/16/1f64a.png&quot;)">🙊</span></span>।বিরিয়ানীর কোনো স্মেল নেই।পোলাও রোস্ট বলাযায়(অনেকে বলতে পারেন ১০০টাকার অফারে এরথেকে বেটার কিছু হয়না,কিন্তু তাইবলে বিরিয়ানীর বদলে পোলাও মনেহলে এমন অফার দিয়ে কি লাভ <span class="_47e3 _5mfr" title="squint emoticon"><img class="img""



// document.getElementById('pagelet_ego_pane').style.display = 'none';
// document.getElementsByClassName('img').style.display = 'none';
// document.getElementsByClassName('pagelet_ego_pane').style.display = 'none'; CHAT SIDEBAR PROFILE PAGE -> NOT WORKING











// I've tried to remove images from chat side bar but failed. code below
// window.addEventListener("load", myMain, false);


// console.log(document.getElementsByClassName('img'));

// var chatProfileImages = document.getElementsByClassName('img');
// for (var i = 0; i < chatProfileImages.length; ++i) {
    
//     var item = chatProfileImages[i];
//     console.log(item);
//     item.style.display = 'none';
// }

// function myMain(evt) {
//     console.log(document.getElementsByClassName('img'));

//     var chatProfileImages = document.getElementsByClassName('img');
//     for (var i = 0; i < chatProfileImages.length; ++i) {
        
//         var item = chatProfileImages[i];
//         console.log(item);
//         item.style.display = 'none';
//     }

//     // document.getElementsByClassName('img').style.display = 'none';
// }