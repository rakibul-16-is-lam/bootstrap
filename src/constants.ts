export interface CheatSheetItem {
  class: string;
  description: string;
  example?: string;
  previewClass?: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  items: CheatSheetItem[];
}

export const CHEAT_SHEET_DATA: Section[] = [
  {
    id: "text-colors",
    title: "🎨 1. Text Colors",
    icon: "Palette",
    items: [
      { class: "text-primary", description: "Blue (Main brand color)", previewClass: "text-primary fw-bold" },
      { class: "text-secondary", description: "Gray (Secondary)", previewClass: "text-secondary fw-bold" },
      { class: "text-success", description: "Green (Success)", previewClass: "text-success fw-bold" },
      { class: "text-danger", description: "Red (Danger)", previewClass: "text-danger fw-bold" },
      { class: "text-warning", description: "Yellow (Warning)", previewClass: "text-warning fw-bold" },
      { class: "text-info", description: "Sky Blue (Info)", previewClass: "text-info fw-bold" },
      { class: "text-light", description: "Light text", previewClass: "text-light bg-dark px-2 rounded fw-bold" },
      { class: "text-dark", description: "Dark text", previewClass: "text-dark fw-bold" },
      { class: "text-muted", description: "Faded / De-emphasized", previewClass: "text-muted fw-bold" },
    ]
  },
  {
    id: "bg-colors",
    title: "🟩 2. Background Colors",
    icon: "Square",
    items: [
      { class: "bg-primary", description: "Blue Background", previewClass: "bg-primary text-white p-2 rounded ring-1 ring-blue-700" },
      { class: "bg-success", description: "Green Background", previewClass: "bg-success text-white p-2 rounded ring-1 ring-green-700" },
      { class: "bg-danger", description: "Red Background", previewClass: "bg-danger text-white p-2 rounded ring-1 ring-red-700" },
      { class: "bg-warning", description: "Yellow Background", previewClass: "bg-warning text-dark p-2 rounded ring-1 ring-yellow-600" },
      { class: "bg-info", description: "Sky Blue Background", previewClass: "bg-info text-white p-2 rounded ring-1 ring-cyan-600" },
      { class: "bg-light", description: "Light Background", previewClass: "bg-light text-dark p-2 rounded border" },
      { class: "bg-dark", description: "Dark Background", previewClass: "bg-dark text-white p-2 rounded" },
      { class: "bg-white", description: "White Background", previewClass: "bg-white text-dark p-2 rounded border" },
    ]
  },
  {
    id: "margin",
    title: "📏 3. Spacing (Margin)",
    icon: "Move",
    items: [
      { class: "m-0 → m-5", description: "Margin on all sides", example: "m-3" },
      { class: "mt-0 → mt-5", description: "Margin Top", example: "mt-4" },
      { class: "mb-0 → mb-5", description: "Margin Bottom", example: "mb-2" },
      { class: "ms-0 → ms-5", description: "Margin Start (Left)", example: "ms-auto" },
      { class: "me-0 → me-5", description: "Margin End (Right)", example: "me-3" },
      { class: "mx-0 → mx-5", description: "Margin Left + Right", example: "mx-auto" },
      { class: "my-0 → my-5", description: "Margin Top + Bottom", example: "my-5" },
    ]
  },
  {
    id: "padding",
    title: "🟢 4. Spacing (Padding)",
    icon: "Maximize",
    items: [
      { class: "p-0 → p-5", description: "Padding on all sides", example: "p-4" },
      { class: "pt-0 → pt-5", description: "Padding Top", example: "pt-3" },
      { class: "pb-0 → pb-5", description: "Padding Bottom", example: "pb-5" },
      { class: "ps-0 → ps-5", description: "Padding Start (Left)", example: "ps-2" },
      { class: "pe-0 → pe-5", description: "Padding End (Right)", example: "pe-4" },
      { class: "px-0 → px-5", description: "Padding Left + Right", example: "px-5" },
      { class: "py-0 → py-5", description: "Padding Top + Bottom", example: "py-2" },
    ]
  },
  {
    id: "display",
    title: "🧱 5. Display & Position",
    icon: "Layout",
    items: [
      { class: "d-none", description: "Hide completely" },
      { class: "d-block", description: "Block element" },
      { class: "d-inline", description: "Inline element" },
      { class: "d-inline-block", description: "Inline + Block" },
      { class: "d-flex", description: "Flexbox container" },
      { class: "d-grid", description: "Grid container" },
      { class: "position-static", description: "Default positioning" },
      { class: "position-relative", description: "Relative to Normal" },
      { class: "position-absolute", description: "Relative to Parent" },
      { class: "position-fixed", description: "Fixed to Viewport" },
      { class: "position-sticky", description: "Sticky while scrolling" },
    ]
  },
  {
    id: "grid",
    title: "📐 6. Grid System (Layout)",
    icon: "Grid",
    items: [
      { class: "container", description: "Responsive fixed width" },
      { class: "container-fluid", description: "100% width" },
      { class: "row", description: "Column wrapper" },
      { class: "col", description: "Auto-sizing column" },
      { class: "col-12", description: "Full width (all devices)" },
      { class: "col-sm-*", description: "Small device breakpoint" },
      { class: "col-md-*", description: "Medium device breakpoint" },
      { class: "col-lg-*", description: "Large device breakpoint" },
      { class: "col-xl-*", description: "Extra large breakpoint" },
      { class: "col-xxl-*", description: "Ultra large breakpoint" },
    ]
  },
  {
    id: "text-style",
    title: "🔤 7. Text Styling",
    icon: "Type",
    items: [
      { class: "text-start", description: "Align Left" },
      { class: "text-center", description: "Align Center" },
      { class: "text-end", description: "Align Right" },
      { class: "fw-bold", description: "Bold (Font Weight)" },
      { class: "fw-light", description: "Light (Font Weight)" },
      { class: "fst-italic", description: "Italic text" },
      { class: "fs-1 → fs-6", description: "Font Size 1-6" },
      { class: "lh-1 → lh-lg", description: "Line Height" },
    ]
  },
  {
    id: "buttons",
    title: "🔘 8. Buttons",
    icon: "MousePointer2",
    items: [
      { class: "btn", description: "Base class", previewClass: "btn btn-light border" },
      { class: "btn-primary", description: "Blue button", previewClass: "btn btn-primary" },
      { class: "btn-secondary", description: "Gray button", previewClass: "btn btn-secondary" },
      { class: "btn-success", description: "Green button", previewClass: "btn btn-success" },
      { class: "btn-danger", description: "Red button", previewClass: "btn btn-danger" },
      { class: "btn-outline-primary", description: "Outlined button", previewClass: "btn btn-outline-primary" },
      { class: "btn-lg", description: "Large size", previewClass: "btn btn-primary btn-lg" },
      { class: "btn-sm", description: "Small size", previewClass: "btn btn-primary btn-sm" },
    ]
  },
  {
    id: "forms",
    title: "🧾 9. Forms",
    icon: "FileText",
    items: [
      { class: "form-control", description: "Input field design" },
      { class: "form-label", description: "Label text" },
      { class: "form-text", description: "Helper text" },
      { class: "form-select", description: "Drop-down menu" },
      { class: "form-check", description: "Checkbox/Radio wrap" },
    ]
  },
  {
    id: "cards",
    title: "🪟 10. Cards",
    icon: "CreditCard",
    items: [
      { class: "card", description: "Main container" },
      { class: "card-body", description: "Content area" },
      { class: "card-title", description: "Header text" },
      { class: "card-header", description: "Top section" },
      { class: "card-footer", description: "Bottom section" },
    ]
  },
  {
    id: "borders",
    title: "🧱 11. Borders",
    icon: "Frame",
    items: [
      { class: "border", description: "Standard border" },
      { class: "border-0", description: "No border" },
      { class: "border-1 → border-5", description: "Border width" },
      { class: "rounded", description: "Standard curves" },
      { class: "rounded-circle", description: "Circle shape" },
      { class: "rounded-pill", description: "Pill shape" },
    ]
  },
  {
    id: "flexbox",
    title: "📊 12. Flexbox",
    icon: "Rows",
    items: [
      { class: "d-flex", description: "Enable Flex" },
      { class: "flex-row", description: "Horizontal" },
      { class: "flex-column", description: "Vertical" },
      { class: "justify-content-center", description: "Horizontal Center" },
      { class: "justify-content-between", description: "Space Between" },
      { class: "align-items-center", description: "Vertical Center" },
      { class: "flex-wrap", description: "Wrap items" },
    ]
  },
  {
    id: "shadows",
    title: "🌫️ 13. Shadows",
    icon: "Cloud",
    items: [
      { class: "shadow-sm", description: "Small Shadow" },
      { class: "shadow", description: "Normal Shadow" },
      { class: "shadow-lg", description: "Large Shadow" },
      { class: "shadow-none", description: "No Shadow" },
    ]
  },
  {
    id: "responsive",
    title: "📱 14. Responsive",
    icon: "Smartphone",
    items: [
      { class: "d-sm-none", description: "Hide on Small" },
      { class: "d-md-block", description: "Block on Medium" },
      { class: "d-lg-flex", description: "Flex on Large" },
      { class: "d-xl-inline", description: "Inline on XL" },
    ]
  },
  {
    id: "visibility",
    title: "👁️ 15. Visibility",
    icon: "Compass",
    items: [
      { class: "visible", description: "Show element" },
      { class: "invisible", description: "Hide (keeps space)" },
    ]
  },
  {
    id: "navbar",
    title: "🧭 16. Navbar",
    icon: "Compass",
    items: [
      { class: "navbar", description: "Navbar wrapper" },
      { class: "navbar-brand", description: "Logo/Title" },
      { class: "navbar-nav", description: "Menu container" },
      { class: "nav-item", description: "List item" },
      { class: "nav-link", description: "Clickable link" },
    ]
  },
  {
    id: "sizing",
    title: "📐 17. Sizing",
    icon: "ArrowRightLeft",
    items: [
      { class: "w-25 → w-100", description: "Width 25-100%" },
      { class: "h-25 → h-100", description: "Height 25-100%" },
    ]
  }
];
