"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const SpiralContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
`;

const positions = [
  { id: "⊚₀", angle: 270, r: 20, color: "#111111", size: 14 },
  { id: "0", angle: 330, r: 70, color: "#0057FF", size: 11 },
  { id: "1", angle: 30, r: 120, color: "#0057FF", size: 11 },
  { id: "O", angle: 90, r: 155, color: "#111111", size: 13 },
  { id: "un", angle: 150, r: 175, color: "#0057FF", size: 11 },
  { id: "∞", angle: 210, r: 190, color: "#0057FF", size: 11 },
  { id: "⊚₀⁺", angle: 270, r: 210, color: "#111111", size: 14 },
];

function toXY(angle: number, r: number, cx = 240, cy = 240) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export default function SpiralDiagram() {
  const pts = positions.map((p) => toXY(p.angle, p.r));

  // Build smooth spiral path
  const pathD = pts
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  return (
    <SpiralContainer>
      <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circles */}
        {[60, 110, 160, 210].map((r) => (
          <circle
            key={r}
            cx={240}
            cy={240}
            r={r}
            stroke="#e8e8e8"
            strokeWidth="0.5"
            strokeDasharray="3 5"
          />
        ))}

        {/* Animated spiral path */}
        <motion.path
          d={pathD}
          stroke="#111111"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Arrow at end */}
        <motion.polygon
          points={`${pts[6].x},${pts[6].y - 6} ${pts[6].x + 5},${pts[6].y + 4} ${pts[6].x - 5},${pts[6].y + 4}`}
          fill="#111111"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.4 }}
        />

        {/* Position nodes */}
        {positions.map((pos, i) => {
          const { x, y } = pts[i];
          const isOrigin = pos.id === "⊚₀" || pos.id === "⊚₀⁺";
          const isO = pos.id === "O";

          return (
            <motion.g
              key={pos.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + i * 0.25,
                duration: 0.4,
                type: "spring",
                stiffness: 200,
              }}
            >
              {/* Outer ring for key nodes */}
              {(isOrigin || isO) && (
                <circle
                  cx={x}
                  cy={y}
                  r={pos.size + 8}
                  stroke={pos.color}
                  strokeWidth="0.8"
                  opacity={0.25}
                />
              )}

              {/* Main circle */}
              <circle
                cx={x}
                cy={y}
                r={pos.size}
                fill={isOrigin || isO ? pos.color : "white"}
                stroke={pos.color}
                strokeWidth="1.5"
              />

              {/* Inner dot for special nodes */}
              {(isOrigin || isO) && (
                <circle cx={x} cy={y} r={3} fill="white" />
              )}

              {/* Label */}
              <text
                x={x}
                y={y - pos.size - 6}
                textAnchor="middle"
                fontSize="11"
                fontFamily="DM Mono, monospace"
                fontWeight="500"
                fill={pos.color}
                letterSpacing="0.02em"
              >
                {pos.id}
              </text>
            </motion.g>
          );
        })}

        {/* Orbital pulse for O */}
        <motion.circle
          cx={toXY(90, 155).x}
          cy={toXY(90, 155).y}
          r={22}
          stroke="#111111"
          strokeWidth="0.6"
          fill="none"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 2.5 }}
        />
      </svg>
    </SpiralContainer>
  );
}
