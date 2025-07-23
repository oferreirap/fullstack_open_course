# Spa Diagram New Note

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->> browser: Executes Javascript code
    Note left of server: Modifies the note list with notes.push(note)
    deactivate server


```