const projects = [
  {title:"Bambai Meri Jaan",year:"2023",type:"series",label:"WEB SERIES",client:"Identical Brains Studio",poster:"posters/bambai-meri-jaan.jpg"},
  {title:"Indian 2",year:"2024",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/indian-2.jpg"},
  {title:"Crakk: Jeetegaa Toh Jiyegaa",year:"2024",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/crakk.jpg"},
  {title:"Article 370",year:"2024",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/article-370.jpg"},
  {title:"Aadipurush",year:"2023",type:"film",label:"FILM",client:"Retrophiles Studio",poster:"posters/aadipurush.jpg"},
  {title:"Bawaal",year:"2023",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/bawaal.jpg"},
  {title:"Kantara: A Legend — Chapter 1",year:"2025",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/kantara-chapter-1.jpg"},
  {title:"Udta Teer",year:"2025",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/udta-teer.jpg"},
  {title:"Deva",year:"2025",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/deva.jpg"},
  {title:"Samsara",year:"2025",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/samsara.jpg"},
  {title:"Tanaav",year:"2024",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/tanaav.jpg"},
  {title:"Khel Khel Mein",year:"2024",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/khel-khel-mein.jpg"},
  {title:"Phir Aayi Hasseen Dillruba",year:"2024",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/phir-aayi-hasseen-dillruba.jpg"},
  {title:"Bhaiyya Ji",year:"2024",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/bhaiyya-ji.jpg"},
  {title:"Murder in Mahim",year:"2024",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/murder-in-mahim.jpg"},
  {title:"Lootere",year:"2024",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/lootere.jpg"},
  {title:"Crew",year:"2024",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/crew.jpg"},
  {title:"Warning 2",year:"2024",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/warning-2.jpg"},
  {title:"Mission Raniganj",year:"2023",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/mission-raniganj.jpg"},
  {title:"Mumbai Diaries",year:"2023",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/mumbai-diaries.jpg"},
  {title:"Thank You for Coming",year:"2023",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/thank-you-for-coming.jpg"},
  {title:"Dream Girl 2",year:"2023",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/dream-girl-2.jpg"},
  {title:"The Night Manager",year:"2023",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/the-night-manager.jpg"},
  {title:"Adhura",year:"2023",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/adhura.jpg"},
  {title:"Carry on Jatta 3",year:"2023",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/carry-on-jatta-3.jpg"},
  {title:"School of Lies",year:"2023",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/school-of-lies.jpg"},
  {title:"Mrs Undercover",year:"2023",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/mrs-undercover.jpg"},
  {title:"Hunter — Tootega Nahi, Todega",year:"2023",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/hunter.jpg"},
  {title:"Rocket Boys",year:"2022",type:"series",label:"TV SERIES",client:"Identical Brains Studio",poster:"posters/rocket-boys.jpg"},
  {title:"Gatmat",year:"2022",type:"film",label:"FILM",client:"Identical Brains Studio",poster:"posters/gatmat.jpg"},
  {title:"Cocktail 2",year:"2025",type:"film",label:"FILM",client:"Studio / Client credit",poster:"posters/cocktail-2.jpg"}
];

const grid=document.getElementById("workGrid");
const modal=document.getElementById("projectModal");

function renderProjects(filter="all"){
  grid.innerHTML="";
  projects.filter(p=>filter==="all"||p.type===filter).forEach((p,i)=>{
    const card=document.createElement("article");
    card.className="work-card reveal";
    card.innerHTML=`<div class="poster"><img src="${p.poster}" alt="${p.title} poster" loading="lazy"></div>
      <div class="work-overlay"><span class="work-year">${p.year} / ${p.label}</span><h3>${p.title}</h3>
      <p>VFX VENDOR WORK</p><div class="client">${p.client}</div><span class="work-arrow">↗</span></div>`;
    card.addEventListener("click",()=>openProject(p));
    grid.appendChild(card);
    requestAnimationFrame(()=>setTimeout(()=>card.classList.add("visible"),Math.min(i*25,250)));
  });
}
function openProject(p){
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");
  document.getElementById("modalImage").src=p.poster;
  document.getElementById("modalTitle").textContent=p.title;
  document.getElementById("modalMeta").textContent=`${p.year} / ${p.label} / VFX VENDOR WORK`;
  document.getElementById("modalDescription").textContent="Selected VFX vendor portfolio project. ALAM VFX STUDIO provides production support across VFX, CG, environments, animation and post-production.";
  document.getElementById("modalClient").textContent=`Studio / Client — ${p.client}`;
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
document.querySelector(".modal-close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");renderProjects(btn.dataset.filter);
}));

const menuToggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
document.getElementById("year").textContent=new Date().getFullYear();

// Hero poster showcase
const heroProjectTitles=[
  "Udta Teer",
  "Cocktail 2",
  "Bambai Meri Jaan",
  "Article 370",
  "Indian 2",
  "Crakk: Jeetegaa Toh Jiyegaa",
  "Kantara: A Legend — Chapter 1",
  "Deva"
];
const heroProjects=heroProjectTitles.map(title=>projects.find(p=>p.title===title)).filter(Boolean);
const heroPoster=document.getElementById("heroPoster");
const heroTitle=document.getElementById("heroTitle");
const heroType=document.getElementById("heroType");
const heroCounter=document.getElementById("heroCounter");
const heroDots=document.getElementById("heroDots");
heroProjects.forEach((p,i)=>{const d=document.createElement("i");if(i===0)d.className="active";d.addEventListener("click",()=>showHero(i));heroDots.appendChild(d)});
let heroIndex=0;
function showHero(i){
  heroIndex=i;
  const p=heroProjects[i];
  heroPoster.classList.add("fade");
  setTimeout(()=>{heroPoster.src=p.poster;heroTitle.textContent=p.title;heroType.textContent=`${p.label} / VFX VENDOR`;heroCounter.textContent=`${String(i+1).padStart(2,"0")} / ${String(heroProjects.length).padStart(2,"0")}`;document.getElementById("monitorShot").textContent=(p.title.slice(0,12).toUpperCase()+" / "+String(i+1).padStart(2,"0"));heroPoster.classList.remove("fade")},260);
  [...heroDots.children].forEach((d,n)=>d.classList.toggle("active",n===i));
}
setInterval(()=>showHero((heroIndex+1)%heroProjects.length),4500);

const briefForm=document.getElementById("briefForm");
if(briefForm)briefForm.addEventListener("submit",e=>{
  e.preventDefault();
  const d=new FormData(briefForm);
  const subject=encodeURIComponent("Project Brief — ALAM VFX STUDIO");
  const body=encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nCompany: ${d.get("company")}\nService: ${d.get("service")}\n\nProject brief:\n${d.get("brief")}`);
  window.location.href=`mailto:alamvfxstudio@gmail.com?subject=${subject}&body=${body}`;
});

renderProjects();
