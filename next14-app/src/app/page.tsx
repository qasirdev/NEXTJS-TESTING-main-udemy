'use client'
import Header from '@/components/Header'
import useAppContext from '@/context'
import Image from 'next/image'

export default function Home() {
  const { name, setName } = useAppContext();
  const nameQ='qasir'
  return (
    <>
      <Header name={nameQ} age={18} isMan={true}>
        A message from home <span>{name}</span>
      </Header>
      <div>dev page</div>
      <button
        style={{ backgroundColor: "#3498db", color: "yellow" }}
        onClick={() => setName("Mehmood")}
      >
        Change Name
      </button>
    </>
  )
}
