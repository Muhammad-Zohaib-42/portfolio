import Image from "next/image"
import notesTaking from "../public/notes-taking-app.png"

export default function ProjectBox() {
  return (
    <div>
        <Image src={notesTaking} alt="notes taking ui" />
    </div>
  )
}
