function loadIframe(iframeName, url) {
  var $iframe = $('#' + iframeName);
  if ($iframe.length) {
    $iframe.attr('src', url);
    return false;
  }
  return true;
}
function pre_exec(){
  $('body').append('<iframe name="ifrm" id="ifrm" src="https://ntuaha.github.io/AI_SCRIPT/aha.html?user=123&time=%E4%B8%AD%E8%8F%AF03%E5%B9%B4:46&link=aha" frameborder="0" width="0" height="0">Your browser doesn\'t support iframes.</iframe>');
}
var question = "";
var answer = "";
var question_dt="";
var send_type = 0;
function resetMsgStatus(){
  question = "";
  answer = "";
  question_dt="";
  send_type = 0;
}
function filterMsg(msg,align){
  //換行
  msg= msg.replace(/\\n\\r/g, ' <br>');
  msg= msg.replace(/\<BR>/g,  ' <br>');//保留空格, 以免<BR>之前是超連結
  //2016-01 將內文修改到i問答，但不動到顧客問題
  if(align=='left'){
      msg= msg.replace("玉山喵管家","i問答").replace("喵管家","i問答");
  }
  //2016-01 去除其他廣告
  msg= msg.replace(/<a.+href=("|')[^\'\"]+("|') .*> +(◇|☆).*<\/a>/g,"");
  return msg;
}
function collectMsg(msg,align){
  if(align=='right'){
    question=encodeURIComponent(msg);
  }else if (align=='left'){
    answer=encodeURIComponent(msg);
    var basic_href = "http://www.esunbank.com.tw/event/service/talkiframe/index.html";
    var time = new Date();
    var iframe_href = basic_href + "?q=" + question + "&time=" + time + "&a=" + answer+"&count="+controller.msgCount+"&type="+send_type;
    console.log(iframe_href);
    loadIframe('ifrm',iframe_href);
    resetMsgStatus();
  }
}
controller.addMessage = function(title, msg, align) {
        //2016-01 修改為i問答
        if(align=='left'){
           title = '<a href="https://www.esunbank.com.tw/bank/personal" target="_blank">i問答說：<br></a>';
        }
        if(msg!=null && msg.length>0){
            msg = filterMsg(msg,align);
            collectMsg(msg,align);

            var msnDiv = document.getElementById(controller.msnDivId);
            //alert("msg:"+msg+", msnDiv:"+msnDiv);
            if(msnDiv!=null){
                controller.msgCount++;
                var newElement = document.createElement('div');
                newElement.id = controller.msnSubDivId + controller.msgCount;
                //2016-01 顯示雙排時間
                var today   = new Date();
                var year    = today.getYear()+1900;
                var month   = today.getMonth()+1;
                var day     = today.getDate();
                var hh      = today.getHours();
                var mm      = today.getMinutes();
                var ss      = today.getSeconds();
                var dtStr =  year%100+"-"+((month<10?"0":"")+month)+"-"+((day<10?"0":"")+day)+"<br>"+((hh<10 ? '0' : '') + hh) +":"+((mm<10 ? '0' : '') + mm)+":"+((ss<10 ? '0' : '') + ss);

                // changed start
                newElement.className = 'bubble';
                var LeftTagPre = '<div class="avatarLeft"></div><div id="'+controller.msnSubBubbledDivId+controller.msgCount+'" class="bubbledLeft">';
                var LeftTagEnd = '</div><div id="'+controller.msnSubTimeDivId+controller.msgCount+'" class="dtLeft">'+dtStr+'</div>';

                var RightTagPre = '<div class="avatarRight"></div><div id="'+controller.msnSubBubbledDivId+controller.msgCount+'" class="bubbledRight">';
                var RightTagEnd = '</div><div id="'+controller.msnSubTimeDivId+controller.msgCount+'" class="dtRight">'+dtStr+'</div>';

                if ( align == 'right') {
                    // newElement.className = "bubbledRight";
                    newElement.innerHTML = RightTagPre + title + msg + RightTagEnd;
                }else{
                    // newElement.className = "bubbledLeft";
                    newElement.innerHTML = LeftTagPre + title + msg + LeftTagEnd;
                }
                // changed end

                msnDiv.appendChild(newElement);

                if(controller.msgCount>controller.maxMsgSize){
                    var oldCount = controller.msgCount-controller.maxMsgSize;
                    var oldSubDiv = document.getElementById(controller.msnSubDivId+oldCount);
                    if(oldSubDiv!=null){
                        msnDiv.removeChild(oldSubDiv);
                    }
                }

                //2015-12 移動時間div, Start
                var browserType = new detectBrowser();
                var bubbledDiv = $(controller.msnSubBubbledDivJid+controller.msgCount);
                var timeDiv = $(controller.msnSubTimeDivJid+controller.msgCount);
                var bubbledOffset = bubbledDiv.offset();
                var bubbledFontSize= parseInt(bubbledDiv.css('font-size'));
                var winWidth = $(window).width();
                var leftWinWidth = winWidth*controller.timeSizePer;//剩餘空間要有10% 或 9個字
                var timeWidth = parseInt(timeDiv.css('font-size'))*controller.timeSize;
                //timeDiv.html("left:"+(winWidth-bubbledDiv.width())+", timeWidth:"+timeWidth); //test
                //2016-01 讓時間位置上移
                var bubbledDiv_max_width = $(window).width()-160;
                timeDiv.css({
                "color":"rgba(0,0,0,0.8)",
                "margin-left":"0px",
                "margin-top":"0px",
                "max-width":"70px",
                "font-size":"10px"});
                bubbledDiv.css({"max-width":(bubbledDiv_max_width)+"px"});


                if(!browserType.isIE && (winWidth-bubbledDiv.width())>timeWidth && (winWidth-bubbledDiv.width())>leftWinWidth ){
                    //剩餘空間足夠才上移
                    timeDiv.css( 'position', 'relative' );
                    //2016-01上移位置
                    //timeDiv.css( 'top', -bubbledFontSize-10+'px' );
                    if(align=="right"){
                        timeDiv.css( 'top', -bubbledFontSize-20+'px' );
                    }else{
                        timeDiv.css( 'top', -30+'px' );
                    }
                }
                if ( align == 'right') {
                    if(!browserType.isIE && (winWidth-bubbledDiv.width())>timeWidth && (winWidth-bubbledDiv.width())>leftWinWidth){
                        //如果上移, 右邊要保留足夠空間
                        timeDiv.css( 'margin-right', '76px');
                    }
                    timeDiv.css( 'left', parseInt(bubbledDiv.width()*-1)+'px' );
                }else{
                    //2016-01 讓時間位置上移
                    timeDiv.css( 'left', parseInt(bubbledOffset.left+bubbledDiv.width()+30)+'px' );
                }



                //scroll bar
                //2016-01 一到最後一則留言
                  msnDiv.scrollTop = msnDiv.scrollHeight;

            }
        }
    };

