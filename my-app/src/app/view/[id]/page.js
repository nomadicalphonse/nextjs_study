export default async function Read(props) {
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {cache:'no-store'});
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {props.params.id}번째 팀을 소개합니다.<br/>
      {topic.body}
    </>
  );
}
