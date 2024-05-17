"use client"

import {useParams, useRouter} from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    useEffect(()=>{
        fetch('http://localhost:9999/topics/'+id)
            .then(resp=>resp.json())
            .then(result=>{
                setTitle(result.title);
                setBody(result.body);
            });
    }, []);

    return (
      <>
        <h2>글수정</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            const options = {
                method: 'PATCH',//수정을 할때는 PUT 또는 PATCH를 사용하면 됩니다.
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch(`http://localhost:9999/topics/`+id, options)
                .then(res=>res.json())
                .then(result=>{
                    console.log(result);
                    const lastid = result.id;
                    router.push(`/view/${lastid}`);
                    router.refresh();
                })
        }}>
            <p>
                <input type="text" name="title" placeholder="제목" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
            <input type="text" name="body" placeholder="내용" value={body} onChange={(e)=>setBody(e.target.value)}/>
            </p>
            <p>
                <input type="submit" value="입력"/>
            </p>
        </form>
      </>
    );
  }
  