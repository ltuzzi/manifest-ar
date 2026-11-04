export const metadata = {
  title: 'MANIFEST.AR v6.3 - Nebulizador Hogareño + Kids + Sin Acople',
  description: 'Laboratorio de abundancia con sonido nebulizador casero chuf-chuf',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{margin:0, background:'#050505'}}>{children}</body>
    </html>
  )
}
