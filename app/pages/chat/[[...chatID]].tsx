import Head from "next/head";
import Sidebar from '@components/Sidebar'
import ChatWindow from "@/components/ChatWindow"

export default function App() {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[240px_1fr]">
        <Sidebar/>  
        <ChatWindow/>
      </div>
      <Sidebar/>
    </>
  )
}