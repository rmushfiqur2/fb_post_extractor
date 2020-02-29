//document.getElementById('rightCol').style.display = 'none';
//document.getElementById('stream_pagelet').style.display = 'none';
//document.getElementById('rhc_col').style.display = 'none';


// mobile version
//document.getElementById('m_newsfeed_stream').style.display = 'none';
//var stream = document.getElementById('m_newsfeed_stream').innerHTML;
var stream = document.getElementById('objects_container').innerHTML;
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
        //console.log(pos);
        //var targetString = stream.substring(pos, end);
        //var findEnd = targetString.search("</p>");
        //targetString = stream.substring(start, pos);
        //var findStart = targetString.search("<p>");
        //console.log(code);
        //console.log(stream[pos]);
        var fend = pos;
        var fstart = pos;
        var br_run = false;
        var str1 = "";
        var str2 = "";
        var str2_prev = "";
        var prev_end = 0;
        var now_end = 0;
        var inner = 0;
        var validContent = true;
        for (fend = pos; fend < end; fend++) {


            if(stream.substring(fend, fend+1)=="<"){
                if(stream.substring(fend, fend+4)=="<br>"){
                    fend = fend + 3;
                    continue;
                }
                if(stream.substring(fend, fend+2)=="</"){
                    if(inner==0) {
                        /*if(stream.substring(fend, fend+4)=="</p>"){
                            validContent = false;
                        }else {
                            validContent = true;
                        }*/
                        now_end = fend;
                        validContent = true;
                        break;
                    }
                    else {
                        inner = inner - 1;
                        console.log(inner);
                        console.log(stream.substring(fend, fend+6))
                    }


                        //fend = fend + 1;
                }else {
                    inner = inner + 1;
                    console.log(inner);
                    console.log(stream.substring(fend, fend+6))
                }
                while(stream[fend]!=">"){
                    fend = fend + 1;
                }
                continue;
            }
            if(inner==0 && stream.substring(fend, fend+1)==">"){
                console.log("matter");
                console.log(stream.substring(fend, fend+8));
                validContent = false;
                break;
            }
            if(inner==0){
                str2=str2+stream[fend];
            }

        }

        if(!validContent){
            continue;
        }
        var concat = false;
        for (fstart = pos-1; fstart > 0; fstart--) {

            if(stream.substring(fstart, fstart+1)==">"){
                if(fstart-10<prev_end){
                    concat = true;
                    console.log("previous and now");
                    console.log(prev_end);
                    console.log(fstart);
                }
                break;
            }
            str2 = stream[fstart]+str2;

        }
        var ak = stream.substring(fstart,fend+4);
        var bk = stream.substring(fstart-4,fend+4+4);
        //console.log(ak);
        //console.log(bk);
        //console.log(str);
        if(concat){
            str2 = str2_prev+str2;
        }
        str2_prev = str2;
        prev_end = now_end;
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


//var wwset = 2;
var loop = 5;
var www  = 0;
chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
    www = result.key;



    var wwset = www;
    if(www>=5){
        wwset = 0;
    }
    else{
        var a = document.body.children;
        var b = a[0].children;
        var c = b[0].children;

        var d = c[1].children;
        //console.log(d);
        var e = d[0].children;

        var f = e[0].children;
        if(wwset<0.5){
            f = e[3].children;
        }
        //f = e[3].children;
        //console.log(e[3].id);
        //console.log(f[1].id);
        window.location = f[3].href;
        console.log(f[3].href);
        wwset = wwset+1;
    }
    //wwset = 0;
    chrome.storage.sync.set({'key': wwset}, function() {
        console.log('Value is set to ' + wwset);
    });
});

//console.log(f[3])
// <a href
//window.location = f[3].href;
