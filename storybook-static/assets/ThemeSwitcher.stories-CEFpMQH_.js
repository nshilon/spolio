import{j as r}from"./jsx-runtime-DiklIkkE.js";import{T as h}from"./theme-switcher-CyiFZDN2.js";import"./index-DRjF_FHU.js";import"./button-C5YdoOEq.js";import"./icon-s18fzpKj.js";const w={title:"Components/ThemeSwitcher",component:h,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{}},o={args:{className:"custom-theme-switcher"}},a={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"2rem",borderRadius:"var(--border-radius-l)",backgroundColor:"var(--color-background-secondary)",border:"1px solid var(--color-border-primary)",transition:"all var(--transition-normal) ease"},children:[r.jsx("h2",{children:"Theme Switcher Demo"}),r.jsx("p",{children:"Click the button below to toggle between light and dark themes:"}),r.jsx(h,{}),r.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--color-background-primary)",border:"1px solid var(--color-border-primary)",borderRadius:"var(--border-radius-m)"},children:r.jsx("p",{children:"This content will change appearance based on the selected theme."})})]})};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var d,i,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    className: 'custom-theme-switcher'
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      padding: '2rem',
      borderRadius: 'var(--border-radius-l)',
      backgroundColor: 'var(--color-background-secondary)',
      border: '1px solid var(--color-border-primary)',
      transition: 'all var(--transition-normal) ease'
    }}>
        <h2>Theme Switcher Demo</h2>
        <p>Click the button below to toggle between light and dark themes:</p>
        <ThemeSwitcher />
        <div style={{
        padding: '1rem',
        backgroundColor: 'var(--color-background-primary)',
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-m)'
      }}>
          <p>This content will change appearance based on the selected theme.</p>
        </div>
      </div>;
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const y=["Default","WithCustomClass","ThemeSwitcherDemo"];export{e as Default,a as ThemeSwitcherDemo,o as WithCustomClass,y as __namedExportsOrder,w as default};
