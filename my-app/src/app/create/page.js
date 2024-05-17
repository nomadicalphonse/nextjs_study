"use client"
import {useRouter} from "next/navigation";
export default function Create() {
    const router = useRouter();
    return (
      <>
        <h2>글입력</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch(`http://localhost:9999/topics`, options)
                .then(res=>res.json())
                .then(result=>{
                    console.log(result);
                    const lastid = result.id;
                    router.push(`/view/${lastid}`);
                    router.refresh();
                })
        }}>
            <p>
                <input type="text" name="title" placeholder="제목"/>
            </p>
            <p>
            <input type="text" name="body" placeholder="내용"/>
            </p>
            <p>
                <input type="submit" value="입력"/>
            </p>
        </form>
      </>
    );
  }
  