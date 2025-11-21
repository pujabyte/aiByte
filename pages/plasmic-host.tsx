// pages/plasmic-host.tsx

import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
} from "@plasmicapp/react-web/lib/host";

// Import komponen shadcn (relative terhadap folder /pages)
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";



// =====================================
// REGISTER SHADCN COMPONENTS KE PLASMIC
// =====================================

// BUTTON
registerComponent(Button, {
  name: "ShadcnButton",
  // importPath dipakai oleh Plasmic Codegen saat generate code
  importPath: "./components/ui/button",
  props: {
    children: "slot",
    variant: {
      type: "choice",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      type: "choice",
      options: ["default", "sm", "lg", "icon"],
    },
    className: { type: "class" },
  },
});

// CARD (container)
registerComponent(Card, {
  name: "ShadcnCard",
  importPath: "./components/ui/card",
  props: {
    children: "slot",
    className: { type: "class" },
  },
});

// INPUT
registerComponent(Input, {
  name: "ShadcnInput",
  importPath: "./components/ui/input",
  props: {
    placeholder: "string",
    type: {
      type: "choice",
      options: ["text", "email", "password", "number"],
    },
    value: "string",
    // gunakan "function" (bukan "eventHandler") untuk host codegen
    onChange: "function",
    className: { type: "class" },
  },
});

// =====================================
// CANVAS HOST UNTUK PLASMIC
// =====================================

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
