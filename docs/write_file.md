---
title: Write File
description: How to write text data to a local file.
meta:
  - name: keywords
    content: File Writing, Python File Writing, Low-code, AI Workflow, Process Engine
---

## Write File

Text data can be written to local files and viewed/maintained under the platform's [File Management] section.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

Successfully written files can be viewed under **File Management** in the **Local File** section, where they can also be edited and updated.

The previous screenshot referenced an unavailable author-local file. Check the current **File Management > Local File** page for the resulting entry.

## Input

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

### Filename

The name of the saved file, for example: `test.txt`.


### Encoding

Currently, UTF-8 encoding format is supported.

### Operations

- **Overwrite**:  
  If a file with the same name exists, its data will be overwritten. If no such file exists, a new file will be created.

- **Append**:  
  If a file with the same name exists, data will be added to the end of the file. If no such file exists, a new file will be created.

- **Delete File**:  
  Delete the specified file by name.


### Add Newline

Set whether to add a newline after each piece of data.


### Content

The text data content to be written.


## Output

Displays the number of bytes written and filepath.

```json
[
  {
    "filepath": "space/alyyd551jg/aa.txt",
    "written": 12
  }
]
```
