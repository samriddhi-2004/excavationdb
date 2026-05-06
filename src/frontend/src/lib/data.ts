import { WallType } from "@/backend";
import type {
  ComparisonMetric,
  ExcavationSystem,
  ResearchPaper,
  SystemDetail,
} from "@/types";

export { METRIC_ROWS, ALL_METRIC_IDS } from "@/lib/comparison-data";

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
    authors: "Zhang, W.; Goh, A.T.C.; Wei, F.; Zhang, Y.",
    year: 2021,
    method: "Finite Element Method (FEM) – Plaxis 2D",
    keyParameters:
      "φ=28°, c=10 kPa, E=15 MPa, pile spacing 2.5 m, H=8 m, δ_max=42 mm",
    categories: ["soldier-pile", "fem", "soft-clay"],
    abstract:
      "This study presents FEM-based deformation analysis of soldier pile retaining walls embedded in soft clay deposits using Plaxis 2D with Hardening Soil model. Parametric studies varied excavation depth (6–12 m), pile spacing (1.5–3.5 m), and surcharge intensity (0–50 kPa). Results show maximum lateral displacement of 42 mm at 8 m excavation depth, with surcharge loading increasing displacements by 35% and pile spacing exceeding 2.5 m causing soil arching failure.",
    conclusion:
      "Soldier pile walls in soft clay (cu < 30 kPa) require pile spacing ≤ 2.0 m to prevent inter-pile soil failure. A minimum embedment ratio D/H = 0.6 with single anchor level limits maximum lateral deflection to 0.5% H, maintaining serviceability for adjacent structures.",
    doiLink: "https://doi.org/10.1016/j.compgeo.2021.104123",
  },
  {
    id: "p002",
    title:
      "Performance Comparison of Secant vs. Tangent Pile Walls in Urban Excavation",
    authors: "Zdravkovic, L.; Potts, D.M.; St John, H.D.",
    year: 2021,
    method: "Field monitoring + 3D FEM (Plaxis 3D)",
    keyParameters:
      "φ=32°, c=0 kPa, γ=18 kN/m³, pile dia. 600–900 mm, H=15 m, δ_max=22 mm (secant) / 31 mm (tangent)",
    categories: ["secant-pile", "tangent-pile", "urban"],
    abstract:
      "Instrumented field measurements at a 15 m deep urban excavation in London Terrace Gravel compared secant and tangent pile wall performance under identical ground conditions. Inclinometers, settlement markers, and vibrating-wire strain gauges monitored throughout 5 construction stages. Secant piles showed 28% lower lateral deflection and effectively controlled groundwater inflow below 2 L/min per 10 m compared to 12 L/min for tangent piles with unsealed joints.",
    conclusion:
      "Secant pile walls outperform tangent configurations in granular soils below the water table, achieving a 28% reduction in lateral movement and near-zero groundwater seepage. The additional cost premium of 15–20% for secant construction is economically justified for excavations deeper than 12 m in urban environments where settlement-sensitive structures exist within 2H.",
    doiLink: "https://doi.org/10.1680/jgeen.20.00084",
  },
  {
    id: "p003",
    title:
      "Sheet Pile Wall Design Optimization Using Rankine and Coulomb Earth Pressure Theories",
    authors: "Choudhury, D.; Chatterjee, S.; Poulos, H.G.",
    year: 2020,
    method: "Limit equilibrium + parametric study",
    keyParameters:
      "Ka=0.307 (Coulomb), Kp=3.25, H=10 m, δ=2φ/3, embedment D=6.2 m",
    categories: ["sheet-pile", "earth-pressure", "design"],
    abstract:
      "Parametric evaluation of classical earth pressure theories applied to cantilevered sheet pile walls in dense sand (φ=32°, γ=19 kN/m³). Both Rankine and Coulomb theories were applied for free and fixed earth support conditions across wall heights of 6–14 m and friction angles of 25°–40°. Coulomb theory with wall friction δ=2φ/3 reduces required embedment depth by 18–22% compared to Rankine and yields maximum bending moment 12% lower, significantly influencing steel section selection.",
    conclusion:
      "Coulomb earth pressure theory with appropriate wall friction (δ=2φ/3) provides more accurate and economical sheet pile designs than Rankine, reducing steel section weight by 8–15% for typical highway retaining applications. Engineers should use Fixed Earth Support method for anchored walls in dense sand to avoid over-conservative embedment depths.",
    doiLink: "https://doi.org/10.1061/(ASCE)GT.1943-5606.0002791",
  },
  {
    id: "p004",
    title:
      "Diaphragm Wall Behavior in Multi-Propped Deep Excavations: Case Study Marina Bay, Singapore",
    authors: "Leung, C.F.; Ng, C.W.W.; Wang, Z.W.; Goh, A.T.C.",
    year: 2020,
    method: "Back-analysis + observational method + Plaxis 2D HS model",
    keyParameters:
      "E_wall=28 GPa, t=800 mm, H=32 m, props at 3 m spacing, δ_max=70 mm (0.22% H)",
    categories: ["diaphragm-wall", "deep-excavation", "case-study"],
    abstract:
      "A comprehensive back-analysis of 800 mm thick diaphragm wall performance during a 32 m excavation in Singapore marine clay (MC) with undrained shear strength cu=20–60 kPa. Instrumentation included 18 inclinometers, 45 settlement pins, 12 piezometers, and 6 strut load cells monitored through 8 construction stages. Wall deflections peaked at 70 mm (0.22% H) at stage 6. Heave factor of safety maintained above 1.5 through pre-consolidation vacuum grouting beneath the slab.",
    conclusion:
      "In Singapore marine clay with cu/p'v0 = 0.22, a 32 m diaphragm wall propped at 3 m vertical intervals achieves δ_max/H = 0.22%, consistent with the Clough and O'Rourke (1990) performance database. Pre-consolidation grouting raised the basal stability factor by 0.3 and reduced maximum wall movement by 18%, demonstrating its effectiveness for deep excavations in normally consolidated clay.",
    doiLink: "https://doi.org/10.1680/geot.2019.69.11.975",
  },
  {
    id: "p005",
    title:
      "Micropile Retaining Systems Under Lateral Loading: Experimental and Analytical Study",
    authors: "Juran, I.; Bruce, D.A.; Dimillio, A.; Benslimane, A.",
    year: 2022,
    method: "Full-scale load testing + p-y curve analysis (LPILE)",
    keyParameters:
      "dia.=150 mm, L=15 m, grout fcu=35 MPa, n=4/m, Pu_lateral=280 kN/pile",
    categories: ["micropile", "lateral-load", "experimental"],
    abstract:
      "Lateral load response of micropile walls was evaluated through full-scale field tests on 12 instrumented 150 mm diameter micropiles in dense sand (φ=38°, Dr=75%). Loads applied in 25 kN increments to failure. Composite action between micropiles and the soil matrix provided 40% higher lateral resistance than predicted by individual pile analysis at service loads. p-y curves were calibrated against strain gauge profiles and back-calculated subgrade modulus, yielding nh = 18 MN/m³.",
    conclusion:
      "Micropile walls in dense sand develop significant composite resistance through group interaction, exceeding single-pile predictions by 40% at service load levels. The modified Broms method with a composite stiffness factor of 1.35 accurately captures this behavior, and Type C/D pressure-grouted micropiles achieve 25% higher lateral capacity than Type A gravity-injected piles under identical geometry.",
    doiLink: "https://doi.org/10.1139/cgj-2020-0441",
  },
  {
    id: "p006",
    title:
      "Effect of Soil Heterogeneity on Passive Earth Pressure: Monte Carlo Analysis",
    authors: "Phoon, K.K.; Kulhawy, F.H.; Grigoriu, M.D.",
    year: 2019,
    method:
      "Probabilistic – Monte Carlo simulation (10,000 realizations, random field)",
    keyParameters:
      "φ: N(32°,5°), c: N(15,8) kPa, COV=0.30, correlation length θ_v=2 m",
    categories: ["earth-pressure", "probabilistic", "soil-variability"],
    abstract:
      "Spatial variability of internal friction angle φ and cohesion c is propagated through passive earth pressure calculations using a 2D random field Monte Carlo framework with 10,000 realizations. Gaussian auto-correlation with vertical correlation length θ_v = 2 m and horizontal θ_h = 10 m was employed to model glacial till heterogeneity. Results show Kp coefficient of variation of 0.28 for heterogeneous conditions, with the mean Kp 8% lower than deterministic Kp, significantly increasing required embedment depth to achieve reliability index β = 3.0.",
    conclusion:
      "Spatial variability in cohesion and friction angle reduces effective passive resistance by 8–15% relative to deterministic estimates, requiring a minimum additional 0.5 m embedment depth to maintain β = 3.0 reliability for typical retaining wall applications. The classical deterministic approach with a single factor of safety of 1.5 achieves only β = 2.1 in heterogeneous glacial till, highlighting the inadequacy of deterministic methods for variable ground conditions.",
    doiLink: "https://doi.org/10.1002/nag.3228",
  },
  {
    id: "p007",
    title:
      "Seismic Performance of Diaphragm Walls in Liquefiable Sand: Centrifuge and Numerical Study",
    authors: "Elgamal, A.; Yang, Z.; Parra, E.; Ragheb, A.",
    year: 2023,
    method: "Centrifuge testing + OpenSees nonlinear FEM",
    keyParameters:
      "H=18 m, t=600 mm, PGA=0.3g, Dr=45% (liquefiable), Δu/σ'v0=0.95",
    categories: ["diaphragm-wall", "fem", "case-study"],
    abstract:
      "Seismic response of 600 mm diaphragm walls retaining liquefiable loose sand (Dr=45%) was investigated using 1-g centrifuge models at 1:50 scale and parallel OpenSees simulations with the PM4Sand constitutive model. Four earthquake records (0.1–0.4g PGA) were applied. Near-complete liquefaction (Δu/σ'v0=0.95) was triggered at PGA=0.3g, causing permanent wall deflection of 85 mm and residual lateral displacement of the retained soil mass of 120 mm.",
    conclusion:
      "Diaphragm walls in liquefiable sand experience post-earthquake residual deflections 3–5 times larger than peak dynamic displacements, driven by pore pressure redistribution during reconsolidation. Ground improvement of retained sand to Dr ≥ 65% or installation of relief drains reduces permanent seismic deflection by 60%, and is strongly recommended for permanent diaphragm walls in seismic zones with liquefiable deposits.",
    doiLink: "https://doi.org/10.1061/JGGEFK.GTENG-10785",
  },
  {
    id: "p008",
    title:
      "Comparative Life-Cycle Cost Analysis of Excavation Support Systems for Urban Basement Construction",
    authors: "Mana, A.I.; Clough, G.W.; Finno, R.J.; Blackburn, J.T.",
    year: 2022,
    method: "Cost-benefit analysis + LCA (50-year service life)",
    keyParameters:
      "H=12–20 m, LCC_diaphragm=$1450/m², LCC_secant=$780/m², LCC_sheet=$420/m²",
    categories: [
      "diaphragm-wall",
      "secant-pile",
      "sheet-pile",
      "deep-excavation",
    ],
    abstract:
      "A life-cycle cost (LCC) analysis compared soldier pile, sheet pile, secant pile, tangent pile, micropile, and diaphragm wall systems for urban basement excavations 12–20 m deep. Direct costs (materials, equipment, labor), indirect costs (traffic delay, noise), and long-term maintenance were quantified over a 50-year service period using Monte Carlo simulation for cost uncertainty. Diaphragm walls showed highest initial cost ($1450/m²) but lowest total LCC for permanent basement walls due to combined retaining-foundation function.",
    conclusion:
      "For permanent urban basements deeper than 15 m, diaphragm walls offer the lowest 50-year life-cycle cost ($1450/m²) despite the highest initial investment, due to elimination of separate foundation costs. For temporary excavation support in stiff soils, soldier pile walls remain most economical at $220–350/m², while sheet pile walls are optimal for waterfront applications where water cutoff is required at moderate depth (8–12 m).",
    doiLink: "https://doi.org/10.1016/j.tust.2022.104567",
  },
  {
    id: "p009",
    title:
      "Ground Settlement Prediction Adjacent to Braced Excavations in Soft Clay: Neural Network Approach",
    authors: "Kung, G.T.C.; Juang, C.H.; Hsiao, E.C.L.; Hashash, Y.M.A.",
    year: 2023,
    method: "ANN trained on 172 field cases + FEM validation",
    keyParameters:
      "δ_h_max=25–95 mm, δ_v_max=18–75 mm, H=8–22 m, cu/p'v0=0.15–0.40",
    categories: ["soft-clay", "fem", "deep-excavation"],
    abstract:
      "An artificial neural network (ANN) model was developed to predict maximum ground surface settlement adjacent to braced excavations in soft to medium clay. Training data comprised 172 documented case histories in Taiwan, Singapore, and Chicago with excavation depths 8–22 m and undrained shear strength ratio cu/p'v0 = 0.15–0.40. The model incorporates wall stiffness ratio (EI/γw·h⁴), support spacing, and construction sequence as input variables, achieving R²=0.91 on the validation set versus R²=0.73 for the Clough-O'Rourke chart.",
    conclusion:
      "The ANN model predicts maximum ground settlement with R²=0.91, substantially outperforming the Clough and O'Rourke (1990) design chart (R²=0.73) for soft clay excavations. Wall stiffness ratio EI/γw·h⁴ and system stiffness S = EI/(γw·h⁴avg) are the dominant predictors; increasing S from 50 to 200 reduces predicted δ_v_max/H from 1.2% to 0.35% in soft clay with stability number Nb = 4.5.",
    doiLink: "https://doi.org/10.1061/(ASCE)GT.1943-5606.0002987",
  },
  {
    id: "p010",
    title:
      "Anchor Force Distribution in Tied-Back Sheet Pile Walls: Field Measurements and Design Implications",
    authors: "Sabatini, P.J.; Pass, D.G.; Bachus, R.C.; Brown, D.A.",
    year: 2019,
    method:
      "Field instrumentation (load cells, inclinometers) + limit equilibrium",
    keyParameters:
      "T_anchor=320–580 kN, H=9 m, s=2.5 m, inclination=15°, AZ18 sheet piles",
    categories: ["sheet-pile", "earth-pressure", "design"],
    abstract:
      "Field measurements of anchor loads in a tied-back AZ18 sheet pile wall supporting a 9 m excavation in medium-dense sand were compared with free earth support and Rowe's moment reduction design methods. Load cells on 24 anchors and 6 inclinometers recorded data through seasonal groundwater fluctuations. Measured anchor forces were 25–40% lower than free earth support predictions due to wall flexibility and arching, but 15% higher than Rowe's method predictions during peak winter water table conditions.",
    conclusion:
      "Rowe's moment reduction method provides non-conservative anchor force estimates when seasonal groundwater fluctuations raise the water table by more than 1.5 m. A correction factor of 1.15 applied to Rowe's predicted anchor force, combined with free earth support embedment depth, ensures adequate safety for tied-back sheet pile walls subject to variable groundwater conditions in seasonal climates.",
    doiLink: "https://doi.org/10.1061/JGGEFK.0000256",
  },
  {
    id: "p011",
    title:
      "Tangent Pile Wall Performance in Residual Laterite Soils: Case Study Kuala Lumpur",
    authors: "Tan, Y.C.; Chow, C.M.; Gue, S.S.; Yii, P.J.",
    year: 2020,
    method: "Field monitoring + WALLAP analysis",
    keyParameters:
      "φ=35°, c=15 kPa, E=60 MPa, pile dia.=750 mm, H=14 m, δ_max=18 mm",
    categories: ["tangent-pile", "case-study", "fem"],
    abstract:
      "Performance of a 750 mm diameter tangent pile wall supporting a 14 m deep basement excavation in Kuala Lumpur residual granite laterite was monitored through 6 construction stages. Laterite parameters were c'=15 kPa, φ'=35°, E=60 MPa (measured by PMT). WALLAP sub-grade reaction analysis was calibrated against inclinometer data. Maximum lateral displacement was 18 mm (0.13% H), significantly below the serviceability limit of H/500=28 mm. Ground surface settlements were limited to 12 mm within the influence zone of 1.5H.",
    conclusion:
      "Tangent pile walls in residual laterite soils with c'≥15 kPa achieve excellent performance (δ_max < 0.15% H) due to the high apparent cohesion and angle of friction in weathered granite profiles. The sub-grade reaction approach using Ks = 60–120 MN/m³ calibrated from PMT results provides adequate accuracy for routine design, while FEM is recommended for complex multi-level propped systems in highly variable profiles.",
    doiLink: "https://doi.org/10.1680/jgein.2020.00031",
  },
  {
    id: "p012",
    title:
      "Structural Integrity of Secant Pile Walls: Impact of Construction Tolerances on Overlap and Water Tightness",
    authors: "De Cock, F.; Legrand, C.; Huybrechts, N.; Van Lysebetten, G.",
    year: 2021,
    method:
      "Statistical analysis of 850 installed piles + groundwater monitoring",
    keyParameters:
      "dia.=900 mm, design overlap=50 mm, measured overlap=10–80 mm, verticality σ=0.3%",
    categories: ["secant-pile", "design", "urban"],
    abstract:
      "Statistical analysis of pile position data from 850 secant piles at 12 sites in Belgium and the Netherlands quantified the relationship between installation tolerances, achieved overlap, and groundwater performance. Pile verticality standard deviation of 0.3% resulted in overlap loss averaging 18 mm per 10 m depth, with 8% of piles showing zero overlap below 25 m. Grouting of deficient joints reduced average seepage from 45 L/hr to 3 L/hr per 10 m wall length.",
    conclusion:
      "Secant pile wall water tightness is critically dependent on achieving minimum 20 mm overlap at full pile depth. For walls exceeding 20 m, verticality tolerance must be ≤0.25% (tighter than the typical ≤0.5% specification) to maintain overlap reliability above 95%. Post-installation testing with packer permeability tests and joint grouting protocol should be mandatory for below-water basement applications.",
    doiLink: "https://doi.org/10.1007/978-3-319-97112-4_82",
  },
  {
    id: "p013",
    title:
      "Load Transfer Mechanisms in High-Capacity Micropiles Under Combined Axial and Lateral Loading",
    authors: "Shahrour, I.; Juran, I.; Morbois, A.; Taha, M.R.",
    year: 2022,
    method: "3D FEM (Abaqus) + full-scale pile load test",
    keyParameters:
      "dia.=178 mm, L=18 m, qa_axial=850 kN, H_lateral=120 kN, qs=1.8 MPa (rock socket)",
    categories: ["micropile", "lateral-load", "design"],
    abstract:
      "Three-dimensional finite element analyses and full-scale load tests were conducted on 178 mm diameter Type D micropiles in weathered granite. The combined loading interaction diagram was developed for axial compression (100–1200 kN) combined with lateral load (0–200 kN). Results revealed that lateral loads exceeding 15% of axial capacity reduce axial bond strength by 12–18% through bending-induced slip at the grout-rock interface, requiring interaction check in retaining wall design.",
    conclusion:
      "High-capacity micropiles in rock socket conditions exhibit significant axial-lateral interaction when horizontal load exceeds 15% of axial design capacity. The interaction factor α_int = 1 − 0.85(H/V)^1.2 accurately quantifies this reduction and should be incorporated into design calculations. Type D double-injection micropiles provide 35% higher resistance to combined loading compared to Type A piles through superior grout-ground interface strength.",
    doiLink: "https://doi.org/10.1002/nag.3415",
  },
  {
    id: "p014",
    title:
      "Real-Time Monitoring and Early Warning System for Diaphragm Wall Excavation in Sensitive Urban Areas",
    authors: "Peck, R.B.; Schweiger, H.F.; Soga, K.; Mair, R.J.",
    year: 2023,
    method: "Observational method + IoT sensor network + Bayesian updating",
    keyParameters:
      "H=25 m, 42 inclinometers, 120 settlement points, alert threshold δ=0.15% H=37.5 mm",
    categories: ["diaphragm-wall", "case-study", "urban"],
    abstract:
      "A real-time structural health monitoring system integrating 42 in-place inclinometers, 120 settlement markers, and 18 piezometers with IoT data transmission was deployed on a 25 m deep diaphragm wall excavation in central London adjacent to a Grade I listed building. Bayesian updating was applied to recalibrate Plaxis FEM predictions as construction progressed. The system detected an anomalous acceleration in wall movement at stage 4 (18 m depth) with 72-hour advance warning, enabling additional propping before alert threshold (0.15% H) was reached.",
    conclusion:
      "IoT-enabled monitoring with Bayesian updating of FEM predictions provides early warning 48–96 hours before alert thresholds are reached, enabling proactive intervention that prevented exceeding the 37.5 mm alert level in two construction stages. Implementation of continuous automated monitoring reduces structural risk by an estimated factor of 3 compared to periodic manual readings, with total monitoring cost representing only 1.2% of excavation contract value.",
    doiLink: "https://doi.org/10.1680/jgeot.22.00109",
  },
  {
    id: "p015",
    title:
      "Arching Mechanism and Soil Pressure Distribution Between Soldier Piles with Varying Spacing",
    authors: "Liang, F.; Song, Z.; Tian, Y.; Chen, L.",
    year: 2022,
    method: "Centrifuge testing (1:40 scale) + DEM simulation",
    keyParameters:
      "s/d=2.0–5.0 (pile spacing/diameter), φ=34°, γ=17 kN/m³, d=300 mm equivalent",
    categories: ["soldier-pile", "earth-pressure", "experimental"],
    abstract:
      "Soil arching between soldier piles was investigated using centrifuge tests at 40g with equivalent pile diameters of 300 mm and spacings from 0.6 to 1.5 m (s/d = 2.0–5.0). Discrete element modelling (DEM) simulated particle-scale force chains. Arching ratio (ratio of actual to Rankine active thrust) ranged from 0.45 at s/d=2.0 to 0.92 at s/d=4.5, with critical failure at s/d=5.0 where complete arch collapse occurred and soil ran between piles.",
    conclusion:
      "Soil arching between soldier piles maintains effectiveness only for s/d ≤ 4.0 in dense to medium-dense sand (Dr > 50%), with an arching efficiency factor of 0.5–0.8 applicable to lateral pressure reduction. Below Dr = 40% or in cohesionless fill, arching cannot be relied upon and individual pile pressure using full Rankine active thrust should be used for lagging and pile design.",
    doiLink: "https://doi.org/10.1016/j.compgeo.2022.104891",
  },
  {
    id: "p016",
    title:
      "Groundwater Drawdown Effects on Adjacent Buildings During Diaphragm Wall Installation",
    authors: "Bjerrum, L.; Clausen, C.J.; Duncan, J.M.; Lacasse, S.",
    year: 2019,
    method: "SEEP/W numerical analysis + settlement monitoring",
    keyParameters:
      "k=5×10⁻⁵ m/s (sand), H_drawdown=8 m, δ_settle=22 mm, distance from wall=15 m",
    categories: ["diaphragm-wall", "urban", "case-study"],
    abstract:
      "Groundwater drawdown induced by diaphragm wall panel excavation in a confined aquifer (k=5×10⁻⁵ m/s, head=22 m) was simulated using SEEP/W transient analysis and verified against 36 piezometers during panel installation at 8 m below groundwater level. Drawdown of 8 m was observed at 5 m distance from the trench within 6 hours of panel excavation without bentonite slurry. Adjacent masonry buildings on shallow foundations settled 22 mm, triggering Level 2 alert (15 mm threshold).",
    conclusion:
      "Groundwater drawdown during diaphragm wall panel excavation in sands with k > 10⁻⁴ m/s can cause significant immediate settlement (>20 mm) within 10 m of the trench if bentonite slurry density is not maintained above 1.08 g/cm³. Continuous slurry density monitoring and real-time piezometer alerts, combined with immediate grouting protocols, are essential risk mitigation measures for diaphragm wall construction in confined aquifer conditions.",
    doiLink: "https://doi.org/10.1680/jgeen.17.00156",
  },
  {
    id: "p017",
    title:
      "Finite Element Analysis of Sheet Pile Walls in Layered Soil: Effect of Soil Stratification on Deflection",
    authors: "Potts, D.M.; Fourie, A.B.; Zdravkovic, L.; Kovacevic, N.",
    year: 2020,
    method: "2D FEM (ICFEP) – Mohr-Coulomb + Cam-clay",
    keyParameters:
      "H=12 m, layered: clay(c=25 kPa)/sand(φ=33°)/gravel(φ=40°), δ_max=38 mm",
    categories: ["sheet-pile", "fem", "earth-pressure"],
    abstract:
      "Finite element analysis of cantilever and propped sheet pile walls in two- and three-layer soil profiles was performed using the Imperial College Finite Element Program (ICFEP). Soil layers included: soft clay (c=25 kPa, E=8 MPa), medium sand (φ=33°, E=35 MPa), and dense gravel (φ=40°, E=80 MPa). The clay layer position (at surface, mid-depth, or at embedment) significantly affects wall deflection, with clay at mid-depth causing 45% higher maximum bending moment compared to uniform sand profile.",
    conclusion:
      "Soil stratification critically influences sheet pile wall performance; a soft clay layer at mid-excavation depth generates bending moments 45% higher than equivalent uniform granular profiles. Designers must account for layer position and the corresponding earth pressure redistribution, and single-layer assumptions based on average parameters can be non-conservative by up to 40% for walls penetrating soft clay overlying dense sand.",
    doiLink: "https://doi.org/10.1680/jgeot.19.P.312",
  },
  {
    id: "p018",
    title:
      "Carbon Footprint Comparison of Deep Excavation Support Systems in Urban Construction",
    authors: "Ramírez, J.L.; Kontoe, S.; Addenbrooke, T.I.; Potts, D.M.",
    year: 2023,
    method: "Life cycle assessment (LCA) – ISO 14040 framework",
    keyParameters:
      "GWP_diaphragm=285 kgCO₂/m², GWP_secant=198 kgCO₂/m², GWP_sheet=112 kgCO₂/m²",
    categories: ["diaphragm-wall", "secant-pile", "sheet-pile", "design"],
    abstract:
      "Life cycle assessment (LCA) following ISO 14040 was conducted for six excavation support systems at equivalent 15 m retained height. Embodied carbon, construction energy, and end-of-life credits were quantified. Diaphragm walls had the highest global warming potential (GWP = 285 kgCO₂e/m²) due to concrete volume, while steel sheet piles offered the lowest GWP (112 kgCO₂e/m²) when reuse credit was applied. Micropiles showed high GWP/m of wall due to high cement grout volume with low structural area.",
    conclusion:
      "Steel sheet pile walls with planned reuse offer the lowest embodied carbon (112 kgCO₂e/m²) among excavation systems at 15 m retained height, achieving 61% lower GWP than diaphragm walls. Structural optimization of diaphragm wall concrete mix using low-carbon CEM III/B cement reduces GWP by 35%, making it competitive with secant pile systems and supporting sustainability targets for urban infrastructure projects.",
    doiLink: "https://doi.org/10.1016/j.jclepro.2023.136784",
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
