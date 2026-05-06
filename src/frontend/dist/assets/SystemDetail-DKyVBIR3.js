import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, C as ChevronDown, a as cn, u as useParams, L as Link, S as Skeleton } from "./index-DUkTmDMn.js";
import { C as ChevronUp } from "./chevron-up-CUcdNnFf.js";
import { C as ChevronsUpDown } from "./chevrons-up-down-BeqxA0r1.js";
import { B as Badge } from "./badge-Bv2Vw58l.js";
import { S as SYSTEMS } from "./data-BZPzXv08.js";
import { A as ArrowRight } from "./arrow-right-CWVNqzlw.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function SoldierPileDiagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 700 520",
      className: "w-full h-auto",
      role: "img",
      "aria-label": "Soldier Pile Wall cross-section diagram",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "700", height: "520", fill: "#0f172a", rx: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "28",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "14",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "Soldier Pile Wall — Cross-Section View"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "50",
            y1: "100",
            x2: "650",
            y2: "100",
            stroke: "#92400e",
            strokeWidth: "2.5"
          }
        ),
        [
          60,
          80,
          100,
          120,
          140,
          160,
          180,
          200,
          220,
          240,
          260,
          280,
          300,
          320,
          340,
          360,
          380,
          400,
          420,
          440,
          460,
          480,
          500,
          520,
          540,
          560,
          580,
          600,
          620,
          640
        ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: 100,
            x2: x - 12,
            y2: 88,
            stroke: "#92400e",
            strokeWidth: "1.5"
          },
          x
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "90",
            textAnchor: "middle",
            fill: "#a16207",
            fontSize: "10",
            fontFamily: "monospace",
            children: "GROUND SURFACE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "380",
            y: "100",
            width: "270",
            height: "280",
            fill: "#78350f",
            fillOpacity: "0.35"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "380",
            y: "380",
            width: "270",
            height: "120",
            fill: "#713f12",
            fillOpacity: "0.4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "50",
            y: "100",
            width: "330",
            height: "280",
            fill: "#1e293b",
            fillOpacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "50",
            y1: "380",
            x2: "710",
            y2: "380",
            stroke: "#fbbf24",
            strokeWidth: "1.5",
            strokeDasharray: "8,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "60", y: "373", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "EXCAVATION LEVEL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "144", y: "80", width: "12", height: "440", fill: "#22d3ee", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "130", y: "80", width: "40", height: "8", fill: "#22d3ee", rx: "1" }),
        [130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490].map(
          (y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: 130,
              y,
              width: 40,
              height: 6,
              fill: "#0e7490",
              rx: "1"
            },
            y
          )
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "130", y: "512", width: "40", height: "8", fill: "#22d3ee", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "304", y: "80", width: "12", height: "440", fill: "#22d3ee", rx: "1" }),
        [130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490].map(
          (y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: 290,
              y,
              width: 40,
              height: 6,
              fill: "#0e7490",
              rx: "1"
            },
            y
          )
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "290", y: "512", width: "40", height: "8", fill: "#22d3ee", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "464", y: "80", width: "12", height: "440", fill: "#22d3ee", rx: "1" }),
        [130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490].map(
          (y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: 450,
              y,
              width: 40,
              height: 6,
              fill: "#0e7490",
              rx: "1"
            },
            y
          )
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "450", y: "512", width: "40", height: "8", fill: "#22d3ee", rx: "1" }),
        [
          105,
          120,
          135,
          150,
          165,
          180,
          195,
          210,
          225,
          240,
          255,
          270,
          285,
          300,
          315,
          330,
          345,
          360,
          370
        ].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: 162,
            y,
            width: 130,
            height: 13,
            fill: i % 2 === 0 ? "#d97706" : "#b45309",
            opacity: "0.85",
            rx: "1"
          },
          y
        )),
        [
          105,
          120,
          135,
          150,
          165,
          180,
          195,
          210,
          225,
          240,
          255,
          270,
          285,
          300,
          315,
          330,
          345,
          360,
          370
        ].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: 322,
            y,
            width: 130,
            height: 13,
            fill: i % 2 === 0 ? "#a16207" : "#92400e",
            opacity: "0.6",
            rx: "1"
          },
          y
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "128",
            y: "200",
            width: "344",
            height: "18",
            fill: "#7c3aed",
            opacity: "0.9",
            rx: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "128",
            y: "310",
            width: "344",
            height: "18",
            fill: "#7c3aed",
            opacity: "0.9",
            rx: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "620",
            y1: "100",
            x2: "620",
            y2: "380",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "620,100 615,115 625,115", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "620,380 615,365 625,365", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "635", y: "245", fill: "#f8fafc", fontSize: "10", fontFamily: "monospace", children: "H" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "635", y: "258", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Excavation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "635", y: "270", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Depth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "620",
            y1: "382",
            x2: "620",
            y2: "518",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "620,382 615,397 625,397", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "620,518 615,503 625,503", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "635", y: "455", fill: "#f8fafc", fontSize: "10", fontFamily: "monospace", children: "D" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "635", y: "468", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Embedment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "635", y: "480", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Depth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "150",
            y1: "70",
            x2: "310",
            y2: "70",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "150,70 165,65 165,75", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "310,70 295,65 295,75", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "225",
            y: "65",
            textAnchor: "middle",
            fill: "#f8fafc",
            fontSize: "10",
            fontFamily: "monospace",
            children: "s (Pile Spacing)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "140",
            y1: "150",
            x2: "80",
            y2: "150",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "140", cy: "150", r: "2", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "75",
            y: "147",
            textAnchor: "end",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "H-Pile"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "75",
            y: "159",
            textAnchor: "end",
            fill: "#fbbf24",
            fontSize: "9",
            fontFamily: "monospace",
            children: "(W-Section)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "225",
            y1: "160",
            x2: "225",
            y2: "135",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "225", cy: "160", r: "2", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "225",
            y: "130",
            textAnchor: "middle",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Timber Lagging"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "300",
            y1: "209",
            x2: "250",
            y2: "195",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "209", r: "2", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "248",
            y: "192",
            textAnchor: "end",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Waler Beam"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "500",
            y1: "230",
            x2: "550",
            y2: "215",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "500", cy: "230", r: "2", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "555", y: "212", fill: "#fbbf24", fontSize: "10", fontFamily: "monospace", children: "Retained Soil" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "80",
            y: "250",
            textAnchor: "middle",
            fill: "#38bdf8",
            fontSize: "11",
            fontFamily: "monospace",
            fontWeight: "bold",
            children: "Excavated"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "80",
            y: "263",
            textAnchor: "middle",
            fill: "#38bdf8",
            fontSize: "11",
            fontFamily: "monospace",
            fontWeight: "bold",
            children: "Side"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "52",
            y: "410",
            width: "280",
            height: "100",
            fill: "#1e293b",
            rx: "4",
            stroke: "#334155",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "192",
            y: "428",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "10",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "LEGEND"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "62", y: "435", width: "14", height: "10", fill: "#22d3ee", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "444", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "H-Pile (Steel W-Section)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "62", y: "452", width: "14", height: "10", fill: "#d97706", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "461", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Timber Lagging" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "62", y: "469", width: "14", height: "10", fill: "#7c3aed", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "478", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Waler Beam" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "62",
            y: "486",
            width: "14",
            height: "10",
            fill: "#78350f",
            fillOpacity: "0.6",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "495", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Retained Soil" })
      ]
    }
  );
}
function SecantPileDiagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 700 540",
      className: "w-full h-auto",
      role: "img",
      "aria-label": "Secant Pile Wall plan and section diagram",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "700", height: "540", fill: "#0f172a", rx: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "28",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "14",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "Secant Pile Wall — Plan View & Cross-Section"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "175",
            y: "55",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "11",
            fontFamily: "monospace",
            children: "PLAN VIEW"
          }
        ),
        [80, 180, 280, 380, 480, 580, 680].map((cx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx,
            cy: 130,
            r: 52,
            fill: "#334155",
            stroke: "#475569",
            strokeWidth: "2"
          },
          cx
        )),
        [130, 230, 330, 430, 530, 630].map((cx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx,
              cy: 130,
              r: 52,
              fill: "#1e3a5f",
              stroke: "#3b82f6",
              strokeWidth: "2.5"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx,
              cy: 130,
              r: 28,
              fill: "none",
              stroke: "#ef4444",
              strokeWidth: "1.5",
              strokeDasharray: "4,3"
            }
          ),
          [0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = angle * Math.PI / 180;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: cx + 24 * Math.cos(rad),
                cy: 130 + 24 * Math.sin(rad),
                r: 3,
                fill: "#ef4444"
              },
              angle
            );
          })
        ] }, cx)),
        [130, 230, 330, 430, 530, 630].map((cx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx,
            cy: 130,
            rx: 3,
            ry: 14,
            fill: "#22d3ee",
            opacity: "0.5"
          },
          cx
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "82",
            y1: "165",
            x2: "82",
            y2: "185",
            stroke: "#22d3ee",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "128",
            y1: "165",
            x2: "128",
            y2: "185",
            stroke: "#22d3ee",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "82",
            y1: "175",
            x2: "128",
            y2: "175",
            stroke: "#22d3ee",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "82,175 96,170 96,180", fill: "#22d3ee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "128,175 114,170 114,180", fill: "#22d3ee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "105",
            y: "200",
            textAnchor: "middle",
            fill: "#22d3ee",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Secant Zone"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "80", y1: "78", x2: "80", y2: "182", stroke: "#fbbf24", strokeWidth: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "80,78 75,93 85,93", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "80,182 75,167 85,167", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "62",
            y: "133",
            textAnchor: "middle",
            fill: "#fbbf24",
            fontSize: "9",
            fontFamily: "monospace",
            children: "d"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "80",
            y1: "130",
            x2: "30",
            y2: "110",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "28",
            y: "107",
            textAnchor: "end",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Primary Pile"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "28",
            y: "118",
            textAnchor: "end",
            fill: "#a3e635",
            fontSize: "9",
            fontFamily: "monospace",
            children: "(unreinforced)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "230",
            y1: "130",
            x2: "270",
            y2: "68",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "272", y: "65", fill: "#fbbf24", fontSize: "10", fontFamily: "monospace", children: "Secondary Pile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "272", y: "76", fill: "#a3e635", fontSize: "9", fontFamily: "monospace", children: "(reinforced)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "330",
            y1: "105",
            x2: "400",
            y2: "72",
            stroke: "#ef4444",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "402", y: "69", fill: "#ef4444", fontSize: "10", fontFamily: "monospace", children: "Reinforcement Cage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "240",
            x2: "648",
            y2: "240",
            stroke: "#334155",
            strokeWidth: "1",
            strokeDasharray: "6,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "260",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "11",
            fontFamily: "monospace",
            children: "CROSS-SECTION — WATER BARRIER EFFECT"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "290",
            x2: "648",
            y2: "290",
            stroke: "#92400e",
            strokeWidth: "2.5"
          }
        ),
        [
          60,
          80,
          100,
          120,
          140,
          160,
          180,
          200,
          220,
          240,
          260,
          280,
          300,
          320,
          340,
          360,
          380,
          400,
          420,
          440,
          460,
          480,
          500,
          520,
          540,
          560,
          580,
          600,
          620,
          640
        ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: 290,
            x2: x - 12,
            y2: 278,
            stroke: "#92400e",
            strokeWidth: "1.5"
          },
          x
        )),
        [100, 190, 280, 370, 460, 550].map((cx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx,
              cy: 400,
              r: 42,
              fill: i % 2 === 0 ? "#1e3a5f" : "#334155",
              stroke: i % 2 === 0 ? "#3b82f6" : "#475569",
              strokeWidth: "2"
            }
          ),
          i % 2 === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx,
                cy: 400,
                r: 22,
                fill: "none",
                stroke: "#ef4444",
                strokeWidth: "1.5",
                strokeDasharray: "3,2"
              }
            ),
            [0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = angle * Math.PI / 180;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: cx + 19 * Math.cos(rad),
                  cy: 400 + 19 * Math.sin(rad),
                  r: 2.5,
                  fill: "#ef4444"
                },
                angle
              );
            })
          ] })
        ] }, cx)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "330",
            x2: "648",
            y2: "330",
            stroke: "#38bdf8",
            strokeWidth: "1.5",
            strokeDasharray: "5,3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "56", y: "325", fill: "#38bdf8", fontSize: "9", fontFamily: "monospace", children: "▼ Water Table" }),
        [145, 235, 325, 415, 505].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y: 340, textAnchor: "middle", fill: "#38bdf8", fontSize: "12", children: "🚫" }) }, x)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "450",
            textAnchor: "middle",
            fill: "#38bdf8",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Water barrier at secant zones — prevents seepage"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "463",
            textAnchor: "middle",
            fill: "#64748b",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Secondary (reinforced) piles cut into primary piles creating continuous barrier"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "52",
            y: "475",
            width: "340",
            height: "55",
            fill: "#1e293b",
            rx: "4",
            stroke: "#334155",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "222",
            y: "492",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "10",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "LEGEND"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "68",
            cy: "505",
            r: "8",
            fill: "#334155",
            stroke: "#475569",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "509", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Primary Pile (unreinforced)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "68",
            cy: "521",
            r: "8",
            fill: "#1e3a5f",
            stroke: "#3b82f6",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "525", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Secondary Pile (reinforced)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "230",
            y1: "500",
            x2: "244",
            y2: "500",
            stroke: "#ef4444",
            strokeWidth: "2",
            strokeDasharray: "3,2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "248", y: "504", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Reinforcement Cage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "230",
            y1: "516",
            x2: "244",
            y2: "516",
            stroke: "#22d3ee",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "248", y: "520", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Secant (overlap) Zone" })
      ]
    }
  );
}
function SheetPileDiagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 700 520",
      className: "w-full h-auto",
      role: "img",
      "aria-label": "Sheet Pile Wall cross-section diagram",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "700", height: "520", fill: "#0f172a", rx: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "28",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "14",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "Sheet Pile Wall — Cross-Section View"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "100",
            x2: "648",
            y2: "100",
            stroke: "#92400e",
            strokeWidth: "2.5"
          }
        ),
        [
          60,
          80,
          100,
          120,
          140,
          160,
          180,
          200,
          220,
          240,
          260,
          280,
          300,
          320,
          340,
          360,
          380,
          400,
          420,
          440,
          460,
          480,
          500,
          520,
          540,
          560,
          580,
          600,
          620,
          640
        ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: 100,
            x2: x - 12,
            y2: 88,
            stroke: "#92400e",
            strokeWidth: "1.5"
          },
          x
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "90",
            textAnchor: "middle",
            fill: "#a16207",
            fontSize: "10",
            fontFamily: "monospace",
            children: "GROUND SURFACE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "370",
            y: "100",
            width: "278",
            height: "300",
            fill: "#78350f",
            fillOpacity: "0.3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "52",
            y: "100",
            width: "318",
            height: "300",
            fill: "#1e293b",
            fillOpacity: "0.3"
          }
        ),
        [160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560].map((x, i) => {
          const flip = i % 2 === 0;
          const topY = 80;
          const botY = 450;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1: x,
                y1: topY,
                x2: x,
                y2: botY,
                stroke: "#22d3ee",
                strokeWidth: "2.5"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1: flip ? x - 18 : x,
                y1: topY + 8,
                x2: flip ? x : x + 18,
                y2: topY + 8,
                stroke: "#0e7490",
                strokeWidth: "3"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "line",
              {
                x1: flip ? x - 18 : x,
                y1: topY + 28,
                x2: flip ? x : x + 18,
                y2: topY + 28,
                stroke: "#0e7490",
                strokeWidth: "3"
              }
            )
          ] }, x);
        }),
        [180, 220, 260, 300, 340, 380, 420, 460, 500, 540].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: x,
              cy: 100,
              r: 4,
              fill: "#f59e0b",
              stroke: "#fbbf24",
              strokeWidth: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: x,
              cy: 200,
              r: 4,
              fill: "#f59e0b",
              stroke: "#fbbf24",
              strokeWidth: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: x,
              cy: 300,
              r: 4,
              fill: "#f59e0b",
              stroke: "#fbbf24",
              strokeWidth: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: x,
              cy: 380,
              r: 4,
              fill: "#f59e0b",
              stroke: "#fbbf24",
              strokeWidth: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: x,
              cy: 450,
              r: 4,
              fill: "#f59e0b",
              stroke: "#fbbf24",
              strokeWidth: "1"
            }
          )
        ] }, x)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "52",
            y: "190",
            width: "596",
            height: "20",
            fill: "#7c3aed",
            opacity: "0.85",
            rx: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "52",
            y: "295",
            width: "596",
            height: "20",
            fill: "#7c3aed",
            opacity: "0.85",
            rx: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "200",
            x2: "20",
            y2: "200",
            stroke: "#ef4444",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "20",
            y1: "190",
            x2: "20",
            y2: "225",
            stroke: "#ef4444",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "52,200 38,194 38,206", fill: "#ef4444" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "305",
            x2: "20",
            y2: "305",
            stroke: "#ef4444",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "20",
            y1: "295",
            x2: "20",
            y2: "320",
            stroke: "#ef4444",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "52,305 38,299 38,311", fill: "#ef4444" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "400",
            x2: "648",
            y2: "400",
            stroke: "#fbbf24",
            strokeWidth: "1.5",
            strokeDasharray: "8,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "60", y: "393", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "EXCAVATION LEVEL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "640",
            y1: "100",
            x2: "640",
            y2: "400",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "640,100 635,115 645,115", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "640,400 635,385 645,385", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "653", y: "253", fill: "#f8fafc", fontSize: "10", fontFamily: "monospace", children: "H" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "653", y: "265", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Exc." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "640",
            y1: "402",
            x2: "640",
            y2: "450",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "640,402 635,417 645,417", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "640,450 635,435 645,435", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "653", y: "430", fill: "#f8fafc", fontSize: "10", fontFamily: "monospace", children: "D" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "653", y: "442", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Emb." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "350",
            y1: "140",
            x2: "350",
            y2: "115",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "350", cy: "140", r: "2", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "110",
            textAnchor: "middle",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Sheet Pile Section (Z-Profile)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "280",
            y1: "165",
            x2: "220",
            y2: "148",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "280", cy: "165", r: "2", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "218",
            y: "145",
            textAnchor: "end",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Interlock Connection"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "350",
            y1: "200",
            x2: "350",
            y2: "178",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "350", cy: "200", r: "2", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "173",
            textAnchor: "middle",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Waler Beam"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "36",
            y1: "200",
            x2: "36",
            y2: "172",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "36", cy: "200", r: "2", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "36",
            y: "168",
            textAnchor: "middle",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Tie Rod / Anchor"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "150",
            y: "260",
            textAnchor: "middle",
            fill: "#38bdf8",
            fontSize: "11",
            fontFamily: "monospace",
            fontWeight: "bold",
            children: "Excavated"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "150",
            y: "273",
            textAnchor: "middle",
            fill: "#38bdf8",
            fontSize: "11",
            fontFamily: "monospace",
            fontWeight: "bold",
            children: "Side"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "520",
            y: "260",
            textAnchor: "middle",
            fill: "#a16207",
            fontSize: "11",
            fontFamily: "monospace",
            fontWeight: "bold",
            children: "Retained"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "520",
            y: "273",
            textAnchor: "middle",
            fill: "#a16207",
            fontSize: "11",
            fontFamily: "monospace",
            fontWeight: "bold",
            children: "Earth"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "52",
            y: "462",
            width: "350",
            height: "48",
            fill: "#1e293b",
            rx: "4",
            stroke: "#334155",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "227",
            y: "478",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "10",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "LEGEND"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "62", y: "484", width: "14", height: "8", fill: "#22d3ee", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "491", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Sheet Pile (Z-Profile)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "182", y: "484", width: "14", height: "8", fill: "#7c3aed", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "202", y: "491", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Waler Beam" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "300",
            y1: "488",
            x2: "318",
            y2: "488",
            stroke: "#ef4444",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "324", y: "491", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Tie Rod/Anchor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "68", cy: "502", r: "4", fill: "#f59e0b" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "78", y: "506", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Interlock Detail" })
      ]
    }
  );
}
function TangentPileDiagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 700 520",
      className: "w-full h-auto",
      role: "img",
      "aria-label": "Tangent Pile Wall plan and cross-section diagram",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "700", height: "520", fill: "#0f172a", rx: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "28",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "14",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "Tangent Pile Wall — Plan View & Cross-Section"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "55",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "11",
            fontFamily: "monospace",
            children: "PLAN VIEW — Piles Touch but Do Not Overlap"
          }
        ),
        [80, 150, 220, 290, 360, 430, 500, 570, 640].map((cx, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx,
              cy: 130,
              r: 34,
              fill: "#1e3a5f",
              stroke: "#3b82f6",
              strokeWidth: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx,
              cy: 130,
              r: 20,
              fill: "none",
              stroke: "#ef4444",
              strokeWidth: "1.5",
              strokeDasharray: "3,2"
            }
          ),
          [0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = angle * Math.PI / 180;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: cx + 17 * Math.cos(rad),
                cy: 130 + 17 * Math.sin(rad),
                r: 2.5,
                fill: "#ef4444"
              },
              angle
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "text",
            {
              x: cx,
              y: 134,
              textAnchor: "middle",
              fill: "#93c5fd",
              fontSize: "9",
              fontFamily: "monospace",
              children: i + 1
            }
          )
        ] }, cx)),
        [115, 185, 255, 325, 395, 465, 535, 605].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: 130, r: 3, fill: "#22d3ee" }, x)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "115",
            y: "178",
            textAnchor: "middle",
            fill: "#a16207",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Soil Arching Zone"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M 80 164 Q 115 195 150 164",
            fill: "#78350f",
            fillOpacity: "0.4",
            stroke: "#a16207",
            strokeWidth: "1",
            strokeDasharray: "3,2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M 150 164 Q 185 195 220 164",
            fill: "#78350f",
            fillOpacity: "0.4",
            stroke: "#a16207",
            strokeWidth: "1",
            strokeDasharray: "3,2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "80", y1: "96", x2: "80", y2: "164", stroke: "#fbbf24", strokeWidth: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "80,96 75,111 85,111", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "80,164 75,149 85,149", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "62",
            y: "133",
            textAnchor: "middle",
            fill: "#fbbf24",
            fontSize: "9",
            fontFamily: "monospace",
            children: "d"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "80",
            y1: "175",
            x2: "150",
            y2: "175",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "80,175 95,170 95,180", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "150,175 135,170 135,180", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "115",
            y: "192",
            textAnchor: "middle",
            fill: "#f8fafc",
            fontSize: "9",
            fontFamily: "monospace",
            children: "s ≈ d (No Overlap)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "115",
            y1: "130",
            x2: "115",
            y2: "105",
            stroke: "#22d3ee",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "115",
            y: "100",
            textAnchor: "middle",
            fill: "#22d3ee",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Tangent Point"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "222",
            x2: "648",
            y2: "222",
            stroke: "#334155",
            strokeWidth: "1",
            strokeDasharray: "6,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "240",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "11",
            fontFamily: "monospace",
            children: "CROSS-SECTION — Excavation Support"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "270",
            x2: "648",
            y2: "270",
            stroke: "#92400e",
            strokeWidth: "2.5"
          }
        ),
        [
          60,
          80,
          100,
          120,
          140,
          160,
          180,
          200,
          220,
          240,
          260,
          280,
          300,
          320,
          340,
          360,
          380,
          400,
          420,
          440,
          460,
          480,
          500,
          520,
          540,
          560,
          580,
          600,
          620,
          640
        ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: 270,
            x2: x - 12,
            y2: 258,
            stroke: "#92400e",
            strokeWidth: "1.5"
          },
          x
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "400",
            y: "270",
            width: "248",
            height: "240",
            fill: "#78350f",
            fillOpacity: "0.3"
          }
        ),
        [100, 175, 250, 325, 400, 475, 550, 625].map((cx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx,
              cy: 390,
              r: 32,
              fill: "#1e3a5f",
              stroke: "#3b82f6",
              strokeWidth: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx,
              cy: 390,
              r: 18,
              fill: "none",
              stroke: "#ef4444",
              strokeWidth: "1.5",
              strokeDasharray: "3,2"
            }
          )
        ] }, cx)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "360",
            x2: "648",
            y2: "360",
            stroke: "#fbbf24",
            strokeWidth: "1.5",
            strokeDasharray: "8,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "56", y: "353", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "EXCAVATION LEVEL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "638",
            y1: "270",
            x2: "638",
            y2: "360",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "638,270 633,285 643,285", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "638,360 633,345 643,345", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "650", y: "318", fill: "#f8fafc", fontSize: "10", fontFamily: "monospace", children: "H" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "638",
            y1: "362",
            x2: "638",
            y2: "422",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "638,362 633,377 643,377", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "638,422 633,407 643,407", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "650", y: "395", fill: "#f8fafc", fontSize: "10", fontFamily: "monospace", children: "D" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "100",
            y1: "390",
            x2: "58",
            y2: "370",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "56",
            y: "368",
            textAnchor: "end",
            fill: "#fbbf24",
            fontSize: "10",
            fontFamily: "monospace",
            children: "Tangent Pile"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "56",
            y: "379",
            textAnchor: "end",
            fill: "#a3e635",
            fontSize: "9",
            fontFamily: "monospace",
            children: "(reinforced)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "137",
            y1: "375",
            x2: "137",
            y2: "350",
            stroke: "#a16207",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "137",
            y: "345",
            textAnchor: "middle",
            fill: "#a16207",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Soil Arch"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "52",
            y: "465",
            width: "350",
            height: "46",
            fill: "#1e293b",
            rx: "4",
            stroke: "#334155",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "227",
            y: "482",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "10",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "LEGEND"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "68",
            cy: "498",
            r: "8",
            fill: "#1e3a5f",
            stroke: "#3b82f6",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "502", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Tangent Pile (reinforced bored pile)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "222",
            cy: "498",
            r: "8",
            fill: "none",
            stroke: "#ef4444",
            strokeWidth: "1",
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "236", y: "502", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Reinforcement Cage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "68", cy: "504", r: "3", fill: "#22d3ee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "82", y: "514", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Tangent Contact Point (no overlap)" })
      ]
    }
  );
}
function MicropileDiagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 700 540",
      className: "w-full h-auto",
      role: "img",
      "aria-label": "Micropile cross-section and plan diagram",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "700", height: "540", fill: "#0f172a", rx: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "28",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "14",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "Micropile Wall — Cross-Section & Array View"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "185",
            y: "55",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "11",
            fontFamily: "monospace",
            children: "CROSS-SECTION"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "52",
            y1: "90",
            x2: "370",
            y2: "90",
            stroke: "#92400e",
            strokeWidth: "2.5"
          }
        ),
        [
          60,
          80,
          100,
          120,
          140,
          160,
          180,
          200,
          220,
          240,
          260,
          280,
          300,
          320,
          340,
          360
        ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: 90,
            x2: x - 12,
            y2: 78,
            stroke: "#92400e",
            strokeWidth: "1.5"
          },
          x
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "80",
            y: "68",
            width: "200",
            height: "22",
            fill: "#475569",
            stroke: "#64748b",
            strokeWidth: "1",
            rx: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "180",
            y: "82",
            textAnchor: "middle",
            fill: "#cbd5e1",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Cap Beam / Structure"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "168",
            y: "90",
            width: "14",
            height: "320",
            fill: "#64748b",
            stroke: "#94a3b8",
            strokeWidth: "1",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "173", y: "90", width: "4", height: "320", fill: "#ef4444", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "169",
            y: "90",
            width: "12",
            height: "320",
            fill: "#d4a26a",
            fillOpacity: "0.5",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: "175",
            cy: "430",
            rx: "22",
            ry: "28",
            fill: "#d4a26a",
            fillOpacity: "0.7",
            stroke: "#92400e",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "175",
            y: "435",
            textAnchor: "middle",
            fill: "#92400e",
            fontSize: "8",
            fontFamily: "monospace",
            children: "Bulb"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "200",
            y1: "90",
            x2: "280",
            y2: "400",
            stroke: "#64748b",
            strokeWidth: "12",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "200",
            y1: "90",
            x2: "280",
            y2: "400",
            stroke: "#ef4444",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "200",
            y1: "90",
            x2: "280",
            y2: "400",
            stroke: "#d4a26a",
            strokeWidth: "8",
            strokeOpacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: "280",
            cy: "408",
            rx: "20",
            ry: "25",
            transform: "rotate(15, 280, 408)",
            fill: "#d4a26a",
            fillOpacity: "0.7",
            stroke: "#92400e",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "152",
            y1: "90",
            x2: "72",
            y2: "400",
            stroke: "#64748b",
            strokeWidth: "12",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "152",
            y1: "90",
            x2: "72",
            y2: "400",
            stroke: "#ef4444",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "152",
            y1: "90",
            x2: "72",
            y2: "400",
            stroke: "#d4a26a",
            strokeWidth: "8",
            strokeOpacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: "72",
            cy: "408",
            rx: "20",
            ry: "25",
            transform: "rotate(-15, 72, 408)",
            fill: "#d4a26a",
            fillOpacity: "0.7",
            stroke: "#92400e",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M 175 130 A 40 40 0 0 1 210 112",
            fill: "none",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "220", y: "118", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "α" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "225", y: "130", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "Inclination" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "225", y: "141", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "Angle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "168",
            y1: "200",
            x2: "182",
            y2: "200",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "168,200 181,197 181,203", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "182,200 169,197 169,203", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "185",
            y1: "200",
            x2: "230",
            y2: "190",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "232", y: "188", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "d = 75–300 mm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "173",
            y1: "240",
            x2: "130",
            y2: "225",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "128",
            y: "222",
            textAnchor: "end",
            fill: "#fbbf24",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Steel Reinforcement"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "176",
            y1: "280",
            x2: "230",
            y2: "268",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "232", y: "265", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "Cement Grout" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "175",
            y1: "435",
            x2: "320",
            y2: "445",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "322", y: "442", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "Grout Bulb (Bond Zone)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "168",
            y1: "340",
            x2: "120",
            y2: "330",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "118",
            y: "327",
            textAnchor: "end",
            fill: "#fbbf24",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Drill Hole"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "380",
            y1: "45",
            x2: "380",
            y2: "520",
            stroke: "#334155",
            strokeWidth: "1",
            strokeDasharray: "6,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "540",
            y: "55",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "11",
            fontFamily: "monospace",
            children: "PLAN — MICROPILE ARRAY"
          }
        ),
        [420, 480, 540, 600, 660].map(
          (cx) => [100, 155, 210, 265, 320, 375, 430].map((cy) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx,
                cy,
                r: 10,
                fill: "#1e293b",
                stroke: "#22d3ee",
                strokeWidth: "1.5"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: 4, fill: "#ef4444" })
          ] }, `${cx}-${cy}`))
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "420",
            y1: "465",
            x2: "480",
            y2: "465",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "420,465 435,460 435,470", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "480,465 465,460 465,470", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "450",
            y: "480",
            textAnchor: "middle",
            fill: "#f8fafc",
            fontSize: "9",
            fontFamily: "monospace",
            children: "s (spacing)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "660",
            y1: "100",
            x2: "660",
            y2: "155",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "660,100 655,115 665,115", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "660,155 655,140 665,140", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "672", y: "130", fill: "#f8fafc", fontSize: "9", fontFamily: "monospace", children: "s" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "540",
            y: "498",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Typical array: 3–5 rows, 1–2 m spacing"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "52",
            y: "480",
            width: "310",
            height: "50",
            fill: "#1e293b",
            rx: "4",
            stroke: "#334155",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "207",
            y: "497",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "10",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "LEGEND"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "62", y: "506", width: "12", height: "10", fill: "#64748b", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "80", y: "514", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Steel Casing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "148", y: "506", width: "12", height: "10", fill: "#ef4444", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "166", y: "514", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Rebar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "222",
            y: "506",
            width: "12",
            height: "10",
            fill: "#d4a26a",
            fillOpacity: "0.8",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "240", y: "514", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Cement Grout" })
      ]
    }
  );
}
function DiaphragmWallDiagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 700 540",
      className: "w-full h-auto",
      role: "img",
      "aria-label": "Diaphragm Wall construction and cross-section diagram",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "700", height: "540", fill: "#0f172a", rx: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "350",
            y: "28",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "14",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "Diaphragm Wall — Construction Sequence & Cross-Section"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "180",
            y: "52",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "11",
            fontFamily: "monospace",
            children: "CONSTRUCTION STAGES"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "76", y: "72", fill: "#64748b", fontSize: "9", fontFamily: "monospace", children: "① Guide Walls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "62",
            y: "78",
            width: "18",
            height: "100",
            fill: "#475569",
            stroke: "#64748b",
            strokeWidth: "1",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "152",
            y: "78",
            width: "18",
            height: "100",
            fill: "#475569",
            stroke: "#64748b",
            strokeWidth: "1",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "116",
            y: "72",
            textAnchor: "middle",
            fill: "#64748b",
            fontSize: "8",
            fontFamily: "monospace",
            children: "Guide Wall"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "80",
            y1: "83",
            x2: "152",
            y2: "83",
            stroke: "#64748b",
            strokeWidth: "1.5",
            strokeDasharray: "3,3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "76", y: "198", fill: "#64748b", fontSize: "9", fontFamily: "monospace", children: "② Slurry Trench" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "62", y: "204", width: "18", height: "100", fill: "#475569", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "152", y: "204", width: "18", height: "100", fill: "#475569", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "80",
            y: "204",
            width: "72",
            height: "100",
            fill: "#1e40af",
            fillOpacity: "0.5",
            stroke: "#3b82f6",
            strokeWidth: "1"
          }
        ),
        [220, 240, 260, 280, 290].map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: `M 80 ${y} Q 96 ${y - 5} 116 ${y} Q 136 ${y + 5} 152 ${y}`,
            fill: "none",
            stroke: "#60a5fa",
            strokeWidth: "0.8"
          },
          y
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "116",
            y: "265",
            textAnchor: "middle",
            fill: "#60a5fa",
            fontSize: "8",
            fontFamily: "monospace",
            children: "Bentonite"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "116",
            y: "275",
            textAnchor: "middle",
            fill: "#60a5fa",
            fontSize: "8",
            fontFamily: "monospace",
            children: "Slurry"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "76", y: "324", fill: "#64748b", fontSize: "9", fontFamily: "monospace", children: "③ Rebar Cage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "62", y: "330", width: "18", height: "100", fill: "#475569", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "152", y: "330", width: "18", height: "100", fill: "#475569", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "80",
            y: "330",
            width: "72",
            height: "100",
            fill: "#1e40af",
            fillOpacity: "0.3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "90",
            y: "332",
            width: "52",
            height: "96",
            fill: "none",
            stroke: "#ef4444",
            strokeWidth: "1.5"
          }
        ),
        [342, 362, 382, 402, 418].map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "90",
            y1: y,
            x2: "142",
            y2: y,
            stroke: "#ef4444",
            strokeWidth: "1"
          },
          y
        )),
        [98, 108, 118, 128, 138].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: "332",
            x2: x,
            y2: "428",
            stroke: "#ef4444",
            strokeWidth: "1"
          },
          x
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "116",
            y: "445",
            textAnchor: "middle",
            fill: "#ef4444",
            fontSize: "8",
            fontFamily: "monospace",
            children: "Rebar Cage"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "76", y: "460", fill: "#64748b", fontSize: "9", fontFamily: "monospace", children: "④ Concrete Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "62", y: "466", width: "18", height: "60", fill: "#475569", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "152", y: "466", width: "18", height: "60", fill: "#475569", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "80",
            y: "466",
            width: "72",
            height: "60",
            fill: "#6b7280",
            stroke: "#94a3b8",
            strokeWidth: "1"
          }
        ),
        [90, 116, 142].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: "466",
            x2: x,
            y2: "526",
            stroke: "#ef4444",
            strokeWidth: "1.5",
            strokeOpacity: "0.7"
          },
          x
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "116",
            y: "504",
            textAnchor: "middle",
            fill: "#cbd5e1",
            fontSize: "8",
            fontFamily: "monospace",
            children: "RC Panel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "248",
            y1: "45",
            x2: "248",
            y2: "530",
            stroke: "#334155",
            strokeWidth: "1",
            strokeDasharray: "6,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "490",
            y: "52",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "11",
            fontFamily: "monospace",
            children: "CROSS-SECTION"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "260",
            y1: "90",
            x2: "690",
            y2: "90",
            stroke: "#92400e",
            strokeWidth: "2.5"
          }
        ),
        [
          268,
          288,
          308,
          328,
          348,
          368,
          388,
          408,
          428,
          448,
          468,
          488,
          508,
          528,
          548,
          568,
          588,
          608,
          628,
          648,
          668,
          688
        ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: 90,
            x2: x - 12,
            y2: 78,
            stroke: "#92400e",
            strokeWidth: "1.5"
          },
          x
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "330",
            y: "68",
            width: "20",
            height: "35",
            fill: "#475569",
            stroke: "#64748b",
            strokeWidth: "1",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "470",
            y: "68",
            width: "20",
            height: "35",
            fill: "#475569",
            stroke: "#64748b",
            strokeWidth: "1",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "410",
            y: "63",
            textAnchor: "middle",
            fill: "#94a3b8",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Guide Wall"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "350",
            y: "68",
            width: "120",
            height: "440",
            fill: "#374151",
            stroke: "#6b7280",
            strokeWidth: "2"
          }
        ),
        [360, 375, 390, 420, 435, 450].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: x,
            y1: "80",
            x2: x,
            y2: "508",
            stroke: "#ef4444",
            strokeWidth: "1.5",
            strokeOpacity: "0.6"
          },
          x
        )),
        [110, 145, 180, 215, 250, 285, 320, 355, 390, 425, 460].map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "355",
            y1: y,
            x2: "465",
            y2: y,
            stroke: "#ef4444",
            strokeWidth: "1",
            strokeOpacity: "0.5"
          },
          y
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "350",
            y1: "68",
            x2: "350",
            y2: "508",
            stroke: "#22d3ee",
            strokeWidth: "2",
            strokeDasharray: "4,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "470",
            y1: "68",
            x2: "470",
            y2: "508",
            stroke: "#22d3ee",
            strokeWidth: "2",
            strokeDasharray: "4,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: "350",
            cy: "290",
            rx: "6",
            ry: "12",
            fill: "#22d3ee",
            fillOpacity: "0.7"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: "470",
            cy: "290",
            rx: "6",
            ry: "12",
            fill: "#22d3ee",
            fillOpacity: "0.7"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "490",
            y: "90",
            width: "200",
            height: "350",
            fill: "#78350f",
            fillOpacity: "0.3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "260",
            y: "90",
            width: "90",
            height: "350",
            fill: "#1e293b",
            fillOpacity: "0.3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "260",
            y1: "360",
            x2: "648",
            y2: "360",
            stroke: "#fbbf24",
            strokeWidth: "1.5",
            strokeDasharray: "8,4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "264", y: "353", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "EXCAVATION LEVEL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "648",
            y1: "90",
            x2: "648",
            y2: "360",
            stroke: "#f8fafc",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "648,90 643,105 653,105", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "648,360 643,345 653,345", fill: "#f8fafc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "660", y: "228", fill: "#f8fafc", fontSize: "10", fontFamily: "monospace", children: "H" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "660", y: "240", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Exc." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "350",
            y1: "495",
            x2: "470",
            y2: "495",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "350,495 365,490 365,500", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "470,495 455,490 455,500", fill: "#fbbf24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "410",
            y: "510",
            textAnchor: "middle",
            fill: "#fbbf24",
            fontSize: "9",
            fontFamily: "monospace",
            children: "t = 600–1200 mm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "410",
            y1: "250",
            x2: "495",
            y2: "230",
            stroke: "#fbbf24",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "497", y: "227", fill: "#fbbf24", fontSize: "9", fontFamily: "monospace", children: "RC Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "350",
            y1: "290",
            x2: "310",
            y2: "280",
            stroke: "#22d3ee",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "308",
            y: "277",
            textAnchor: "end",
            fill: "#22d3ee",
            fontSize: "9",
            fontFamily: "monospace",
            children: "Waterstop"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "308",
            y: "288",
            textAnchor: "end",
            fill: "#22d3ee",
            fontSize: "8",
            fontFamily: "monospace",
            children: "(Panel Joint)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "260",
            y: "468",
            width: "340",
            height: "55",
            fill: "#1e293b",
            rx: "4",
            stroke: "#334155",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "430",
            y: "484",
            textAnchor: "middle",
            fill: "#e2e8f0",
            fontSize: "10",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "LEGEND"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "270",
            y: "490",
            width: "14",
            height: "10",
            fill: "#374151",
            stroke: "#6b7280",
            strokeWidth: "1",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "290", y: "499", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "RC Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "362",
            y1: "495",
            x2: "376",
            y2: "495",
            stroke: "#ef4444",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "380", y: "499", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Reinforcement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "460",
            y1: "495",
            x2: "474",
            y2: "495",
            stroke: "#22d3ee",
            strokeWidth: "2",
            strokeDasharray: "3,2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "478", y: "499", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Panel Joint / Waterstop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "270", y: "507", width: "14", height: "8", fill: "#475569", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "290", y: "514", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Guide Wall" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "362",
            y: "507",
            width: "14",
            height: "8",
            fill: "#1e40af",
            fillOpacity: "0.6",
            rx: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "380", y: "514", fill: "#94a3b8", fontSize: "9", fontFamily: "monospace", children: "Bentonite Slurry Trench" })
      ]
    }
  );
}
const DIAGRAM_MAP = {
  "soldier-pile": SoldierPileDiagram,
  "secant-pile": SecantPileDiagram,
  "sheet-pile": SheetPileDiagram,
  "tangent-pile": TangentPileDiagram,
  micropile: MicropileDiagram,
  "diaphragm-wall": DiaphragmWallDiagram
};
function SystemDiagram({ systemId }) {
  const DiagramComponent = DIAGRAM_MAP[systemId];
  if (!DiagramComponent) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-slate-700 bg-slate-800/50 p-4 mb-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-primary", children: "Technical Diagram" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "— Cross-section / Plan View" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiagramComponent, {})
  ] });
}
function TechTable({
  columns,
  data,
  keyField,
  className,
  rowClassName,
  onRowClick,
  caption,
  loading,
  emptyMessage = "No data available"
}) {
  const [sortKey, setSortKey] = reactExports.useState(null);
  const [sortDir, setSortDir] = reactExports.useState(null);
  function handleSort(key) {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortKey(null);
      setSortDir(null);
    }
  }
  const sorted = reactExports.useMemo(() => {
    if (!sortKey || !sortDir) return data;
    return [...data].sort((a, b) => {
      const ra = a;
      const rb = b;
      const av = ra[sortKey];
      const bv = rb[sortKey];
      if (av === void 0 || av === null) return 1;
      if (bv === void 0 || bv === null) return -1;
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      const as = String(av).toLowerCase();
      const bs = String(bv).toLowerCase();
      return sortDir === "asc" ? as.localeCompare(bs) : bs.localeCompare(as);
    });
  }, [data, sortKey, sortDir]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "w-full overflow-x-auto rounded-md border border-border/60",
        className
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm border-collapse", children: [
        caption && /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "text-xs text-muted-foreground text-left px-3 py-1.5 caption-bottom", children: caption }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-primary/15 border-b border-primary/25", children: columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: cn(
              "px-3 py-2.5 text-left font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap select-none",
              col.align === "right" && "text-right",
              col.align === "center" && "text-center",
              col.sortable && "cursor-pointer hover:text-primary/80 transition-colors",
              col.width
            ),
            style: col.width ? { width: col.width } : void 0,
            onClick: col.sortable ? () => handleSort(String(col.key)) : void 0,
            onKeyDown: col.sortable ? (e) => {
              if (e.key === "Enter") handleSort(String(col.key));
            } : void 0,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              col.header,
              col.sortable && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/50", children: sortKey === String(col.key) && sortDir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : sortKey === String(col.key) && sortDir === "desc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsUpDown, { className: "w-3 h-3" }) })
            ] })
          },
          String(col.key)
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: loading ? Array.from({ length: 4 }, (_, i) => `sk-tt-${i}`).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border/40", children: columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted/60 rounded animate-pulse" }) }, String(col.key))) }, key)) : sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            colSpan: columns.length,
            className: "px-3 py-8 text-center text-muted-foreground font-mono text-xs",
            children: emptyMessage
          }
        ) }) : sorted.map((row, i) => {
          const rowRec = row;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "tr",
            {
              "data-ocid": `table.row.${i + 1}`,
              onClick: onRowClick ? () => onRowClick(row) : void 0,
              onKeyDown: onRowClick ? (e) => {
                if (e.key === "Enter") onRowClick(row);
              } : void 0,
              className: cn(
                "border-b border-border/30 transition-colors duration-100",
                i % 2 === 0 ? "bg-card" : "bg-background",
                onRowClick && "cursor-pointer hover:bg-primary/5",
                !onRowClick && "hover:bg-muted/30",
                rowClassName == null ? void 0 : rowClassName(row, i)
              ),
              children: columns.map((col) => {
                const rawVal = rowRec[col.key];
                const display = col.render ? col.render(row) : String(rawVal ?? "");
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: cn(
                      "px-3 py-2.5",
                      col.mono && "font-mono text-xs",
                      col.align === "right" && "text-right",
                      col.align === "center" && "text-center"
                    ),
                    children: display
                  },
                  String(col.key)
                );
              })
            },
            String(rowRec[keyField])
          );
        }) })
      ] })
    }
  );
}
const COMMON_FEM_SOFTWARE = [
  {
    tool: "Plaxis 2D/3D",
    type: "FEM (geotechnical)",
    application: "Full soil-structure interaction, staged excavation"
  },
  {
    tool: "FLAC 2D",
    type: "FD explicit",
    application: "Large-strain analysis, creep in soft soils"
  },
  {
    tool: "ABAQUS",
    type: "General FEM",
    application: "Structural detailing, reinforcement interaction"
  },
  {
    tool: "DeepEX",
    type: "Spring model",
    application: "Fast parametric design, strut/anchor optimization"
  },
  {
    tool: "GeoSlope SIGMA/W",
    type: "FEM (stress)",
    application: "Coupled stress-seepage, consolidation"
  }
];
const soldierPile = {
  basic: {
    description: "Soldier pile walls use steel H-piles (W200×100 to W360×196 sections) or I-beams installed at 1.5–3.0 m centres by driving or drilling. Timber (100–200 mm), precast concrete, or steel plate lagging spans between piles to retain the soil. Cost-effective for temporary excavation support in stiff soils above the water table. Suitable for wall heights of 4–12 m; up to 15 m with tie-back or brace support.",
    useCases: [
      "Temporary excavation support during basement or foundation construction",
      "Cut-and-cover trenching in urban road corridors",
      "Landslide stabilisation in stiff clay or dense sand fills",
      "Bridge abutment protection and temporary cofferdams in dry conditions",
      "Retained cuts alongside existing structures where vibration must be minimised"
    ],
    dimensions: [
      {
        parameter: "Pile spacing",
        value: "1.5–3.0",
        unit: "m",
        notes: "Centre-to-centre; smaller spacing in softer soils"
      },
      {
        parameter: "Pile section depth",
        value: "200–360",
        unit: "mm",
        notes: "W200 to W360 typical; heavier for deeper walls"
      },
      {
        parameter: "Wall height (H)",
        value: "4–12",
        unit: "m",
        notes: "Up to 15 m with multi-level propping"
      },
      {
        parameter: "Embedment depth (D)",
        value: "3–5",
        unit: "m",
        notes: "Typically D ≥ 0.5H in dense granular soils"
      },
      {
        parameter: "Lagging thickness",
        value: "100–200",
        unit: "mm",
        notes: "Timber; 150 mm precast panels for permanent"
      },
      {
        parameter: "Tie-back capacity",
        value: "300–600",
        unit: "kN",
        notes: "Post-tensioned 15.2 mm strand tendons"
      }
    ]
  },
  components: {
    materials: [
      "Steel H-piles: Grade 50 (Fy = 345 MPa), W200–W360 series",
      "Timber lagging: Douglas fir or pine, air-dried, 100–200 mm thick",
      "Precast concrete lagging: C25/30, 150 mm with mesh reinforcement",
      "Tie-back tendons: 15.2 mm diameter, Grade 270 low-relaxation strand",
      "Waling beams: 2×C310 channel or W310×60 section",
      "Drainage aggregate: clean ¾ inch crushed stone behind lagging"
    ],
    elements: [
      {
        name: "Steel H-Pile (King Pile)",
        description: "Primary load-carrying vertical element. Resists active earth pressure via bending and embedment below excavation. Typical section modulus Sx = 500–2000 cm³. Piles are driven to refusal or drilled and grouted."
      },
      {
        name: "Horizontal Lagging",
        description: "Spans between H-piles to transfer soil arching pressure. Installed progressively as excavation proceeds. For permanent walls, precast concrete panels replace timber for durability."
      },
      {
        name: "Waling Beam",
        description: "Horizontal stiffener connecting pile heads or anchor connection points. Distributes concentrated anchor forces into the pile flange. Designed as a continuous beam on pile supports."
      },
      {
        name: "Tie-back Anchor (Ground Anchor)",
        description: "Post-tensioned anchors drilled through the retained soil mass at 15–30° inclination. Bond zone in competent stratum beyond failure plane. Stressing load typically 1.25× design load per FHWA."
      },
      {
        name: "Raker / Strut",
        description: "Inclined steel rakers (W200 sections) or horizontal cross-lot struts used when tie-backs are impractical. Rakers bear against a reinforced concrete kicker pad at excavation base."
      }
    ]
  },
  soil: {
    applicability: "Best suited to stiff-to-hard clays (cu > 50 kPa), medium-dense to dense sands (Dr > 50%), and gravels. Not suitable for very soft clays (cu < 25 kPa), running sands below the water table, or sites requiring positive groundwater cut-off. Soil arching between piles is critical; minimum required arching ratio α ≥ 0.4.",
    parameters: [
      {
        parameter: "Friction angle (φ)",
        range: "28–38",
        unit: "°",
        effect: "Controls Ka and Kp; higher φ reduces active pressure by ~10–20%"
      },
      {
        parameter: "Cohesion (c)",
        range: "0–50",
        unit: "kPa",
        effect: "Reduces net active thrust; critical for tension crack depth"
      },
      {
        parameter: "Unit weight (γ)",
        range: "17–21",
        unit: "kN/m³",
        effect: "Directly scales earth pressure; dense soils increase lateral force"
      },
      {
        parameter: "Elastic modulus (E)",
        range: "15–80",
        unit: "MPa",
        effect: "Governs pile deflection and soil spring stiffness in p-y analysis"
      },
      {
        parameter: "Poisson's ratio (ν)",
        range: "0.25–0.35",
        unit: "—",
        effect: "Affects K0 estimation; K0 = ν/(1−ν) for elastic soil"
      },
      {
        parameter: "SPT N-value",
        range: "15–60+",
        unit: "blows/300 mm",
        effect: "Used to estimate E and relative density for sands"
      },
      {
        parameter: "Arching ratio (α)",
        range: "0.5–0.8",
        unit: "—",
        effect: "Reduces active pressure on lagging vs. full active; depends on s/D ratio"
      }
    ]
  },
  earthPressure: {
    rankine: [
      {
        label: "Active earth pressure coefficient (Rankine)",
        formula: "Ka = tan²(45° − φ/2)\n\nφ = 30°  →  Ka = tan²(30°) = 0.333\nφ = 35°  →  Ka = tan²(27.5°) = 0.271\nφ = 38°  →  Ka = tan²(26°) = 0.238",
        note: "Valid for vertical wall, horizontal backfill, no wall friction (conservative)"
      },
      {
        label: "At-rest earth pressure coefficient",
        formula: "K₀ = 1 − sin φ\n\nφ = 30°  →  K₀ = 0.500\nφ = 35°  →  K₀ = 0.426\nφ = 38°  →  K₀ = 0.384",
        note: "Applied to permanent walls where lateral strain is restrained"
      },
      {
        label: "Passive earth pressure coefficient (Rankine)",
        formula: "Kp = tan²(45° + φ/2)\n\nφ = 30°  →  Kp = tan²(60°) = 3.000\nφ = 35°  →  Kp = tan²(62.5°) = 3.690\nφ = 38°  →  Kp = tan²(64°) = 4.204",
        note: "Passive resistance mobilised in embedded pile below excavation"
      }
    ],
    coulomb: [
      {
        label: "Total active thrust per pile (Coulomb / FHWA method)",
        formula: "Pa = ½ · Ka · γ · H² · s + q · Ka · H · s\n\nWhere:\n  s  = pile spacing (m)\n  q  = surface surcharge (kPa)\n  H  = retained height (m)\n  γ  = soil unit weight (kN/m³)",
        note: "Arching reduces effective pressure by factor α = 0.5–0.8 on lagging"
      },
      {
        label: "Net passive resistance of embedded pile",
        formula: "Pp = Kp · b · γ · D² / 2\n\nWhere:\n  b  = pile flange width + lagging width tributary (m)\n  D  = embedment depth below excavation (m)",
        note: "Factor of safety ≥ 1.5 applied to passive resistance"
      }
    ],
    notes: "For temporary support, Rankine active pressures with φ = peak are acceptable. For permanent structures, reduce to φ = critical state or apply GEO reduction factors (EC7: φd = arctan(tan φk / γφ)). Surcharge loads (construction equipment q = 10–20 kPa) must be included. Hydrostatic pressure behind lagging is typically negligible if drainage aggregate is present; verify with seepage analysis if groundwater is close to formation level."
  },
  fem: {
    approach: "FEM analysis of soldier pile walls models the pile as a beam element embedded in a continuum soil domain. The Mohr-Coulomb (MC) constitutive model is standard for preliminary design. For settlement-sensitive projects adjacent to structures, the Hardening Soil (HS) or Hardening Soil Small Strain (HSS) model provides more accurate pre-failure stiffness. Staged construction is essential: activate tie-back prestress loads in sequence with each excavation step.",
    meshParams: [
      "Element type: 6-node or 15-node triangular (Plaxis); quadrilateral with hourglass control (FLAC)",
      "Pile modelled as plate element (EI, EA per pile) or 3D beam in 2D plane-strain equivalent",
      "Lagging: distributed interface element with friction angle δ = ⅔φ",
      "Mesh refinement: element size ≤ pile diameter/3 near pile-soil interface",
      "Model domain: 5H wide, 2H below toe; fixed horizontal boundary at sides",
      "Construction sequence: minimum 4 stages (excavate to tie-back level, install anchor, repeat)",
      "Interface element: Rint = 0.5–0.7 for steel-soil contact"
    ],
    software: COMMON_FEM_SOFTWARE
  },
  parameterEffects: {
    sensitivity: [
      {
        parameter: "Friction angle (φ)",
        change: "+20% (36°→43°)",
        deflection: "−28%",
        moment: "−31%",
        shear: "−25%"
      },
      {
        parameter: "Friction angle (φ)",
        change: "−20% (36°→29°)",
        deflection: "+34%",
        moment: "+38%",
        shear: "+29%"
      },
      {
        parameter: "Unit weight (γ)",
        change: "+20% (18→22)",
        deflection: "+18%",
        moment: "+20%",
        shear: "+18%"
      },
      {
        parameter: "Elastic modulus (E)",
        change: "+20% (30→36 MPa)",
        deflection: "−15%",
        moment: "−8%",
        shear: "−6%"
      },
      {
        parameter: "Cohesion (c)",
        change: "+20% (10→12 kPa)",
        deflection: "−9%",
        moment: "−11%",
        shear: "−8%"
      },
      {
        parameter: "Pile spacing (s)",
        change: "+20% (2.0→2.4 m)",
        deflection: "+22%",
        moment: "+25%",
        shear: "+20%"
      },
      {
        parameter: "Surcharge (q)",
        change: "+20% (10→12 kPa)",
        deflection: "+7%",
        moment: "+8%",
        shear: "+7%"
      }
    ],
    observations: [
      "Friction angle φ is the most influential parameter — a 20% reduction increases deflection by ~34% and bending moment by ~38%",
      "Pile spacing has nearly linear effect on forces; exceeding 3 m spacing risks lagging failure before pile failure",
      "Elastic modulus primarily affects deflection (serviceability) but has limited effect on internal forces",
      "Cohesion provides beneficial tension crack suppression; its reduction in saturated clays is the primary failure risk",
      "Surcharge loads have proportional but secondary effect — always include construction traffic q = 10 kPa minimum"
    ]
  },
  design: {
    guidelines: "Pile section selection follows Sx(req) = Mmax / Fy. Start with trial embedment D = 0.5H and iterate until moment equilibrium at pile toe is satisfied. For cantilever walls H ≤ 5 m; provide tie-backs for deeper excavations. Maximum pile spacing limited to 3 m to ensure soil arching in the lagging span. Deflection limit: δmax ≤ H/100 for general excavations; ≤ H/200 adjacent to existing structures.",
    safetyFactors: [
      {
        checkType: "Passive resistance (pile toe)",
        minFS: "1.5",
        basis: "FHWA AASHTO LRFD"
      },
      {
        checkType: "Global slope stability",
        minFS: "1.5",
        basis: "Bishop circular — FHWA"
      },
      {
        checkType: "Basal heave (clay)",
        minFS: "1.3",
        basis: "Terzaghi Nb method"
      },
      {
        checkType: "Tie-back anchor (pullout)",
        minFS: "2.0",
        basis: "FHWA Geotechnical (NHI-99-025)"
      },
      {
        checkType: "Structural bending (pile)",
        minFS: "1.67",
        basis: "ASD; φ = 0.90 in LRFD"
      },
      {
        checkType: "Lagging bending",
        minFS: "2.0",
        basis: "FHWA (timber, conservative)"
      }
    ],
    steps: [
      "Determine retained height H and design surcharge q (typically 10–20 kPa)",
      "Compute Ka = tan²(45 − φ/2) and Kp = tan²(45 + φ/2) from representative φ",
      "Trial embedment D = 0.5H; compute net pressure diagram",
      "Check moment equilibrium about pile toe: ΣM = 0; adjust D until satisfied; add 20–30% for factor of safety",
      "Compute maximum moment Mmax in pile shaft; select pile section Sx ≥ Mmax/Fy",
      "Design lagging for arched load: M = α · Ka · γ · s²/8 (α = arching factor)",
      "Size and detail tie-backs or bracing; check anchorage capacity and grout bond length",
      "Verify global stability using Kranz method (for anchored walls) or slip circle",
      "Check basal heave if in cohesive soil: Nb = cu·Nc/γH; must exceed 1.3",
      "Prepare monitoring plan: inclinometer, load cells on anchors, settlement array"
    ]
  },
  caseStudies: {
    cases: [
      {
        project: "Boston Central Artery (I-93)",
        location: "Boston, USA",
        dimensions: "W360×196, H=10 m",
        soilType: "Boston Blue Clay, dense glacial till",
        outcome: "Maximum deflection 38 mm; wall performed within 1.5× design prediction"
      },
      {
        project: "Seattle Light Rail Station",
        location: "Seattle, USA",
        dimensions: "W310×129, H=8 m, 3-level tie-back",
        soilType: "Glacial outwash sand, Dr=70%",
        outcome: "Deflection 22 mm; zero ground settlement beyond 5 m from wall"
      },
      {
        project: "Toronto PATH Excavation",
        location: "Toronto, Canada",
        dimensions: "W250×89, H=6 m",
        soilType: "Dense glacial till, c=30 kPa",
        outcome: "Fast installation (3 weeks); slight seepage through lagging controlled with drainage"
      },
      {
        project: "Mumbai Metro Cut",
        location: "Mumbai, India",
        dimensions: "W300×107, H=9 m, 2-level brace",
        soilType: "Stiff basaltic residual clay, cu=75 kPa",
        outcome: "Maximum heave 14 mm; adjacent traffic maintained throughout"
      }
    ]
  }
};
const secantPile = {
  basic: {
    description: "Secant pile walls use alternating primary (unreinforced, softer C12/15 or CLSM) and secondary (reinforced C30/37) bored piles that overlap by 25–75 mm, forming a continuous interlocked wall. The interlock provides structural continuity and effective groundwater control. Used for permanent urban basement retaining walls, underground transit stations, and marine structures. Depths up to 40 m, wall thickness 600–1200 mm.",
    useCases: [
      "Deep basement perimeter walls in urban areas adjacent to existing structures",
      "Underground metro station boxes and cut-and-cover tunnels",
      "Harbour and waterfront retaining walls in tidal and marine conditions",
      "Cofferdam construction in saturated alluvial deposits",
      "Contaminated site perimeter cut-off walls"
    ],
    dimensions: [
      {
        parameter: "Primary pile diameter",
        value: "600–900",
        unit: "mm",
        notes: "Unreinforced or lightly reinforced"
      },
      {
        parameter: "Secondary pile diameter",
        value: "750–1050",
        unit: "mm",
        notes: "Reinforced with full cage; larger than primary"
      },
      {
        parameter: "Pile overlap",
        value: "20–75",
        unit: "mm",
        notes: "Each side; minimum to maintain waterproofing"
      },
      {
        parameter: "Wall depth",
        value: "10–40",
        unit: "m",
        notes: "Up to 60 m with oscillator rigs"
      },
      {
        parameter: "Embedment below base",
        value: "4–10",
        unit: "m",
        notes: "Depends on soil type and propping scheme"
      },
      {
        parameter: "Capping beam",
        value: "500×500",
        unit: "mm",
        notes: "RC beam connecting all secondary pile heads"
      }
    ]
  },
  components: {
    materials: [
      "Primary pile concrete: C12/15 CLSM or 'soft' mix for easy secondary pile cutting",
      "Secondary pile concrete: C30/37, self-compacting (SCC) with slump 200+ mm",
      "Reinforcement cage: 8–16 bars T20–T32, Grade 500 (fy = 500 MPa)",
      "Links/stirrups: T10@150 mm or T12@200 mm",
      "Temporary oscillator steel casing: 750–1200 mm OD",
      "Capping beam: RC C30/37 with T16–T20 continuous bars"
    ],
    elements: [
      {
        name: "Primary (Female) Pile",
        description: "Unreinforced concrete pile installed first. Softer C12/15 mix allows secondary pile coring to cut through the overlap zone cleanly. Centre-to-centre spacing equals sum of average radii."
      },
      {
        name: "Secondary (King) Pile",
        description: "Reinforced concrete pile drilled through the hardened overlap of adjacent primaries. Houses the full structural reinforcement cage. Transfers all bending moment, shear, and axial force."
      },
      {
        name: "Overlap Zone",
        description: "The interlocking region (20–75 mm each side) provides the primary water cut-off path. Verticality tolerances ≤ 1:100 are critical to maintain the minimum 20 mm overlap at pile toe."
      },
      {
        name: "Capping Beam",
        description: "Continuous RC beam cast over all secondary pile heads. Distributes prop/anchor loads, ties wall together, and provides a platform for temporary propping systems."
      },
      {
        name: "Temporary Steel Casing",
        description: "Oscillator or rotary casing prevents borehole collapse, especially critical when penetrating soft soils or granular materials above groundwater table."
      }
    ]
  },
  soil: {
    applicability: "Performs in virtually all ground types: soft to stiff clay, loose to dense sand, gravel, fill, and weak rock. The continuous wall geometry and overlapping piles provide effective water control in soils with hydraulic conductivity up to k = 10⁻⁴ m/s. Particularly effective in variable urban fill, mixed ground, and high groundwater conditions.",
    parameters: [
      {
        parameter: "Friction angle (φ)",
        range: "25–42",
        unit: "°",
        effect: "Active/passive coefficients; higher φ reduces required embedment depth"
      },
      {
        parameter: "Cohesion (c)",
        range: "0–80",
        unit: "kPa",
        effect: "Provides wall toe stability in clay; reduces net active thrust"
      },
      {
        parameter: "Unit weight (γ)",
        range: "16–22",
        unit: "kN/m³",
        effect: "Scales earth pressure linearly; saturated soils add hydrostatic component"
      },
      {
        parameter: "Elastic modulus (E)",
        range: "10–200",
        unit: "MPa",
        effect: "Controls soil spring stiffness and lateral wall deflection"
      },
      {
        parameter: "Poisson's ratio (ν)",
        range: "0.20–0.40",
        unit: "—",
        effect: "Affects K0; higher ν in soft clay increases at-rest pressure"
      },
      {
        parameter: "Undrained shear strength (cu)",
        range: "20–150",
        unit: "kPa",
        effect: "Critical for basal stability; Terzaghi heave if Nb < 5.14cu/q"
      },
      {
        parameter: "Hydraulic conductivity (k)",
        range: "10⁻⁸–10⁻⁴",
        unit: "m/s",
        effect: "Determines inflow rate at pile overlaps; watertight if k < 10⁻⁷ m/s"
      }
    ]
  },
  earthPressure: {
    rankine: [
      {
        label: "Active earth pressure coefficient",
        formula: "Ka = tan²(45° − φ/2)\n\nφ = 32°  →  Ka = tan²(29°) = 0.307\nφ = 28°  →  Ka = tan²(31°) = 0.361\nφ = 36°  →  Ka = tan²(27°) = 0.260",
        note: "For effective stress analysis in drained conditions"
      },
      {
        label: "Active pressure with cohesion (total stress, undrained)",
        formula: "pa(z) = Ka · γ · z − 2c · √Ka\n\nTension crack depth: zc = 2c / (γ · √Ka)\n\nFor cu = 40 kPa, γ = 17, Ka = 0.307:\n  zc = 2(40) / (17 × 0.554) = 8.5 m",
        note: "Tension crack should be filled with water for critical case"
      }
    ],
    coulomb: [
      {
        label: "Net horizontal pressure on wall (per unit length)",
        formula: "p(z) = Ka · γ · z + γw · (z − hw)  [z > hw]\n       = Ka · γ · z               [z ≤ hw]\n\nTotal active thrust: Pa = ½Ka·γ·H² + ½γw·(H−hw)²",
        note: "hw = depth to water table from top of wall"
      },
      {
        label: "Typical bending moment (propped wall)",
        formula: "Mmax ≈ 1500–4000 kNm/m  (for H = 15–20 m)\n\nRequired section modulus per pile:\n  Sx = Mmax · s / fy\n\nWhere s = pile centre-to-centre spacing",
        note: "FEM analysis preferred for multi-propped walls"
      }
    ],
    notes: "For permanent basement walls, use at-rest K₀ = 1 − sinφ on retained side (wall cannot deflect). Hydrostatic pressure is added as separate load case for below-water-table zones. Terzaghi-Peck trapezoidal strut load envelopes are used for prop force design. EC7 requires partial factors: γγ = 1.0, γφ = 1.25, γc = 1.25 for DA1 Combination 2."
  },
  fem: {
    approach: "Secant pile walls in multi-propped deep excavations require staged FEM analysis. Plaxis 2D plane-strain with Hardening Soil (HS) model captures stiffness non-linearity. Each propping level is activated in sequence. The secant wall is modelled as an equivalent plate element with composite EI = (EI_primary × n_primary + EI_secondary × n_secondary) per metre run. Groundwater flow is modelled via coupled consolidation (Plaxis flow module or SEEP/W).",
    meshParams: [
      "Plate element stiffness: EI_eq = Σ(E·I per pile) / pile spacing (kNm²/m)",
      "Interface elements at pile faces: Rint = 0.65–0.80 for concrete-soil",
      "Mesh: 15-node triangular elements, refined to pile-diameter/4 at wall",
      "Model width: 5H each side; depth: 2H below pile toe",
      "Consolidation analysis: time steps at each construction stage",
      "Prop modelling: spring elements with stiffness EA_prop/L_prop (kN/m)"
    ],
    software: COMMON_FEM_SOFTWARE
  },
  parameterEffects: {
    sensitivity: [
      {
        parameter: "Friction angle (φ)",
        change: "+20% (32°→38°)",
        deflection: "−26%",
        moment: "−29%",
        shear: "−23%"
      },
      {
        parameter: "Friction angle (φ)",
        change: "−20% (32°→26°)",
        deflection: "+33%",
        moment: "+36%",
        shear: "+28%"
      },
      {
        parameter: "Elastic modulus (E)",
        change: "+20% (40→48 MPa)",
        deflection: "−17%",
        moment: "−9%",
        shear: "−7%"
      },
      {
        parameter: "Undrained strength (cu)",
        change: "+20% (50→60 kPa)",
        deflection: "−11%",
        moment: "−13%",
        shear: "−10%"
      },
      {
        parameter: "Unit weight (γ)",
        change: "+20% (18→22)",
        deflection: "+19%",
        moment: "+21%",
        shear: "+19%"
      },
      {
        parameter: "Pile overlap (joint quality)",
        change: "−50% (50→25 mm)",
        deflection: "+4%",
        moment: "+5%",
        shear: "+3%"
      },
      {
        parameter: "Prop stiffness (EA/L)",
        change: "+50% increase",
        deflection: "−20%",
        moment: "+12%",
        shear: "+15%"
      }
    ],
    observations: [
      "Friction angle dominates: a 20% reduction raises deflection and moment by ≈30–36%",
      "Prop stiffness has non-intuitive effect: stiffer props reduce deflection but increase wall moment and prop forces",
      "Elastic modulus significantly controls serviceability deflection in normally consolidated clays",
      "Undrained strength cu governs basal heave stability — the primary failure mode for deep excavations in soft clay",
      "Pile overlap loss (construction tolerance failure) has minimal structural effect but critically affects water tightness"
    ]
  },
  design: {
    guidelines: "Pile diameter selection: typically 600–900 mm primary, 750–1050 mm secondary. Required overlap ≥ 20 mm per side, accounting for ≤1° verticality tolerance. Wall thickness equivalent to secondary pile diameter. Propping levels spaced ≤ 4 m vertically. Minimum embedment: D = H/3 in dense sand; D = H/2 in soft clay. FEM analysis mandatory for excavations > 10 m depth adjacent to sensitive structures.",
    safetyFactors: [
      {
        checkType: "Overturning / passive resistance",
        minFS: "1.5–2.0",
        basis: "EC7 DA1 / AASHTO"
      },
      {
        checkType: "Basal heave in clay",
        minFS: "1.5",
        basis: "Bjerrum-Eide; Terzaghi Nb"
      },
      {
        checkType: "Global slope stability",
        minFS: "1.5",
        basis: "Bishop / Spencer"
      },
      {
        checkType: "Hydraulic heave (piping)",
        minFS: "1.5",
        basis: "EC7 HYD limit state"
      },
      {
        checkType: "Pile structural capacity",
        minFS: "1.0 (ULS factors)",
        basis: "EC2 reinforced concrete"
      },
      {
        checkType: "Ground anchor pullout",
        minFS: "1.5–2.0",
        basis: "EN 1537 / FHWA"
      }
    ],
    steps: [
      "Site investigation to 2H depth; classify soil by CPT, SPT, and laboratory testing",
      "Select pile geometry: diameter, overlap, spacing; verify constructability tolerance vs minimum 20 mm overlap",
      "Earth pressure analysis: use FEM for H > 10 m or multi-prop; LEM for preliminary",
      "Structural design of secondary pile: beam-column interaction for M + N + V",
      "Reinforcement cage design: Mmax drives longitudinal bars; shear governs link spacing near props",
      "Groundwater analysis: SEEP/W or FEM seepage; check exit gradient at base",
      "Prop/anchor design: Terzaghi-Peck envelope forces; anchor bond zone in competent stratum",
      "Verify basal stability: Terzaghi-Peck Nb for sand; Bjerrum-Eide for clay",
      "Settlement prediction: Peck (1969) empirical or FEM; check adjacent structure tolerance",
      "Install monitoring: inclinometers, settlement pins, strain gauges on props, piezometers"
    ]
  },
  caseStudies: {
    cases: [
      {
        project: "Crossrail Liverpool Street Station",
        location: "London, UK",
        dimensions: "900 mm dia, H=28 m, 3-level prop",
        soilType: "London Clay cu=80–120 kPa",
        outcome: "Max deflection 18 mm; settlement <10 mm at 5 m from wall"
      },
      {
        project: "Marina Bay Sands Basement",
        location: "Singapore",
        dimensions: "800 mm dia, H=22 m, 2-level anchor",
        soilType: "Marine clay, cu=25–60 kPa",
        outcome: "Basal heave FS = 1.65; instrumented monitoring within alert levels"
      },
      {
        project: "Stockholm Metro Extension",
        location: "Stockholm, Sweden",
        dimensions: "750 mm dia, H=18 m",
        soilType: "Quick clay, sensitivity St=12",
        outcome: "Zero water ingress; adjacent buildings settlement <5 mm"
      },
      {
        project: "Dubai Metro Red Line",
        location: "Dubai, UAE",
        dimensions: "1000 mm dia, H=16 m",
        soilType: "Dense calcareous sand, φ=38°",
        outcome: "Construction completed 2 weeks ahead of schedule; δmax = 12 mm"
      }
    ]
  }
};
const sheetPile = {
  basic: {
    description: "Sheet pile walls comprise interlocking steel (AZ, HZ, PU, PZ sections), vinyl (HDPE/PVC), or aluminium profiles driven into the ground by hydraulic impact, vibratory, or press-in machine. Continuous interlocked clutches provide water tightness. Most economical retaining system for waterfront, river, flood protection, and temporary excavation support at moderate depths.",
    useCases: [
      "Waterfront retaining walls, quay walls, and harbour structures",
      "River flood protection embankment toes and levee tie-backs",
      "Temporary cofferdams in rivers and coastal zones",
      "Basement excavation support (temporary and permanent)",
      "Environmental containment — cut-off walls for contamination"
    ],
    dimensions: [
      {
        parameter: "Section modulus (Sx)",
        value: "1000–8000",
        unit: "cm³/m",
        notes: "AZ-series: 1000–4000; HZ-M series: 2500–8000"
      },
      {
        parameter: "Steel grade",
        value: "S355GP / S430GP",
        unit: "—",
        notes: "fy = 355 MPa or 430 MPa"
      },
      {
        parameter: "Wall height (H)",
        value: "6–18",
        unit: "m",
        notes: "Up to 25 m in favourable soils with tie-backs"
      },
      {
        parameter: "Embedment depth (D)",
        value: "4–8",
        unit: "m",
        notes: "D ≥ 0.7H for cantilever (φ=30°)"
      },
      {
        parameter: "Clutch interlock gap",
        value: "0–3",
        unit: "mm",
        notes: "Sealant injected for water tightness"
      },
      {
        parameter: "Corrosion allowance",
        value: "0.1–0.2",
        unit: "mm/yr",
        notes: "Marine environment; add to design thickness"
      }
    ]
  },
  components: {
    materials: [
      "Steel sheet sections: AZ18 to AZ50 (double-U); HZ775M to HZ1080M (high-moment)",
      "Steel grade: EN 10248 S355GP (fy = 355 MPa) or S430GP (fy = 430 MPa)",
      "Clutch types: Larssen ball-and-socket; thumb-and-finger (ball clutch)",
      "Tie-rods: 50–100 mm diameter high-tensile steel, M30–M80",
      "Waling: 2×UB254 or UC203, Grade S355",
      "Deadman anchor: W200×100, 3–5 m length or continuous RC beam"
    ],
    elements: [
      {
        name: "Interlocked Sheet Section",
        description: "The primary water-retaining and earth-retaining element. AZ double-U sections provide high section modulus per metre run. HZ-M combined sections add king piles for maximum moment capacity in heavy marine applications."
      },
      {
        name: "Clutch / Interlock",
        description: "Interlocking mechanism between adjacent sheets. Ball-and-socket (Larssen) allows angular tolerance during driving. Sealant (hydrophilic rope or bituminous compound) is injected post-installation to minimise seepage."
      },
      {
        name: "Waling Beam",
        description: "Continuous horizontal member connecting sheet pile heads at anchor level. Distributes tie-rod point loads into distributed sheet pile bending. Designed as a continuous beam on flexible supports."
      },
      {
        name: "Tie-rod / Ground Anchor",
        description: "High-tensile steel rod connecting waling to a deadman anchor or grouted ground anchor behind the active failure plane. Pre-stressed to 10–20% of design load to prevent slack accumulation."
      },
      {
        name: "Deadman Anchor",
        description: "Buried RC or steel plate anchor positioned at least 1.5× failure plane depth behind the wall. Resists pull-out via passive soil resistance. Check for corrosion in marine applications."
      }
    ]
  },
  soil: {
    applicability: "Applicable in sands, gravels, soft to stiff clays, silts, and organic soils. Refusal risk in dense gravel, cobbles, or rock. Pre-drilling or water-jetting may be required in hard strata. Vibratory hammer effective in loose sand and soft clay (SPT N < 30). Impact hammer needed for dense gravel and stiff clay (SPT N > 30). Not suitable for hard rock without pre-drilling.",
    parameters: [
      {
        parameter: "Friction angle (φ)",
        range: "25–40",
        unit: "°",
        effect: "Primary driver of Ka and Kp; governs required embedment depth"
      },
      {
        parameter: "Cohesion (c)",
        range: "0–60",
        unit: "kPa",
        effect: "Reduces active pressure; tension crack risk in soft clay"
      },
      {
        parameter: "Unit weight (γ)",
        range: "17–21",
        unit: "kN/m³",
        effect: "Direct scaling of lateral earth pressure and pore pressure"
      },
      {
        parameter: "Elastic modulus (E)",
        range: "5–100",
        unit: "MPa",
        effect: "Controls deflection; soft clay causes large tip displacement"
      },
      {
        parameter: "Relative density (Dr)",
        range: "30–90",
        unit: "%",
        effect: "Governs driving resistance and passive resistance magnitude"
      },
      {
        parameter: "SPT N-value",
        range: "10–50",
        unit: "blows/300mm",
        effect: "Selection of pile hammer type; N > 30 requires impact hammer"
      }
    ]
  },
  earthPressure: {
    rankine: [
      {
        label: "Rankine active coefficient",
        formula: "Ka = tan²(45° − φ/2)\n\nφ = 30°: Ka = 0.333\nφ = 35°: Ka = 0.271\nφ = 25°: Ka = 0.406",
        note: "Conservative — assumes no wall friction (δ = 0)"
      },
      {
        label: "Rankine passive coefficient",
        formula: "Kp = tan²(45° + φ/2)\n\nφ = 30°: Kp = 3.000\nφ = 35°: Kp = 3.690\nφ = 25°: Kp = 2.464",
        note: "Rankine underestimates Kp when wall friction is present"
      }
    ],
    coulomb: [
      {
        label: "Coulomb active coefficient (with wall friction δ = 2φ/3)",
        formula: "Ka = sin²(α+φ) / [sin²α · sin(α−δ) · (1 + √(sin(φ+δ)·sin(φ−β)/(sin(α−δ)·sin(α+β))))²]\n\nFor α=90°, β=0°, δ=2φ/3, φ=30°:\n  Ka_Coulomb ≈ 0.297  (vs Rankine 0.333)",
        note: "Coulomb more accurate for passive — use for embedment design"
      },
      {
        label: "Free earth support method (anchor force)",
        formula: "T = Pa − Pp  [moment equilibrium about anchor]\n\nEmbedment D found from: ΣM_anchor = 0\n\nExample (φ=30°, H=10 m, sand, γ=18 kN/m³):\n  Pa = 0.5×0.333×18×10² = 300 kN/m\n  D ≈ 4.5 m (free earth); T ≈ 85 kN/m",
        note: "Add 20–30% to theoretical D for factor of safety"
      }
    ],
    notes: "For cantilevered sheet piles, D is determined by ΣM = 0 at the pivot point. For anchored walls, free earth support gives minimum D; fixed earth support provides 15–25% less embedment by accounting for toe fixity. Net pressure diagrams must include hydrostatic pressure if groundwater differs on each side. Clutch friction reduces effective passive resistance by up to 15% — often ignored in conservative design."
  },
  fem: {
    approach: "Sheet pile FEM models treat the wall as a 1D beam on an elastic-plastic Winkler foundation (spring model) for rapid design iterations. More rigorous 2D continuum FEM with Mohr-Coulomb or Hardening Soil model for final design or where settlement prediction is required. The continuous wall geometry simplifies to plane-strain 2D. Anchor is modelled as a spring element with stiffness T/δ.",
    meshParams: [
      "Sheet pile: beam elements with EI per metre run of wall",
      "Interface friction: δ = 0.5φ for rolled sections; δ = 0.67φ for rough concrete",
      "Anchor modelled as node-to-node spring (Plaxis) or equivalent strut",
      "Mesh refinement: element length ≤ t_wall/3 near anchor and toe",
      "Model depth: pile toe + 2D (twice embedment below model base)",
      "Driving simulation: soil displacement method (MPM or cavity expansion) for vibration prediction"
    ],
    software: COMMON_FEM_SOFTWARE
  },
  parameterEffects: {
    sensitivity: [
      {
        parameter: "Friction angle (φ)",
        change: "+20% (30°→36°)",
        deflection: "−30%",
        moment: "−33%",
        shear: "−27%"
      },
      {
        parameter: "Friction angle (φ)",
        change: "−20% (30°→24°)",
        deflection: "+41%",
        moment: "+45%",
        shear: "+36%"
      },
      {
        parameter: "Unit weight (γ)",
        change: "+20% (18→22)",
        deflection: "+20%",
        moment: "+22%",
        shear: "+20%"
      },
      {
        parameter: "Elastic modulus (E)",
        change: "+20% (20→24 MPa)",
        deflection: "−14%",
        moment: "−7%",
        shear: "−5%"
      },
      {
        parameter: "Anchor stiffness (T/δ)",
        change: "+50% stiffer",
        deflection: "−18%",
        moment: "+16%",
        shear: "+14%"
      },
      {
        parameter: "Embedment depth (D)",
        change: "+20% (4.5→5.4 m)",
        deflection: "−12%",
        moment: "−8%",
        shear: "−11%"
      },
      {
        parameter: "Wall friction (δ)",
        change: "0→2φ/3",
        deflection: "−5%",
        moment: "−4%",
        shear: "−4%"
      }
    ],
    observations: [
      "Friction angle is the most critical parameter — a 20% decrease raises bending moment by 45%, risking section overstress",
      "Anchor stiffness has a load-redistribution effect: stiffer anchors attract more force but reduce tip deflection",
      "Embedment depth increase has diminishing returns beyond D = 1.5D_min; overdrive by 20% for safety",
      "Wall friction (δ) correction has modest effect on Ka but significant effect on Kp — relevant for passive toe design",
      "Unit weight increase (e.g., saturated vs dry backfill) is the most common underestimated load source"
    ]
  },
  design: {
    guidelines: "Cantilever walls (H ≤ 6 m): D from ΣM = 0 at toe; add 20–40% for FS. Deflection check: δmax = Pa·H³/(8EI) < H/100. Anchored walls (H > 6 m): free or fixed earth support method; anchor at 0.1–0.2H below ground surface. Section selection: Sx(req) = Mmax/Fy; apply 1.3 moment factor for ULS. Design life: 50 yr with 1.5 mm corrosion allowance for marine; 0.5 mm for buried.",
    safetyFactors: [
      {
        checkType: "Embedment / passive resistance",
        minFS: "1.5–2.0",
        basis: "BS 8002 / EC7 DA1"
      },
      {
        checkType: "Overall slope stability",
        minFS: "1.5",
        basis: "Bishop circular"
      },
      {
        checkType: "Anchor / tie-rod",
        minFS: "2.0",
        basis: "BS 8081 / EN 1537"
      },
      {
        checkType: "Sheet pile bending (ASD)",
        minFS: "1.67",
        basis: "AISC ASD (Fb = 0.6Fy)"
      },
      {
        checkType: "Clutch / interlock shear",
        minFS: "2.0",
        basis: "ArcelorMittal design manual"
      },
      {
        checkType: "Corrosion reserve",
        minFS: "1.0 explicit",
        basis: "ISO 9223 marine exposure"
      }
    ],
    steps: [
      "Determine wall height H, groundwater level, and surcharge conditions",
      "Compute Ka, K0, Kp for representative design φ (peak or critical state)",
      "Draw net pressure diagram including hydrostatic component",
      "Select cantilever or anchored scheme; place anchor at 0.1–0.2H from top",
      "Find embedment D: ΣM = 0 about anchor (free earth) or about toe (cantilever)",
      "Compute maximum bending moment and select sheet pile section (Sx ≥ Mmax/Fy × 1.1)",
      "Design anchor: tie-rod tension T; deadman passive resistance Pp ≥ T × FS",
      "Check Kranz overall stability; Ω ≥ 1.5",
      "Deflection check: δ = Pa·H³/(3EI) or from FEM spring model",
      "Specify corrosion protection: cathodic protection or coating system for design life"
    ]
  },
  caseStudies: {
    cases: [
      {
        project: "Thames Barrier Approach Wall",
        location: "London, UK",
        dimensions: "HZ880M, H=14 m, 1-level anchor",
        soilType: "Thames Gravel, φ=38°",
        outcome: "50-yr design life with cathodic protection; max deflection 28 mm"
      },
      {
        project: "Mombasa Port Expansion",
        location: "Mombasa, Kenya",
        dimensions: "AZ36, H=12 m, free cantilever",
        soilType: "Coral sand, φ=35°",
        outcome: "Installed by vibro-hammer in 4 weeks; δmax = 45 mm at low tide"
      },
      {
        project: "New Orleans Flood Wall",
        location: "Louisiana, USA",
        dimensions: "PZ40, H=6 m, anchored",
        soilType: "Mississippi Delta clay, cu=30 kPa",
        outcome: "Withstood Hurricane Katrina 2005; subsequent deepening to 9 m"
      },
      {
        project: "Rotterdam Europoort Quay",
        location: "Rotterdam, Netherlands",
        dimensions: "HZ1080M, H=18 m, 2-level anchor",
        soilType: "Holocene sand, φ=32°",
        outcome: "δmax = 35 mm; long-term tidal monitoring shows stable performance"
      }
    ]
  }
};
const tangentPile = {
  basic: {
    description: "Tangent pile walls consist of bored reinforced concrete piles installed in a line with surfaces touching but not overlapping. Small gaps (0–20 mm) may exist due to construction tolerances. Less water-tight than secant piles; suitable for permanent walls above the water table or where moderate seepage is acceptable. Typical pile diameter 450–900 mm, depths 10–25 m. All piles are the same diameter and fully reinforced — contrast with secant system.",
    useCases: [
      "Permanent basement retaining walls in stiff clays above the water table",
      "Motorway cut stabilisation where groundwater control is secondary",
      "Bridge abutment wingwalls and approach embankment support",
      "Tiered retaining structures in urban hillside development",
      "Transition zones between secant and contiguous pile walls"
    ],
    dimensions: [
      {
        parameter: "Pile diameter",
        value: "450–900",
        unit: "mm",
        notes: "Constant diameter throughout; no overlap"
      },
      {
        parameter: "Pile spacing",
        value: "D + 0–20",
        unit: "mm gap",
        notes: "Tangent contact; 0 mm ideal, 20 mm max tolerance"
      },
      {
        parameter: "Wall height (H)",
        value: "6–20",
        unit: "m",
        notes: "Multi-level anchoring for deeper walls"
      },
      {
        parameter: "Embedment depth (D)",
        value: "4–8",
        unit: "m",
        notes: "D ≥ 0.5H in stiff clay; D ≥ 0.3H in dense sand"
      },
      {
        parameter: "Reinforcement ratio",
        value: "0.6–2.0",
        unit: "%",
        notes: "Higher than secant (no unreinforced primaries)"
      },
      {
        parameter: "Verticality tolerance",
        value: "≤0.5",
        unit: "°",
        notes: "Critical for maintaining tangent contact at pile toe"
      }
    ]
  },
  components: {
    materials: [
      "Pile concrete: C25/30 bored cast-in-situ; all piles same mix",
      "Longitudinal bars: 6–12 × T20–T25, Grade 500 (fy = 500 MPa)",
      "Link reinforcement: T10@200 mm or T12@150 mm",
      "Drainage composite: Enkadrain 9110 or equivalent geocomposite drain behind wall",
      "Perforated collector pipe: 100 mm HDPE perforated, wrapped in geotextile",
      "Capping beam: RC C30/37, 400×500 mm continuous"
    ],
    elements: [
      {
        name: "Reinforced Concrete Pile",
        description: "All piles are identical: same diameter, same concrete mix, same reinforcement. Bored by rotary rig; temporary casing used in loose or water-bearing strata. Cast using tremie pipe from bottom up."
      },
      {
        name: "Capping Beam",
        description: "Continuous RC beam over all pile heads. Connects pile tops and provides load distribution for props or anchors. Typically 400 mm wide × 500 mm deep; set in permanent formwork against excavation face."
      },
      {
        name: "Geocomposite Drain",
        description: "Vertical drain sheet installed between pile face and permanent RC wall lining (if used). Routes groundwater infiltration through pile gaps to collection pipe at base, preventing hydrostatic buildup."
      },
      {
        name: "Temporary Casing",
        description: "Steel temporary casing prevents borehole collapse above groundwater. Extracted during concrete pour (wet method) or left in place in unstable ground."
      },
      {
        name: "Gap Grouting / Sealing",
        description: "When watertight performance is required, gaps between tangent piles are sealed post-installation by pressure grouting or bentonite injection. This upgrades the system toward near-secant performance."
      }
    ]
  },
  soil: {
    applicability: "Best in stiff to hard clays (cu > 50 kPa), medium-dense to dense sands (Dr > 50%), and gravels. Adequate in medium-stiff clay with controlled dewatering. Not suitable in very soft clay, running sand, or conditions requiring positive watertight cut-off without gap grouting. Pile verticality tolerance ≤ 0.5° is critical to prevent gap opening at depth.",
    parameters: [
      {
        parameter: "Friction angle (φ)",
        range: "28–40",
        unit: "°",
        effect: "Controls Ka, Kp; governs embedment depth required"
      },
      {
        parameter: "Cohesion (c)",
        range: "0–70",
        unit: "kPa",
        effect: "Reduces net active thrust; controls gap stability between piles"
      },
      {
        parameter: "Unit weight (γ)",
        range: "17–21",
        unit: "kN/m³",
        effect: "Scales lateral pressure linearly"
      },
      {
        parameter: "Elastic modulus (E)",
        range: "20–120",
        unit: "MPa",
        effect: "Governs wall deflection; critical near sensitive adjacent structures"
      },
      {
        parameter: "Poisson's ratio (ν)",
        range: "0.22–0.35",
        unit: "—",
        effect: "Affects K0 calculation for at-rest pressure on permanent walls"
      },
      {
        parameter: "SPT N-value",
        range: "10–60+",
        unit: "blows/300mm",
        effect: "N > 10 ensures borehole stability; N > 30 for anchorage capacity"
      }
    ]
  },
  earthPressure: {
    rankine: [
      {
        label: "Active coefficient (per pile, tributary width = pile diameter)",
        formula: "Ka = tan²(45° − φ/2)\n\nActive pressure on one pile (if gaps unsealed):\n  pa(z) = Ka · γ · z\n  Load per pile: P = pa · D_pile · z  [at depth z]",
        note: "Treat as continuous wall if gaps are grouted or zero-gap achieved"
      },
      {
        label: "Passive resistance (pile toe, per pile)",
        formula: "Kp = tan²(45° + φ/2)\n\nPassive resistance per pile:\n  Pp = Kp · γ · D² / 2 · D_pile",
        note: "Sum of passive resistance from all embedded pile toes"
      }
    ],
    coulomb: [
      {
        label: "Bending moment in pile (propped condition)",
        formula: "M_max = ΔP · L / 8   [two-prop or propped-cantilever]\nM_max = ΔP · L / 2   [cantilever from capping beam]"
      },
      {
        label: "Effective continuous wall approximation",
        formula: "p_eff(z) = Ka · γ · z  [active side]\nMaximum wall moment: M = p_eff · H² / 8  [propped]",
        note: "Conservative — ignores gap reduction of active pressure"
      }
    ],
    notes: "If pile gaps are small and grouted, design as a continuous wall (conservative). If gaps are left open, model each pile individually with tributary width equal to pile diameter. For temporary stages, use effective stress (drained) analysis. For permanent walls in clay, check K₀ = 1 − sinφ on retained side if wall movement is restricted."
  },
  fem: {
    approach: "Tangent pile walls are modelled similarly to secant pile walls in FEM. In plane-strain 2D, the wall is represented as an equivalent continuous plate element. The contribution of each pile per metre is: EI_eq = (E_pile · I_pile) / pile spacing. Note that tangent piles have slightly lower composite stiffness than secant piles since all piles are the same size (no stiffer secondary piles).",
    meshParams: [
      "Equivalent plate EI = E_c · π·r⁴/4 / pile_spacing (kNm²/m)",
      "Interface Rint = 0.65–0.75 for concrete-soil",
      "Mesh: refined at pile-soil interface; element size ≤ D_pile/4",
      "Groundwater: full hydrostatic (water table = retained height) for worst case",
      "Drainage modelled as flow boundary at pile face if geocomposite drain present",
      "Consolidation stages essential for permanent clay walls"
    ],
    software: COMMON_FEM_SOFTWARE
  },
  parameterEffects: {
    sensitivity: [
      {
        parameter: "Friction angle (φ)",
        change: "+20% (32°→38°)",
        deflection: "−25%",
        moment: "−28%",
        shear: "−22%"
      },
      {
        parameter: "Friction angle (φ)",
        change: "−20% (32°→26°)",
        deflection: "+31%",
        moment: "+34%",
        shear: "+27%"
      },
      {
        parameter: "Pile diameter (D)",
        change: "+20% (600→720 mm)",
        deflection: "−38%",
        moment: "−12%",
        shear: "−10%"
      },
      {
        parameter: "Pile spacing (s)",
        change: "+20% gap (0→120 mm)",
        deflection: "+8%",
        moment: "+10%",
        shear: "+8%"
      },
      {
        parameter: "Elastic modulus (E)",
        change: "+20% (50→60 MPa)",
        deflection: "−16%",
        moment: "−7%",
        shear: "−6%"
      },
      {
        parameter: "Unit weight (γ)",
        change: "+20%",
        deflection: "+18%",
        moment: "+20%",
        shear: "+18%"
      },
      {
        parameter: "Gap grouting",
        change: "None → Grouted gaps",
        deflection: "−10%",
        moment: "−12%",
        shear: "−9%"
      }
    ],
    observations: [
      "Pile diameter has disproportionate effect on deflection (EI ∝ D⁴) but modest effect on internal forces",
      "Gap opening between piles reduces effective wall stiffness; control by tight verticality tolerances",
      "Gap grouting meaningfully improves stiffness and reduces moment — cost-effective upgrade for sensitive sites",
      "Friction angle reduction by 20% increases moment 34% — always use conservative φ for permanent design"
    ]
  },
  design: {
    guidelines: "Design follows same principles as secant pile walls. Pile diameter selection: 450–900 mm; all piles same size. Required reinforcement check: As_min = 0.6% of pile cross-section (BS 8004). Embedment: D = H/3 in dense sand to D = H/2 in stiff clay. Capping beam sized as continuous beam on pile supports. Maximum deflection: δmax ≤ H/400 adjacent to sensitive existing structures.",
    safetyFactors: [
      {
        checkType: "Passive resistance",
        minFS: "1.5",
        basis: "EC7 DA1 / BS 8002"
      },
      {
        checkType: "Basal stability",
        minFS: "1.3–1.5",
        basis: "Terzaghi bearing capacity"
      },
      {
        checkType: "Global stability",
        minFS: "1.5",
        basis: "Bishop slip circle"
      },
      {
        checkType: "Pile structural (bending)",
        minFS: "1.0 (ULS factors)",
        basis: "EC2 concrete"
      },
      { checkType: "Ground anchor pullout", minFS: "2.0", basis: "EN 1537" }
    ],
    steps: [
      "Select pile diameter and verify tangent contact geometry from rig tolerances",
      "Earth pressure analysis: LEM for H ≤ 10 m; FEM for deeper or adjacent to structures",
      "Design pile as single reinforced concrete column-beam under M + V + N",
      "Minimum reinforcement: As ≥ 0.6% × π·D²/4",
      "Design capping beam for continuous beam bending and shear",
      "If gap sealing required, specify grout injection programme and acceptance criteria",
      "Lateral deflection check: δmax ≤ H/400 for adjacent structures",
      "Settlement analysis: Mindlin influence factor method for buried load equivalent"
    ]
  },
  caseStudies: {
    cases: [
      {
        project: "Sydney CBD Basement",
        location: "Sydney, Australia",
        dimensions: "750 mm dia, H=14 m, 2-level anchor",
        soilType: "Hawkesbury Sandstone residual clay, cu=80 kPa",
        outcome: "Zero water ingress above sandstone; deflection 15 mm"
      },
      {
        project: "Edinburgh Tram Line Cut",
        location: "Edinburgh, Scotland",
        dimensions: "600 mm dia, H=9 m, 1-level prop",
        soilType: "Glacial till, φ=34°, cu=70 kPa",
        outcome: "Installed without disruption to tram service; δmax = 18 mm"
      },
      {
        project: "Dubai Creek Highway",
        location: "Dubai, UAE",
        dimensions: "900 mm dia, H=16 m",
        soilType: "Dense calcareous sand, φ=37°",
        outcome: "3-week installation; δmax = 22 mm; seepage grouted post-construction"
      }
    ]
  }
};
const micropile = {
  basic: {
    description: "Micropiles (pin piles, minipiles) are small-diameter (75–300 mm) drilled-and-grouted piles with a central steel bar or full-length steel casing. Despite small size, they develop high axial capacity (200–2000 kN) via steel-to-grout bond and grout-to-ground friction. For retaining applications, a network of inclined and vertical micropiles tied by a capping beam creates an equivalent gravity wall or flexible braced system. Ideal for restricted-access sites.",
    useCases: [
      "Underpinning existing foundations in restricted access (basements, under slabs)",
      "Retaining walls in sites with obstructions, buried utilities, or limited headroom",
      "Stabilisation of slopes in karst limestone, rubble fill, or mixed ground",
      "Seismic retrofit of existing retaining structures",
      "Bridge abutment rehabilitation without traffic closure"
    ],
    dimensions: [
      {
        parameter: "Drill diameter",
        value: "75–300",
        unit: "mm",
        notes: "Typical 100–200 mm for retaining applications"
      },
      {
        parameter: "Pile length",
        value: "8–30",
        unit: "m",
        notes: "Length governed by bond zone in competent stratum"
      },
      {
        parameter: "Inclination",
        value: "0–30",
        unit: "°",
        notes: "Vertical or inclined; pairs at ±15° common for lateral resistance"
      },
      {
        parameter: "Axial capacity",
        value: "200–2000",
        unit: "kN",
        notes: "Higher capacity with Type B/C sleeve-port grouting"
      },
      {
        parameter: "Pile spacing",
        value: "500–1500",
        unit: "mm",
        notes: "Closer in weak soils; 1–2D clear spacing minimum"
      },
      {
        parameter: "Grout strength",
        value: "≥28",
        unit: "MPa",
        notes: "Neat cement grout, w/c = 0.40–0.45"
      }
    ]
  },
  components: {
    materials: [
      "Drill casing: 89–250 mm OD steel tube, Grade T91 or API Grade B",
      "Central reinforcement: 50–100 mm threaded rebar, fy = 720 MPa (Williams Form, Dywidag)",
      "Grout: neat Portland cement, w/c = 0.40–0.45, fc ≥ 28 MPa at 28 days",
      "Grout injection: Type A (gravity), Type B (low-pressure), Type C/D (TAM sleeve-port)",
      "Capping beam: RC or fabricated steel section, designed for lateral thrust",
      "Connection plate: load-transfer plate welded to casing top; bolted to capping beam"
    ],
    elements: [
      {
        name: "Steel Drill Casing",
        description: "Remains in place as structural element. Carries tension, compression, and lateral load via composite action with grout. Wall thickness 6–12 mm. Grade T91 for highest capacity applications."
      },
      {
        name: "Central Reinforcing Bar",
        description: "Threaded high-tensile bar (Williams Grade 150 or Dywidag Grade 835) provides redundancy and additional tensile capacity. Can be post-tensioned to pre-load the system against expected lateral drift."
      },
      {
        name: "Cement Grout (Bond Zone)",
        description: "Transfers load from steel tube to surrounding soil/rock via skin friction. Bond length typically 5–10 m in competent soil. TAM sleeve-port grouting (Types C/D) re-groutes after casing installation, compacting surrounding soil and increasing bond stress by 40–80%."
      },
      {
        name: "Capping Beam",
        description: "Ties all micropile heads together to distribute lateral earth pressure and provide global wall system action. For inclined pile pairs, the capping beam resists the resultant horizontal force from pile pair geometry."
      },
      {
        name: "Lagging (if applicable)",
        description: "In some micropile wall configurations, small concrete panels or shotcrete is applied between piles to retain soil between pile faces. For dense or stiff soils, soil arching can eliminate the need for lagging."
      }
    ]
  },
  soil: {
    applicability: "Applicable in virtually all ground conditions: hard rock (RQD > 20%), gravel, sand, silt, clay, fill, and karst. Exceptionally suited for variable or unpredictable ground where conventional pile installation is risky. Minimum site clearance: 200 mm from existing structures. Minimum headroom: 2 m for standard rigs; 1.2 m for low-headroom specialist equipment.",
    parameters: [
      {
        parameter: "Grout-to-soil bond stress (qs)",
        range: "0.10–3.5",
        unit: "MPa",
        effect: "Primary capacity driver; 3.5 MPa in rock, 0.25 MPa in sand, 0.15 MPa in clay"
      },
      {
        parameter: "Friction angle (φ)",
        range: "25–45",
        unit: "°",
        effect: "Lateral resistance of composite pile-soil; governs p-y curve in sand"
      },
      {
        parameter: "Cohesion (c)",
        range: "0–100",
        unit: "kPa",
        effect: "Lateral resistance in clay; adhesion factor for grout bond"
      },
      {
        parameter: "Elastic modulus (E)",
        range: "10–3000",
        unit: "MPa",
        effect: "Soil stiffness for lateral deflection; rock modulus drives axial capacity"
      },
      {
        parameter: "RQD (rock)",
        range: "20–100",
        unit: "%",
        effect: "Bond length in rock; RQD > 50% gives full design bond stress"
      },
      {
        parameter: "SPT N-value",
        range: "10–refusal",
        unit: "blows/300mm",
        effect: "Governs grout bond stress in sands; N > 30 allows reduced bond length"
      }
    ]
  },
  earthPressure: {
    rankine: [
      {
        label: "Lateral earth pressure per micropile (tributary width = pile spacing)",
        formula: "H_per_pile = Ka · γ · z · s\n\nWhere:\n  s = pile spacing (m)\n  z = depth (m)\n  Ka = tan²(45° − φ/2)",
        note: "For inclined pile pair: horizontal component = P_pile × cos(α)"
      },
      {
        label: "Active earth pressure coefficient",
        formula: "Ka = tan²(45° − φ/2)\n\nφ = 30°: Ka = 0.333\nφ = 35°: Ka = 0.271\nφ = 25°: Ka = 0.406"
      }
    ],
    coulomb: [
      {
        label: "Composite wall lateral resistance (smeared stiffness)",
        formula: "Lateral resistance RL = n · (Ap · qu) + n · π · D · L · qs\n\nWhere:\n  n   = number of micropiles per metre of wall\n  Ap  = pile cross-section area (m²)\n  qu  = unconfined compressive strength (kPa)\n  qs  = grout-soil unit bond stress (kPa)",
        note: "Total RL must exceed total active force Pa with FS ≥ 1.5"
      },
      {
        label: "Settlement / axial shortening",
        formula: "ΔL = P · L / (A_steel · E_steel + A_grout · E_grout)\n\nFor 150 mm casing, P = 500 kN, L = 12 m:\n  ΔL ≈ 3.5 mm (elastic shortening only)",
        note: "Creep in grout adds 20–40% over service life"
      }
    ],
    notes: "Micropile walls resist lateral pressure through composite pile-soil mass behaviour rather than classic Ka/Kp equilibrium. The mass block between micropiles acts as a gravity wall if pile density is sufficient. For inclined pile pairs (±15°), horizontal load is resolved into pile axial force through geometry. For vertical pile walls, lateral resistance relies on pile flexure (p-y curves) and upper passive block failure."
  },
  fem: {
    approach: "FEM analysis of micropile walls typically uses a 3D model to capture the composite pile-soil behaviour correctly. In 2D plane-strain, micropile walls are approximated as an equivalent homogeneous wall with smeared EI and EA. The p-y curve method (LPILE or FB-Multipier) is preferred for lateral loading of individual micropiles. For wall systems, Plaxis 3D or FLAC3D modelling the actual pile array provides most accurate prediction.",
    meshParams: [
      "3D model: solid elements for soil; beam elements for micropile casing",
      "p-y curves: API (2000) for sand; Matlock (1970) for soft clay; Reese (1975) for stiff clay",
      "Interface: bond-slip element at grout-pile and grout-soil interfaces",
      "Mesh: 8-node brick elements, refined at pile-soil interface to D/4",
      "Inclined piles: define pile orientation vector; apply axial + lateral components separately",
      "Load testing calibration: scale p-y modulus to match measured load-displacement"
    ],
    software: [
      ...COMMON_FEM_SOFTWARE,
      {
        tool: "LPILE",
        type: "p-y spring model",
        application: "Lateral loading of individual micropiles, p-y calibration"
      },
      {
        tool: "FB-Multipier",
        type: "3D pile group",
        application: "Group effect correction for closely-spaced micropile arrays"
      }
    ]
  },
  parameterEffects: {
    sensitivity: [
      {
        parameter: "Bond stress (qs)",
        change: "+20%",
        deflection: "−16%",
        moment: "−14%",
        shear: "−14%"
      },
      {
        parameter: "Bond stress (qs)",
        change: "−20%",
        deflection: "+20%",
        moment: "+17%",
        shear: "+17%"
      },
      {
        parameter: "Pile inclination (α)",
        change: "0→15° (inclined pair)",
        deflection: "−35%",
        moment: "+8%",
        shear: "+5%"
      },
      {
        parameter: "Pile spacing (s)",
        change: "+20% (1.0→1.2 m)",
        deflection: "+20%",
        moment: "+22%",
        shear: "+20%"
      },
      {
        parameter: "Grout strength (fc)",
        change: "+20% (28→34 MPa)",
        deflection: "−5%",
        moment: "−3%",
        shear: "−3%"
      },
      {
        parameter: "Friction angle (φ)",
        change: "+20%",
        deflection: "−22%",
        moment: "−20%",
        shear: "−18%"
      },
      {
        parameter: "Pile length (L)",
        change: "+20%",
        deflection: "−18%",
        moment: "−10%",
        shear: "−8%"
      }
    ],
    observations: [
      "Inclining pile pairs by ±15° dramatically reduces lateral deflection (−35%) by mobilising axial compression/tension couple",
      "Bond stress (grout-soil) is the primary capacity parameter; use TAM sleeve-port grouting to maximise bond in weak soils",
      "Grout compressive strength has limited effect on wall deflection — bond governs, not grout cylinder strength",
      "Pile spacing reduction is the most effective retrofit measure when deflection exceeds serviceability limits"
    ]
  },
  design: {
    guidelines: "Drill diameter selection: 100–200 mm for retaining, 75–150 mm for underpinning. Pile capacity governed by grout-soil bond length (Type B/C grouting maximises qs). For lateral loading, p-y curves from LPILE govern pile head deflection. Inclined pile pairs (±15°) provide 2–3× lateral resistance vs. vertical piles for same number. Global stability: check as gravity wall (weight of soil + piles) against overturning and sliding.",
    safetyFactors: [
      {
        checkType: "Axial capacity (grout-soil bond)",
        minFS: "2.0",
        basis: "FHWA NHI-05-039"
      },
      {
        checkType: "Structural capacity (steel casing)",
        minFS: "1.67 (ASD)",
        basis: "AISC / φ=0.90 LRFD"
      },
      {
        checkType: "Global sliding of pile block",
        minFS: "1.5",
        basis: "Limit equilibrium"
      },
      {
        checkType: "Global overturning",
        minFS: "2.0",
        basis: "FHWA NHI-05-039"
      },
      {
        checkType: "Individual pile pullout",
        minFS: "2.0",
        basis: "EN 14199 / FHWA"
      },
      { checkType: "Slope stability", minFS: "1.5", basis: "Bishop circular" }
    ],
    steps: [
      "Determine loads: axial, lateral, and moment from retained soil and surcharge",
      "Select pile diameter, steel grade, and grout type (Type A/B/C) to meet capacity target",
      "Compute grout-soil bond length: Lbond = P_design / (π·D·qs × FS)",
      "Check structural capacity: N/Ncr < 1.0 (column buckling for slender piles)",
      "For retaining: determine pile spacing to carry tributary earth pressure",
      "p-y curve lateral analysis (LPILE) for each pile at governing cross-section",
      "Test pile program: 2% of production piles to 1.5× design load (axial and lateral)",
      "Global stability: check composite pile block as gravity wall (Bishop)",
      "Settlement estimate: elastic shortening ΔL = P·L/(A·E); check ΔL < 5 mm serviceability"
    ]
  },
  caseStudies: {
    cases: [
      {
        project: "Rome Metro C Station Underpinning",
        location: "Rome, Italy",
        dimensions: "200 mm dia, L=15 m, inclined ±15°",
        soilType: "Roman fill over volcanic tuff",
        outcome: "Zero damage to adjacent Colosseum; δmax = 4 mm during excavation"
      },
      {
        project: "Vancouver Seismic Retrofit",
        location: "Vancouver, Canada",
        dimensions: "150 mm dia, L=12 m, Type C grout",
        soilType: "Loose Fraser River sand, SPT N=8",
        outcome: "Lateral capacity 3× pre-retrofit; wall surviving design earthquake (0.5g)"
      },
      {
        project: "Taipei MRT Underpinning",
        location: "Taipei, Taiwan",
        dimensions: "130 mm dia, L=10 m, vertical",
        soilType: "Alluvial silty clay, cu=25 kPa",
        outcome: "Installed under live rail track; max train vibration 1.8 mm/s ppv"
      },
      {
        project: "Naples Karst Landslide",
        location: "Naples, Italy",
        dimensions: "200 mm dia, L=18 m, inclined",
        soilType: "Limestone karst with clay pockets",
        outcome: "Slope stabilised; 22-year monitoring shows <2 mm annual creep"
      }
    ]
  }
};
const diaphragmWall = {
  basic: {
    description: "Diaphragm walls (slurry walls) are in-situ reinforced concrete walls cast in excavated trenches stabilised by bentonite or polymer slurry. Panels 2–7 m wide, 400–1500 mm thick, depths up to 80 m. The stiffest and most water-resistant of all excavation support systems. Used for deep urban excavations, underground transit stations, combined retaining-and-foundation walls (barrettes), and cut-off walls through contaminated ground.",
    useCases: [
      "Deep basement construction in dense urban environments (H > 15 m)",
      "Metro station boxes and underground transit infrastructure",
      "Combined retaining + permanent foundation wall (barrette wall)",
      "Cut-off walls through contaminated or polluted ground",
      "Nuclear facility containment and sensitive groundwater control"
    ],
    dimensions: [
      {
        parameter: "Panel width",
        value: "2–7",
        unit: "m",
        notes: "Bite size dictated by grab or hydromill"
      },
      {
        parameter: "Wall thickness",
        value: "400–1500",
        unit: "mm",
        notes: "t = H/12 to H/20 typical"
      },
      {
        parameter: "Wall depth",
        value: "15–80",
        unit: "m",
        notes: "Up to 150 m with hydromill (Bauer/Soletanche)"
      },
      {
        parameter: "Embedment below base",
        value: "4–12",
        unit: "m",
        notes: "Governs stability; deeper in soft clay"
      },
      {
        parameter: "Reinforcement cover",
        value: "40–80",
        unit: "mm",
        notes: "Increased for marine or aggressive groundwater"
      },
      {
        parameter: "Bentonite density",
        value: "1020–1100",
        unit: "kg/m³",
        notes: "Maintains trench stability during excavation"
      }
    ]
  },
  components: {
    materials: [
      "Bentonite slurry: 4–7% concentration, density 1020–1100 kg/m³, Marsh viscosity 40–50 s",
      "Concrete: Self-compacting C35/45, slump 220+ mm, max aggregate 20 mm",
      "Reinforcement: 2 layers T25–T32, Grade 500 (fy = 500 MPa), 50–80 mm cover",
      "Steel stop-end: CWS or H-beam stop-end removed after concrete sets",
      "HDPE water-stop: 300–400 mm wide, cast-in at panel joints",
      "Guide walls: RC 1.5 m deep × 300 mm thick, set before trenching"
    ],
    elements: [
      {
        name: "Guide Walls",
        description: "Twin RC beams set at ground level defining the trench line. Maintain trench mouth geometry, support slurry head, act as working platform. Typically 1.5 m deep, 300 mm thick per wall, spanning between panel bites."
      },
      {
        name: "Bentonite / Polymer Slurry",
        description: "Keeps trench open by providing hydrostatic support to trench walls. Bentonite: 4–7% concentration forms filter cake. Polymer slurry (biodegradable): no filter cake, faster concrete cleaning, better bond in rock. Slurry density checked every 4 hours."
      },
      {
        name: "Reinforcement Cage",
        description: "Pre-assembled in sections, lowered into slurry-filled trench. Typically 2-layer with T25–T32 bars at 100–150 mm centres. Spacers maintain 40–80 mm cover. Crane capacity governs maximum cage weight and panel depth."
      },
      {
        name: "Panel Joints (Stop-Ends)",
        description: "CWS (circular water-stop) or H-beam defines panel-to-panel joints. HDPE water-stop cast in provides primary water seal. Joint quality is critical for watertightness; defect detection by core drilling or sonic logging."
      },
      {
        name: "Tremie Concrete",
        description: "Self-compacting concrete poured from bottom of trench upward through tremie pipe, displacing bentonite. Continuous pour without interruption. Tremie kept submerged ≥ 2 m in fresh concrete throughout."
      }
    ]
  },
  soil: {
    applicability: "Applicable in all soil types. Favoured in soft-to-firm clay, dense sand, stiff clay, and hard rock (requires hydraulic mill). Bentonite slurry stabilises trench in any soil. Critical: trench stability check Ftrench = (ρs − ρw)/(Ka · γ − ρslurry) ≥ 1.1. Silts and fine sands require elevated slurry density. Deep soft clay: basal heave critical (Nb = 5.14·cu/q ≥ 1.2).",
    parameters: [
      {
        parameter: "Friction angle (φ)",
        range: "20–42",
        unit: "°",
        effect: "Active/passive pressures; Kp critical for toe stability at depth"
      },
      {
        parameter: "Cohesion (c)",
        range: "0–100",
        unit: "kPa",
        effect: "Basal stability in clay; reduces active thrust at depth"
      },
      {
        parameter: "Unit weight (γ)",
        range: "15–22",
        unit: "kN/m³",
        effect: "Scales earth and slurry pressure; saturated soft clay is critical"
      },
      {
        parameter: "Elastic modulus (E)",
        range: "5–200",
        unit: "MPa",
        effect: "Controls wall deflection; small strain E₀ important for settlement prediction"
      },
      {
        parameter: "Undrained shear (cu)",
        range: "20–200",
        unit: "kPa",
        effect: "Basal heave stability; cu/γH < 0.18 is danger threshold"
      },
      {
        parameter: "Coefficient K0",
        range: "0.35–1.5+",
        unit: "—",
        effect: "Permanent wall at-rest pressure; OCR soils have K0 > 1.0"
      },
      {
        parameter: "Small strain modulus (E₀)",
        range: "20–1000",
        unit: "MPa",
        effect: "Required for HS-Small model; governs settlement prediction accuracy"
      }
    ]
  },
  earthPressure: {
    rankine: [
      {
        label: "Active earth pressure with pore pressure",
        formula: "pa(z) = Ka · σv' − 2c · √Ka + uw(z)\n\nWhere:\n  σv' = effective vertical stress\n  uw  = pore water pressure\n  Ka  = tan²(45° − φ/2)",
        note: "Effective stress analysis for drained conditions; total stress (cu) for undrained"
      },
      {
        label: "Passive earth pressure with pore pressure",
        formula: "pp(z) = Kp · σv' + 2c · √Kp − uw(z)\n\nKp = tan²(45° + φ/2)",
        note: "Net passive resistance must satisfy FS ≥ 1.5 for toe stability"
      }
    ],
    coulomb: [
      {
        label: "Terzaghi-Peck strut load envelope (sand)",
        formula: "pmax = 0.65 · Ka · γ · H  [rectangular envelope]\n\nFor H=20 m, γ=19, Ka=0.307:\n  pmax = 0.65 × 0.307 × 19 × 20 = 75.9 kPa",
        note: "Used for design of props and anchors in multi-propped walls"
      },
      {
        label: "Terzaghi-Peck strut load envelope (clay)",
        formula: "pmax = γ·H · (1 − 4cu/(γ·H))  [N_s < 4]\npmax = 0.2·γ·H to 0.4·γ·H     [N_s > 6]\n\nStability number: Ns = γ·H/cu",
        note: "For Ns > 6 (soft clay), use higher pressure envelope — risk of instability"
      }
    ],
    notes: "For deep multi-propped diaphragm walls, FEM with Hardening Soil or HSS model is mandatory for settlement prediction. Limit equilibrium (Terzaghi-Peck) provides prop force design loads. At-rest K₀ pressure applies to permanent walls where deflection is fully restrained. For temporary stages in stiff clay, mobilised K₀ exceeds Ka due to high OCR; do not underestimate horizontal pressure in pre-failure conditions."
  },
  fem: {
    approach: "Diaphragm wall FEM modelling uses 2D plane-strain for preliminary design and 3D for corner-wall interaction and panel joint effects. Hardening Soil Small Strain (HSS) model is state-of-the-practice for settlement prediction in dense urban environments. Staged construction with pore pressure dissipation between stages. K₀ consolidation phase must precede excavation stages. Coupled consolidation analysis is essential for clay sites.",
    meshParams: [
      "Wall: plate element; EI = (E_c × t³/12) per metre run (kNm²/m)",
      "HSS model parameters: E50ref, Eoed, Eur, G0ref, γ0.7 from triaxial and resonant column tests",
      "Interface Rint = 0.70–0.85 for rough concrete diaphragm wall surface",
      "Model domain: 6H wide, 3H below toe; drain boundary at far field",
      "Prop/anchor: spring elements; pre-stress loads applied at installation stage",
      "3D panel analysis: model 3–5 panels for corner and joint effects",
      "Consolidation: Cv from oedometer; time steps 1 day to 6 months per stage"
    ],
    software: COMMON_FEM_SOFTWARE
  },
  parameterEffects: {
    sensitivity: [
      {
        parameter: "Friction angle (φ)",
        change: "+20% (30°→36°)",
        deflection: "−24%",
        moment: "−27%",
        shear: "−21%"
      },
      {
        parameter: "Undrained strength (cu)",
        change: "+20% (60→72 kPa)",
        deflection: "−14%",
        moment: "−16%",
        shear: "−13%"
      },
      {
        parameter: "Small-strain modulus (E₀)",
        change: "+20% (100→120 MPa)",
        deflection: "−12%",
        moment: "−5%",
        shear: "−4%"
      },
      {
        parameter: "Wall thickness (t)",
        change: "+20% (800→960 mm)",
        deflection: "−40%",
        moment: "−3%",
        shear: "−2%"
      },
      {
        parameter: "K₀ coefficient",
        change: "+20% (0.5→0.6)",
        deflection: "+11%",
        moment: "+13%",
        shear: "+10%"
      },
      {
        parameter: "Prop stiffness (EA/L)",
        change: "+50% increase",
        deflection: "−22%",
        moment: "+18%",
        shear: "+16%"
      },
      {
        parameter: "Unit weight (γ)",
        change: "+20% (16→19)",
        deflection: "+17%",
        moment: "+19%",
        shear: "+17%"
      }
    ],
    observations: [
      "Wall thickness (t) has dominant effect on deflection via EI ∝ t³ — a 20% increase in t reduces deflection by 40%",
      "Prop stiffness redistribution: stiffer props reduce deflection but increase wall bending moment and prop forces significantly",
      "K₀ in overconsolidated soils (K₀ > 1.0) increases horizontal pressure; often underestimated in London Clay and similar OCR soils",
      "Small-strain modulus E₀ critical for settlement prediction accuracy — use HSS model, not MC model, in sensitive urban projects",
      "Undrained strength cu governs basal heave; the dominant failure mode for diaphragm walls in soft clay"
    ]
  },
  design: {
    guidelines: "Wall thickness: t = H/20 (flexible, multi-propped) to t = H/12 (stiffer, few props). Minimum t = 400 mm for constructability. Reinforcement: two layers T25–T32 bars at 100–150 mm centres; 50 mm cover for groundwater exposure. Propping levels at 2–4 m vertical spacing. Minimum embedment: D = H/3 to H/2 depending on soil. Settlement prediction mandatory for sites within 50 m of existing structures.",
    safetyFactors: [
      {
        checkType: "Basal heave in clay",
        minFS: "1.2–1.5",
        basis: "Bjerrum-Eide; Terzaghi"
      },
      {
        checkType: "Hydraulic piping/heave",
        minFS: "1.5",
        basis: "EC7 HYD limit state"
      },
      {
        checkType: "Passive resistance (wall toe)",
        minFS: "1.5–2.0",
        basis: "EC7 DA1 / AASHTO"
      },
      {
        checkType: "Global slope stability",
        minFS: "1.5",
        basis: "Bishop / Spencer"
      },
      {
        checkType: "Trench stability during construction",
        minFS: "1.1",
        basis: "CIRIA C760 / BS EN 1538"
      },
      {
        checkType: "Structural capacity (RC wall)",
        minFS: "ULS factors",
        basis: "EC2 BS EN 1992"
      },
      {
        checkType: "Panel joint water-tightness",
        minFS: "1.0 (prescriptive)",
        basis: "CIRIA C760 watertightness classes"
      }
    ],
    steps: [
      "Ground investigation to 2H depth: CPT, SPT, piezocone, laboratory tests for E₀, cu, cv, K₀",
      "2D FEM analysis (HS or HSS model); 3D analysis for corners and panel joints",
      "Select wall thickness: t = H/15 starting point; check EI satisfies deflection limit",
      "Reinforcement design: M + N + V interaction per EC2; minimum As = 0.3% each face",
      "Panel joint design: CWS water-stop; check shear across joint",
      "Guide wall design: column analogy for soil and plant loads",
      "Verify basal stability: Terzaghi (sand) or Bjerrum-Eide (clay); ensure FS ≥ 1.5",
      "Hydraulic analysis: verify exit gradient < ic/FS at base of wall",
      "Settlement prediction: Peck (1969) empirical or FEM; classify buildings at risk",
      "Monitoring plan: inclinometers T25@3 m depth, settlement pins, strain gauges, piezometers, load cells"
    ]
  },
  caseStudies: {
    cases: [
      {
        project: "Crossrail Bond Street Station",
        location: "London, UK",
        dimensions: "1000 mm thick, H=32 m, 4-level prop",
        soilType: "London Clay cu=100–180 kPa, OCR=2–4",
        outcome: "Max deflection 22 mm; adjacent Central Line tunnels within 3 mm settlement"
      },
      {
        project: "Marina Bay Financial Centre",
        location: "Singapore",
        dimensions: "800 mm thick, H=25 m, 3-level anchor",
        soilType: "Marine clay cu=30–60 kPa, soft to firm",
        outcome: "Basal heave FS=1.6; max wall deflection 38 mm; real-time monitoring"
      },
      {
        project: "Grand Paris Metro Lot 1",
        location: "Paris, France",
        dimensions: "1200 mm thick, H=40 m, 5-level prop",
        soilType: "Lutetian limestone, Ypresian clay",
        outcome: "Max settlement 8 mm at surface; Louvre museum adjacent undisturbed"
      },
      {
        project: "Bangkok MRT Blue Line",
        location: "Bangkok, Thailand",
        dimensions: "600 mm thick, H=18 m, 2-level strut",
        soilType: "Soft Bangkok clay cu=15–30 kPa",
        outcome: "Basal heave near critical (FS=1.25); pre-consolidation grouting improved FS to 1.6"
      }
    ]
  }
};
const SYSTEM_DETAILS_RICH = /* @__PURE__ */ new Map([
  ["soldier-pile", soldierPile],
  ["secant-pile", secantPile],
  ["sheet-pile", sheetPile],
  ["tangent-pile", tangentPile],
  ["micropile", micropile],
  ["diaphragm-wall", diaphragmWall]
]);
const SYSTEM_TABS = [
  { id: "basic", label: "Basic" },
  { id: "components", label: "Components" },
  { id: "soil", label: "Soil Parameters" },
  { id: "earth-pressure", label: "Earth Pressure" },
  { id: "fem", label: "FEM" },
  { id: "parameter-effects", label: "Parameter Effects" },
  { id: "design", label: "Design" },
  { id: "case-studies", label: "Case Studies" }
];
const SYSTEM_IDS = [
  "soldier-pile",
  "secant-pile",
  "sheet-pile",
  "tangent-pile",
  "micropile",
  "diaphragm-wall"
];
function ProseSection({ text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed whitespace-pre-line", children: text });
}
function SectionHeading({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2 mt-6 first:mt-0", children });
}
function FormulaBlock({
  label,
  formula,
  note
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-muted/50 border border-border/50 rounded px-4 py-3 font-mono text-sm text-foreground overflow-x-auto", children: formula }),
    note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70 mt-1 italic", children: note })
  ] });
}
function UseCaseList({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mt-2", children: Array.from(items, (item, i) => `uc-${i}-${item.slice(0, 12)}`).map(
    (key, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "flex items-start gap-2 text-sm text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-mono text-xs mt-0.5 shrink-0", children: "▸" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: items[i] })
        ]
      },
      key
    )
  ) });
}
function StepList({ steps }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2 mt-2", children: Array.from(steps, (step, i) => `step-${i}-${step.slice(0, 10)}`).map(
    (key, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "flex items-start gap-3 text-sm text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded px-1.5 py-0.5 shrink-0 min-w-[22px] text-center", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: steps[i] })
        ]
      },
      key
    )
  ) });
}
function BasicTab({
  data,
  systemId
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SystemDiagram, { systemId }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProseSection, { text: data.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Typical Applications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UseCaseList, { items: data.useCases })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Typical Dimensions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TechTable,
        {
          columns: DIMS_COLS,
          data: data.dimensions,
          keyField: "parameter"
        }
      )
    ] })
  ] });
}
const DIMS_COLS = [
  { key: "parameter", header: "Parameter", mono: true },
  { key: "value", header: "Typical Range", mono: true, align: "right" },
  { key: "unit", header: "Unit", mono: true, align: "center" },
  { key: "notes", header: "Notes" }
];
function ComponentsTab({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Primary Materials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UseCaseList, { items: data.materials })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Structural Elements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Array.from(data.elements, (el) => el.name).map((key, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-border/40 rounded-md p-3 bg-card/50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-semibold text-primary mb-1", children: data.elements[i].name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: data.elements[i].description })
          ]
        },
        key
      )) })
    ] })
  ] });
}
const SOIL_COLS = [
  { key: "parameter", header: "Parameter", mono: true },
  { key: "range", header: "Typical Range", mono: true, align: "right" },
  { key: "unit", header: "Unit", mono: true, align: "center" },
  { key: "effect", header: "Effect on Design" }
];
function SoilTab({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Applicable Soil Conditions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProseSection, { text: data.applicability })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Design Parameters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TechTable,
        {
          columns: SOIL_COLS,
          data: data.parameters,
          keyField: "parameter"
        }
      )
    ] })
  ] });
}
function EarthPressureTab({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Rankine Earth Pressure Coefficients" }),
      Array.from(data.rankine, (f) => f.label).map((key, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormulaBlock,
        {
          label: data.rankine[i].label,
          formula: data.rankine[i].formula,
          note: data.rankine[i].note
        },
        key
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Coulomb Method" }),
      Array.from(data.coulomb, (f) => f.label).map((key, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormulaBlock,
        {
          label: data.coulomb[i].label,
          formula: data.coulomb[i].formula,
          note: data.coulomb[i].note
        },
        key
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Design Notes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProseSection, { text: data.notes })
    ] })
  ] });
}
const FEM_SOFTWARE_COLS = [
  { key: "tool", header: "Software", mono: true },
  { key: "type", header: "Type" },
  { key: "application", header: "Application" }
];
function FemTab({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Numerical Analysis Approach" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProseSection, { text: data.approach })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Mesh & Model Parameters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UseCaseList, { items: data.meshParams })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Recommended Software Tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TechTable,
        {
          columns: FEM_SOFTWARE_COLS,
          data: data.software,
          keyField: "tool"
        }
      )
    ] })
  ] });
}
const SENSITIVITY_COLS = [
  { key: "parameter", header: "Input Parameter", mono: true },
  { key: "change", header: "Change", mono: true, align: "center" },
  { key: "deflection", header: "Wall Deflection", mono: true, align: "right" },
  { key: "moment", header: "Bending Moment", mono: true, align: "right" },
  { key: "shear", header: "Shear Force", mono: true, align: "right" }
];
function ParameterEffectsTab({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Sensitivity Analysis (±20% input variation)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Effect on wall performance metrics when each input parameter varies independently by ±20% from design baseline." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TechTable,
        {
          columns: SENSITIVITY_COLS,
          data: data.sensitivity,
          keyField: "parameter"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Key Observations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UseCaseList, { items: data.observations })
    ] })
  ] });
}
const SAFETY_COLS = [
  { key: "checkType", header: "Check Type", mono: true },
  { key: "minFS", header: "Min FS", mono: true, align: "center" },
  { key: "basis", header: "Code Basis" }
];
function DesignTab({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Sizing Guidelines" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProseSection, { text: data.guidelines })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Safety Factors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TechTable,
        {
          columns: SAFETY_COLS,
          data: data.safetyFactors,
          keyField: "checkType"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Design Procedure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StepList, { steps: data.steps })
    ] })
  ] });
}
const CASE_COLS = [
  { key: "project", header: "Project", mono: true },
  { key: "location", header: "Location" },
  { key: "dimensions", header: "Wall Dimensions", mono: true, align: "center" },
  { key: "soilType", header: "Soil Type" },
  { key: "outcome", header: "Outcome / Result" }
];
function CaseStudiesTab({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { children: "Published Case Studies" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TechTable, { columns: CASE_COLS, data: data.cases, keyField: "project" })
  ] }) });
}
function SystemDetail() {
  const { systemId } = useParams({ from: "/systems/$systemId" });
  const [activeTab, setActiveTab] = reactExports.useState("basic");
  const system = SYSTEMS.find((s) => s.id === systemId);
  const richData = SYSTEM_DETAILS_RICH.get(systemId);
  const currentIdx = SYSTEM_IDS.indexOf(
    systemId
  );
  const prevId = currentIdx > 0 ? SYSTEM_IDS[currentIdx - 1] : null;
  const nextId = currentIdx < SYSTEM_IDS.length - 1 ? SYSTEM_IDS[currentIdx + 1] : null;
  const prevSystem = prevId ? SYSTEMS.find((s) => s.id === prevId) : null;
  const nextSystem = nextId ? SYSTEMS.find((s) => s.id === nextId) : null;
  const WALL_TYPE_LABELS = {
    "soldier-pile": "H-Pile / Lagging",
    "secant-pile": "Interlocked Bored Piles",
    "sheet-pile": "Driven Interlocked Sheet",
    "tangent-pile": "Tangent Bored Piles",
    micropile: "Drilled & Grouted",
    "diaphragm-wall": "In-Situ RC Slurry Wall"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 bg-card px-6 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-3 font-mono text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            className: "hover:text-foreground transition-colors",
            "data-ocid": "breadcrumb.home.link",
            children: "Home"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: (system == null ? void 0 : system.name) ?? systemId })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: (system == null ? void 0 : system.name) ?? systemId }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "font-mono text-[10px] text-primary border-primary/30 uppercase tracking-wider",
              children: WALL_TYPE_LABELS[systemId] ?? "Wall System"
            }
          )
        ] }),
        (system == null ? void 0 : system.description) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-2xl leading-relaxed", children: system.description })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 bg-card/60 px-6 overflow-x-auto sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0 min-w-max", children: SYSTEM_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveTab(tab.id),
        "data-ocid": `system.tab.${tab.id}`,
        className: cn(
          "px-4 py-3 font-mono text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 -mb-px",
          activeTab === tab.id ? "text-primary border-primary bg-primary/5" : "text-muted-foreground border-transparent hover:text-foreground hover:border-border/60"
        ),
        children: tab.label
      },
      tab.id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 px-6 py-6 max-w-4xl", children: !richData ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full mt-4" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": `system.${activeTab}.panel`, children: [
      activeTab === "basic" && /* @__PURE__ */ jsxRuntimeExports.jsx(BasicTab, { data: richData.basic, systemId }),
      activeTab === "components" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComponentsTab, { data: richData.components }),
      activeTab === "soil" && /* @__PURE__ */ jsxRuntimeExports.jsx(SoilTab, { data: richData.soil }),
      activeTab === "earth-pressure" && /* @__PURE__ */ jsxRuntimeExports.jsx(EarthPressureTab, { data: richData.earthPressure }),
      activeTab === "fem" && /* @__PURE__ */ jsxRuntimeExports.jsx(FemTab, { data: richData.fem }),
      activeTab === "parameter-effects" && /* @__PURE__ */ jsxRuntimeExports.jsx(ParameterEffectsTab, { data: richData.parameterEffects }),
      activeTab === "design" && /* @__PURE__ */ jsxRuntimeExports.jsx(DesignTab, { data: richData.design }),
      activeTab === "case-studies" && /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudiesTab, { data: richData.caseStudies })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 bg-card/40 px-6 py-4 mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      prevSystem ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/systems/$systemId",
          params: { systemId: prevId },
          "data-ocid": "system.prev.link",
          className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 group-hover:-translate-x-0.5 transition-transform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider", children: "Previous" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: prevSystem.name })
            ] })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      nextSystem ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/systems/$systemId",
          params: { systemId: nextId },
          "data-ocid": "system.next.link",
          className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group text-right",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider", children: "Next" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: nextSystem.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
    ] }) })
  ] });
}
export {
  SystemDetail as default
};
