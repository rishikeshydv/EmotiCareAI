
export const SendMessage = async (message: string) => {
  console.log(message)
    fetch("http://localhost:3006/chat", {
      method: "POST",
      body: message
    }).then(res => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
}

