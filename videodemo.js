$(function(){
    var demoVideoIDs = {
        youtube: { id: "DyfM7oLIlp0", cls: "", text: "The Magic Box (Short Film)" },
        vimeo: { id: "14848816", cls: "", text: "The Absence (Short Film)" },
        vevo: { id: "GBUV71300569", cls: "", text: "Jake Bugg - Broken" },
        dailymotion: { id: "x1zb68h", cls: "", text: "Fink - Looking Too Closely (unplugged)" },
        jsfiddle: { id: "u93d2du8", cls: "", text: "jsFiddle - Integration wetter.de widget" },
        soundcloud: { id: "50824693", cls: "stripe", text: "Ryan O'Shaughnessy - No Name" },
        giphy: { id: "JtwMddKpsF9Hq", cls: "", text: "Dancing Michael Myers" },
        funnyordie: { id: "000a37c115", cls: "ratio-1.6", text: "Girls Are A**holes: In A Bar" },
        liveleak: { id: "cf677a022bd3", cls: "", text: "Kakadu mit langjähriger Streiterfahrung (von geschiedenem Ehepaar)" },
        vine: { id: "OTtQVYI2JY2", cls: "ratio-1", text: "On A Journey By Train" },
        metacafe: { id: "11142486", cls: "ratio-1.7742", text: "Greedy seagull receives instant karma" },
        myvideo: { id: "9682605", cls: "ratio-1.5953", text: "Fink - Looking Too Closely" },
        other: { id: "https://googledrive.com/host/0B87rILW4RVIJUFpWT2dLeG9RUzg/oceans-clip.mp4", cls: "ratio-2.42 poster", text: "Oceans Clip (MP4 video)" }
    }, $prv = $("#fldProvider"), $cde = $("#fldVideoCode"), $vid = $("#fldVideoDisplay"), opt,
    videoTemplate = '&lt;div class="html5video #opt#cls" id="#id"&gt;&lt;/div&gt;';
    $prv.on("change", function(){
        $cde.html("");
        $vid.html("");
        opt = $prv.val();
        if (typeof demoVideoIDs[opt] === "undefined") return false;
        var html = videoTemplate
            .replace("#opt", opt)
            .replace("#cls", (demoVideoIDs[opt].cls.length>0 ? " "+demoVideoIDs[opt].cls : ""))
            .replace("#id",  demoVideoIDs[opt].id);
        $cde.html('<pre class="html top20">'+html+'</pre>').find(".html").snippet("html", {style:"golden",showNum:false});
        $vid.html('<label class="top20">'+demoVideoIDs[opt].text+'</label>'+html.replace(/&lt;/gi,"<").replace(/&gt;/gi,">"));
        $(".html5video").video2day().init();
    });
    $prv.val("none");
});