export default function Page() {
  return (
    <div style={{width:'100vw', height:'100vh', background:'#050505', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'sans-serif', flexDirection:'column'}}>
      <h1>MANIFEST.AR v6.2 - ONLINE</h1>
      <p>Nebulizador Hogareño + Kids + Sin Acople</p>
      <p style={{opacity:0.5, fontSize:12, marginTop:20}}>Si ves esto, el 404 se fue.</p>
      <iframe src="/studio.html" style={{width:'90vw', height:'60vh', border:'1px solid #333', marginTop:20}} />
    </div>
  )
}
