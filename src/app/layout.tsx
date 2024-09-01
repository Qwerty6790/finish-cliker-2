'use client'

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();

  return (
    <html> 
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" async></script>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body > 
      {children}
      { pathName !=="/error-page" &&
      <footer className="navigation-panel">
        <div className="icons" > 
        <div className="icon"> 
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)' }}>
  <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
</svg>
<a href='/'>Главная</a>
        </div> 
        </div> 
         
        <div className="icons"> 
        <div className="icon"  >  
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)' }}>
  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915z"></path>
</svg>
          <a href='/boosters'>Уровни</a> 
        </div> 
        </div>
        <div className="icons" > 
        <div className="icon" >  
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)', transform: '', msFilter: '' }}>
  <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z"></path>
  <path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
</svg>
          <a href='/friends'>Друзья</a> 
        </div> 
        </div>
        <div className="icons" > 
        <div className="icon">  
<svg href="/Retings" xmlns="" width="25" height="25" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)' }}>
  <path d="M3 2h2v20H3zm16 0H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-1 10H9v-2h9v2zm0-4H9V6h9v2z"></path>
</svg>
<a href='/ratings'>Рейтинг</a> 
        </div>
        </div>
      </footer>   
      }
      </body> 
    </html> 
  );
}