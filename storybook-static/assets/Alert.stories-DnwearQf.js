import{j as e}from"./jsx-runtime-DiklIkkE.js";import{c as re,I as v}from"./icon-s18fzpKj.js";import"./index-DRjF_FHU.js";const te=re("Alert",{variants:{design:{solid:"Alert--solid",outline:"Alert--outline"},type:{critical:"Alert--critical",danger:"Alert--danger",warning:"Alert--warning",success:"Alert--success",informative:"Alert--informative",discovery:"Alert--discovery"}},defaultVariants:{design:"solid",type:"informative"}}),f=({title:i,children:r,design:t="solid",type:s="informative"})=>e.jsxs("div",{className:te({design:t,type:s}),children:[i&&e.jsx("h2",{className:"Alert__title",children:i}),e.jsxs("div",{className:"Alert__content ",children:[e.jsx(v,{name:"info",className:"Alert__icon"}),e.jsx("div",{children:r})]}),e.jsx(v,{name:"close",className:"Alert__close"})]});f.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},design:{required:!1,tsType:{name:"NonNullable",elements:[{name:"VariantProps['design']",raw:"AlertVariants['design']"}],raw:"NonNullable<AlertVariants['design']>"},description:"",defaultValue:{value:"'solid'",computed:!1}},type:{required:!1,tsType:{name:"NonNullable",elements:[{name:"VariantProps['type']",raw:"AlertVariants['type']"}],raw:"NonNullable<AlertVariants['type']>"},description:"",defaultValue:{value:"'informative'",computed:!1}}}};const ne={title:"Components/Alert",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"The title of the alert"},children:{control:"text",description:"The content of the alert"},design:{control:{type:"select"},options:["solid","outline"],description:"The visual style of the alert"},type:{control:{type:"select"},options:["critical","danger","warning","success","informative","discovery"],description:"The type of the alert which determines its color"}}},a={args:{title:"Alert Title",children:"This is an alert message providing important information to the user."}},n={args:{children:"This is an alert message without a title."}},l={args:{title:"Solid Alert",children:"This is a solid alert with the default style.",design:"solid"}},o={args:{title:"Outline Alert",children:"This is an outline alert with a border.",design:"outline"}},c={args:{title:"Critical Alert",children:"This is a critical alert for very important issues.",type:"critical"}},d={args:{title:"Danger Alert",children:"This is a danger alert for error conditions.",type:"danger"}},p={args:{title:"Warning Alert",children:"This is a warning alert for potential issues.",type:"warning"}},m={args:{title:"Success Alert",children:"This is a success alert for completed actions.",type:"success"}},u={args:{title:"Informative Alert",children:"This is an informative alert providing general information.",type:"informative"}},g={args:{title:"Discovery Alert",children:"This is a discovery alert for new features or tips.",type:"discovery"}},h={render:()=>{const i=["critical","danger","warning","success","informative","discovery"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"500px"},children:i.map(r=>e.jsxs(f,{title:`${r.charAt(0).toUpperCase()+r.slice(1)} Alert`,type:r,children:["This is a ",r," alert message."]},r))})}},y={render:()=>{const i=["solid","outline"],r=["critical","danger","warning","success","informative","discovery"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",maxWidth:"1000px"},children:i.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("h3",{style:{textAlign:"center"},children:[t.charAt(0).toUpperCase()+t.slice(1)," Design"]}),r.map(s=>e.jsxs(f,{title:`${s.charAt(0).toUpperCase()+s.slice(1)}`,design:t,type:s,children:["This is a ",t," ",s," alert."]},`${t}-${s}`))]},t))})}};var A,T,x;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Alert Title',
    children: 'This is an alert message providing important information to the user.'
  }
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var w,S,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'This is an alert message without a title.'
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var N,j,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Solid Alert',
    children: 'This is a solid alert with the default style.',
    design: 'solid'
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var _,W,V;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Outline Alert',
    children: 'This is an outline alert with a border.',
    design: 'outline'
  }
}`,...(V=(W=o.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var $,I,b;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Critical Alert',
    children: 'This is a critical alert for very important issues.',
    type: 'critical'
  }
}`,...(b=(I=c.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var U,O,R;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Danger Alert',
    children: 'This is a danger alert for error conditions.',
    type: 'danger'
  }
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,k,E;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Warning Alert',
    children: 'This is a warning alert for potential issues.',
    type: 'warning'
  }
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var P,z,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Success Alert',
    children: 'This is a success alert for completed actions.',
    type: 'success'
  }
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,G,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Informative Alert',
    children: 'This is an informative alert providing general information.',
    type: 'informative'
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,L;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Discovery Alert',
    children: 'This is a discovery alert for new features or tips.',
    type: 'discovery'
  }
}`,...(L=(K=g.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,Q,X;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const types = ['critical', 'danger', 'warning', 'success', 'informative', 'discovery'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '500px'
    }}>
        {types.map(type => <Alert key={type} title={\`\${type.charAt(0).toUpperCase() + type.slice(1)} Alert\`} type={type as any}>
            This is a {type} alert message.
          </Alert>)}
      </div>;
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const designs = ['solid', 'outline'];
    const types = ['critical', 'danger', 'warning', 'success', 'informative', 'discovery'];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      maxWidth: '1000px'
    }}>
        {designs.map(design => <div key={design} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
            <h3 style={{
          textAlign: 'center'
        }}>{design.charAt(0).toUpperCase() + design.slice(1)} Design</h3>
            
            {types.map(type => <Alert key={\`\${design}-\${type}\`} title={\`\${type.charAt(0).toUpperCase() + type.slice(1)}\`} design={design as any} type={type as any}>
                This is a {design} {type} alert.
              </Alert>)}
          </div>)}
      </div>;
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const le=["Default","WithoutTitle","Solid","Outline","Critical","Danger","Warning","Success","Informative","Discovery","AlertTypes","AlertDesigns"];export{y as AlertDesigns,h as AlertTypes,c as Critical,d as Danger,a as Default,g as Discovery,u as Informative,o as Outline,l as Solid,m as Success,p as Warning,n as WithoutTitle,le as __namedExportsOrder,ne as default};
