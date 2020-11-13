function openMenu(){document.getElementById("menu").style.width="60px"}function closeMenu(){document.getElementById("menu").style.width="0"}function openInfo(){document.getElementById("info").style.display="flex"}function closeInfo(e){e.target==document.getElementById("info")&&(document.getElementById("info").style.display="none")}window.addEventListener("click",closeInfo);

    // calculator start
    function dis(val) 
    { 
        document.getElementById("calc_result").value+=val 
    } 
    function solve() 
    { 
        let x = document.getElementById("calc_result").value 
        let y = eval(x) 
        document.getElementById("calc_result").value = y 
    } 
    function clr() 
    { 
        document.getElementById("calc_result").value = "" 
    } 
    // calculator end