import type React from "react";
// Well-labeled SVG technical diagrams for all 6 excavation wall systems

interface SystemDiagramProps {
  systemId: string;
}

// ─── Individual Diagram Components ────────────────────────────────────────────

function SoldierPileDiagram() {
  return (
    <svg
      viewBox="0 0 700 520"
      className="w-full h-auto"
      role="img"
      aria-label="Soldier Pile Wall cross-section diagram"
    >
      {/* Background */}
      <rect width="700" height="520" fill="#0f172a" rx="8" />
      {/* Title */}
      <text
        x="350"
        y="28"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
      >
        Soldier Pile Wall — Cross-Section View
      </text>

      {/* ── Ground surface hatching ── */}
      <line
        x1="50"
        y1="100"
        x2="650"
        y2="100"
        stroke="#92400e"
        strokeWidth="2.5"
      />
      {[
        60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340,
        360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620,
        640,
      ].map((x) => (
        <line
          key={x}
          x1={x}
          y1={100}
          x2={x - 12}
          y2={88}
          stroke="#92400e"
          strokeWidth="1.5"
        />
      ))}
      <text
        x="350"
        y="90"
        textAnchor="middle"
        fill="#a16207"
        fontSize="10"
        fontFamily="monospace"
      >
        GROUND SURFACE
      </text>

      {/* ── Retained Soil (right side, above excavation depth) ── */}
      <rect
        x="380"
        y="100"
        width="270"
        height="280"
        fill="#78350f"
        fillOpacity="0.35"
      />
      <rect
        x="380"
        y="380"
        width="270"
        height="120"
        fill="#713f12"
        fillOpacity="0.4"
      />

      {/* ── Excavated side (left) ── */}
      <rect
        x="50"
        y="100"
        width="330"
        height="280"
        fill="#1e293b"
        fillOpacity="0.5"
      />

      {/* ── Excavation floor ── */}
      <line
        x1="50"
        y1="380"
        x2="710"
        y2="380"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeDasharray="8,4"
      />
      <text x="60" y="373" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        EXCAVATION LEVEL
      </text>

      {/* ── Pile 1 (x=150) ── */}
      {/* H-pile web */}
      <rect x="144" y="80" width="12" height="440" fill="#22d3ee" rx="1" />
      {/* H-pile flanges - top */}
      <rect x="130" y="80" width="40" height="8" fill="#22d3ee" rx="1" />
      {/* H-pile flanges at various depths */}
      {[130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490].map(
        (y) => (
          <rect
            key={y}
            x={130}
            y={y}
            width={40}
            height={6}
            fill="#0e7490"
            rx="1"
          />
        ),
      )}
      <rect x="130" y="512" width="40" height="8" fill="#22d3ee" rx="1" />

      {/* ── Pile 2 (x=310) ── */}
      <rect x="304" y="80" width="12" height="440" fill="#22d3ee" rx="1" />
      {[130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490].map(
        (y) => (
          <rect
            key={y}
            x={290}
            y={y}
            width={40}
            height={6}
            fill="#0e7490"
            rx="1"
          />
        ),
      )}
      <rect x="290" y="512" width="40" height="8" fill="#22d3ee" rx="1" />

      {/* ── Pile 3 (x=470) ── */}
      <rect x="464" y="80" width="12" height="440" fill="#22d3ee" rx="1" />
      {[130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490].map(
        (y) => (
          <rect
            key={y}
            x={450}
            y={y}
            width={40}
            height={6}
            fill="#0e7490"
            rx="1"
          />
        ),
      )}
      <rect x="450" y="512" width="40" height="8" fill="#22d3ee" rx="1" />

      {/* ── Timber lagging between piles 1 & 2 ── */}
      {[
        105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300,
        315, 330, 345, 360, 370,
      ].map((y, i) => (
        <rect
          key={y}
          x={162}
          y={y}
          width={130}
          height={13}
          fill={i % 2 === 0 ? "#d97706" : "#b45309"}
          opacity="0.85"
          rx="1"
        />
      ))}

      {/* ── Timber lagging between piles 2 & 3 (retained side — visible edge only) ── */}
      {[
        105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300,
        315, 330, 345, 360, 370,
      ].map((y, i) => (
        <rect
          key={y}
          x={322}
          y={y}
          width={130}
          height={13}
          fill={i % 2 === 0 ? "#a16207" : "#92400e"}
          opacity="0.6"
          rx="1"
        />
      ))}

      {/* ── Waler beam ── */}
      <rect
        x="128"
        y="200"
        width="344"
        height="18"
        fill="#7c3aed"
        opacity="0.9"
        rx="2"
      />
      <rect
        x="128"
        y="310"
        width="344"
        height="18"
        fill="#7c3aed"
        opacity="0.9"
        rx="2"
      />

      {/* ── Dimension arrows ── */}
      {/* Excavation Depth H */}
      <line
        x1="620"
        y1="100"
        x2="620"
        y2="380"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="620,100 615,115 625,115" fill="#f8fafc" />
      <polygon points="620,380 615,365 625,365" fill="#f8fafc" />
      <text x="635" y="245" fill="#f8fafc" fontSize="10" fontFamily="monospace">
        H
      </text>
      <text x="635" y="258" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Excavation
      </text>
      <text x="635" y="270" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Depth
      </text>

      {/* Embedment Depth D */}
      <line
        x1="620"
        y1="382"
        x2="620"
        y2="518"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="620,382 615,397 625,397" fill="#f8fafc" />
      <polygon points="620,518 615,503 625,503" fill="#f8fafc" />
      <text x="635" y="455" fill="#f8fafc" fontSize="10" fontFamily="monospace">
        D
      </text>
      <text x="635" y="468" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Embedment
      </text>
      <text x="635" y="480" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Depth
      </text>

      {/* Pile spacing s */}
      <line
        x1="150"
        y1="70"
        x2="310"
        y2="70"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="150,70 165,65 165,75" fill="#f8fafc" />
      <polygon points="310,70 295,65 295,75" fill="#f8fafc" />
      <text
        x="225"
        y="65"
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="10"
        fontFamily="monospace"
      >
        s (Pile Spacing)
      </text>

      {/* ── Labels with leader lines ── */}
      {/* H-Pile label */}
      <line
        x1="140"
        y1="150"
        x2="80"
        y2="150"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <circle cx="140" cy="150" r="2" fill="#fbbf24" />
      <text
        x="75"
        y="147"
        textAnchor="end"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        H-Pile
      </text>
      <text
        x="75"
        y="159"
        textAnchor="end"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
      >
        (W-Section)
      </text>

      {/* Timber Lagging */}
      <line
        x1="225"
        y1="160"
        x2="225"
        y2="135"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <circle cx="225" cy="160" r="2" fill="#fbbf24" />
      <text
        x="225"
        y="130"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        Timber Lagging
      </text>

      {/* Waler Beam */}
      <line
        x1="300"
        y1="209"
        x2="250"
        y2="195"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <circle cx="300" cy="209" r="2" fill="#fbbf24" />
      <text
        x="248"
        y="192"
        textAnchor="end"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        Waler Beam
      </text>

      {/* Retained Soil */}
      <line
        x1="500"
        y1="230"
        x2="550"
        y2="215"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <circle cx="500" cy="230" r="2" fill="#fbbf24" />
      <text x="555" y="212" fill="#fbbf24" fontSize="10" fontFamily="monospace">
        Retained Soil
      </text>

      {/* Excavated Side */}
      <text
        x="80"
        y="250"
        textAnchor="middle"
        fill="#38bdf8"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Excavated
      </text>
      <text
        x="80"
        y="263"
        textAnchor="middle"
        fill="#38bdf8"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Side
      </text>

      {/* ── Legend ── */}
      <rect
        x="52"
        y="410"
        width="280"
        height="100"
        fill="#1e293b"
        rx="4"
        stroke="#334155"
        strokeWidth="1"
      />
      <text
        x="192"
        y="428"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="10"
        fontWeight="bold"
        fontFamily="monospace"
      >
        LEGEND
      </text>
      <rect x="62" y="435" width="14" height="10" fill="#22d3ee" rx="1" />
      <text x="82" y="444" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        H-Pile (Steel W-Section)
      </text>
      <rect x="62" y="452" width="14" height="10" fill="#d97706" rx="1" />
      <text x="82" y="461" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Timber Lagging
      </text>
      <rect x="62" y="469" width="14" height="10" fill="#7c3aed" rx="1" />
      <text x="82" y="478" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Waler Beam
      </text>
      <rect
        x="62"
        y="486"
        width="14"
        height="10"
        fill="#78350f"
        fillOpacity="0.6"
        rx="1"
      />
      <text x="82" y="495" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Retained Soil
      </text>
    </svg>
  );
}

function SecantPileDiagram() {
  return (
    <svg
      viewBox="0 0 700 540"
      className="w-full h-auto"
      role="img"
      aria-label="Secant Pile Wall plan and section diagram"
    >
      <rect width="700" height="540" fill="#0f172a" rx="8" />
      <text
        x="350"
        y="28"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
      >
        Secant Pile Wall — Plan View & Cross-Section
      </text>

      {/* ── Plan View (top half) ── */}
      <text
        x="175"
        y="55"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontFamily="monospace"
      >
        PLAN VIEW
      </text>

      {/* Primary piles (unreinforced) */}
      {[80, 180, 280, 380, 480, 580, 680].map((cx) => (
        <circle
          key={cx}
          cx={cx}
          cy={130}
          r={52}
          fill="#334155"
          stroke="#475569"
          strokeWidth="2"
        />
      ))}
      {/* Secondary piles (reinforced) */}
      {[130, 230, 330, 430, 530, 630].map((cx) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy={130}
            r={52}
            fill="#1e3a5f"
            stroke="#3b82f6"
            strokeWidth="2.5"
          />
          {/* Reinforcement cage symbol */}
          <circle
            cx={cx}
            cy={130}
            r={28}
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="4,3"
          />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={angle}
                cx={cx + 24 * Math.cos(rad)}
                cy={130 + 24 * Math.sin(rad)}
                r={3}
                fill="#ef4444"
              />
            );
          })}
        </g>
      ))}
      {/* Secant overlap shading */}
      {[130, 230, 330, 430, 530, 630].map((cx) => (
        <ellipse
          key={cx}
          cx={cx}
          cy={130}
          rx={3}
          ry={14}
          fill="#22d3ee"
          opacity="0.5"
        />
      ))}

      {/* Overlap markers */}
      <line
        x1="82"
        y1="165"
        x2="82"
        y2="185"
        stroke="#22d3ee"
        strokeWidth="1"
      />
      <line
        x1="128"
        y1="165"
        x2="128"
        y2="185"
        stroke="#22d3ee"
        strokeWidth="1"
      />
      <line
        x1="82"
        y1="175"
        x2="128"
        y2="175"
        stroke="#22d3ee"
        strokeWidth="1"
      />
      <polygon points="82,175 96,170 96,180" fill="#22d3ee" />
      <polygon points="128,175 114,170 114,180" fill="#22d3ee" />
      <text
        x="105"
        y="200"
        textAnchor="middle"
        fill="#22d3ee"
        fontSize="9"
        fontFamily="monospace"
      >
        Secant Zone
      </text>

      {/* Diameter label */}
      <line x1="80" y1="78" x2="80" y2="182" stroke="#fbbf24" strokeWidth="1" />
      <polygon points="80,78 75,93 85,93" fill="#fbbf24" />
      <polygon points="80,182 75,167 85,167" fill="#fbbf24" />
      <text
        x="62"
        y="133"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
      >
        d
      </text>

      {/* Labels */}
      <line
        x1="80"
        y1="130"
        x2="30"
        y2="110"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text
        x="28"
        y="107"
        textAnchor="end"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        Primary Pile
      </text>
      <text
        x="28"
        y="118"
        textAnchor="end"
        fill="#a3e635"
        fontSize="9"
        fontFamily="monospace"
      >
        (unreinforced)
      </text>

      <line
        x1="230"
        y1="130"
        x2="270"
        y2="68"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text x="272" y="65" fill="#fbbf24" fontSize="10" fontFamily="monospace">
        Secondary Pile
      </text>
      <text x="272" y="76" fill="#a3e635" fontSize="9" fontFamily="monospace">
        (reinforced)
      </text>

      <line
        x1="330"
        y1="105"
        x2="400"
        y2="72"
        stroke="#ef4444"
        strokeWidth="1"
      />
      <text x="402" y="69" fill="#ef4444" fontSize="10" fontFamily="monospace">
        Reinforcement Cage
      </text>

      {/* ── Cross-Section (bottom half) ── */}
      <line
        x1="52"
        y1="240"
        x2="648"
        y2="240"
        stroke="#334155"
        strokeWidth="1"
        strokeDasharray="6,4"
      />
      <text
        x="350"
        y="260"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontFamily="monospace"
      >
        CROSS-SECTION — WATER BARRIER EFFECT
      </text>

      {/* Ground surface */}
      <line
        x1="52"
        y1="290"
        x2="648"
        y2="290"
        stroke="#92400e"
        strokeWidth="2.5"
      />
      {[
        60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340,
        360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620,
        640,
      ].map((x) => (
        <line
          key={x}
          x1={x}
          y1={290}
          x2={x - 12}
          y2={278}
          stroke="#92400e"
          strokeWidth="1.5"
        />
      ))}

      {/* Pile cross-sections */}
      {[100, 190, 280, 370, 460, 550].map((cx, i) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy={400}
            r={42}
            fill={i % 2 === 0 ? "#1e3a5f" : "#334155"}
            stroke={i % 2 === 0 ? "#3b82f6" : "#475569"}
            strokeWidth="2"
          />
          {i % 2 === 0 && (
            <>
              <circle
                cx={cx}
                cy={400}
                r={22}
                fill="none"
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeDasharray="3,2"
              />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <circle
                    key={angle}
                    cx={cx + 19 * Math.cos(rad)}
                    cy={400 + 19 * Math.sin(rad)}
                    r={2.5}
                    fill="#ef4444"
                  />
                );
              })}
            </>
          )}
        </g>
      ))}

      {/* Water table */}
      <line
        x1="52"
        y1="330"
        x2="648"
        y2="330"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeDasharray="5,3"
      />
      <text x="56" y="325" fill="#38bdf8" fontSize="9" fontFamily="monospace">
        ▼ Water Table
      </text>

      {/* Water barrier arrows */}
      {[145, 235, 325, 415, 505].map((x) => (
        <g key={x}>
          <text x={x} y={340} textAnchor="middle" fill="#38bdf8" fontSize="12">
            🚫
          </text>
        </g>
      ))}
      <text
        x="350"
        y="450"
        textAnchor="middle"
        fill="#38bdf8"
        fontSize="10"
        fontFamily="monospace"
      >
        Water barrier at secant zones — prevents seepage
      </text>
      <text
        x="350"
        y="463"
        textAnchor="middle"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
      >
        Secondary (reinforced) piles cut into primary piles creating continuous
        barrier
      </text>

      {/* Legend */}
      <rect
        x="52"
        y="475"
        width="340"
        height="55"
        fill="#1e293b"
        rx="4"
        stroke="#334155"
        strokeWidth="1"
      />
      <text
        x="222"
        y="492"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="10"
        fontWeight="bold"
        fontFamily="monospace"
      >
        LEGEND
      </text>
      <circle
        cx="68"
        cy="505"
        r="8"
        fill="#334155"
        stroke="#475569"
        strokeWidth="1"
      />
      <text x="82" y="509" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Primary Pile (unreinforced)
      </text>
      <circle
        cx="68"
        cy="521"
        r="8"
        fill="#1e3a5f"
        stroke="#3b82f6"
        strokeWidth="1"
      />
      <text x="82" y="525" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Secondary Pile (reinforced)
      </text>
      <line
        x1="230"
        y1="500"
        x2="244"
        y2="500"
        stroke="#ef4444"
        strokeWidth="2"
        strokeDasharray="3,2"
      />
      <text x="248" y="504" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Reinforcement Cage
      </text>
      <line
        x1="230"
        y1="516"
        x2="244"
        y2="516"
        stroke="#22d3ee"
        strokeWidth="2"
      />
      <text x="248" y="520" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Secant (overlap) Zone
      </text>
    </svg>
  );
}

function SheetPileDiagram() {
  return (
    <svg
      viewBox="0 0 700 520"
      className="w-full h-auto"
      role="img"
      aria-label="Sheet Pile Wall cross-section diagram"
    >
      <rect width="700" height="520" fill="#0f172a" rx="8" />
      <text
        x="350"
        y="28"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
      >
        Sheet Pile Wall — Cross-Section View
      </text>

      {/* Ground surface */}
      <line
        x1="52"
        y1="100"
        x2="648"
        y2="100"
        stroke="#92400e"
        strokeWidth="2.5"
      />
      {[
        60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340,
        360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620,
        640,
      ].map((x) => (
        <line
          key={x}
          x1={x}
          y1={100}
          x2={x - 12}
          y2={88}
          stroke="#92400e"
          strokeWidth="1.5"
        />
      ))}
      <text
        x="350"
        y="90"
        textAnchor="middle"
        fill="#a16207"
        fontSize="10"
        fontFamily="monospace"
      >
        GROUND SURFACE
      </text>

      {/* Retained earth (right) */}
      <rect
        x="370"
        y="100"
        width="278"
        height="300"
        fill="#78350f"
        fillOpacity="0.3"
      />

      {/* Excavated side (left) */}
      <rect
        x="52"
        y="100"
        width="318"
        height="300"
        fill="#1e293b"
        fillOpacity="0.3"
      />

      {/* Sheet pile sections (Z-profile) */}
      {[160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560].map((x, i) => {
        const flip = i % 2 === 0;
        const _leftX = x - 20;
        const _rightX = x + 20;
        const topY = 80;
        const botY = 450;
        // Z-profile: web + flanges alternating left/right
        return (
          <g key={x}>
            <line
              x1={x}
              y1={topY}
              x2={x}
              y2={botY}
              stroke="#22d3ee"
              strokeWidth="2.5"
            />
            <line
              x1={flip ? x - 18 : x}
              y1={topY + 8}
              x2={flip ? x : x + 18}
              y2={topY + 8}
              stroke="#0e7490"
              strokeWidth="3"
            />
            <line
              x1={flip ? x - 18 : x}
              y1={topY + 28}
              x2={flip ? x : x + 18}
              y2={topY + 28}
              stroke="#0e7490"
              strokeWidth="3"
            />
          </g>
        );
      })}

      {/* Interlock details */}
      {[180, 220, 260, 300, 340, 380, 420, 460, 500, 540].map((x) => (
        <g key={x}>
          <circle
            cx={x}
            cy={100}
            r={4}
            fill="#f59e0b"
            stroke="#fbbf24"
            strokeWidth="1"
          />
          <circle
            cx={x}
            cy={200}
            r={4}
            fill="#f59e0b"
            stroke="#fbbf24"
            strokeWidth="1"
          />
          <circle
            cx={x}
            cy={300}
            r={4}
            fill="#f59e0b"
            stroke="#fbbf24"
            strokeWidth="1"
          />
          <circle
            cx={x}
            cy={380}
            r={4}
            fill="#f59e0b"
            stroke="#fbbf24"
            strokeWidth="1"
          />
          <circle
            cx={x}
            cy={450}
            r={4}
            fill="#f59e0b"
            stroke="#fbbf24"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Waler beams */}
      <rect
        x="52"
        y="190"
        width="596"
        height="20"
        fill="#7c3aed"
        opacity="0.85"
        rx="2"
      />
      <rect
        x="52"
        y="295"
        width="596"
        height="20"
        fill="#7c3aed"
        opacity="0.85"
        rx="2"
      />

      {/* Tie rod / anchor */}
      <line
        x1="52"
        y1="200"
        x2="20"
        y2="200"
        stroke="#ef4444"
        strokeWidth="3"
      />
      <line
        x1="20"
        y1="190"
        x2="20"
        y2="225"
        stroke="#ef4444"
        strokeWidth="3"
      />
      <polygon points="52,200 38,194 38,206" fill="#ef4444" />
      <line
        x1="52"
        y1="305"
        x2="20"
        y2="305"
        stroke="#ef4444"
        strokeWidth="3"
      />
      <line
        x1="20"
        y1="295"
        x2="20"
        y2="320"
        stroke="#ef4444"
        strokeWidth="3"
      />
      <polygon points="52,305 38,299 38,311" fill="#ef4444" />

      {/* Excavation level */}
      <line
        x1="52"
        y1="400"
        x2="648"
        y2="400"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeDasharray="8,4"
      />
      <text x="60" y="393" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        EXCAVATION LEVEL
      </text>

      {/* Dimension: H */}
      <line
        x1="640"
        y1="100"
        x2="640"
        y2="400"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="640,100 635,115 645,115" fill="#f8fafc" />
      <polygon points="640,400 635,385 645,385" fill="#f8fafc" />
      <text x="653" y="253" fill="#f8fafc" fontSize="10" fontFamily="monospace">
        H
      </text>
      <text x="653" y="265" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Exc.
      </text>

      {/* Dimension: D */}
      <line
        x1="640"
        y1="402"
        x2="640"
        y2="450"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="640,402 635,417 645,417" fill="#f8fafc" />
      <polygon points="640,450 635,435 645,435" fill="#f8fafc" />
      <text x="653" y="430" fill="#f8fafc" fontSize="10" fontFamily="monospace">
        D
      </text>
      <text x="653" y="442" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Emb.
      </text>

      {/* Labels */}
      <line
        x1="350"
        y1="140"
        x2="350"
        y2="115"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <circle cx="350" cy="140" r="2" fill="#fbbf24" />
      <text
        x="350"
        y="110"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        Sheet Pile Section (Z-Profile)
      </text>

      <line
        x1="280"
        y1="165"
        x2="220"
        y2="148"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <circle cx="280" cy="165" r="2" fill="#fbbf24" />
      <text
        x="218"
        y="145"
        textAnchor="end"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        Interlock Connection
      </text>

      <line
        x1="350"
        y1="200"
        x2="350"
        y2="178"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <circle cx="350" cy="200" r="2" fill="#fbbf24" />
      <text
        x="350"
        y="173"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        Waler Beam
      </text>

      <line
        x1="36"
        y1="200"
        x2="36"
        y2="172"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <circle cx="36" cy="200" r="2" fill="#fbbf24" />
      <text
        x="36"
        y="168"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        Tie Rod / Anchor
      </text>

      <text
        x="150"
        y="260"
        textAnchor="middle"
        fill="#38bdf8"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Excavated
      </text>
      <text
        x="150"
        y="273"
        textAnchor="middle"
        fill="#38bdf8"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Side
      </text>

      <text
        x="520"
        y="260"
        textAnchor="middle"
        fill="#a16207"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Retained
      </text>
      <text
        x="520"
        y="273"
        textAnchor="middle"
        fill="#a16207"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Earth
      </text>

      {/* Legend */}
      <rect
        x="52"
        y="462"
        width="350"
        height="48"
        fill="#1e293b"
        rx="4"
        stroke="#334155"
        strokeWidth="1"
      />
      <text
        x="227"
        y="478"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="10"
        fontWeight="bold"
        fontFamily="monospace"
      >
        LEGEND
      </text>
      <rect x="62" y="484" width="14" height="8" fill="#22d3ee" rx="1" />
      <text x="82" y="491" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Sheet Pile (Z-Profile)
      </text>
      <rect x="182" y="484" width="14" height="8" fill="#7c3aed" rx="1" />
      <text x="202" y="491" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Waler Beam
      </text>
      <line
        x1="300"
        y1="488"
        x2="318"
        y2="488"
        stroke="#ef4444"
        strokeWidth="2"
      />
      <text x="324" y="491" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Tie Rod/Anchor
      </text>
      <circle cx="68" cy="502" r="4" fill="#f59e0b" />
      <text x="78" y="506" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Interlock Detail
      </text>
    </svg>
  );
}

function TangentPileDiagram() {
  return (
    <svg
      viewBox="0 0 700 520"
      className="w-full h-auto"
      role="img"
      aria-label="Tangent Pile Wall plan and cross-section diagram"
    >
      <rect width="700" height="520" fill="#0f172a" rx="8" />
      <text
        x="350"
        y="28"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
      >
        Tangent Pile Wall — Plan View & Cross-Section
      </text>

      {/* ── Plan View ── */}
      <text
        x="350"
        y="55"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontFamily="monospace"
      >
        PLAN VIEW — Piles Touch but Do Not Overlap
      </text>

      {/* Draw tangent piles (touching) */}
      {[80, 150, 220, 290, 360, 430, 500, 570, 640].map((cx, i) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy={130}
            r={34}
            fill="#1e3a5f"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Reinforcement */}
          <circle
            cx={cx}
            cy={130}
            r={20}
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="3,2"
          />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={angle}
                cx={cx + 17 * Math.cos(rad)}
                cy={130 + 17 * Math.sin(rad)}
                r={2.5}
                fill="#ef4444"
              />
            );
          })}
          {/* Pile number */}
          <text
            x={cx}
            y={134}
            textAnchor="middle"
            fill="#93c5fd"
            fontSize="9"
            fontFamily="monospace"
          >
            {i + 1}
          </text>
        </g>
      ))}

      {/* Tangent point markers */}
      {[115, 185, 255, 325, 395, 465, 535, 605].map((x) => (
        <circle key={x} cx={x} cy={130} r={3} fill="#22d3ee" />
      ))}

      {/* Soil arching between piles */}
      <text
        x="115"
        y="178"
        textAnchor="middle"
        fill="#a16207"
        fontSize="9"
        fontFamily="monospace"
      >
        Soil Arching Zone
      </text>
      <path
        d="M 80 164 Q 115 195 150 164"
        fill="#78350f"
        fillOpacity="0.4"
        stroke="#a16207"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <path
        d="M 150 164 Q 185 195 220 164"
        fill="#78350f"
        fillOpacity="0.4"
        stroke="#a16207"
        strokeWidth="1"
        strokeDasharray="3,2"
      />

      {/* Diameter label */}
      <line x1="80" y1="96" x2="80" y2="164" stroke="#fbbf24" strokeWidth="1" />
      <polygon points="80,96 75,111 85,111" fill="#fbbf24" />
      <polygon points="80,164 75,149 85,149" fill="#fbbf24" />
      <text
        x="62"
        y="133"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
      >
        d
      </text>

      {/* Spacing ≈ diameter label */}
      <line
        x1="80"
        y1="175"
        x2="150"
        y2="175"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="80,175 95,170 95,180" fill="#f8fafc" />
      <polygon points="150,175 135,170 135,180" fill="#f8fafc" />
      <text
        x="115"
        y="192"
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="9"
        fontFamily="monospace"
      >
        s ≈ d (No Overlap)
      </text>

      {/* Tangent point label */}
      <line
        x1="115"
        y1="130"
        x2="115"
        y2="105"
        stroke="#22d3ee"
        strokeWidth="1"
      />
      <text
        x="115"
        y="100"
        textAnchor="middle"
        fill="#22d3ee"
        fontSize="9"
        fontFamily="monospace"
      >
        Tangent Point
      </text>

      {/* ── Cross-Section (bottom half) ── */}
      <line
        x1="52"
        y1="222"
        x2="648"
        y2="222"
        stroke="#334155"
        strokeWidth="1"
        strokeDasharray="6,4"
      />
      <text
        x="350"
        y="240"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontFamily="monospace"
      >
        CROSS-SECTION — Excavation Support
      </text>

      {/* Ground */}
      <line
        x1="52"
        y1="270"
        x2="648"
        y2="270"
        stroke="#92400e"
        strokeWidth="2.5"
      />
      {[
        60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340,
        360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620,
        640,
      ].map((x) => (
        <line
          key={x}
          x1={x}
          y1={270}
          x2={x - 12}
          y2={258}
          stroke="#92400e"
          strokeWidth="1.5"
        />
      ))}

      {/* Retained soil */}
      <rect
        x="400"
        y="270"
        width="248"
        height="240"
        fill="#78350f"
        fillOpacity="0.3"
      />

      {/* Pile cross-sections (elevation) */}
      {[100, 175, 250, 325, 400, 475, 550, 625].map((cx) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy={390}
            r={32}
            fill="#1e3a5f"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <circle
            cx={cx}
            cy={390}
            r={18}
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="3,2"
          />
        </g>
      ))}

      {/* Excavation level */}
      <line
        x1="52"
        y1="360"
        x2="648"
        y2="360"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeDasharray="8,4"
      />
      <text x="56" y="353" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        EXCAVATION LEVEL
      </text>

      {/* Dim: H */}
      <line
        x1="638"
        y1="270"
        x2="638"
        y2="360"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="638,270 633,285 643,285" fill="#f8fafc" />
      <polygon points="638,360 633,345 643,345" fill="#f8fafc" />
      <text x="650" y="318" fill="#f8fafc" fontSize="10" fontFamily="monospace">
        H
      </text>

      {/* Dim: D */}
      <line
        x1="638"
        y1="362"
        x2="638"
        y2="422"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="638,362 633,377 643,377" fill="#f8fafc" />
      <polygon points="638,422 633,407 643,407" fill="#f8fafc" />
      <text x="650" y="395" fill="#f8fafc" fontSize="10" fontFamily="monospace">
        D
      </text>

      {/* Labels */}
      <line
        x1="100"
        y1="390"
        x2="58"
        y2="370"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text
        x="56"
        y="368"
        textAnchor="end"
        fill="#fbbf24"
        fontSize="10"
        fontFamily="monospace"
      >
        Tangent Pile
      </text>
      <text
        x="56"
        y="379"
        textAnchor="end"
        fill="#a3e635"
        fontSize="9"
        fontFamily="monospace"
      >
        (reinforced)
      </text>

      <line
        x1="137"
        y1="375"
        x2="137"
        y2="350"
        stroke="#a16207"
        strokeWidth="1"
      />
      <text
        x="137"
        y="345"
        textAnchor="middle"
        fill="#a16207"
        fontSize="9"
        fontFamily="monospace"
      >
        Soil Arch
      </text>

      {/* Legend */}
      <rect
        x="52"
        y="465"
        width="350"
        height="46"
        fill="#1e293b"
        rx="4"
        stroke="#334155"
        strokeWidth="1"
      />
      <text
        x="227"
        y="482"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="10"
        fontWeight="bold"
        fontFamily="monospace"
      >
        LEGEND
      </text>
      <circle
        cx="68"
        cy="498"
        r="8"
        fill="#1e3a5f"
        stroke="#3b82f6"
        strokeWidth="1"
      />
      <text x="82" y="502" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Tangent Pile (reinforced bored pile)
      </text>
      <circle
        cx="222"
        cy="498"
        r="8"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <text x="236" y="502" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Reinforcement Cage
      </text>
      <circle cx="68" cy="504" r="3" fill="#22d3ee" />
      <text x="82" y="514" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Tangent Contact Point (no overlap)
      </text>
    </svg>
  );
}

function MicropileDiagram() {
  return (
    <svg
      viewBox="0 0 700 540"
      className="w-full h-auto"
      role="img"
      aria-label="Micropile cross-section and plan diagram"
    >
      <rect width="700" height="540" fill="#0f172a" rx="8" />
      <text
        x="350"
        y="28"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
      >
        Micropile Wall — Cross-Section & Array View
      </text>

      {/* ── Cross section left half ── */}
      <text
        x="185"
        y="55"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontFamily="monospace"
      >
        CROSS-SECTION
      </text>

      {/* Ground */}
      <line
        x1="52"
        y1="90"
        x2="370"
        y2="90"
        stroke="#92400e"
        strokeWidth="2.5"
      />
      {[
        60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340,
        360,
      ].map((x) => (
        <line
          key={x}
          x1={x}
          y1={90}
          x2={x - 12}
          y2={78}
          stroke="#92400e"
          strokeWidth="1.5"
        />
      ))}

      {/* Existing structure / cap beam */}
      <rect
        x="80"
        y="68"
        width="200"
        height="22"
        fill="#475569"
        stroke="#64748b"
        strokeWidth="1"
        rx="2"
      />
      <text
        x="180"
        y="82"
        textAnchor="middle"
        fill="#cbd5e1"
        fontSize="9"
        fontFamily="monospace"
      >
        Cap Beam / Structure
      </text>

      {/* Vertical micropile */}
      <rect
        x="168"
        y="90"
        width="14"
        height="320"
        fill="#64748b"
        stroke="#94a3b8"
        strokeWidth="1"
        rx="1"
      />
      {/* Steel reinforcement bar */}
      <rect x="173" y="90" width="4" height="320" fill="#ef4444" rx="1" />
      {/* Grout */}
      <rect
        x="169"
        y="90"
        width="12"
        height="320"
        fill="#d4a26a"
        fillOpacity="0.5"
        rx="1"
      />
      {/* Grout bulb */}
      <ellipse
        cx="175"
        cy="430"
        rx="22"
        ry="28"
        fill="#d4a26a"
        fillOpacity="0.7"
        stroke="#92400e"
        strokeWidth="1.5"
      />
      <text
        x="175"
        y="435"
        textAnchor="middle"
        fill="#92400e"
        fontSize="8"
        fontFamily="monospace"
      >
        Bulb
      </text>

      {/* Inclined micropile 1 */}
      <line
        x1="200"
        y1="90"
        x2="280"
        y2="400"
        stroke="#64748b"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <line
        x1="200"
        y1="90"
        x2="280"
        y2="400"
        stroke="#ef4444"
        strokeWidth="3"
      />
      <line
        x1="200"
        y1="90"
        x2="280"
        y2="400"
        stroke="#d4a26a"
        strokeWidth="8"
        strokeOpacity="0.5"
      />
      <ellipse
        cx="280"
        cy="408"
        rx="20"
        ry="25"
        transform="rotate(15, 280, 408)"
        fill="#d4a26a"
        fillOpacity="0.7"
        stroke="#92400e"
        strokeWidth="1.5"
      />

      {/* Inclined micropile 2 (other side) */}
      <line
        x1="152"
        y1="90"
        x2="72"
        y2="400"
        stroke="#64748b"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <line
        x1="152"
        y1="90"
        x2="72"
        y2="400"
        stroke="#ef4444"
        strokeWidth="3"
      />
      <line
        x1="152"
        y1="90"
        x2="72"
        y2="400"
        stroke="#d4a26a"
        strokeWidth="8"
        strokeOpacity="0.5"
      />
      <ellipse
        cx="72"
        cy="408"
        rx="20"
        ry="25"
        transform="rotate(-15, 72, 408)"
        fill="#d4a26a"
        fillOpacity="0.7"
        stroke="#92400e"
        strokeWidth="1.5"
      />

      {/* Inclination angle arc */}
      <path
        d="M 175 130 A 40 40 0 0 1 210 112"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text x="220" y="118" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        α
      </text>
      <text x="225" y="130" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        Inclination
      </text>
      <text x="225" y="141" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        Angle
      </text>

      {/* Diameter label */}
      <line
        x1="168"
        y1="200"
        x2="182"
        y2="200"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <polygon points="168,200 181,197 181,203" fill="#fbbf24" />
      <polygon points="182,200 169,197 169,203" fill="#fbbf24" />
      <line
        x1="185"
        y1="200"
        x2="230"
        y2="190"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text x="232" y="188" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        d = 75–300 mm
      </text>

      {/* Labels */}
      <line
        x1="173"
        y1="240"
        x2="130"
        y2="225"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text
        x="128"
        y="222"
        textAnchor="end"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
      >
        Steel Reinforcement
      </text>

      <line
        x1="176"
        y1="280"
        x2="230"
        y2="268"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text x="232" y="265" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        Cement Grout
      </text>

      <line
        x1="175"
        y1="435"
        x2="320"
        y2="445"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text x="322" y="442" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        Grout Bulb (Bond Zone)
      </text>

      <line
        x1="168"
        y1="340"
        x2="120"
        y2="330"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text
        x="118"
        y="327"
        textAnchor="end"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
      >
        Drill Hole
      </text>

      {/* ── Plan / Array View (right half) ── */}
      <line
        x1="380"
        y1="45"
        x2="380"
        y2="520"
        stroke="#334155"
        strokeWidth="1"
        strokeDasharray="6,4"
      />
      <text
        x="540"
        y="55"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontFamily="monospace"
      >
        PLAN — MICROPILE ARRAY
      </text>

      {/* Grid of micropiles in plan */}
      {[420, 480, 540, 600, 660].map((cx) =>
        [100, 155, 210, 265, 320, 375, 430].map((cy) => (
          <g key={`${cx}-${cy}`}>
            <circle
              cx={cx}
              cy={cy}
              r={10}
              fill="#1e293b"
              stroke="#22d3ee"
              strokeWidth="1.5"
            />
            <circle cx={cx} cy={cy} r={4} fill="#ef4444" />
          </g>
        )),
      )}

      {/* Spacing labels */}
      <line
        x1="420"
        y1="465"
        x2="480"
        y2="465"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="420,465 435,460 435,470" fill="#f8fafc" />
      <polygon points="480,465 465,460 465,470" fill="#f8fafc" />
      <text
        x="450"
        y="480"
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="9"
        fontFamily="monospace"
      >
        s (spacing)
      </text>

      <line
        x1="660"
        y1="100"
        x2="660"
        y2="155"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="660,100 655,115 665,115" fill="#f8fafc" />
      <polygon points="660,155 655,140 665,140" fill="#f8fafc" />
      <text x="672" y="130" fill="#f8fafc" fontSize="9" fontFamily="monospace">
        s
      </text>

      {/* Load transfer label */}
      <text
        x="540"
        y="498"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="9"
        fontFamily="monospace"
      >
        Typical array: 3–5 rows, 1–2 m spacing
      </text>

      {/* Legend */}
      <rect
        x="52"
        y="480"
        width="310"
        height="50"
        fill="#1e293b"
        rx="4"
        stroke="#334155"
        strokeWidth="1"
      />
      <text
        x="207"
        y="497"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="10"
        fontWeight="bold"
        fontFamily="monospace"
      >
        LEGEND
      </text>
      <rect x="62" y="506" width="12" height="10" fill="#64748b" rx="1" />
      <text x="80" y="514" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Steel Casing
      </text>
      <rect x="148" y="506" width="12" height="10" fill="#ef4444" rx="1" />
      <text x="166" y="514" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Rebar
      </text>
      <rect
        x="222"
        y="506"
        width="12"
        height="10"
        fill="#d4a26a"
        fillOpacity="0.8"
        rx="1"
      />
      <text x="240" y="514" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Cement Grout
      </text>
    </svg>
  );
}

function DiaphragmWallDiagram() {
  return (
    <svg
      viewBox="0 0 700 540"
      className="w-full h-auto"
      role="img"
      aria-label="Diaphragm Wall construction and cross-section diagram"
    >
      <rect width="700" height="540" fill="#0f172a" rx="8" />
      <text
        x="350"
        y="28"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
      >
        Diaphragm Wall — Construction Sequence & Cross-Section
      </text>

      {/* ── Construction Sequence (left) ── */}
      <text
        x="180"
        y="52"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontFamily="monospace"
      >
        CONSTRUCTION STAGES
      </text>

      {/* Stage 1: Guide walls */}
      <text x="76" y="72" fill="#64748b" fontSize="9" fontFamily="monospace">
        ① Guide Walls
      </text>
      <rect
        x="62"
        y="78"
        width="18"
        height="100"
        fill="#475569"
        stroke="#64748b"
        strokeWidth="1"
        rx="1"
      />
      <rect
        x="152"
        y="78"
        width="18"
        height="100"
        fill="#475569"
        stroke="#64748b"
        strokeWidth="1"
        rx="1"
      />
      <text
        x="116"
        y="72"
        textAnchor="middle"
        fill="#64748b"
        fontSize="8"
        fontFamily="monospace"
      >
        Guide Wall
      </text>
      <line
        x1="80"
        y1="83"
        x2="152"
        y2="83"
        stroke="#64748b"
        strokeWidth="1.5"
        strokeDasharray="3,3"
      />

      {/* Stage 2: Slurry trench */}
      <text x="76" y="198" fill="#64748b" fontSize="9" fontFamily="monospace">
        ② Slurry Trench
      </text>
      <rect x="62" y="204" width="18" height="100" fill="#475569" rx="1" />
      <rect x="152" y="204" width="18" height="100" fill="#475569" rx="1" />
      <rect
        x="80"
        y="204"
        width="72"
        height="100"
        fill="#1e40af"
        fillOpacity="0.5"
        stroke="#3b82f6"
        strokeWidth="1"
      />
      {/* Bentonite slurry waves */}
      {[220, 240, 260, 280, 290].map((y) => (
        <path
          key={y}
          d={`M 80 ${y} Q 96 ${y - 5} 116 ${y} Q 136 ${y + 5} 152 ${y}`}
          fill="none"
          stroke="#60a5fa"
          strokeWidth="0.8"
        />
      ))}
      <text
        x="116"
        y="265"
        textAnchor="middle"
        fill="#60a5fa"
        fontSize="8"
        fontFamily="monospace"
      >
        Bentonite
      </text>
      <text
        x="116"
        y="275"
        textAnchor="middle"
        fill="#60a5fa"
        fontSize="8"
        fontFamily="monospace"
      >
        Slurry
      </text>

      {/* Stage 3: Rebar cage insertion */}
      <text x="76" y="324" fill="#64748b" fontSize="9" fontFamily="monospace">
        ③ Rebar Cage
      </text>
      <rect x="62" y="330" width="18" height="100" fill="#475569" rx="1" />
      <rect x="152" y="330" width="18" height="100" fill="#475569" rx="1" />
      <rect
        x="80"
        y="330"
        width="72"
        height="100"
        fill="#1e40af"
        fillOpacity="0.3"
      />
      {/* Rebar cage */}
      <rect
        x="90"
        y="332"
        width="52"
        height="96"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.5"
      />
      {[342, 362, 382, 402, 418].map((y) => (
        <line
          key={y}
          x1="90"
          y1={y}
          x2="142"
          y2={y}
          stroke="#ef4444"
          strokeWidth="1"
        />
      ))}
      {[98, 108, 118, 128, 138].map((x) => (
        <line
          key={x}
          x1={x}
          y1="332"
          x2={x}
          y2="428"
          stroke="#ef4444"
          strokeWidth="1"
        />
      ))}
      <text
        x="116"
        y="445"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="8"
        fontFamily="monospace"
      >
        Rebar Cage
      </text>

      {/* Stage 4: Concrete pour */}
      <text x="76" y="460" fill="#64748b" fontSize="9" fontFamily="monospace">
        ④ Concrete Panel
      </text>
      <rect x="62" y="466" width="18" height="60" fill="#475569" rx="1" />
      <rect x="152" y="466" width="18" height="60" fill="#475569" rx="1" />
      <rect
        x="80"
        y="466"
        width="72"
        height="60"
        fill="#6b7280"
        stroke="#94a3b8"
        strokeWidth="1"
      />
      {/* Rebar visible in concrete */}
      {[90, 116, 142].map((x) => (
        <line
          key={x}
          x1={x}
          y1="466"
          x2={x}
          y2="526"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
      ))}
      <text
        x="116"
        y="504"
        textAnchor="middle"
        fill="#cbd5e1"
        fontSize="8"
        fontFamily="monospace"
      >
        RC Panel
      </text>

      {/* ── Cross-Section (right half) ── */}
      <line
        x1="248"
        y1="45"
        x2="248"
        y2="530"
        stroke="#334155"
        strokeWidth="1"
        strokeDasharray="6,4"
      />
      <text
        x="490"
        y="52"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        fontFamily="monospace"
      >
        CROSS-SECTION
      </text>

      {/* Ground surface */}
      <line
        x1="260"
        y1="90"
        x2="690"
        y2="90"
        stroke="#92400e"
        strokeWidth="2.5"
      />
      {[
        268, 288, 308, 328, 348, 368, 388, 408, 428, 448, 468, 488, 508, 528,
        548, 568, 588, 608, 628, 648, 668, 688,
      ].map((x) => (
        <line
          key={x}
          x1={x}
          y1={90}
          x2={x - 12}
          y2={78}
          stroke="#92400e"
          strokeWidth="1.5"
        />
      ))}

      {/* Guide walls at top */}
      <rect
        x="330"
        y="68"
        width="20"
        height="35"
        fill="#475569"
        stroke="#64748b"
        strokeWidth="1"
        rx="1"
      />
      <rect
        x="470"
        y="68"
        width="20"
        height="35"
        fill="#475569"
        stroke="#64748b"
        strokeWidth="1"
        rx="1"
      />
      <text
        x="410"
        y="63"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="9"
        fontFamily="monospace"
      >
        Guide Wall
      </text>

      {/* Diaphragm wall panel */}
      <rect
        x="350"
        y="68"
        width="120"
        height="440"
        fill="#374151"
        stroke="#6b7280"
        strokeWidth="2"
      />

      {/* Rebar inside wall */}
      {[360, 375, 390, 420, 435, 450].map((x) => (
        <line
          key={x}
          x1={x}
          y1="80"
          x2={x}
          y2="508"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
      ))}
      {[110, 145, 180, 215, 250, 285, 320, 355, 390, 425, 460].map((y) => (
        <line
          key={y}
          x1="355"
          y1={y}
          x2="465"
          y2={y}
          stroke="#ef4444"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
      ))}

      {/* Panel joints */}
      <line
        x1="350"
        y1="68"
        x2="350"
        y2="508"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      <line
        x1="470"
        y1="68"
        x2="470"
        y2="508"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeDasharray="4,4"
      />

      {/* Waterstop symbol */}
      <ellipse
        cx="350"
        cy="290"
        rx="6"
        ry="12"
        fill="#22d3ee"
        fillOpacity="0.7"
      />
      <ellipse
        cx="470"
        cy="290"
        rx="6"
        ry="12"
        fill="#22d3ee"
        fillOpacity="0.7"
      />

      {/* Retained soil */}
      <rect
        x="490"
        y="90"
        width="200"
        height="350"
        fill="#78350f"
        fillOpacity="0.3"
      />

      {/* Excavated side */}
      <rect
        x="260"
        y="90"
        width="90"
        height="350"
        fill="#1e293b"
        fillOpacity="0.3"
      />

      {/* Excavation level */}
      <line
        x1="260"
        y1="360"
        x2="648"
        y2="360"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeDasharray="8,4"
      />
      <text x="264" y="353" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        EXCAVATION LEVEL
      </text>

      {/* Dim: H */}
      <line
        x1="648"
        y1="90"
        x2="648"
        y2="360"
        stroke="#f8fafc"
        strokeWidth="1"
      />
      <polygon points="648,90 643,105 653,105" fill="#f8fafc" />
      <polygon points="648,360 643,345 653,345" fill="#f8fafc" />
      <text x="660" y="228" fill="#f8fafc" fontSize="10" fontFamily="monospace">
        H
      </text>
      <text x="660" y="240" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Exc.
      </text>

      {/* Dim: t (wall thickness) */}
      <line
        x1="350"
        y1="495"
        x2="470"
        y2="495"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <polygon points="350,495 365,490 365,500" fill="#fbbf24" />
      <polygon points="470,495 455,490 455,500" fill="#fbbf24" />
      <text
        x="410"
        y="510"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="9"
        fontFamily="monospace"
      >
        t = 600–1200 mm
      </text>

      {/* Labels */}
      <line
        x1="410"
        y1="250"
        x2="495"
        y2="230"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <text x="497" y="227" fill="#fbbf24" fontSize="9" fontFamily="monospace">
        RC Panel
      </text>

      <line
        x1="350"
        y1="290"
        x2="310"
        y2="280"
        stroke="#22d3ee"
        strokeWidth="1"
      />
      <text
        x="308"
        y="277"
        textAnchor="end"
        fill="#22d3ee"
        fontSize="9"
        fontFamily="monospace"
      >
        Waterstop
      </text>
      <text
        x="308"
        y="288"
        textAnchor="end"
        fill="#22d3ee"
        fontSize="8"
        fontFamily="monospace"
      >
        (Panel Joint)
      </text>

      {/* Legend */}
      <rect
        x="260"
        y="468"
        width="340"
        height="55"
        fill="#1e293b"
        rx="4"
        stroke="#334155"
        strokeWidth="1"
      />
      <text
        x="430"
        y="484"
        textAnchor="middle"
        fill="#e2e8f0"
        fontSize="10"
        fontWeight="bold"
        fontFamily="monospace"
      >
        LEGEND
      </text>
      <rect
        x="270"
        y="490"
        width="14"
        height="10"
        fill="#374151"
        stroke="#6b7280"
        strokeWidth="1"
        rx="1"
      />
      <text x="290" y="499" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        RC Panel
      </text>
      <line
        x1="362"
        y1="495"
        x2="376"
        y2="495"
        stroke="#ef4444"
        strokeWidth="2"
      />
      <text x="380" y="499" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Reinforcement
      </text>
      <line
        x1="460"
        y1="495"
        x2="474"
        y2="495"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeDasharray="3,2"
      />
      <text x="478" y="499" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Panel Joint / Waterstop
      </text>
      <rect x="270" y="507" width="14" height="8" fill="#475569" rx="1" />
      <text x="290" y="514" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Guide Wall
      </text>
      <rect
        x="362"
        y="507"
        width="14"
        height="8"
        fill="#1e40af"
        fillOpacity="0.6"
        rx="1"
      />
      <text x="380" y="514" fill="#94a3b8" fontSize="9" fontFamily="monospace">
        Bentonite Slurry Trench
      </text>
    </svg>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

const DIAGRAM_MAP: Record<string, () => React.ReactElement> = {
  "soldier-pile": SoldierPileDiagram,
  "secant-pile": SecantPileDiagram,
  "sheet-pile": SheetPileDiagram,
  "tangent-pile": TangentPileDiagram,
  micropile: MicropileDiagram,
  "diaphragm-wall": DiaphragmWallDiagram,
};

export function SystemDiagram({ systemId }: SystemDiagramProps) {
  const DiagramComponent = DIAGRAM_MAP[systemId];
  if (!DiagramComponent) return null;

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 mb-2">
      <div className="mb-2 flex items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
          Technical Diagram
        </span>
        <span className="text-xs text-muted-foreground">
          — Cross-section / Plan View
        </span>
      </div>
      <DiagramComponent />
    </div>
  );
}
