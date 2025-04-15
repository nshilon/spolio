import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as l}from"./icon-s18fzpKj.js";import"./index-DRjF_FHU.js";const O={title:"Components/Icon",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"select"},options:["arrow-down","arrow-left","arrow-right","arrow-up","check","close","info","warning","error","success","sun","moon"],description:"The name of the icon to display"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the icon"},variant:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger","info"],description:"The color variant of the icon"}}},s={args:{name:"info",size:"medium",variant:"default"}},n={args:{name:"info",size:"medium",variant:"primary"}},o={args:{name:"info",size:"small",variant:"default"}},i={args:{name:"info",size:"medium",variant:"default"}},t={args:{name:"info",size:"large",variant:"default"}},m={render:()=>{const a=["arrow-down","arrow-left","arrow-right","arrow-up","check","close","info","warning","error","success","sun","moon"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"2rem"},children:a.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem",border:"1px solid var(--color-border-primary)",borderRadius:"var(--border-radius-m)"},children:[e.jsx(l,{name:r,size:"large"}),e.jsx("span",{style:{marginTop:"0.5rem",fontSize:"var(--font-size-sm)"},children:r})]},r))})}},d={render:()=>{const a=["default","primary","secondary","success","warning","danger","info"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:a.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"0.5rem 1rem",border:"1px solid var(--color-border-primary)",borderRadius:"var(--border-radius-m)"},children:[e.jsx(l,{name:"info",size:"medium",variant:r}),e.jsx("span",{children:r})]},r))})}},c={render:()=>{const a=["small","medium","large"];return e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:a.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(l,{name:"info",size:r}),e.jsx("span",{style:{fontSize:"var(--font-size-sm)"},children:r})]},r))})}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'info',
    size: 'medium',
    variant: 'default'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'info',
    size: 'medium',
    variant: 'primary'
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,z,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'info',
    size: 'small',
    variant: 'default'
  }
}`,...(h=(z=o.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var w,I,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'info',
    size: 'medium',
    variant: 'default'
  }
}`,...(b=(I=i.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var S,j,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'info',
    size: 'large',
    variant: 'default'
  }
}`,...(D=(j=t.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var T,k,C;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const icons: IconName[] = ['arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'check', 'close', 'info', 'warning', 'error', 'success', 'sun', 'moon'];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem'
    }}>
        {icons.map(iconName => <div key={iconName} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-m)'
      }}>
            <Icon name={iconName} size="large" />
            <span style={{
          marginTop: '0.5rem',
          fontSize: 'var(--font-size-sm)'
        }}>{iconName}</span>
          </div>)}
      </div>;
  }
}`,...(C=(k=m.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var R,V,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        {variants.map(variant => <div key={variant} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.5rem 1rem',
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--border-radius-m)'
      }}>
            <Icon name="info" size="medium" variant={variant as any} />
            <span>{variant}</span>
          </div>)}
      </div>;
  }
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var A,E,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['small', 'medium', 'large'];
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    }}>
        {sizes.map(size => <div key={size} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
            <Icon name="info" size={size as any} />
            <span style={{
          fontSize: 'var(--font-size-sm)'
        }}>{size}</span>
          </div>)}
      </div>;
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const q=["Default","Primary","Small","Medium","Large","AllIcons","ColorVariants","SizeVariants"];export{m as AllIcons,d as ColorVariants,s as Default,t as Large,i as Medium,n as Primary,c as SizeVariants,o as Small,q as __namedExportsOrder,O as default};
