import { useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

export default function ReqPage() {
  const handlePost = useCallback(async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Criando com axios",
      content: "Algum conteúdo",
    });
    console.log(res);
  }, []);

  useEffect(() => {
    handlePost();

  }, [handlePost]);
  useEffect(() => {
    handleGet();
  }, []);
  async function handleGet() {
    const res = await axios.get("https://api/products/1");
    console.log(res);
  }
  return <>
    <ul>
        <li>

        </li>
    </ul>
  
  </>;
}
