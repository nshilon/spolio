import{j as r}from"./jsx-runtime-DiklIkkE.js";import{B as e}from"./button-C5YdoOEq.js";import{I as w}from"./icon-s18fzpKj.js";import"./index-DRjF_FHU.js";const F={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"],description:"The visual style of the button"},size:{control:{type:"select"},options:["small","medium","large"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},onClick:{action:"clicked"}}},a={args:{variant:"primary",children:"Primary Button"}},s={args:{variant:"secondary",children:"Secondary Button"}},t={args:{size:"small",children:"Small Button"}},i={args:{size:"medium",children:"Medium Button"}},n={args:{size:"large",children:"Large Button"}},o={args:{disabled:!0,children:"Disabled Button"}},m={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(w,{name:"check",size:"small",style:{marginRight:"0.5rem"}}),"Button with Icon"]})}},d={render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[r.jsx(e,{variant:"primary",size:"small",children:"Primary Small"}),r.jsx(e,{variant:"primary",size:"medium",children:"Primary Medium"}),r.jsx(e,{variant:"primary",size:"large",children:"Primary Large"}),r.jsx(e,{variant:"secondary",size:"small",children:"Secondary Small"}),r.jsx(e,{variant:"secondary",size:"medium",children:"Secondary Medium"}),r.jsx(e,{variant:"secondary",size:"large",children:"Secondary Large"}),r.jsx(e,{variant:"primary",size:"small",disabled:!0,children:"Disabled Primary"}),r.jsx(e,{variant:"secondary",size:"medium",disabled:!0,children:"Disabled Secondary"}),r.jsxs(e,{variant:"primary",size:"large",children:[r.jsx(w,{name:"arrow-right",size:"small",style:{marginRight:"0.5rem"}}),"With Icon"]})]})};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,y,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,B,z;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(z=(B=t.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var S,v,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    children: 'Medium Button'
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,j,P;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(P=(j=n.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var I,f,D;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(D=(f=o.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var L,M,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <>
        <Icon name="check" size="small" style={{
        marginRight: '0.5rem'
      }} />
        Button with Icon
      </>
  }
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var T,W,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
  }}>
      <Button variant="primary" size="small">Primary Small</Button>
      <Button variant="primary" size="medium">Primary Medium</Button>
      <Button variant="primary" size="large">Primary Large</Button>
      
      <Button variant="secondary" size="small">Secondary Small</Button>
      <Button variant="secondary" size="medium">Secondary Medium</Button>
      <Button variant="secondary" size="large">Secondary Large</Button>
      
      <Button variant="primary" size="small" disabled>Disabled Primary</Button>
      <Button variant="secondary" size="medium" disabled>Disabled Secondary</Button>
      <Button variant="primary" size="large">
        <Icon name="arrow-right" size="small" style={{
        marginRight: '0.5rem'
      }} />
        With Icon
      </Button>
    </div>
}`,...(k=(W=d.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const O=["Primary","Secondary","Small","Medium","Large","Disabled","WithIcon","ButtonGrid"];export{d as ButtonGrid,o as Disabled,n as Large,i as Medium,a as Primary,s as Secondary,t as Small,m as WithIcon,O as __namedExportsOrder,F as default};
