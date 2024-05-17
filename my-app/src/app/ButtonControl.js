"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function ButtonControl() {
  const params = useParams();
  const router = useRouter(); // 수정됨: useRouter Hook을 사용
  const id = params.id;

  return (
    <ul>
      <Link href="/create" className="action-link">추가</Link>
      {id ? 
        <>        
        <Link href={"/update/" + id} className="action-link">수정</Link>
        <Link href="#" className="action-link" onClick={() => {
          const options = {method: 'DELETE'}
          fetch('http://localhost:9999/topics/' + id, options)
          .then(resp => resp.json())
          .then(result => {
            // 삭제 후 홈페이지로 이동
            router.push("/");
            router.refresh();
          });
        }}>삭제</Link>
        </>
      : null}
    </ul>
  );
}
