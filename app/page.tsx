export default function Page() {
  return (
    <div style={{minHeight:'100vh', background:'#050505', color:'#fff', display:'flex', flexDirection:'column'}}>
      <div style={{padding:'12px 20px', background:'#111', borderBottom:'1px solid #222', display:'flex', justifyContent:'space-between', alignItems:'center', fontFamily:'sans-serif'}}>
        <span style={{fontWeight:700}}>MANIFEST.AR v6.3 - ONLINE ✅</span>
        <span style={{opacity:0.6, fontSize:12}}>Nebulizador Hogareño + Kids + Sin Acople - 404 FIXED</span>
      </div>
      <iframe src="/studio.html" style={{flex:1, width:'100%', border:0, minHeight:'calc(100vh - 45px)'}} title="Studio" />
    </div>
  )
}
