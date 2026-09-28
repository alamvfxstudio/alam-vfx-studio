const projects = [
  {title:"Bambai Meri Jaan", year:"2023", type:"series", label:"WEB SERIES", credit:"VFX / CG", client:"Identical Brains Studio", poster:"posters/bambai-meri-jaan.jpg"},
  {title:"Indian 2", year:"2024", type:"film", label:"FILM", credit:"VFX / CG", client:"Identical Brains Studio", poster:"posters/indian-2.jpg"},
  {title:"Crakk: Jeetegaa Toh Jiyegaa", year:"2024", type:"film", label:"FILM", credit:"VFX / CG", client:"Identical Brains Studio", poster:"posters/crakk.jpg"},
  {title:"Article 370", year:"2024", type:"film", label:"FILM", credit:"VFX / CG", client:"Identical Brains Studio", poster:"posters/article-370.jpg"},
  {title:"Aadipurush", year:"2023", type:"film", label:"FILM", credit:"VFX / CG", client:"Retrophiles Studio", poster:"posters/aadipurush.jpg"},
  {title:"Bawaal", year:"2023", type:"film", label:"FILM", credit:"VFX / CG", client:"Identical Brains Studio", poster:"posters/bawaal.jpg"},
  {title:"Kantara: A Legend — Chapter 1", year:"2025", type:"film", label:"FILM", credit:"VFX / CG", client:"Identical Brains Studio", poster:"posters/kantara-chapter-1.jpg"},
  {title:"Udta Teer", year:"2025", type:"film", label:"FILM", credit:"VFX / CG", client:"Identical Brains Studio", poster:"posters/udta-teer.jpg"},
  {title:"Deva", year:"2025", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/deva.jpg"},
  {title:"Samsara", year:"2025", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/samsara.jpg"},
  {title:"Tanaav", year:"2024", type:"series", label:"TV SERIES", credit:"GENERALIST ARTIST • 12 EP", client:"Identical Brains Studio", poster:"posters/tanaav.jpg"},
  {title:"Khel Khel Mein", year:"2024", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/khel-khel-mein.jpg"},
  {title:"Phir Aayi Hasseen Dillruba", year:"2024", type:"film", label:"FILM", credit:"FX ARTIST", client:"Identical Brains Studio", poster:"posters/phir-aayi-hasseen-dillruba.jpg"},
  {title:"Bhaiyya Ji", year:"2024", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/bhaiyya-ji.jpg"},
  {title:"Murder in Mahim", year:"2024", type:"series", label:"TV SERIES", credit:"CG GENERALIST • 8 EP", client:"Identical Brains Studio", poster:"posters/murder-in-mahim.jpg"},
  {title:"Lootere", year:"2024", type:"series", label:"TV SERIES", credit:"CG GENERALIST • 8 EP", client:"Identical Brains Studio", poster:"posters/lootere.jpg"},
  {title:"Crew", year:"2024", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/crew.jpg"},
  {title:"Warning 2", year:"2024", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/warning-2.jpg"},
  {title:"Mission Raniganj", year:"2023", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/mission-raniganj.jpg"},
  {title:"Mumbai Diaries", year:"2023", type:"series", label:"TV SERIES", credit:"CG GENERALIST • 8 EP", client:"Identical Brains Studio", poster:"posters/mumbai-diaries.jpg"},
  {title:"Thank You for Coming", year:"2023", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/thank-you-for-coming.jpg"},
  {title:"Dream Girl 2", year:"2023", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/dream-girl-2.jpg"},
  {title:"The Night Manager", year:"2023", type:"series", label:"TV SERIES", credit:"CG GENERALIST / VFX • 4 EP", client:"Identical Brains Studio", poster:"posters/the-night-manager.jpg"},
  {title:"Adhura", year:"2023", type:"series", label:"TV SERIES", credit:"CG GENERALIST • 7 EP", client:"Identical Brains Studio", poster:"posters/adhura.jpg"},
  {title:"Carry on Jatta 3", year:"2023", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/carry-on-jatta-3.jpg"},
  {title:"School of Lies", year:"2023", type:"series", label:"TV SERIES", credit:"CG ENVIRONMENT ARTIST • 8 EP", client:"Identical Brains Studio", poster:"posters/school-of-lies.jpg"},
  {title:"Mrs Undercover", year:"2023", type:"film", label:"FILM", credit:"CG GENERALIST", client:"Identical Brains Studio", poster:"posters/mrs-undercover.jpg"},
  {title:"Hunter — Tootega Nahi, Todega", year:"2023", type:"series", label:"TV SERIES", credit:"VISUAL EFFECTS", client:"Identical Brains Studio", poster:"posters/hunter.jpg"},
  {title:"Rocket Boys", year:"2022", type:"series", label:"TV SERIES", credit:"VFX / CG GENERALIST", client:"Identical Brains Studio", poster:"posters/rocket-boys.jpg"},
  {title:"Gatmat", year:"2022", type:"film", label:"FILM", credit:"MOTION GRAPHICS / VFX", client:"Identical Brains Studio", poster:"posters/gatmat.jpg"},
  {title:"Cocktail 2", year:"2025", type:"film", label:"FILM", credit:"GENERALIST ARTIST", client:"Studio / Client credit", poster:"posters/cocktail-2.jpg"}
];

const grid = document.getElementById("workGrid");
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalMeta = document.getElementById("modalMeta");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalClient = document.getElementById("modalClient");

function renderProjects(filter="all"){
  grid.innerHTML = "";
  projects.filter(p=>filter==="all"||p.type===filter).forEach((p,i)=>{
    const card = document.createElement("article");
    card.className = "work-card reveal";
    card.innerHTML = `
      <div class="poster">
        <img src="${p.poster}" alt="${p.title} poster" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <div class="poster-fallback" style="display:none">${p.title}<small>${p.label}</small></div>
      </div>
      <div class="work-overlay">
        <span class="work-year">${p.year} / ${p.label}</span>
        <h3>${p.title}</h3>
        <p>${p.credit}</p>
        <div class="client">${p.client}</div>
        <span class="work-arrow">↗</span>
      </div>`;
    card.addEventListener("click",()=>openProject(p));
    grid.appendChild(card);
    requestAnimationFrame(()=>setTimeout(()=>card.classList.add("visible"),Math.min(i*35,300)));
  });
}

function openProject(p){
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  modalImage.src = p.poster;
  modalImage.alt = p.title;
  modalImage.onerror=()=>{modalImage.style.display="none"};
  modalImage.onload=()=>{modalImage.style.display="block"};
  modalMeta.textContent = `${p.year}  /  ${p.label}  /  ${p.credit}`;
  modalTitle.textContent = p.title;
  modalDescription.textContent = "Selected portfolio credit. Project role and client/studio information shown as provided for this portfolio.";
  modalClient.textContent = `Client / Studio — ${p.client}`;
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
document.querySelector(".modal-close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active"); renderProjects(btn.dataset.filter);
  });
});

const menuToggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
document.getElementById("year").textContent=new Date().getFullYear();

renderProjects();

const briefForm=document.getElementById("briefForm");
if(briefForm){
  briefForm.addEventListener("submit",e=>{
    e.preventDefault();
    const d=new FormData(briefForm);
    const subject=encodeURIComponent("Project Brief — ALAM VFX STUDIO");
    const body=encodeURIComponent(
`Name: ${d.get("name")}
Email: ${d.get("email")}
Company: ${d.get("company")}
Deadline: ${d.get("deadline")}
Service: ${d.get("service")}

Project brief:
${d.get("brief")}`
    );
    window.location.href=`mailto:alamvfxstudio@gmail.com?subject=${subject}&body=${body}`;
  });
}
