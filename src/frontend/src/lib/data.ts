import { WallType } from "@/backend";
import type {
  ComparisonMetric,
  ExcavationSystem,
  ResearchPaper,
  SystemDetail,
} from "@/types";

export const SYSTEMS: ExcavationSystem[] = [
  {
    id: "soldier-pile",
    name: "Soldier Pile Wall",
    wallType: WallType.SoldierPile,
    description:
      "H-piles or steel I-beams driven at regular intervals with timber or concrete lagging spanning between them. Cost-effective for temporary support in competent soils.",
  },
  {
    id: "secant-pile",
    name: "Secant Pile Wall",
    wallType: WallType.SecantPile,
    description:
      "Interlocking bored concrete piles providing a continuous, near-watertight wall. Primary and secondary piles interlock to cut off groundwater.",
  },
  {
    id: "sheet-pile",
    name: "Sheet Pile Wall",
    wallType: WallType.SheetPile,
    description:
      "Interlocking steel or vinyl sections driven into the ground forming a continuous wall. Excellent for water retention and temporary/permanent support.",
  },
  {
    id: "tangent-pile",
    name: "Tangent Pile Wall",
    wallType: WallType.TangentPile,
    description:
      "Bored concrete piles installed tangentially (touching but not overlapping). Effective in soft to medium soils; moderate water control through tight tolerances.",
  },
  {
    id: "micropile",
    name: "Micropile Wall",
    wallType: WallType.Micropile,
    description:
      "Small-diameter (75–300 mm) high-capacity drilled and grouted piles. Ideal for restricted access, underpinning, and sites with obstructions or karst conditions.",
  },
  {
    id: "diaphragm-wall",
    name: "Diaphragm Wall",
    wallType: WallType.DiaphragmWall,
    description:
      "Reinforced concrete walls cast in-situ in narrow trenches stabilized with bentonite slurry. Maximum stiffness and water control for deep urban excavations.",
  },
];

export const COMPARISON_METRICS: ComparisonMetric[] = [
  {
    systemId: "soldier-pile",
    costRange: "$200–400/m²",
    maxHeight: 12,
    installationTime: "Fast (2–4 weeks)",
    deflection: "High (25–75 mm)",
    waterControl: "Poor",
    noisyVibration: "Moderate",
    mobilizationTime: "1–2 days",
  },
  {
    systemId: "secant-pile",
    costRange: "$600–900/m²",
    maxHeight: 20,
    installationTime: "Medium (4–8 weeks)",
    deflection: "Low–Medium (10–40 mm)",
    waterControl: "Good",
    noisyVibration: "Low",
    mobilizationTime: "1–2 weeks",
  },
  {
    systemId: "sheet-pile",
    costRange: "$300–550/m²",
    maxHeight: 15,
    installationTime: "Fast (1–3 weeks)",
    deflection: "Medium (15–50 mm)",
    waterControl: "Good",
    noisyVibration: "High",
    mobilizationTime: "2–4 days",
  },
  {
    systemId: "tangent-pile",
    costRange: "$400–700/m²",
    maxHeight: 18,
    installationTime: "Medium (3–6 weeks)",
    deflection: "Medium (12–45 mm)",
    waterControl: "Moderate",
    noisyVibration: "Low",
    mobilizationTime: "1–2 weeks",
  },
  {
    systemId: "micropile",
    costRange: "$500–1200/m²",
    maxHeight: 10,
    installationTime: "Slow (6–12 weeks)",
    deflection: "Low (5–20 mm)",
    waterControl: "Poor–Moderate",
    noisyVibration: "Low",
    mobilizationTime: "3–5 days",
  },
  {
    systemId: "diaphragm-wall",
    costRange: "$900–1800/m²",
    maxHeight: 40,
    installationTime: "Slow (8–16 weeks)",
    deflection: "Very Low (5–25 mm)",
    waterControl: "Excellent",
    noisyVibration: "Very Low",
    mobilizationTime: "2–4 weeks",
  },
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "p001",
    title: "Numerical Analysis of Soldier Pile Walls in Soft Clay Using FEM",
    method: "Finite Element Method (FEM) – Plaxis 2D",
    keyParameters: "φ=28°, c=10 kPa, E=15 MPa, pile spacing 2.5 m",
    categories: ["soldier-pile", "fem", "soft-clay"],
    abstract:
      "This study presents FEM-based deformation analysis of soldier pile retaining walls in soft clay deposits. Results show maximum lateral displacement of 42 mm at 8 m excavation depth, with surcharge loading increasing displacements by 35%.",
    doiLink: "https://doi.org/10.1016/j.compgeo.2021.104123",
  },
  {
    id: "p002",
    title:
      "Performance Comparison of Secant vs. Tangent Pile Walls in Urban Excavation",
    method: "Field monitoring + 3D FEM",
    keyParameters: "φ=32°, c=0 kPa, γ=18 kN/m³, pile dia. 600–900 mm",
    categories: ["secant-pile", "tangent-pile", "urban"],
    abstract:
      "Instrumented field measurements at a 15 m deep urban excavation compared secant and tangent pile wall performance. Secant piles showed 28% lower lateral deflection and effectively controlled groundwater inflow below 2 L/min per 10 m.",
    doiLink: "https://doi.org/10.1680/jgeen.20.00084",
  },
  {
    id: "p003",
    title:
      "Sheet Pile Wall Design Optimization Using Rankine and Coulomb Earth Pressure Theories",
    method: "Limit equilibrium + parametric study",
    keyParameters: "Ka=0.307, Kp=3.25, H=10 m, δ=2φ/3",
    categories: ["sheet-pile", "earth-pressure", "design"],
    abstract:
      "Parametric evaluation of classical earth pressure theories applied to cantilevered sheet pile walls. Coulomb theory with wall friction δ=2φ/3 reduces required embedment depth by 18–22% compared to Rankine. Critical for optimizing section modulus.",
    doiLink: "https://doi.org/10.1061/(ASCE)GT.1943-5606.0002791",
  },
  {
    id: "p004",
    title:
      "Diaphragm Wall Behavior in Multi-Propped Deep Excavations: Case Study Singapore",
    method: "Back-analysis + observational method",
    keyParameters: "E=800 MPa, t=800 mm, H=32 m, props at 3 m spacing",
    categories: ["diaphragm-wall", "deep-excavation", "case-study"],
    abstract:
      "A comprehensive back-analysis of 800 mm diaphragm wall performance during a 32 m excavation in Singapore marine clay. Wall deflections peaked at 0.22% H. Heave factor of safety maintained above 1.5 through pre-consolidation grouting.",
    doiLink: "https://doi.org/10.1680/geot.2019.69.11.975",
  },
  {
    id: "p005",
    title:
      "Micropile Retaining Systems Under Lateral Loading: Experimental and Analytical Study",
    method: "Full-scale load testing + p-y curve analysis",
    keyParameters: "dia. 150 mm, L=15 m, grout fcu=30 MPa, n=4/m",
    categories: ["micropile", "lateral-load", "experimental"],
    abstract:
      "Lateral load response of micropile walls was evaluated through full-scale tests. Composite action between micropiles and the soil matrix provided 40% higher lateral resistance than predicted by individual pile analysis. p-y curves calibrated for dense sand.",
    doiLink: "https://doi.org/10.1139/cgj-2020-0441",
  },
  {
    id: "p006",
    title:
      "Effect of Soil Heterogeneity on Passive Earth Pressure: Monte Carlo Analysis",
    method: "Probabilistic – Monte Carlo simulation (10,000 runs)",
    keyParameters: "φ: N(32°,5°), c: N(15,8) kPa, COV=0.3",
    categories: ["earth-pressure", "probabilistic", "soil-variability"],
    abstract:
      "Spatial variability of φ and c is propagated through passive earth pressure calculations using Monte Carlo analysis. Results show Kp coefficient of variation of 0.28 for heterogeneous glacial till, increasing required embedment for reliability index β=3.0.",
    doiLink: "https://doi.org/10.1002/nag.3228",
  },
];

export const SYSTEM_DETAILS: SystemDetail[] = [
  // Soldier Pile
  {
    systemId: "soldier-pile",
    tabName: "basic",
    content:
      "Soldier pile walls consist of steel H-piles (W200×100 to W360×196) or I-sections installed at 1.5–3 m spacing by driving or drilling. Timber, precast concrete, or steel plate lagging spans between piles to retain soil. Used predominantly for temporary excavation support in urban environments and stiff soils above the water table. Wall heights typically 4–12 m; up to 15 m with multiple levels of support.",
  },
  {
    systemId: "soldier-pile",
    tabName: "components",
    content:
      "Primary elements: W-section steel piles (Grade 50, Fy=345 MPa), horizontal lagging (100–200 mm timber or 150 mm precast panels), tie-back anchors (post-tensioned 15.2 mm strands, 300–600 kN capacity) or rakers (W200 sections, 150–300 kN), waling beams (2×C310 or W310×60). Secondary elements: drainage aggregate behind lagging, geotextile filter (Mirafi 140N or equivalent), concrete lean-mix toe plug.",
  },
  {
    systemId: "soldier-pile",
    tabName: "soil",
    content:
      "Applicable soils: stiff clays (cu>50 kPa), dense sands (Dr>60%), gravels. Design parameters: φ=28–38°, c=0–50 kPa, γ=17–21 kN/m³, E=15–80 MPa, ν=0.25–0.35. Minimum embedment: 0.5D below excavation (typically D=3–5 m). Arching ratio typically 0.5–0.8. NOT suitable: soft clays (cu<25 kPa), running sands, or conditions requiring positive water cutoff.",
  },
  {
    systemId: "soldier-pile",
    tabName: "earth-pressure",
    content:
      "Active Ka = tan²(45–φ/2); for φ=30°, Ka=0.333. At-rest K0 = 1–sinφ = 0.500. Passive Kp = tan²(45+φ/2) = 3.00. Design approach: Rankine active on retained side; net passive on embedded portion. Arching between piles reduces active pressure by factor 0.5–0.8. Total active thrust Pa = 0.5·Ka·γ·H². Net passive resistance per pile Pp = Kp·b·γ·D²/2 where b = pile flange + lagging width.",
  },
  {
    systemId: "soldier-pile",
    tabName: "design",
    content:
      "Design procedure (AASHTO/FHWA): 1) Determine retained height H, surcharge q. 2) Compute Ka, Kp. 3) Trial embedment D (start D=0.5H). 4) Check moment equilibrium about bottom. 5) Compute maximum moment in pile shaft. 6) Select pile section (Sx ≥ Mmax/Fy). 7) Design lagging for arched load = Ka·γ·s²/8 (s=pile spacing). 8) Design tie-backs or bracing. 9) Verify global stability (fs≥1.5) and heave (fs≥1.3).",
  },
  // Secant Pile
  {
    systemId: "secant-pile",
    tabName: "basic",
    content:
      "Secant pile walls use alternating primary (unreinforced, softer mix) and secondary (reinforced, stiffer concrete) bored piles that overlap by 25–75 mm, forming a continuous interlocked wall. The interlock provides structural continuity and effective groundwater control. Typically used for permanent urban basement retaining walls, underground stations, and marine structures. Depths up to 40 m, thicknesses 600–1200 mm.",
  },
  {
    systemId: "secant-pile",
    tabName: "components",
    content:
      "Primary piles: diameter 600–900 mm, C12/15 or controlled low-strength material (CLSM) for easier secondary cutting. Secondary (king) piles: diameter 750–1050 mm, C30/37 reinforced concrete with cage (fy=500 MPa). Diameter overlap: 20–75 mm each side. Reinforcement cage: 8–16 T20–T32 bars, T10@150 links. Casing: temporary or permanent oscillator/rotary casing. Top capping beam: RC, 500×500 mm minimum, connects all secondary piles.",
  },
  {
    systemId: "secant-pile",
    tabName: "soil",
    content:
      "Best performance: all soil types including soft clay, loose to medium sand, silt, and gravel. Design parameters: φ=25–42°, c=0–80 kPa, γ=16–22 kN/m³, E=10–200 MPa, ν=0.20–0.40. SPT N=5–100+. Particularly effective in variable fill or mixed ground. Groundwater: handles heads up to 30+ m. Pile construction tolerance: ≤1° verticality, ≤25 mm position.",
  },
  {
    systemId: "secant-pile",
    tabName: "earth-pressure",
    content:
      "Ka = tan²(45–φ/2); φ=32°, Ka=0.307. K0 = 1–sinφ = 0.470. Kp = tan²(45+φ/2) = 3.255. Wall treated as continuous plate: p = Ka·γ·z − 2c·Ka^0.5 for cohesive soils. Net pressure diagram used for propping force and bending moment. Hydrostatic pressure added for below-water-table conditions: uw = γw·hw. At permanent installation, at-rest K0 pressures apply. Typical max bending moment: 1,500–4,000 kNm/m at 15–20 m depth.",
  },
  {
    systemId: "secant-pile",
    tabName: "design",
    content:
      "Design to BS EN 1997-1:2004 / EC7 or AASHTO. Steps: 1) Geotechnical investigation to CL. 2) Select diameter and overlap (min 20 mm). 3) Earth pressure analysis (FEM preferred for multi-prop). 4) Structural design of secondary pile as cantilever or propped beam. 5) Reinforcement design for Mmax, shear, axial. 6) Check pile overlap geometry from tolerances. 7) Groundwater seepage analysis (SEEP/W or equivalent). 8) Verify basal stability (Terzaghi or Bjerrum-Eide).",
  },
  // Sheet Pile
  {
    systemId: "sheet-pile",
    tabName: "basic",
    content:
      "Sheet pile walls comprise interlocking steel (AZ, HZ, PU, or PZ sections), vinyl (HDPE/PVC), or aluminum profiles driven into the ground by hydraulic impact hammer, vibratory hammer, or press-in machine. Continuous wall with interlocked clutches provides water tightness. Most economical retaining system for waterfront, river, flood protection, and temporary excavation support.",
  },
  {
    systemId: "sheet-pile",
    tabName: "components",
    content:
      "Sheet sections: AZ-series (double-U, Sx=1000–4000 cm³/m), HZ-M (high-moment, Sx=2500–8000 cm³/m), PU18–PU32. Steel grade: S355GP (fy=355 MPa) or S430GP. Clutch types: ball-and-socket (Larssen), thumb-and-finger (ball clutch). Waling: 2×UB or UC channels, M30 tie-rods at 2–3 m spacing. Anchor plate or dead-man anchor (W200×100, 3–5 m L). Corrosion allowance: 0.1–0.2 mm/yr (marine), added to design thickness.",
  },
  {
    systemId: "sheet-pile",
    tabName: "soil",
    content:
      "Applicable: sands, gravels, soft to stiff clays, silts, organics. Refusal in rock or boulders. Parameters: φ=25–40°, c=0–60 kPa, γ=17–21 kN/m³, E=5–100 MPa, ν=0.25–0.35. Minimum installation depth: embedment D ≥ 0.7H for cantilever in sand (φ=30°). Vibratory hammer effective in: loose sand, soft clay. Impact hammer required for: dense gravel, stiff clay. Pre-drilling may be needed in hard strata.",
  },
  {
    systemId: "sheet-pile",
    tabName: "earth-pressure",
    content:
      "Rankine active: Ka = tan²(45−φ/2). Rankine passive: Kp = tan²(45+φ/2). Coulomb with wall friction (δ=2φ/3): more accurate Kp, typically 15–25% higher. Free earth support: embedment D from ΣM=0 about anchor. Fixed earth support: accounts for toe fixity; embedment D typically 20–30% less than free support. Net pressure diagram: pnet = Ka·γ·z (active side) − Kp·γ·d (passive side). Anchor force = total active − passive below dredge line.",
  },
  {
    systemId: "sheet-pile",
    tabName: "design",
    content:
      "Cantilever: D from ΣM=0 at toe; add 20–40% safety; check deflection (<H/100). Anchored: 1) Set anchor level. 2) Free earth support – find D by moment equilibrium at anchor. 3) Compute maximum bending moment. 4) Select section (Sx req = Mmax/Fy). 5) Design anchor (tie-rod + waling + deadman). 6) Overall stability check (Kranz or slip circle). Typical deflection: δ = Pa·H³/(8EI) for cantilever. Design life: 50 yr with 1.5 mm corrosion allowance.",
  },
  // Tangent Pile
  {
    systemId: "tangent-pile",
    tabName: "basic",
    content:
      "Tangent pile walls consist of bored reinforced concrete piles installed in a line, touching but not overlapping. The pile surfaces are tangent to each other. Small gaps (0–20 mm) may exist in practice. Less water-tight than secant piles; suitable for permanent walls above the water table or where moderate seepage is acceptable. Typical pile diameter 450–900 mm, depths 10–25 m.",
  },
  {
    systemId: "tangent-pile",
    tabName: "components",
    content:
      "Piles: C25/30 bored concrete, diameter 450–900 mm, 100% reinforced. Reinforcement: 6–12 T20–T25 longitudinal, T10@200 links. All piles: same mix and diameter (contrast to secant). Capping beam: RC 400×500 minimum, continuous. Drainage provision: behind wall – geocomposite drain (Enkadrain or equivalent) + perforated pipe collector. No clutch or interlock between adjacent piles (gap must be treated with lean-mix or jet-grouted if watertight needed).",
  },
  {
    systemId: "tangent-pile",
    tabName: "soil",
    content:
      "Best in: stiff clay (cu>50 kPa), medium-dense to dense sand, gravel. Adequate in: medium stiff clay, medium sand with controlled bleed water. Not suitable: very soft clay, running sand, high artesian pressure. Design φ=28–40°, c=0–70 kPa, γ=17–21 kN/m³, E=20–120 MPa, ν=0.22–0.35. SPT N>10 preferred. Pile verticality tolerance ≤0.5° critical for tangent geometry.",
  },
  {
    systemId: "tangent-pile",
    tabName: "earth-pressure",
    content:
      "Earth pressure calculation identical to secant pile wall for structural design: active Ka = tan²(45–φ/2); passive Kp = tan²(45+φ/2). Effective stress analysis for drained conditions. Total stress (Cu) undrained for temporary stage in clay. If gaps between piles are sealed: treat as continuous wall. If gaps unsealed: design individual pile for tributary width = pile diameter. Bending moment in pile: M = ΔP·(L/8) for propped, M = ΔP·(L/2) for cantilever.",
  },
  {
    systemId: "tangent-pile",
    tabName: "design",
    content:
      "Design (BS 8004 / EC7): 1) Select pile diameter and spacing (tangent contact). 2) FEM or sub-grade reaction (p-y) analysis. 3) Structural design of each pile as beam-column (moment + shear + axial if inclined). 4) Reinforcement check: 4As·fy/π·d² ≥ 0.006 min steel. 5) Capping beam design as continuous beam on pile supports. 6) Settlement analysis (Mindlin influence factor approach). 7) Check lateral deflection: δmax ≤ H/400 for sensitive adjacent structures.",
  },
  // Micropile
  {
    systemId: "micropile",
    tabName: "basic",
    content:
      "Micropiles (pin piles, minipiles) are small-diameter (75–300 mm) drilled-and-grouted piles with a central steel bar or casing. Despite small size, they develop high axial capacity (200–2000 kN) via steel-to-grout bond and grout-to-ground friction. Used for: underpinning existing foundations, retaining walls in restricted access (basements, under structures), and karst or difficult-ground remediation. Wall system: network of inclined micropiles tied by a capping beam.",
  },
  {
    systemId: "micropile",
    tabName: "components",
    content:
      "Drill casing: 89–250 mm steel casing, Grade T91 or Grade B. Grout: W/C 0.4–0.45, fc≥28 MPa at 28 days, neat cement grout. Reinforcement: central bar 50–100 mm threaded rebar (fy=720 MPa, Williams Form or Dywidag) or full-length cage. Grout injection: low-pressure (Type A), single-pass tube-à-manchette (Type B), sleeve-port (Types C/D, highest capacity). Capping beam: RC or steel, designed for net lateral thrust. Inclination: 0° (vertical) to 30° for inclined compression-tension pairs.",
  },
  {
    systemId: "micropile",
    tabName: "soil",
    content:
      "Applicable in virtually all ground: rock (RQD>20%), gravel, sand, silt, clay, fill, karst. Design bond stress: qs = 1.5–3.5 MPa (rock), 0.25–0.55 MPa (sand), 0.10–0.30 MPa (clay). Axial capacity: Qa = π·D·L·qs. Parameters: φ=25–45°, c=0–100 kPa, E=10–3000 MPa (soil to rock), ν=0.15–0.40. Low-vibration: ≤2 mm/s ppv. Minimum clearance to existing structure: 200 mm. Drill rig: limited to 2 m headroom minimum.",
  },
  {
    systemId: "micropile",
    tabName: "earth-pressure",
    content:
      "Micropile walls resist lateral earth pressure through composite pile-soil mass behaviour. Design models: (1) Individual pile analysis – each micropile carries its tributary earth pressure. (2) Composite wall – micropile grid treated as equivalent homogeneous wall with smeared stiffness. Active Ka = tan²(45–φ/2). For inclined pair systems: horizontal component = P·cos(α). Lateral resistance RL = Ah·φ·(qf), where Ah = pile cross-section area, qf = side friction. Net horizontal force per micropile: H = Ka·γ·z·s (s=pile spacing).",
  },
  {
    systemId: "micropile",
    tabName: "design",
    content:
      "Design (FHWA NHI-05-039 / EN 14199): 1) Determine loads (axial, lateral, moment). 2) Select geometry – diameter, length, inclination. 3) Grout-to-ground bond → capacity verification. 4) Structural check: N/Ncr < 1.0 (column buckling), M+N combined. 5) For retaining: check pile spacing for arching and bending. 6) Test pile program: 2% of production piles to 1.5× design load. 7) Global stability: Bishop circular, Janbu. 8) Settlement: elastic shortening ΔL = PL/AE.",
  },
  // Diaphragm Wall
  {
    systemId: "diaphragm-wall",
    tabName: "basic",
    content:
      "Diaphragm walls (slurry walls) are in-situ reinforced concrete walls cast in excavated trenches stabilized by bentonite or polymer slurry. Panels 2–7 m wide, 400–1500 mm thick, depths up to 80 m. The stiffest and most water-resistant of all excavation support systems. Used for deep urban excavations, underground transit stations, combined retaining-and-foundation walls (barrettes), and cut-off walls through contaminated ground.",
  },
  {
    systemId: "diaphragm-wall",
    tabName: "components",
    content:
      "Guide walls: RC 1.5 m deep, 300 mm thick, maintain trench alignment. Slurry: bentonite (4–7% concentration, density 1020–1100 kg/m³) or HDD polymer. Reinforcement cage: typically 2 layers T25–T32 bars; 40–80 mm cover (durability). Concrete: self-compacting C35/45, slump 220+ mm, cast by tremie pipe from bottom-up. Panel joints: CWS (cast-in waterbar), Giken or Hitachi stop-ends, HDPE water-stops. Capping beam: RC, connects all panels, distributes propping loads.",
  },
  {
    systemId: "diaphragm-wall",
    tabName: "soil",
    content:
      "Applicable in all soil types. Favored in soft-to-firm clay, dense sand, stiff clay, rock (requires chiseling or mill). Critical design parameters: φ=20–42°, c=0–100 kPa, γ=15–22 kN/m³, E=5–200 MPa, ν=0.20–0.45. Stability of trench during excavation: Ftrench ≥ 1.1 (slurry pressure head calculation). Consolidation settlement of adjacent clay: use Meyerhof influence factors. Deep soft clay: basal heave Nb < 5.14·cu/q for factor ≥1.2.",
  },
  {
    systemId: "diaphragm-wall",
    tabName: "earth-pressure",
    content:
      "Active: pa = Ka·σv' − 2c·Ka^0.5 + uw. Passive: pp = Kp·σv' + 2c·Kp^0.5. For multi-propped walls: FEM (Hardening Soil model or MC) preferred over limit equilibrium. Earth pressure redistribution: trapezoidal Terzaghi-Peck envelopes for propping loads (sand: 0.65·Ka·γ·H; clay: 0.2–0.4·γ·H depending on stability number). Maximum propping force from envelope; maximum wall moment from FEM. Typical critical section: at lowest prop level, Mmax = 400–2000 kNm/m for 20–40 m wall.",
  },
  {
    systemId: "diaphragm-wall",
    tabName: "design",
    content:
      "Design (EC7 / BS EN 1538 / CIRIA C760): 1) Ground investigation to 2H depth. 2) 2D FEM analysis (HS or HSS soil model). 3) Wall geometry: t=H/20 to H/12. 4) Reinforcement: M+N+V combined. 5) Joint design: watertight water-stops, check shear. 6) Guide wall design: column-analogy for lateral soil pressure. 7) Verify basal stability (Terzaghi for sandy soil; Bjerrum-Eide for clay). 8) Settlement prediction: empirical (Peck 1969) or FEM-based. 9) Monitoring plan: inclinometers, settlement pins, piezometers, load cells.",
  },
];
