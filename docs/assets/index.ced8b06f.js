var Y=Object.defineProperty,X=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var T=(e,n,r)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,w=(e,n)=>{for(var r in n||(n={}))ee.call(n,r)&&T(e,r,n[r]);if(k)for(var r of k(n))te.call(n,r)&&T(e,r,n[r]);return e},y=(e,n)=>X(e,Z(n));import{s as l,R as t,B as S,r as c,T as Q,a as O,b as m,c as G,d as I,e as ne,f as B,g as re,u as se,I as oe,S as ae,h as ue}from"./vendor.71ac646b.js";const ce=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};ce();const le=l("div")({div:{marginTop:"1rem"}}),ie=l("div")({display:"inline","button:first-of-type":{marginRight:"1rem"}}),me=l("div")({marginBottom:"1rem"});function de({answerInput:e,answerButton:n,clearButton:r,errorMessage:o}){return t.createElement(le,null,t.createElement(me,null,e),t.createElement(ie,null,n,r),t.createElement("div",null,o))}function fe({onClick:e}){return t.createElement(S,{variant:"contained",color:"success",onClick:e},"Check Answer")}function pe({onClick:e}){return t.createElement(S,{variant:"contained",color:"secondary",onClick:e},"Clear")}const Ee=l("div")({display:"flex",gap:"10px",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}),ge=l(S)({minWidth:0,width:"50px",height:"50px"});function we({keys:e,onKeyPressed:n}){return e.map((r,o)=>t.createElement(ge,{variant:"contained",key:o,onClick:()=>n(r)},r))}function ye({keys:e,onKeyPressed:n}){return t.createElement(Ee,null,t.createElement(we,{keys:e,onKeyPressed:n}))}function Ae({onKeyPressed:e}){return t.createElement(ye,{keys:["1","2","3","4","5","6","7","8","9","0"],onKeyPressed:e})}function Se(e){return e.show?e.children:t.createElement(t.Fragment,null)}function he({show:e}){return t.createElement(Se,{show:e},"Please enter an answer first")}const p={UNANSWERED:"unanswered",CORRECT:"correct",WRONG:"wrong"};function be({userAnswer:e,onEnterAnswer:n,onCheckAnswer:r,onClearAnswer:o}){const{checkAnswer:s,keyPadKeyPressed:a,hasErrors:u}=Ce(e,n,r);return t.createElement(de,{answerInput:t.createElement(Ae,{onKeyPressed:a}),answerButton:t.createElement(fe,{onClick:s}),clearButton:t.createElement(pe,{onClick:o}),errorMessage:t.createElement(he,{show:u})})}function Ce(e,n,r){const[o,s]=c.exports.useState(!1);return{checkAnswer:()=>{if(e===""){s(!0);return}r()},keyPadKeyPressed:i=>{o&&s(!1),n(e+i)},hasErrors:o}}const Qe=l("h3")({display:"inline"});function Oe({question:e}){return t.createElement(Qe,null,`${e.value} = `)}function Re({onNext:e}){return t.createElement(S,{variant:"contained",color:"success",onClick:e},"Next question")}function xe({onEndGame:e}){return t.createElement(S,{variant:"contained",color:"success",onClick:e},"End game")}const ve=l("div")({marginTop:"1rem"});function Ne({hasMoreQuestions:e,onNextQuestion:n,onEndGame:r}){return t.createElement(ve,null,e?t.createElement(Re,{onNext:n}):t.createElement(xe,{onEndGame:r}))}const P=l("img")({width:"10rem",marginBottom:"1rem"});function R({id:e,src:n,volume:r}){return c.exports.useEffect(()=>{if(r){const o=document.getElementById(e);o.volume=r}},[]),t.createElement("audio",{id:e,src:n,autoPlay:!0})}function ke(){return t.createElement(t.Fragment,null,t.createElement(P,{src:"correct.png"}),t.createElement(R,{src:"applause3.wav"}),t.createElement("div",null,"Correct!!"))}function Te({correctAnswer:e}){return t.createElement(t.Fragment,null,t.createElement(P,{src:"oh-no.png"}),t.createElement(R,{src:"ohno.wav"}),t.createElement("div",null,"Oh No!!"),t.createElement("div",null,`The correct answer is ${e}`))}function Ge({answerState:e,correctAnswer:n}){return e===p.CORRECT?t.createElement(ke,null):e===p.WRONG?t.createElement(Te,{correctAnswer:n}):t.createElement(t.Fragment,null)}const Ie=l("h3")({display:"inline"});function Be({answer:e}){return t.createElement(Ie,null,e)}const x={create:({question:e,answer:n})=>({value:e,answer:n}),empty:()=>({value:"",answer:0})};function Pe({hasMoreQuestions:e,onAskNextQuestion:n,onQuestionAnswered:r,onEndGame:o}){const{nextQuestion:s,askNextQuestion:a}=De(n),{userAnswer:u,clearUserAnswer:i,updateUserAnswer:g}=Fe(),{answerState:E,checkAnswer:f,resetAnswerState:h}=He(s,u,r),b=()=>{i(),h(),a()},C=()=>{f()};return E===p.UNANSWERED?t.createElement(t.Fragment,null,t.createElement(Oe,{question:s}),t.createElement(Be,{answer:u}),t.createElement(be,{userAnswer:u,onEnterAnswer:g,onCheckAnswer:C,onClearAnswer:i})):t.createElement(t.Fragment,null,t.createElement(Ge,{answerState:E,correctAnswer:s.answer}),t.createElement(Ne,{hasMoreQuestions:e,onNextQuestion:b,onEndGame:o}))}function De(e){const[n,r]=c.exports.useState(x.empty()),o=()=>r(e());return c.exports.useEffect(()=>{o()},[]),{nextQuestion:n,askNextQuestion:o}}function Fe(){const[e,n]=c.exports.useState("");return{userAnswer:e,clearUserAnswer:()=>{n("")},updateUserAnswer:s=>{n(s)}}}function He(e,n,r){const[o,s]=c.exports.useState(p.UNANSWERED);return{answerState:o,resetAnswerState:()=>{s(p.UNANSWERED)},checkAnswer:()=>{let i=e.answer===parseInt(n)?p.CORRECT:p.WRONG;s(i),r(e,n,i)}}}const A={notStarted:"notStarted",started:"started",completed:"completed"},D=l("div")({position:"relative",top:"50%",transform:"translateY(-50%)"}),Le=l("div")({marginLeft:"1rem",marginRight:"1rem",height:"100%"});function Ue({gameState:e,gameStarter:n,inGameStats:r,gameBoard:o,scoreBoard:s}){const a=()=>{switch(e){case A.notStarted:return t.createElement(D,null,n);case A.started:return t.createElement(D,null,t.createElement(R,{id:"music",src:"Positive-Hip-Hop.mp3",volume:.2}),r,o);case A.completed:return s;default:throw new Error(`Unknown game state ${e}`)}};return t.createElement(Le,null,a())}const F=e=>new Date(e*1e3).toISOString().substr(14,5),We=l("div")({display:"flex",flexDirection:"column",height:"100%"}),qe=l("h3")({marginTop:"2rem"}),Me=[{title:"Time taken",getDisplayValue:e=>F(e.elapsedTime)},{title:"Total questions",getDisplayValue:e=>e.totalNumberOfQuestions},{title:"Answered correctly",getDisplayValue:e=>e.numberOfQuestionsAnsweredCorrectly},{title:"Answered incorrectly",getDisplayValue:e=>e.numberOfQuestionsAnsweredIncorrectly},{title:"Percentage correct",getDisplayValue:e=>`${_e(e)}%`}];function Ve(e){const{gameResults:n,lastGameResults:r,answerHistory:o}=e;return t.createElement(We,null,t.createElement(qe,null,"It's the end of the game, here are your results."),t.createElement($e,{gameResults:n,lastGameResults:r}),t.createElement(Je,{answerHistory:o}))}function $e({gameResults:e,lastGameResults:n}){return Ke(n)?t.createElement(je,{gameResults:e}):t.createElement(ze,{gameResults:e,lastGameResults:n})}function Ke(e){return Object.keys(e).length===0}function je({gameResults:e}){return t.createElement(O,{size:"small",sx:{marginTop:"2rem"}},t.createElement(H,null,n=>t.createElement(t.Fragment,null,t.createElement(m,{align:"left"},n.title),t.createElement(m,{align:"right"},n.getDisplayValue(e)))))}function ze({gameResults:e,lastGameResults:n}){return t.createElement(O,{size:"small",sx:{marginTop:"2rem"}},t.createElement(G,null,t.createElement(L,null,t.createElement(m,null),t.createElement(m,{align:"right"},"Current"),t.createElement(m,{align:"right"},"Previous"))),t.createElement(H,null,r=>t.createElement(t.Fragment,null,t.createElement(m,{align:"left"},r.title),t.createElement(m,{align:"right"},r.getDisplayValue(e)),t.createElement(m,{align:"right"},r.getDisplayValue(n)))))}function H({children:e}){return t.createElement(I,null,Me.map((n,r)=>t.createElement(L,{key:r},e(n))))}const _e=e=>e.numberOfQuestionsAnsweredCorrectly/e.totalNumberOfQuestions*100,L=l(Q)({backgroundColor:"#f0f0f5"});function Je({answerHistory:e}){return t.createElement(ne,{sx:{flex:"1 0px",marginTop:"1rem"}},t.createElement(O,{size:"small",stickyHeader:!0},t.createElement(G,null,t.createElement(Q,null,t.createElement(m,{align:"center"},"Question"),t.createElement(m,{align:"center"},"You answered"),t.createElement(m,{align:"center"},"Correct answer"),t.createElement(m,null))),t.createElement(I,null,e.map((n,r)=>t.createElement(Ye,{key:r,question:n.question,userAnswer:n.userAnswer,answerState:n.answerState})))))}function Ye({question:e,userAnswer:n,answerState:r}){return t.createElement(Q,null,t.createElement(m,{align:"center"},e.value),t.createElement(m,{align:"center"},n),t.createElement(m,{align:"center"},e.answer),t.createElement(m,{align:"center"},Xe(r)))}const Xe=e=>e===p.CORRECT?t.createElement("p",null,"\u2705"):e===p.WRONG?t.createElement("p",null,"\u274C"):"",Ze=l("div")({paddingBottom:"1rem"}),U=l("h3")({margin:0,whiteSpace:"nowrap"});function et({elapsedSeconds:e,questionNumber:n,totalNumberOfQuestions:r}){return t.createElement(Ze,null,t.createElement(U,null,`Elapsed time: ${F(e)}`),t.createElement(U,null,`Question ${n} of ${r}`))}function tt(){const e=B.get({numberRange:"0-60",amountOfNumber:"2-2",operations:["+"]});return x.create(e)}function nt(){return x.create(rt(at))}function rt(e){let n;do n=e();while(n.answer<0||st(n.question));return n}function st(e){const n=e.split(" ");let r="";for(let o=0;o<n.length;o++)if(r=`${r}${n[o]}`,ot(r)<0)return!0;return!1}function ot(e){try{return re(e)}catch{return}}function at(){return B.get({numberRange:"0-10",amountOfNumber:"3-4",operations:["+","-"]})}function ut(){return Math.random()<=.5?tt():nt()}function ct(e){const[n,r]=c.exports.useState({totalNumberOfQuestions:e,numberOfQuestionsAsked:0,numberOfQuestionsRemaining:e,numberOfQuestionsAnsweredCorrectly:0,numberOfQuestionsAnsweredIncorrectly:0});c.exports.useEffect(()=>{o(e)},[e]);const o=f=>{r(y(w({},n),{totalNumberOfQuestions:f,numberOfQuestionsRemaining:f}))},s=()=>{r(y(w({},n),{numberOfQuestionsAsked:a()}))},a=()=>n.numberOfQuestionsAsked+1,u=f=>{r(y(w({},n),{numberOfQuestionsRemaining:i(),numberOfQuestionsAnsweredCorrectly:g(f),numberOfQuestionsAnsweredIncorrectly:E(f)}))},i=()=>n.numberOfQuestionsRemaining-1,g=f=>f===p.CORRECT?n.numberOfQuestionsAnsweredCorrectly+1:n.numberOfQuestionsAnsweredCorrectly,E=f=>f===p.WRONG?n.numberOfQuestionsAnsweredIncorrectly+1:n.numberOfQuestionsAnsweredIncorrectly;return{gameStatistics:n,onAskQuestion:s,onQuestionAnswered:u}}function lt(){const[e,n]=c.exports.useState(0),[r,o]=c.exports.useState(!1),s=c.exports.useRef(0);c.exports.useEffect(()=>{r&&u()},[r,e]),c.exports.useEffect(()=>()=>{i()},[]);const a=()=>{o(!0)},u=()=>{s.current=setTimeout(()=>{n(e+1)},1e3)},i=()=>{o(!1),clearInterval(s.current)};return{isRunning:r,elapsedSeconds:e,pauseTimer:i,resumeTimer:a}}const it=()=>{const[e,n]=c.exports.useState([]);return{answerHistory:e,recordAnswer:(o,s,a)=>{const u=[...e,{question:o,userAnswer:s,answerState:a}];n(u)}}};function mt(e){const{elapsedSeconds:n,resumeTimer:r,pauseTimer:o}=lt(),[s,a]=c.exports.useState(A.notStarted),{gameStatistics:u,onAskQuestion:i,onQuestionAnswered:g}=ct(e),{recordAnswer:E,answerHistory:f}=it(),h=c.exports.useRef(!1);c.exports.useEffect(()=>()=>{K()},[]);const b=()=>{$()&&(a(A.started),r())},C=()=>{a(A.completed)},$=()=>h.current===!1,K=()=>{h.current=!0},j=()=>(r(),i(),ut()),z=(_,J,N)=>{o(),E(_,J,N),g(N)};return{gameState:s,elapsedSeconds:n,gameStatistics:u,answerHistory:f,hasMoreQuestions:u.numberOfQuestionsRemaining>0,totalNumberOfQuestions:u.totalNumberOfQuestions,numberOfQuestionsAsked:u.numberOfQuestionsAsked,numberOfQuestionsAnsweredCorrectly:u.numberOfQuestionsAnsweredCorrectly,numberOfQuestionsAnsweredIncorrectly:u.numberOfQuestionsAnsweredIncorrectly,startGame:b,endGame:C,askNextQuestion:j,questionAnswered:z}}function v(e){return Math.floor(Math.random()*e)}function W(){return"rgb("+v(255)+","+v(255)+","+v(255)+")"}function dt({children:e}){return t.createElement("h2",{style:{color:W()}},e)}const d={stopped:"stopped",starting:"starting",incrementing:"incrementing",isIncrementing:e=>e===d.incrementing,isStopped:e=>e===d.stopped};function ft({text:e,onCountDownStarted:n,onCountDownCompleted:r}){const{value:o,isCountingDown:s,startCountdown:a}=wt(e,n,r);return gt(s,o),s?t.createElement(dt,null,o):t.createElement(S,{variant:"outlined",color:"secondary",onClick:a},o)}const pt=(e,n)=>{switch(n.type){case d.starting:return y(w({},e),{intervalState:d.incrementing,count:1});case d.incrementing:return y(w({},e),{count:e.count+1});case d.stopped:return y(w({},e),{intervalState:d.stopped})}},Et={intervalState:d.Stopped,count:0};function gt(e,n){const[r]=se("simple-beep.wav");c.exports.useEffect(()=>{e&&r()},[n])}function wt(e,n,r){const[{count:o,intervalState:s},a]=c.exports.useReducer(pt,Et),u=c.exports.useRef(0);c.exports.useEffect(()=>{d.isIncrementing(s)&&i()},[o,s]),c.exports.useEffect(()=>()=>{g()},[]);const i=()=>setTimeout(()=>{d.isStopped(s)||(o<e.length-1?a({type:d.incrementing}):r())},1e3),g=()=>{a({type:d.stopped}),clearTimeout(u.current)},E=()=>{n(),a({type:d.starting})};return{value:e[o],isCountingDown:d.isIncrementing(s),startCountdown:E}}function yt({hide:e,onChange:n,defaultNumberOfQuestions:r}){const[o,s]=c.exports.useState(r);if(e)return t.createElement(t.Fragment,null);const a=u=>{s(u.target.value),n(u.target.value)};return t.createElement(t.Fragment,null,t.createElement(oe,{id:"question-selector"},`Number of questions: ${o}`),t.createElement(ae,{"aria-labelledby":"question-selector",min:1,defaultValue:r,valueLabelDisplay:"off",onChange:a}))}const q=l("div")({display:"inline"}),At=l(q)({marginLeft:"1rem"});function St({text:e,defaultNumberOfQuestions:n,onChangeNumberOfQuestions:r,onCountDownCompleted:o}){const[s,a]=c.exports.useState(!1);return t.createElement(t.Fragment,null,t.createElement(q,null,t.createElement(yt,{hide:s,defaultNumberOfQuestions:n,onChange:r})),t.createElement(At,null,t.createElement(ft,{text:e,onCountDownStarted:()=>a(!0),onCountDownCompleted:o})))}function ht(e,n,r){const[o,s]=c.exports.useState({});return c.exports.useEffect(()=>{e.getLastGameResults().then(a=>{s(a)})},[]),c.exports.useEffect(()=>{r===A.completed&&e.addGameResults(n)},[r]),o}const M="super_calculating_game_results";function bt(e){return e?JSON.parse(e):{}}const Ct={addGameResults:e=>Promise.resolve(localStorage.setItem(M,JSON.stringify(e))),getLastGameResults:()=>Promise.resolve(bt(localStorage.getItem(M)))};function Qt({defaultNumberOfQuestions:e,startupCountDown:n}){const[r,o]=c.exports.useState(e),s=mt(r),a=ht(Ct,V(s),s.gameState);return t.createElement(Ue,{gameState:s.gameState,gameStarter:t.createElement(St,{text:n,defaultNumberOfQuestions:e,onChangeNumberOfQuestions:o,onCountDownCompleted:s.startGame}),inGameStats:t.createElement(et,{elapsedSeconds:s.elapsedSeconds,questionNumber:s.numberOfQuestionsAsked,totalNumberOfQuestions:r}),gameBoard:t.createElement(Pe,{hasMoreQuestions:s.hasMoreQuestions,onAskNextQuestion:s.askNextQuestion,onQuestionAnswered:s.questionAnswered,onEndGame:s.endGame}),scoreBoard:t.createElement(Ve,{gameResults:V(s),lastGameResults:a,answerHistory:s.answerHistory})})}function V(e){return{elapsedTime:e.elapsedSeconds,totalNumberOfQuestions:e.totalNumberOfQuestions,numberOfQuestionsAnsweredCorrectly:e.numberOfQuestionsAnsweredCorrectly,numberOfQuestionsAnsweredIncorrectly:e.numberOfQuestionsAnsweredIncorrectly}}function Ot(e){Rt(e,W)}function Rt(e,n){xt(e,r);function r(){document.body.style.backgroundColor=n()}}function xt(e,n){c.exports.useEffect(()=>{n(),setInterval(()=>{n()},e)},[])}const vt=l("div")({display:"grid",gridTemplateRows:"auto 1fr",justifyItems:"center",minHeight:"100%"}),Nt=l("h1")({margin:0,gridRow:1}),kt=l("div")({gridRow:2,textAlign:"center"}),Tt=()=>(Ot(2e3),t.createElement(vt,null,t.createElement(Nt,null,"Super Calculating"),t.createElement(kt,null,t.createElement(Qt,{defaultNumberOfQuestions:10,startupCountDown:["Start","5","4","3","2","1","GO!"]}))));ue.render(t.createElement(Tt,null),document.getElementById("app"));
