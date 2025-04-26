document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    document.head.appendChild(style);

    for (let i = 1; i <= 1000; i++) {
        for (let j of ['W', 'S', 'B', 'D', 'F', 'xW', 'xS', 'xB', 'xD']) { // 배열
            let className = `${j}${i}`; // 클래스명 설정
            let bgColor = j === "W" ? "#FFF" : j === "xW" ? "#FFF" : j === "S" ? "#ecf2f9" : j === "xS" ? "#ecf2f9" : j === "B" ? "#6699cc" : j === "xB" ? "#6699cc" : j === "D" ? "#204060" : j === "xD" ? "#204060" : "#0000";
            let bdColor = j === "W" ? "#ccc" : j === "xW" ? "#ccc" : j === "S" ? "#c6d9ec" : j === "xS" ? "#c6d9ec" : j === "B" ? "#4080bf" : j === "xB" ? "#4080bf" : j === "D" ? "#132639" : j === "xD" ? "#132639" : "#0000";
            let FTColor = j === "W" ? "#333" : j === "xW" ? "#333" : j === "S" ? "#333" : j === "xS" ? "#333" : j === "B" ? "#FFF" : j === "xB" ? "#FFF" : j === "D" ? "#FFF" : j === "xD" ? "#FFF" : "#333";
            let XVwidth = j === "W" ? "vw" : j === "xW" ? "px" : j === "S" ? "vw" : j === "xS" ? "px" : j === "B" ? "vw" : j === "xB" ? "px" : j === "D" ? "vw" : j === "xD" ? "px" : "vw";
            let bdWidth = j === "F" ? "0px" : "1px"
            style.sheet.insertRule(`
                .${className} {
                    margin:0;
                    border:solid;
                    height:25px;
                    vertical-align:middle;
                    text-align:center;
                    border-radius: 3px;
                    font-weight :500;
	      border-width:${bdWidth};
	      border-color:${bdColor};
                    background-color: ${bgColor};
                    width: ${i * 1}${XVwidth};
  	      color: ${FTColor};
                    overflow:hidden
                }`,style.sheet.cssRules.length);
        }
    }
});

console.log("정상!");

const wi = 'https://k-jizone.kt.com/wi/'; 

function 창(주소){window.open(주소)}
function 새창(주소){let 꼬리 = "width=1300px,left=200000px,height=800px,top=180px"; window.open(주소,'',꼬리)}
function 중간창(주소){let 꼬리 = "width=450px,left=200000px,height=650px,top=180px"; window.open(주소,'',꼬리)}
function 긴창(주소){let 꼬리 = "width=300px,left=200000px,height=900px,top=180px"; window.open(주소,'',꼬리)}

function 열기(주소){
let 열림구분 = document.getElementById('열림구분').value;
if(열림구분==='1'){창(주소)}
if(열림구분==='2'){새창(주소)}
if(열림구분==='3'){중간창(주소)}}

function inout(인, 아웃){document.getElementById(아웃).value += document.getElementById(인).value;}
function copy(KJH) {var content = document.getElementById(KJH);content.select();document.execCommand('copy');}

function 검색(인) {let 주소 = wi + 'engin/search?__search_text='+document.getElementById(인).value; 열기(주소);}
function 웹접수(인){let 주소 = wi + 'cnslg/cnslgDetailViewPopup?inq_no='+ document.getElementById(인).value + '&top_up_inq_id='+ obj.value; 열기(주소);}
function 지식보완(){let 주소 = wi + 'user/cretSplmnSearch'; 열기(주소);}
function 보완접수(인){let 주소 = wi + 'user/cretSplmnDetailViewLayer?req_id=RQ000'+document.getElementById(인).value; 열기(주소);}

function KT닷컴(인) {let 주소 = "https://search.kt.com/?c=OLE000000&r=10&ch=USR000&q="+ document.getElementById(인).value; 열기(주소);}      
function n검색(인) {let 주소 = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+document.getElementById(인).value; 열기(주소);}
function n백과(인) {let 주소 = "https://terms.naver.com/search.naver?query="+document.getElementById(인).value+"&searchType=&dicType=&subject="; 열기(주소);}
function n어학(인) {let 주소 = "https://dict.naver.com/dict.search?query="+document.getElementById(인).value;}
function n이미지(인) {let 주소 = "https://search.naver.com/search.naver?ssc=tab.image.all&where=image&sm=tab_jum&query="+document.getElementById(인).value;}
function n지식인(인) {let 주소 = "https://search.naver.com/search.naver?ssc=tab.kin.kqna&where=kin&sm=tab_jum&query="+document.getElementById(인).value; 열기(주소);}

function 지식보기(인) {let 주소= wi + 'knwlg/knwlgDetailPopup?knwlg_id='+document.getElementById(인).value+'&cl_hiery_ch_cd=W&cl_hiery_lcls_cd=&cl_hiery_id='; 열기(주소);}
function 문서보기(인) {let 주소= wi + 'knwlg/detailPopup?cl_hiery_id='+document.getElementById(인).value; 열기(주소);}
function 링크보기(인) {let 주소 = wi + 'common/linkPageDetailPop/'+document.getElementById(인).value; 열기(주소);}
function 공지보기(인) {let 주소= wi + 'ntfmtr/ntfMtrDetailPopup?___title=공지보기&ntc_id='+인+'&flag=M'; 열기(주소);}
function 링크수정(인) {let 주소 = wi + 'oprt/linkPageModify/'+document.getElementById(인).value; 열기(주소);}
function 공지수정(인) {let 주소= wi + 'ntfmtr/ntfMtrMoveModify?&___title=공지수정&ntc_id='+ document.getElementById(인).value +'&flag=N'; 열기(주소);}
function 지식수정(인) {let 주소= wi + 'knwlg/knwlgUPopup?___title=지식수정&knwlg_id='+인+'&cl_hiery_ch_cd=W&cl_hiery_lcls_cd='; 열기(주소);}
function 지식이력(인) {let 주소= wi + 'knwlg/knwlgHistoryPopup?___title=지식이력&knwlg_id='+document.getElementById(인).value; 열기(주소);}
function 지식구조화(인) {let 주소= wi + 'knwlg/knwlgStructurePopup?___title=지식구조화&knwlg_id='+document.getElementById(인).value; 열기(주소);}
function 이미지주소(인) {let 주소 = wi + document.getElementById(인).value; 열기(주소);}

function 보기(tg) {
    if (event.key === "Enter") {
        if (3000 < tg.value && tg.value < 10000) {링크보기(tg.value);}
        if (10000 < tg.value && tg.value < 50000) {공지보기(tg.value);}
        if (50000 < tg.value && tg.value< 100000) {지식번호(tg.value); 지식보기(tg.value);}
        if (글자갯수(tg.value) === 10) {지식보기(tg.value);}
        if (글자갯수(tg.value) === 8) {문서보기(tg.value);}}
    if (event.key === "Escape") {
        if (3000 < tg.value && tg.value < 10000) {링크수정(tg.value);}
        if (10000 < tg.value && tg.value < 50000) {공지수정(tg.value);}
        if (50000 < tg.value && tg.value < 100000) {지식번호(tg.value); 지식보기(tg.value);}
        if (글자갯수(tg.value) === 10) {지식수정(tg.value);}}}

function 글자갯수(인) {return document.getElementById(인).value ? str.replace(/\s+/g, '').length : 0;}
function 지식번호(인) {let Kjh = 100000000 + Number(document.getElementById(인).value); document.getElementById(인).value = "KL" + Kjh.toString().slice(1);}

function 전환선택() {
    let 전환화면 = document.getElementById('전환선택').value; let 아이콘 = document.getElementById('전환');
    let 답변 = document.getElementById('답변');    let 메일 = document.getElementById('메일');    let 문서 = document.getElementById('문서');    let 할당 = document.getElementById('할당');
    let 하단양식 = document.getElementById('하단양식');    let H11 = document.getElementById('H11');
    if (전환화면 === '1') {아이콘.value='🐶';        답변.style.display = 'flex';        메일.style.display = 'none';        문서.style.display = 'none';        할당.style.display = 'none';        하단양식.style.display = 'block';        H11.style.height = '70vh';    }
    if (전환화면 === '2') {아이콘.value='💌';        답변.style.display = 'none';        메일.style.display = 'flex';        문서.style.display = 'none';        할당.style.display = 'none';        하단양식.style.display = 'block';        H11.style.height = '70vh';    }
    if (전환화면 === '3') {아이콘.value='📄';        답변.style.display = 'none';        메일.style.display = 'none';        문서.style.display = 'block';        할당.style.display = 'none';        하단양식.style.display = 'none';        H11.style.height = '10vh';    }
    if (전환화면 === '4') {아이콘.value='🤗';        답변.style.display = 'none';        메일.style.display = 'none';        문서.style.display = 'none';        할당.style.display = 'flex';        하단양식.style.display = 'none';        H11.style.height = '10vh';    }}

function 전환() {
  let display = document.getElementById('전환').value; let 답변 = document.getElementById('답변'); let 메일 = document.getElementById('메일'); let 버전업 = document.getElementById('버전업'); let 할당 = document.getElementById('할당');
  switch (display) {
    case "🤗": document.getElementById('전환').value = '🐶';   document.getElementById('전환선택').value = '1';    break;
    case "🐶": document.getElementById('전환').value = '💌';   document.getElementById('전환선택').value = '2';    break;
    case "💌": document.getElementById('전환').value = '📄';    document.getElementById('전환선택').value = '3';   break;
    case "📄": document.getElementById('전환').value = '🤗';    document.getElementById('전환선택').value = '4';   break;}전환선택()}

function 첫인사(KJH) { document.getElementById(KJH).value += '안녕하세요 AIDT혁신센터 김지혜입니다.'+ "\n"+  '아래 답변 드립니다' + "\n"+"\n";}
function 지연(KJH) { document.getElementById(KJH).value += '안녕하세요 AIDT혁신센터 김지혜입니다.'+ "\n"+  '답변이 늦어진 점 양해를 부탁 드리며 아래 답변 드립니다.'+ "\n"+"\n";}
function 불가(KJH) { document.getElementById(KJH).value += '안녕하세요 AIDT혁신센터 김지혜입니다.'+ "\n"+  '문의하신 내용에 대해 답변을 드리기 어려움 양해를 부탁 드립니다.' + "\n"+"\n";}
function 의도(KJH) { document.getElementById(KJH).value += "\n"+'(혹시, 위 내용으로 질문하시려던 것이 아니라면,' + "\n"+ '번거로우시겠지만 좀 더 상세한 내용을 기재하여 재접수 부탁 드립니다.)'+ "\n";}
function 끝인사(KJH) { document.getElementById(KJH).value += "\n"+"\n"+'답변 드린 내용이 업무에 도움이 되시길 바라며,'+ "\n"+  '항상 고객만족을 위해 최선을 다하도록 노력하겠습니다.' + "\n";}
function 부정(KJH) { document.getElementById(KJH).value += "\n"+"\n"+'모쪼록 문의하신 내용이 원활하게 해결 되시기를 바라겠습니다.' + "\n";}
function 리셋(KJH) {document.getElementById(KJH).value='';}
function 밸류(JJ,HH) {document.getElementById(HH).value=document.getElementById(JJ).value;}
function copy(KJH) {var content = document.getElementById(KJH);content.select();document.execCommand('copy');}

function 제목(KJH) {document.getElementById(KJH).value += '[AIDT혁신센터_문의-128] '+"\n"+' '+"\n"+' '+"\n";}
function 현대첫인사(KJH) {document.getElementById(KJH).value += '안녕하세요. AIDT혁신센터 현장대리인 박성국 입니다'+"\n"+' '+"\n"+' '+"\n";}
function 고객정보(KJH) {document.getElementById(KJH).value += '◆고객정보'+"\n"+'ㅇ 서비스번호 : '+"\n"+'ㅇ 고객명 : '+"\n";}
function Q(KJH,KK) {document.getElementById(KJH).value += "\n"+' '+"\n"+'◆Q'+KK+'.'+"\n"+' '+"\n"}
function Z(KJH)  {document.getElementById(KJH).value += ""+'K-지존'+ "";}
function 현대끝인사(KJH) {document.getElementById(KJH).value += "\n"+' '+"\n"+'항상 도움주셔서 감사합니다.' +"\n"+' '+"\n"+' '+"\n";}

function 비펨독촉(인, 아웃){
var XXX1='[AIDT혁신센터_문의-128] 상담SEQ : '+인.value+'관련으로 문의 드립니다.'+"\n"+"\n"+ '안녕하세요. AIDT혁신센터 현장대리인 박성국 입니다.'+"\n"
var XXX2='아래 내용으로 BPM이관 드렸으나 별도 회신이 없어서 다시 메일 드립니다.' +"\n"+'답변이 가능하시다면 BPM' +인.value+'에 답변등록을 부탁 드리며'+"\n"
var XXX3='혹시 아직 확인중이시라면, 확인중이라는 내용만이라도 메일 회신 부탁 드립니다. '+"\n"+'항상 도움 주셔서 감사합니다. '+"\n";
document.getElementById(아웃).value=XXX1+XXX2+XXX3;}


function 메모(메모명, 내용, 생성) {
let 이름 = document.getElementById(메모명).value ;
let B이름 ='B'+document.getElementById(메모명).value ;
let T이름 ='T'+document.getElementById(메모명).value ;
document.getElementById(생성).innerHTML+="<button id='"+B이름+"' class='S10' onclick=copy('"+T이름+"'); onKeyUp=메모삭제('"+이름+"'); >"+이름+"</button> ";
document.getElementById(B이름).innerHTML+="<textarea id='"+T이름+"' class='xs'>"+document.getElementById(내용).value+"</textarea>";
if(이름>0) {document.getElementById(메모명).value=Number(이름)+1 }}

function 메모삭제(이름){
let T이름 ='T'+이름;
let B이름 ='B'+이름;
if(event.keyCode==27) {
document.getElementById(B이름).remove(); 
document.getElementById(T이름).remove(); }}

function 일보고(노트){
let XXX1='(일보고)지존 웹그룹(김지혜)_'+월()+'.'+일()+"\n\n\n";
let XXX2= 월() + '월' +"\t"+ 월()+'.'+일()+"\t"+'김지혜'+"\t"+'ㅇ 내용'+"\n\n\n";
let XXX3= 'M'+"\t"+'무'+"\t"+'문서반영'+"\n\n\n";
let XXX4= '[일보고] '+월()+'.'+일()  + ' 김지혜'+"\n\n\n";
let XXX5= '안녕하세요. 김지혜 입니다.'+"\n"+월() +'.'+일() + ' 일보고 드립니다. '+"\n" + '좋은 저녁 되세요'+"\n"+"\n";
document.getElementById(노트).value=XXX1+XXX2+XXX3+XXX4+XXX5;}

function 공유(노트){
let XXX1='[버전업]'+"\n"+'* 문서명'+"\n"+ '* 반영내용'+"\n\n\n"
let XXX2='[BPM공유-128]'+"\n"+'Q. '+"\n"+ 'A. '+ "\n"+ '* 답변자'+"\n\n\n"
document.getElementById(노트).value=XXX1+XXX2;}

function 확인중(A, B, 노트){
let XXX1='K지존 접수건 '+ A.value +'관련으로 안내 드립니다.'+"\n\n"+ '안녕하세요? AIDT혁신센터 김지혜 입니다.'+"\n"+'K지존에 등록된 ' + A.value +'질문에 대해 사업부서로 확인 진행 중입니다.'+"\n";
let XXX2='얼마나 시간소요가 있을지 확답이 어려우니, 양해를 부탁 드립니다.'+"\n"+'(진행 내용이 궁금하시면 쪽지 주셔도 됩니다.)'+"\n"+'감사합니다.'+"\n\n";
let XXX3= 월()+'/'+일()+' '+시()+':'+분()+'경  '+ '접수자ID:'+document.getElementById("B").value+'    ' + 'KOS 쪽지로 사업부서 확인중 안내';
document.getElementById(노트).value=XXX1+XXX2 +XXX3;}

function on(아이디){let display = document.getElementById(아이디).style.display;
switch(display){
case "none" : document.getElementById(아이디).style.display='block'; document.getElementById(아이디+'b').style.backgroundColor='#6699cc'; break;
case "block": document.getElementById(아이디).style.display='none'; document.getElementById(아이디+'b').style.backgroundColor='#ecf2f9'; break;}}

function saveHTML(아이디) {
    var content = document.getElementById(아이디).innerHTML;
    localStorage.setItem(아이디, content);}

function saveValue(아이디) {
    var content = document.getElementById(아이디).value;
    localStorage.setItem(아이디, content);}

function load(아이디) {document.getElementById(아이디).innerHTML = localStorage.getItem(아이디);}
function remove(아이디) {localStorage.removeItem(아이디);}

function 파일불러오기(inputFile,JH){
    var file = document.getElementById(inputFile).files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
    document.getElementById(JH).textContent = reader.result;}}

function 파일저장하기(JH) {
let 오늘 = 년()+'_'+월()+'_'+일()
    const JHContent = document.getElementById(JH).value;
    const blob = new Blob([JHContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 오늘+'.html';
    link.click();}


function 정규식(string) {return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');}

function escapeRegExp(string) {
  // 정규식 특수문자 이스케이프
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function 변경(A, B, C) {
  const from = document.getElementById(A).value;
  const to = document.getElementById(B).value;
  const textarea = document.getElementById(C);
  const caseSensitive = document.getElementById('caseSensitive').checked;

  if (!from || !textarea) return;
  let text = textarea.value;
  const safeFrom = escapeRegExp(from);
  const flags = caseSensitive ? 'g' : 'gi';
  const regex = new RegExp(safeFrom, flags);
  let replacedCount = 0;
    const matches = text.match(regex);
    if (matches) {
      replacedCount = matches.length;
      text = text.replace(regex, to);
  } 

  textarea.value = text;
  document.getElementById('result').innerText = `${replacedCount}개 변경`;
}

const 아이디 = ['', '91322059', '60419', 'nabihanaly', 'biz132020', 'corp/biz236267', '82107781']
const 패스워드 = ['1', 'tkdekawltlr01@', 'ktcs1234%%', 'piranha7+']
const KKK = document.getElementById('KKK');

function ID(Num){document.getElementById('Hid').value=아이디[Num];}
function PW(p){document.getElementById('Hpw').value=패스워드[p];}

function KOS() {ID(1); PW(1); copy('Hid'); 열기('https://bss-portal.kt.com/login/formLogin.csr');}
function K지존(){ID(1); PW(2); copy('Hpw'); 열기('https://k-jizone.kt.com/wi/cnslg/cnslgSearch?listKind=sList'); }
function voc20(){ID(4); PW(1); copy('Hid'); 열기('https://webmail.kt.com/mail/account/login'); }
function voc21(){ID(5); PW(1); copy('Hpw'); 열기('https://outlook.kt.com/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2foutlook.kt.com%2fowa');}
function cs메일(){ID(2); PW(1); copy('Hid'); 열기('https://gw.ktcs.co.kr/logon.aspx');}
function 쪽지(){ID(1); PW(1); copy('Hpw'); 열기('http://im-gr.ipcc.kt.com:8080/IM/client.msnClientLoginPageReq.sis');}
function 보안(){ID(1); PW(2); copy('Hid'); 열기('https://sldm.kt.com/');}

function idms(){ID(1); PW(2); copy('Hid'); 열기('https://idms.kt.com/im/');}

function EHR(){ID(2); PW(1); copy('Hid'); 열기('https://ehr.ktcs.co.kr/login.jsp');}
function cs교육(){ID(2); PW(1); copy('Hid'); 열기('https://linkedu.co.kr/userLogin.do'); }
function BPM(){ID(1); PW(0); copy('Hid'); 열기('http://bp.kt.com/bizflow/KTFBPM/ktf_login.jsp');}
function kt닷컴(){ID(3); PW(3); copy('Hid'); 열기('https://kt.com');}





const tt= new Date();



function 두자리(num){if(num<10){return '0'+num}else{return num}}

function 월(){let 월= tt.getMonth()+1; return 두자리(월)}
function 일(){let 일= tt.getDate(); return 두자리(일);}
function 시(){let 시= tt.getHours(); return 두자리(시)}
function 분(){let 분= tt.getMinutes(); return 두자리(분)}

function SetTime(){
  document.getElementById('YYYY').value = tt.getFullYear();
  document.getElementById("MM").value = 월();
  document.getElementById("DD").value = 일();
  document.getElementById("hh").value = 시();
  document.getElementById("mm").value = 분();
일시변경()
}
SetTime();

function 일시변경(){
let 년 = document.getElementById('YYYY');
let 월 = document.getElementById('MM');
let 일 = document.getElementById('DD');
let 시 = document.getElementById('hh');
let 분 = document.getElementById('mm');
document.getElementById('YYYY').title=년.value;
document.getElementById('MM').title=월.value;
document.getElementById('DD').title=일.value;
document.getElementById('hh').title=시.value;
document.getElementById('mm').title=분.value;
}

function 날짜(숫자,부호){
let MM = document.getElementById("MM").title;
let DD = document.getElementById("DD").title;
let hh = document.getElementById("hh").title;
let mm = document.getElementById("mm").title;
if(숫자===1){let YY = document.getElementById("YYYY").title-2000; return YY+부호+MM+부호+DD+' '+hh+':'+mm}
if(숫자===2){let YY = document.getElementById("YYYY").title-2000; return YY+부호+MM+부호+DD;}
if(숫자===3){let YY = document.getElementById("YYYY").title; return YY+부호+MM+부호+DD+' '+hh+':'+mm}
if(숫자===4){let YY = document.getElementById("YYYY").title; return YY+부호+MM+부호+DD;}
}


function 첨부파일명(){
document.getElementById("첨부파일명").value= 날짜(4,'')+'_'+파일명.value+'_'+반영근거.options[반영근거.selectedIndex].text+'_'+반영유형.options[반영유형.selectedIndex].text+'_김지혜'; copy('첨부파일명'); 반영유형명();}

function 반영문서명(){let 명 = document.getElementById("문서명"); let 서명 = 명.value; let 문서명 = 서명.length; let 닷 = 서명.indexOf('.')+1;
let 버전 = 서명.slice(0,닷); let 기존버전 = 서명.slice(닷,닷+1) ; let 버전번호 = Number(기존버전)+1; let 점 = 서명.slice(닷+12,닷+13);
document.getElementById("반영문서명").value = 버전+ 버전번호 +' ['+ 날짜(2,'.') +']'+ 점; copy('반영문서명');}

function 반영유형명(){
if(반영유형.options[반영유형.selectedIndex].text==="공지")
{document.getElementById('공지1').style.display='flex';
document.getElementById('공지2').style.display='flex';
document.getElementById('추가').style.display='none';
document.getElementById('버전업').style.display='none';}
else
{document.getElementById('공지1').style.display='none';
document.getElementById('공지2').style.display='none';
document.getElementById('추가').style.display='none';
document.getElementById('버전업').style.display='flex';}
}

function 탭U(){
if(넘버==''){return "&lt;span style='color:#ff0000'>&lt;span style='font-size:16px'>&lt;strong>["+날짜(2,'.')+" 버전업 내용] - &lt;/span>&lt;a href='#N'>바로가기 클릭&lt;/a>&lt;/strong>("+내용.value+")&lt;/span>&lt;br>"}
else{return "&lt;span style='color:#ff0000'>&lt;span style='font-size:16px'>&lt;strong>["+날짜(2,'.')+" 버전업 내용"+넘버.value+"] - &lt;a href='#"+넘버.value+"'>바로가기 클릭&lt;/a>&lt;/strong>("+내용.value+")&lt;/span>&lt;br>"}}
function 탭D(){
if(넘버.value==''){return "&lt;strong>&lt;span style='color:#ff0000'>["+날짜(2,'.')+" 버전업 내용&lt;a id='N'>&lt;/a>] 노란색 음영 표기 ("+내용.value+")&lt;/span>&lt;/strong>&lt;br>";}
else{return "&lt;strong>&lt;span style='color:#ff0000'>["+날짜(2,'.')+" 버전업 내용"+넘버.value+"&lt;a id='"+넘버.value+"'>&lt;/a>] 노란색 음영 표기 ("+내용.value+")&lt;/span>&lt;/strong>&lt;br>";}}
function 본U(){
if(넘버.value==''){return "&lt;strong>&lt;span style='color:#ff0000'>&lt;span style='font-size:16px'>["+날짜(2,'.')+" 버전업 내용] - "+탭.options[탭.selectedIndex].text+"탭 참고 &lt;/span>&lt;/span>&lt;/strong>";}
else{return "&lt;strong>&lt;span style='color:#ff0000'>&lt;span style='font-size:16px'>["+날짜(2,'.')+" 버전업 내용"+넘버.value+"] - "+탭.options[탭.selectedIndex].text+"탭 참고 &lt;/span>&lt;/span>&lt;/strong>";}}


function 탭H(){return "\n"+'ㅇ '+내용.value;}
function 본H(){return "\n"+'ㅇ '+'['+탭구분.options[탭구분.selectedIndex].text+'탭] '+내용.value;}

function 반영(){
if(document.getElementById('탭구분').value==='B'){document.getElementById('본문').style.display='flex';
document.getElementById('Bt').innerHTML +="<button class='W5' id='T"+N+"' title='"+내용.value+"' onKeyUp=삭제('"+N+"');>"+N+"</button>";
document.getElementById('Bu').innerHTML +="<p id='U"+N+"'>"+탭U()+"</p>";
document.getElementById('Bd').innerHTML +="<p id='D"+N+"'>"+탭D()+"</p>";
document.getElementById('Bh').innerHTML +="<p id='H"+N+"'>"+탭H()+"</p>"; 
현()}	else{
document.getElementById(탭구분.options[탭구분.selectedIndex].text).style.display='flex';
document.getElementById('본문').style.display='flex';
document.getElementById(document.getElementById('탭구분').value+'t').innerHTML +="<button class='W30' id='T"+넘버.value+"' title='"+내용.value+"' onKeyUp=삭제('"+넘버.value+"');>"+N+"</button>";
document.getElementById(document.getElementById('탭구분').value+'u').innerHTML +="<p id='U"+넘버.value+"'>"+탭U()+"</p>";
document.getElementById(document.getElementById('탭구분').value+'d').innerHTML +="<p id='D"+넘버.value+"'>"+탭D()+"</p>";
document.getElementById(document.getElementById('탭구분').value+'h').innerHTML +="<p id='H"+넘버.value+"'>"+탭H()+"</p>";
document.getElementById('Bu').innerHTML +="<p id='BBU"+넘버.value+"'>"+본U()+"</p>";
document.getElementById('Bh').innerHTML +="<p id='BBH"+넘버.value+"'>"+본H()+"</p>";
현()}}


function 현(){let 이력머리 = '['+날짜(2,'.')+' 버전업 내용]';
document.getElementById('B소스').value = document.getElementById('Ba').innerText;
document.getElementById('B이력').value = 이력머리 +"\n"+ document.getElementById('Bh').innerText;
document.getElementById('M소스').value = document.getElementById('Ma').innerText;
document.getElementById('M이력').value = 이력머리 +"\n"+ document.getElementById('Mh').innerText;
document.getElementById('D소스').value = document.getElementById('Da').innerText;
document.getElementById('D이력').value = 이력머리 +"\n"+ document.getElementById('Dh').innerText;
document.getElementById('J소스').value = document.getElementById('Ja').innerText;
document.getElementById('J이력').value = 이력머리 +"\n"+ document.getElementById('Jh').innerText;
document.getElementById('E소스').value = document.getElementById('Ea').innerText;
document.getElementById('E이력').value = 이력머리 +"\n"+ document.getElementById('Eh').innerText;
document.getElementById('F소스').value = document.getElementById('Fa').innerText;
document.getElementById('F이력').value = 이력머리 +"\n"+ document.getElementById('Fh').innerText;
}

Element.prototype.remove = function() { this.parentElement.removeChild(this); } 
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() { 
    for(var i = this.length - 1; i >= 0; i--) { 
          if(this[i] && this[i].parentElement) { 
                this[i].parentElement.removeChild(this[i]); }}}

function 삭제(반영넘버){
if(event.keyCode==27) {
document.getElementById('T'+반영넘버).remove(); 
document.getElementById('U'+반영넘버).remove(); 
document.getElementById('D'+반영넘버).remove(); 
document.getElementById('H'+반영넘버).remove(); 현()}
document.getElementById('BBU'+반영넘버).remove();
document.getElementById('BBH'+반영넘버).remove();현()}

//공지

function 공지명(){
if(document.getElementById('공지구분').value==="1"){document.getElementById('공지제목').value = "[공지] "+document.getElementById('공지명').value;}
if(document.getElementById('공지구분').value==="2"){document.getElementById('공지제목').value = "[수정]"+document.getElementById('공지명').value;}
if(document.getElementById('공지구분').value==="3"){document.getElementById('공지제목').value = "[추가]"+document.getElementById('공지명').value;}
if(document.getElementById('공지구분').value==="4"){document.getElementById('공지제목').value = "[수정/추가]"+document.getElementById('공지명').value;}
이력파일명();
}

function 공지구분명(){
if(공지구분.options[공지구분.selectedIndex].text==="공지"){document.getElementById('추가').style.display='none';}
else{document.getElementById('추가').style.display='flex';}
}

function 이력파일명(){document.getElementById('이력파일명').value = document.getElementById('공지제목').value +'_'+ 날짜(4,'');}

function 등록일시(){
let 시 = document.getElementById('등록일시');
let 일시 = 시.value;
let 록일시 = 일시.replaceAll('-','.');
return 록일시.slice(0, 16)}

function 전달부서(){
let 서 = document.getElementById('전달부서');
let 부서 = 서.value;
return 부서.replaceAll('>','')}

function 공지하단(){
if(document.getElementById('공지구분').value==="1"){document.getElementById('공지하단').value = "<hr><p style='text-align: right'>"+전달부서() + ' 전달 (' +날짜(4,'.')+')<p>'}
else{document.getElementById('공지하단').value='<hr><strong>공지 이력</strong><p>' + 등록일시() +' - 최초공지</p><p>'+날짜(3,'.')+' - '+공지내용.value+'</p>'+"<hr><p style='text-align: right'>"+전달부서() + ' 전달 (' +날짜(4,'.')+')<p>'}
copy('공지하단')}

function 공지소스(){document.getElementById('공지소스').value = "<span style='color:#ff0000'><strong>["+날짜(3,'.')+' '+공지구분.options[공지구분.selectedIndex].text+' 내용] 노란색 음영 표기</strong> ('+공지내용.value+')</span>'; copy('공지소스')}



