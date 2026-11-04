"use client"
import { useEffect, useState } from 'react'
export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(()=>setMounted(true),[])
  if(!mounted) return <div style={{background:'#050505', height:'100vh', color:'#D4AF37', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'monospace'}}>MANIFEST.AR v6.2 cargando...</div>
  return (
    <iframe 
      src="/studio.html" 
      style={{width:'100vw', height:'100vh', border:'none', background:'#050505'}}
      allow="autoplay"
      title="MANIFEST.AR"
    />
  )
}
