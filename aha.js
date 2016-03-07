// Extract params from href
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


function doAsk(){        
    var userInputTmp = document.getElementById('askMsgTmp');
    var userInput = document.getElementById('askMsg');
    if(userInputTmp!=null && userInput!=null){ 
        userInput.value = userInputTmp.value;
        userInputTmp.value = '';
        //2016-01 changed, 手機版對話框本來會鎖住的將他解開
        userInputTmp.focus();            
        //userInputTmp.blur();
        //alert(userInput.value);
        
        // :::::::::::::::: changed start
        controller.addMessage(controller.msnUserTitle, userInput.value, 'right');                   
        // :::::::::::::::: changed end                
        return true;
    }        
}


function loadIframe(iframeName, url) {
  var $iframe = $('#' + iframeName);
  if ($iframe.length) {
    $iframe.attr('src', url);
    return false;
  }
  return true;
}

function loadCSS(){
    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://ntuaha.github.io/AI_SCRIPT/jquery-ui.min.css"
	}).appendTo("head");
}
function autocompelete(){
  $.getScript('https://ntuaha.github.io/AI_SCRIPT/jquery-ui.js',function (data, textStatus, jqxhr) {
    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
            item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            return $("<li></li>")
                    .data("item.autocomplete", item)
                    .append("<a>" + item.label + "</a>")
                    .appendTo(ul);
    };
		var availableTags = [
			"網銀存戶登不進去怎麼辦",
            "網銀帳號暫停使用怎麼辦",
            "網銀存戶忘記登入資料",
            "如何線上開通或申請網銀",
            "網路銀行",
            "開通網銀密碼收不到EMAIL",
            "網銀個人戶外匯交易規範？",
            "什麼是「網銀簡訊密碼」(OTP)呢？",
            "網路簡訊密碼申請流程",
            "網路簡訊密碼應用在哪呢？",
            "網銀簡訊密碼",
            "金融卡約定轉出帳號交易金額上限",
            "金融卡約定轉出帳號可以約定幾戶",
            "金融卡約定轉帳",
            "非約定轉帳每日交易金額上限為多少",
            "若需要約定轉帳超過每日上限怎麼辦",
            "如何申請/開啟非約定轉帳功能",
            "APP網銀或網路銀行之超逾限額金額",
            "APP網銀或網路銀行之約定轉入帳號限額",
            "APP網銀或網路銀行之非約定轉帳限額",
            "網路銀行",
            "金融卡每日轉帳上限",
            "金融卡每日提領(提款)上限",
            "金融卡",
            "如何進行「臺幣預約轉帳交易」",
            "WebATM轉帳費用",
            "WebATM轉帳每日限額",
            "什麼是WebATM",
            "WebATM可以查詢什麼",
            "WebATM可以查詢什麼勞保資料",
            "WebATM?",
            "如何做定存",
            "在台無住所之外國人可開立定存嗎",
            "大陸人可開立定存嗎",
            "定存的利率多少",
            "定存",
            "信用卡/提款卡毀損了怎麼辦",
            "存摺消磁",
            "一般存款帳戶開戶",
            "未成年人開戶",
            "分公司開戶",
            "中國之自然人開戶",
            "中國法人開戶",
            "財團法人開戶",
            "外國人開戶",
            "行號、團體之開戶",
            "視覺殘障者開戶",
            "一般開戶所需文件",
            "公司或團體開戶所需文件",
            "法人籌備處開戶所需文件",
            "支票存款之開戶金額限制",
            "定期儲蓄存款之開戶金額限制",
            "一般存款的開戶資格",
            "委託他人辦理開戶",
            "如何辦理開戶",
            "ATM提款限額",
            "ATM提款手續費",
            "ATM轉帳手續費多少",
            "ATM",
            "晶片金融卡有哪些功能",
            "晶片卡被鎖卡",
            "玉山晶片金融卡國外提款",
            "玉山晶片金融卡國外提款每日限額",
            "玉山晶片金融卡國外提款手續費",
            "日本是否也能使用金融卡進行消費扣款服務呢",
            "金融卡不慎遺失",
            "約定開啟金融卡消費扣款功能",
            "金融卡",
            "如何結清銷戶",
            "如果改名後，怎麼辦理結清銷戶",
            "原留印鑑如果遺失，怎麼辦理結清銷戶",
            "存摺遺失，如何辦理結清銷戶",
            "存款人死亡，需要帶什麼文件辦理繼承",
            "存戶死亡之生前存款資料查詢",
            "一般存款帳戶的存款利率是多少",
            "存款利息怎麼算",
            "法人籌備處辦妥變更為合法營例事業名義後，如何變更戶名",
            "玉山定期儲蓄存款利息怎麼算",
            "如何列印扣繳憑單",
            "怎麼申請「存款餘額證明」",
            "CDM無卡存款的限額是多少",
            "夜間換匯的買賣外幣服務",
            "哪裡可以進行外匯交易服務呢",
            "如何辦理外幣帳戶開戶",
            "什麼時間可以做外匯交易",
            "網銀個人戶外匯交易規限",
            "個人網路銀行外匯交易每日次數限制是",
            "如何提領外幣現鈔",
            "請問網路銀行外匯交易的承作匯率規定為何？",
            "分行是否有提供買賣外幣現鈔服務呢",
            "購買人民幣現鈔金額是否有相關限制？",
            "若我有沒用完的外幣現鈔，可否存入我在玉山銀行的外幣帳戶呢",
            "國外的支票(即光票託收)如何兌現或使用",
            "我要如何使用網路銀行的外匯交易服務",
            "請問利用網路銀行申請匯出匯款應注意事項為何",
            "拿人民幣外幣現鈔存入外幣帳戶，有無金額限制",
            "若親友欲從國外匯入款項至我的玉山銀行帳戶，我該提供什麼資料",
            "我如何查詢匯入款項進度",
            "如何匯款給國外親友",
            "如何辦理外幣零存整付",
            "什麼時候會使用【玉山全球通】服務",
            "是否可以至玉山銀行臨櫃透過【玉山全球通】提領PayPal款項？",
            "若有PayPal帳戶相關問題怎麼辦",
            "使用【玉山全球通】提領PayPal款項的費用如何計算",
            "【玉山全球通】提供哪些PayPal提領功能",
            "什麼是【玉山全球通】服務",
            "PayPal款項可以提領至他人的玉山銀行帳戶嗎？",
            "使用【玉山全球通】提領PayPal款項需多久才會入帳",
            "使用【玉山全球通】提領PayPal款項是否有時間及金額限制",
            "使用【玉山全球通】提領PayPal款項，是否有最低金額之限制",
            "透過【玉山全球通】確認提領PayPal款項後，能否取消交易呢",
            "申請【玉山全球通】服務是否有資格限制",
            "為什麼使用【玉山全球通】連結到PayPal帳戶會失敗呢",
            "用玉山全球通PayPal服務一定要同時開立臺外幣帳戶嗎]",
            "玉山全球通PayPal提領款項入帳時，是否提供「入帳交易憑證」",
            "如何查詢PayPal提領款項進度呢",
            "是否可以於玉山行動網銀APP使用「玉山全球通PayPal服務」",
            "什麼是PayPal？",
            "兩岸支付通是甚麼",
            "已確認帳戶被扣款，為什麼在已買到的寶貝中還是出現「等待買家付款中」的狀態",
            "支付寶自動退款機制",
            "淘寶為什麼需要外匯申報",
            "淘寶如何進行外匯申報",
            "為什麼沒有收到淘寶退款",
            "使用淘寶合併訂單退款方式",
            "淘寶運費遭退款金額",
            "當退款金額小於退款手續費時怎麼辦",
            "淘寶退款要手續費嗎",
            "退款時，1%服務手續費會退嗎",
            "要多久能夠收到退款",
            "如何確認我已經退款成功",
            "淘寶退款帳戶限制",
            "可以用WebATM/ATM儲值支付寶帳戶嗎]",
            "在淘寶、支付寶用WebATM付款，可以在交易成功的15天內退款嗎",
            "支付寶付款流程",
            "台灣淘寶客服專線",
            "PayPal臺幣入玉山新臺幣帳戶是否需要填申報書",
            "如何由存摺看出此筆交易明細是玉山全球通PayPal提領服務入帳款項",
            "歐付寶申請問題",
            "歐付寶儲值時會收手續費嗎",
            "歐付寶消費時會收手續費嗎",
            "歐付寶手續費嗎",
            "歐付寶除了WebATM和實體ATM外有其他方式可以儲值嗎",
            "會員可以跳出玉山WebATM的視窗，至其他同業的WebATM儲值嗎",
            "歐付寶如何儲值",
            "外匯",
            "「E.Sun Care房貸」與一般終身壽險的差異在哪裡？投保有什麼好處？",
            "投保E.Sun Care房貸有什麼規定？",
            "「E.Sun Care房貸」有什麼商品種類？",
            "「E.Sun Care房貸」有什麼特色？",
            "「E.SunCare房貸」的保險生效日為何時？",
            "若借款人與共同借款人共同參加「E.SunCare」，每人可投保的金額為何？",
            "「E.SunCare房貸」會與其它的保險相衝突或不理賠嗎？",
            "「E.SunCare」於什麼樣的情形下可以理賠？",
            "什麼是指數型房貸？",
            "理財型房貸的利息費用如何計算？",
            "理財型房貸要如何動用資金？",
            "什麼是理財型房貸？",
            "房貸的流程為何？",
            "申請留學貸款應檢附哪些文件？",
            "留學貸款額度及分期撥貸方式為何？",
            "留學貸款期限為何？寬限期為何？",
            "申請留學貸款之資格？",
            "房屋貸款期間是否可以部分還款？如果提前清償貸款有無違約金？",
            "什麼是提前清償違約金？",
            "月繳月省房貸有什麼優點？",
            "什麼是「月繳月省房貸」？",
            "什麼是「青年安心成家貸款」？",
            "請問要如何知道我的個人信用貸款每月應該繳款的金額是多少？",
            "我可以透過哪些方式來繳款我的個人信用貸款呢？",
            "申請個人信用貸款需要提供保證人擔保嗎？",
            "請問對保時需要攜帶哪些資料？",
            "請問申請個人信用貸款後需要多久才可以知道貸款結果呢？",
            "請問個人信用貸款可以部分清償或一次全部清償嗎？",
            "我已經有向銀行貸款，還可以再申請嗎？",
            "留學貸款的利率為何？",
            "留學貸款之利息及本金應該如何繳交及還款？",
            "請問申請房屋貸款需要準備哪些資料？",
            "我要如何申請個人信用貸款？",
            "信貸申請文件",
            "青年創業貸款申請資格",
            "可以網路投保的保險類別",
            "網路投保的繳費方式",
            "請問網路投保的流程？",
            "「保單生效日」是甚麼",
            "如何申辦「卡友通信貸款」？",
            "申辦「卡友通信貸款」會有哪些費用?",
            "「卡友通信貸款」的繳款方式有哪些?",
            "我該如何用手機申請貸款呢？",
            "信貸準備資料？",
            "什麼是「卡友通信貸款(MailLoan)」?",
            "所有個人貸款都可以作部分還本嗎？",
            "部分還本執行成功後，貸款餘額是立即減少嗎？",
            "貸款部分還本有何限制？",
            "部分還本金額，是否有計入「約定轉帳每日最高轉出限額200萬元」限制？",
            "貸款部分還本功能是24 小時開放嗎？",
            "申請部份還本",
            "什麼是「個人信用貸款」？",
            "我好窮/我缺錢/我想要借錢/錢不夠怎麼辦？",
            "e指可貸沒有收到認證碼的簡訊？",
            "什麼是e指可貸？",
            "e指可貸點選完「我要申請」還需要準備資料嗎？",
            "e指可貸網頁顯示結果格式會跑掉？",
            "e指可貸優惠三選一送出後可以再變更嗎？",
            "什麼是OBU？",
            "何為DBU？",
            "共同基金定期不定額",
            "複貴奇基投資法",
            "複貴奇基辦理方法",
            "基金配息日",
            "基金配息",
            "怎麼網路查詢損益",
            "怎麼確認網銀下單成功",
            "收不到停損停利通知",
            "網銀基金贖回",
            "基金如何恢復扣款",
            "基金如何網銀設定",
            "網銀申購基金額度",
            "如何申請本行網路基金下單服務的功能?",
            "怎麼網路基金下單",
            "基金轉換手續費多少",
            "基金轉換說明",
            "基金轉換",
            "基金贖回所需時間",
            "基金贖回文件",
            "基金贖回",
            "b股手續費為何?",
            "B股最低申購金額",
            "什麼是b股基金",
            "定期定額基金扣款失敗",
            "定期定額暫停扣款",
            "定期定額基金最低申購金額",
            "請問定期定額手續費多少",
            "定期定額扣款變更",
            "定期定額扣款日",
            "定期定額基金",
            "未成年申購基金",
            "單筆基金最低申購金額",
            "如何申購國內基金",
            "買基金需要什麼文件",
            "如何申購單筆基金",
            "怎麼買定期定額基金",
            "基金申購說明",
            "基金注意事項",
            "買基金",
            "KYC",
            "基金憑證",
            "基金匯率",
            "基金淨值怎麼看",
            "基金手續費多少",
            "基金的交易有何時間限制？",
            "基金基本常識",
            "基金",
            "黃金",
            "黃金存摺",
            "黃金存摺開戶",
            "黃金存摺買進存入",
            "黃金存摺回售",
            "黃金存摺轉帳",
            "黃金存摺提領現貨",
            "黃金存摺定期投資",
            "黃金存摺交易手續費",
            "黃金存摺開戶手續費",
            "黃金存摺轉帳手續費",
            "黃金存摺定期定額手續費",
            "黃金存摺到價買進手續費",
            "黃金存摺事項變更手續費",
            "黃金存摺掛失手續費",
            "黃金存摺交易明細手續費",
            "黃金存摺餘額證明手續費",
            "黃金存摺提領現貨手續費",
            "黃金單位",
            "黃金交易時間",
            "黃金交易投資扣款日",
            "黃金交易定期定額投資金額",
            "黃金交易定期定量投資金額",
            "黃金存摺事項變更",
            "黃金牌價",
            "黃金交易稅收",
            "黃金交易所得稅",
            "黃金到價買進投資金額",
            "黃金存摺掛失",
            "黃金交易補登",
            "黃金存摺買賣黃金",
            "黃金存摺買進",
            "黃金存摺回售",
            "黃金存摺交易方式",
            "ETF",
            "ETF交易",
            "ETF交易手續費",
            "世界卡申請資格",
            "我要如何得知黃金種子計劃捐款後續的用途？",
            "黃金種子計劃如何捐款",
            "何為黃金種子計劃",
            "世界卡年費",
            "世界卡機場貴賓室有效期限",
            "世界卡機場貴賓室使用條件",
            "世界卡道路救援的服務項目為何?",
            "幸運鈦金卡的年費",
            "幸運鈦金卡優惠方式",
            "玉山御璽卡年費如何計算",
            "何為勞動保障信用卡／COMBO卡",
            "玉山JCB晶緻悠遊卡年費",
            "玉山JCB晶緻悠遊卡優惠內容",
            "如何查詢信用卡帳單金額",
            "紅利點數如何使用",
            "如何在便利商店換信用卡紅利",
            "如何查詢信用卡繳款的記錄",
            "信用卡的額度可否調整",
            "如何使用信用卡預借現金服務",
            "如何查詢信用卡預借現金的額度",
            "如何查詢信用卡結帳日及繳款截止日",
            "信用卡結帳日及繳款截止日可否更改",
            "如何查詢目前可用的額度",
            "如何查詢歷史的消費明細",
            "信用卡如何開卡?",
            "沒有收到信用卡帳單怎麼辦?",
            "請問如何預約機場停車?",
            "如何使用信用卡約定扣繳中華電信、電費、水費、瓦斯費、路邊停車費、民營電信費用?",
            "欲更改帳單地址、電話應如何處理?",
            "信用卡我的姓名有變更，應如何辦理?",
            "如何變更預借現金密碼?",
            "我要申請信用卡電子帳單",
            "如何補寄電子帳單?",
            "玉山自扣的資料欲修改應如何申請?",
            "如何登錄道路救援服務?",
            "信用卡繳款方式有哪些?",
            "民間版國民旅遊卡介紹",
            "NFC手機信用卡介紹",
            "商務御璽卡年費",
            "中華民國醫師公會全國聯合會悠遊尊榮會員卡申請資格和年費",
            "ATT 4 FUN悠遊聯名卡年費",
            "信用卡溢繳退款方式",
            "想要半年以前的信用卡消費紀錄",
            "信用卡優惠",
            "信用卡在國外刷卡的手續費差異",
            "信用卡帳單寄送地址想更改",
            "信用卡繳款後，多久可以查詢是否繳款成功?",
            "查信用卡繳款",
            "網銀可以繳信用卡款嗎",
            "我可以用什麼方式繳信用卡款?",
            "信用卡不見了要辦理掛失?",
            "辦卡",
            "第一次辦玉山卡",
            "年費"
		];
		$( "#askMsgTmp" ).autocomplete({
			source: availableTags,
			focus:function(event,ui){
		    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $('#askMsgTmp').val(ui.item.value);
			    askBtnClick();
			    $(this).autocomplete("close");
        }
        return false;
			},
			select: function(event,ui){
			  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				  $('#askMsgTmp').val(ui.item.value);
				  askBtnClick();
				  return false;
			  }
			},
			open: function(event, ui) {
		  	    var autocomplete = $(".ui-autocomplete");
		  	    var oldTop = autocomplete.offset().top;
		  	    var newTop = oldTop - autocomplete.height() - $("#askMsgTmp").height() - 10;
		  	    autocomplete.css("top", newTop);
			}
		});
	});
}


function scrollBackToTop(fristElementScrollHeight){
  $("#msnDiv").scroll("scroll",function(){
    console.log(this.scrollTop);
    if(this.scrollTop<fristElementScrollHeight){
      $("#msnDiv").off("scroll");
      $( this ).animate({
        scrollTop:fristElementScrollHeight
      }, 500, function() {
        scrollBackToTop(fristElementScrollHeight);
      })
    }
  });
}

function pre_exec(){
  $("body").html("");
  $('body').append('<iframe name="ifrm" id="ifrm" src="https://ntuaha.github.io/AI_SCRIPT/aha.html?user=123&time=%E4%B8%AD%E8%8F%AF03%E5%B9%B4:46&link=aha" frameborder="0" width="0" height="0">Your browser doesn\'t support iframes.</iframe>');
  //askMsgTmp
  loadCSS();
  autocompelete();
  
  //iOS input bug
  var beforeHeight = $("#msnDiv")[0].scrollHeight;
  $("#msnSubDiv1").parent().prepend($("<div></div>").css({"width": "100%","height":"100%","background-color":"#FFFFFF"}));
  var afterHeight = $("#msnDiv")[0].scrollHeight;
  var fristElementScrollHeight = afterHeight - beforeHeight;
  scrollBackToTop(fristElementScrollHeight);
  $("#msnDiv").scroll();
  
  //if (getUrlVars().a === undefined){ window.location = "https://www.esunbank.com.tw/bank/about/services/customer/message-board"; }
  
  if (getUrlVars().a === undefined){ 
  	$("#ifrm")
  	  .attr("src","https://www.esunbank.com.tw/bank/about/services/customer/message-board")
  	  .css({"width":"100%","height":"100%","position":"absolute","top":0,"left":0});
  }
  
}

var question = "";
var answer = "";
var question_dt="";
var send_type = 0;
var user_input_cnt = 0;
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
    //question = msg;
    user_input_cnt += 1;
  }else if (align=='left'){
    answer=encodeURIComponent(msg);
    //answer = msg;
    var basic_href = "http://www.esunbank.com.tw/event/service/talkiframe/index.html";
    var time = encodeURIComponent(new Date());
    var iframe_href = basic_href + "?q=" + question + "&time=" + time + "&a=" + answer+"&count="+user_input_cnt+"&type="+send_type;
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

