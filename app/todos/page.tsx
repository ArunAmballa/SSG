import Image from "next/image";

export default async function Home() {
  const response=await fetch("https://sum-server.100xdevs.com/todos",{
    next:{
        revalidate:10
    }
  })
  const data=await response.json();
  console.log("Data Found From Backend");
  console.log(JSON.stringify(data))
  return (
  
    <div>
        {
          data.todos.map((todo:any)=><div key={todo.id}>
            {todo.title}
            {todo.description}
            </div>)
        }
    </div>
  );
}
