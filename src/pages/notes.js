import React, { useState } from "react"
import Layout from "../components/layout"

export default function Home() {
  const { newNote, setNewNote } = useState({ title: "", body: "" })

  const handleSubmit = e => {
    e.preventDefault()
    try {
      if (!newNote.title.length || !newNote.body.length) return
      // create note in backend
    } catch (err) {
      console.log("Error, Error, Error")
    }
  }

  return (
    <Layout>
      <div>
        <h1>My Personal Notes</h1>

        <form onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Type title"
              style={{ width: "50%", fontSize: "15px" }}
              value={newNote.title}
              onChange={e => setNewNote({ ...newNote, title: e.target.value })}
            />
          </p>
          <p>
            <textarea
              row="4"
              placeholder="Type body"
              style={{ width: "70%", fontSize: "15px" }}
              value={newNote.body}
              onChange={e => setNewNote({ ...newNote, body: e.target.value })}
            />
          </p>
          <p>
            <input
              type="submit"
              style={{ width: "30%", height: "30px" }}
              value="Add Note"
            />
          </p>
        </form>
      </div>
    </Layout>
  )
}
