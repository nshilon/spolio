import{j as e}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as t}from"./index-ChEI-nsM.js";import{M as r}from"./index-DwcS7Lvx.js";import"./index-DRjF_FHU.js";import"./iframe-eN-aukZy.js";import"./index-Bx0Ph3cE.js";import"./index-FTTXbSiM.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Welcome"}),`
`,e.jsx("style",{children:`
    .welcome-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .logo-container {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
    
    .logo {
      width: 200px;
      height: 200px;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }
    
    .feature-card {
      padding: 1.5rem;
      border-radius: 8px;
      background-color: var(--color-background-secondary);
      border: 1px solid var(--color-border-primary);
    }
    
    .feature-card h3 {
      margin-top: 0;
      color: var(--color-primary-600);
    }
  `}),`
`,e.jsxs("div",{className:"welcome-container",children:[e.jsx("div",{className:"logo-container",children:e.jsx("img",{src:"/logo.svg",alt:"Enta UI Kit Logo",className:"logo"})}),e.jsx(n.h1,{id:"welcome-to-enta-ui-kit",children:"Welcome to Enta UI Kit"}),e.jsx(n.p,{children:`Enta UI Kit is a modern, accessible, and customizable component library for React applications.
Built with a focus on developer experience and user accessibility, it provides a comprehensive set
of components to build beautiful and functional user interfaces.`}),e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),e.jsx(n.p,{children:"Browse components in the sidebar to see examples, documentation, and interactive controls."}),e.jsxs("div",{className:"feature-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Themeable"}),e.jsx("p",{children:"Fully customizable theming system with light and dark mode support out of the box."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Accessible"}),e.jsx("p",{children:"Built with accessibility in mind, following WCAG guidelines and best practices."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Responsive"}),e.jsx("p",{children:"Components designed to work seamlessly across all device sizes and screen types."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Customizable"}),e.jsx("p",{children:"Easily customize components to match your brand and design requirements."})]})]}),e.jsx(n.h2,{id:"core-components",children:"Core Components"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Button"}),": Versatile button component with multiple variants and sizes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"}),": Comprehensive icon system with customizable sizes and colors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alert"}),": Informative alert messages with different severity levels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ThemeSwitcher"}),": Easy theme switching between light and dark modes"]}),`
`]}),e.jsx(n.h2,{id:"usage",children:"Usage"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button, Icon, Alert } from 'enta-ui';

function MyComponent() {
  return (
    <div>
      <Alert type="success" title="Success">
        Operation completed successfully!
      </Alert>
      
      <Button variant="primary" size="medium">
        <Icon name="check" size="small" />
        Submit
      </Button>
    </div>
  );
}
`})})]})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}const x=[];export{x as __namedExportsOrder,u as default};
