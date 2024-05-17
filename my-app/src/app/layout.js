import Link from "next/link";
import "./globals.css";

export const metadata = { //서버컴포넌트는 metadata를 사용가능
  title: "빌보드 차트",
  description: "최신 빌보드 차트 정보",
};

export default async function RootLayout({ children }) {
  const resp = await fetch("http://localhost:9999/topics");
  const rs = await resp.json();
  console.log(rs);
  return (
    <html>
      <body>
        <h1><Link href="/view/1">빌보드 차트</Link></h1>
        <ol>
          {rs.map((topic)=>{
            return <li key={topic.id}><Link href={`/view/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <ul>
          <a href="/create" className="action-link">추가</a>
          <a href="/create" className="action-link">수정</a>
          <a className="action-link">삭제</a>
        </ul>
      </body>
    </html>
  );
}
