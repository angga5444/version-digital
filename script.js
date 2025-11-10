// Hapus semua variabel yang tidak digunakan dari skrip asli yang tumpang tindih

var stemGroups = [
  [
    "#Stem2_1_",
    "#Stem3_1_",
    "#Stem4_1_",
    "#Stem5a_1_",
    "#Stem5b_1_",
    "#Stem6_1_",
    "#Stem7a_1_",
    "#Stem7b_1_",
    "#Stem7c_1_",
    "#Stem8_1_",
  ],
  [
    "#Stem17_1_",
    "#Stem18_1_",
    "#Stem19_1_",
    "#Stem20a_1_",
    "#Stem20b_1_",
    "#Stem21_1_",
    "#Stem22a_1_",
    "#Stem22b_1_",
    "#Stem22c_1_",
    "#Stem23_1_",
  ],
  ["#Stem10_1_", "#Stem11_1_", "#Stem12a_1_", "#Stem12b_1_"],
  ["#Stem26_1_", "#Stem27_1_", "#Stem28a_1_", "#Stem28b_1_"],
  ["#Stem13a_1_", "#Stem13b_1_", "#Stem13c_1_"],
  ["#Stem29a_1_", "#Stem29b_1_", "#Stem29c_1_"],
];

var stemVarsFrom = { drawSVG: "0% 0%", autoAlpha: 1 };
var stemVarsTo = { drawSVG: "0% 100%", duration: 2, stagger: 0.4 };

var dots = $("#Dots_1_");
// teks muncul setelah bunga mekar
tl.fromTo('#nazwaText',
  {opacity: 0, scale: 0, transformOrigin: '50% 50%'},
  {duration: 2, opacity: 1, scale: 1, ease: "elastic.out(1, 0.5)"},
  'flower3+=1.5'
);

// HANYA ADA SATU TIMELINE UTAMA DI SINI
var tl = gsap
  .timeline({ defaults: { ease: "power2.out" } })
  .set("#Footer_group_1_", { autoAlpha: 1 });

// Animasi Batang utama (2 batang besar)
tl.fromTo(
  ["#Stem16_1_", "#Stem1_1_"],
  { drawSVG: "0% 0%" },
  { duration: 1.5, drawSVG: "0% 100%" },
  "start"
);

// Animasi Bunga Mawar utama (agar muncul lebih dulu)
tl.fromTo(
    "[id^=PinkFlowerGroup16_1_]",
    { autoAlpha: 1, scale: 0, transformOrigin: "35% 110%" },
    { duration: 2, scale: 1 },
    "start+=0.5"
)
.fromTo(
    "[id^=PinkFlowerGroup1_1_]",
    { autoAlpha: 1, scale: 0, transformOrigin: "65% 110%" },
    { duration: 2, scale: 1 },
    "start+=0.5"
)

// Batang tumbuh (grup-grup batang kecil)
stemGroups.forEach((g, i) => {
  tl.fromTo(g, stemVarsFrom, stemVarsTo, `start+=${i * 0.4}`);
});

// Daun dan bunga bermekaran (termasuk 2 bunga mawar sisanya)
tl.fromTo(
  "[id^=LeafGroup] path",
  { autoAlpha: 0, scale: 0 },
  {
    autoAlpha: 1,
    scale: 1,
    duration: 2,
    stagger: 0.05,
    transformOrigin: "center center",
  },
  "start+=1"
).fromTo(
  "[id^=PinkFlowerGroup]:not([id$=1_1_], [id$=16_1_]) path", 
  { autoAlpha: 0, scale: 0, transformOrigin: "center center" },
  {
    autoAlpha: 1,
    scale: 1.2,
    duration: 2.5,
    ease: "elastic.out(1, 0.5)",
    stagger: 0.1,
  },
  "start+=1.5"
);

// Animasi Kuncup Bunga
tl.fromTo(
  "[id^=BudGroup] g[id^=Bud]",
  { autoAlpha: 0, scale: 0, transformOrigin: "center center" },
  {
    autoAlpha: 1,
    scale: 1,
    duration: 2,
    stagger: 0.1,
    ease: "back.out(1.7)",
  },
  "start+=2"
);

// Tampilkan titik-titik halus
tl.fromTo(
  dots,
  { autoAlpha: 0, scale: 0 },
  { duration: 3, autoAlpha: 1, scale: 1, ease: "expo.out" },
  "start+=4"
);

// Teks “Nazwa” muncul anggun
tl.fromTo(
  "#nazwaText",
  { opacity: 0, scale: 0.3, y: 40 },
  { duration: 3, opacity: 1, scale: 1, y: 0, ease: "elastic.out(1, 0.6)" },
  "start+=4.5"
).to(
  "#nazwaText",
  {
    duration: 3,
    repeat: -1,
    yoyo: true,
    filter: "drop-shadow(0 0 15px rgba(173, 216, 230,0.6))",
    ease: "sine.inOut",
  },
  "start+=7.5"
);
