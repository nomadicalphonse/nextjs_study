import Link from "next/link";
import "./globals.css";
import { ButtonControl } from "./ButtonControl";

export const metadata = { //서버컴포넌트는 metadata를 사용가능
  title: "빌보드 차트",
  description: "최신 빌보드 차트 정보",
};

export default async function RootLayout({ children }) {
  const resp = await fetch("http://localhost:9999/topics", {cache:'no-store'});
  const rs = await resp.json();
  console.log(rs);
  return (
    <html>
      <body>
        <h1><Link href="/">빌보드 차트</Link></h1>
        <ol>
          {rs.map((topic)=>{
            return <li key={topic.id}><Link href={`/view/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <ButtonControl />
      </body>
    </html>
  );
}
