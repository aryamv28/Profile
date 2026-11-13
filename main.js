const S="Mary Matha Higher Secondary School";
const A=[
["2015–16","English speech","Speech","1st",S],["2015–16","Hindi recitation","Recitation","1st",S],
["2015–16","English recitation","Recitation","1st",S],["2015–16","English essay writing","Essay","1st",S],
["2015–16","Malayalam speech","Speech","2nd",S],
["2014–15","English speech","Speech","1st",S],["2014–15","Hindi recitation","Recitation","1st",S],
["2014–15","Malayalam speech","Speech","2nd",S],["2014–15","English recitation","Recitation","2nd",S],
["2013–14","English recitation","Recitation","1st",S],["2013–14","Hindi recitation","Recitation","1st",S],
["2013–14","English speech","Speech","2nd",S],["2013–14","Malayalam speech","Speech","3rd",S],
["2012–13","English recitation","Recitation","1st",S],["2012–13","Hindi recitation","Recitation","1st",S],
["2012–13","English speech","Speech","2nd",S],["2012–13","Malayalam speech","Speech","2nd",S],
["2011–12","English speech","Speech","2nd",S],["2011–12","English recitation","Recitation","2nd",S],
["2011–12","Malayalam essay writing","Essay","2nd",S],["2011–12","Malayalam speech","Speech","3rd",S],
["Sub-district","Hindi recitation, youth festival","Recitation","3rd","Aluva"],
["College","Teaching competition, Mathematics Fest","Teaching","2nd","KMM College of Arts and Science, Thrikkakara"]
];
const cats=["All","Teaching","Speech","Recitation","Essay"];
let cur="All";
const chips=document.getElementById("chips"),rows=document.getElementById("rows"),count=document.getElementById("count");
function esc(s){return s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}
function draw(){
  const list=A.filter(a=>cur==="All"||a[2]===cur);
  rows.innerHTML=list.map(a=>`<tr><td>${esc(a[0])}</td><td>${esc(a[1])}</td><td class="p">${a[3]==="1st"?'<span class="pl1">1st</span>':a[3]}</td><td>${esc(a[4])}</td></tr>`).join("");
  const firsts=list.filter(a=>a[3]==="1st").length;
  count.textContent=`${list.length} prizes, ${firsts} of them first place.`;
  chips.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.c===cur));
}
cats.forEach(c=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.dataset.c=c;b.onclick=()=>{cur=c;draw()};chips.appendChild(b)});
draw();
