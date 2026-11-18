---
title: Form Task
description: In the workflow system, forms are designed based on the form engine. After associating with a workflow, a unique form submission URL is generated. Users trigger the workflow's progression and continued execution by filling out and submitting the form.
meta:
  - name: keywords
    content: Process Form, Form Engine, Form Flow, Workflow Form, Workflow Form, Form, Low-code, AI Workflow, Process Engine
---

## Form Task

In the workflow system, forms are designed using the form engine. When associated with a workflow, a unique form submission URL is automatically generated. Users can trigger workflow progression and execution by completing and submitting these forms.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

### Steps

#### 1. Create Form

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

#### 2. Design and Save the Form

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

The saved form can be viewed under the **[Form]** menu option on the left.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

#### 3. Create a workflow and link it to the form

Use the **[Form Task]** and select the previously created form from the dropdown list, indicating that this node's form task will use the chosen form.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

Under the **[Form]** menu, you can also view the associated workflows for each form.


> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


#### 4. Launch the workflow and create a form task instance

In the **[Workflow]** section, you can locate the previously created workflow. Click the first "Start" button in the actions column. Once the workflow execution reaches the form task node, it will generate one or multiple form task instances.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

Under the **[Form]** menu in **[User Task]**, you can view the created form task instances. Each form member will be assigned a unique form task instance (corresponding to a distinct form submission URL) for submitting their form task.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

####  5.Submit form

Click the pending form submission link under the **[Form]** menu to access the form submission page. After entering the required data, click **Submit**. The workflow engine will then determine whether to proceed to the next node based on the **OR-sign (Any Approver)** or **AND-sign (All Approvers)** logic, depending on the actual submission status.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

#### 6. View form submission records.

**Form Submission Records (Workflow Execution Logs):**

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

Click **View Details** to see the submitted form data.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

## Input

### Form

Here you can select the form to be associated from the dropdown menu.

### Members

Set the members who are allowed to fill out the form.

### Type

- **OR-Sign (Any Approver)**: Proceeds to the next node as soon as one member approves.
- **AND-Sign (All Approver)**: Advances only after every designated member grants approval.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

## Output

As shown below, the output will display the submitter's information, the timestamp of submission, and the values of all form fields (under `submitData`).

```
[
  {
    "CreateAt": "2025-05-13 20:09:03",
    "Members": "iolinker",
    "Name": "Form Task",
    "SubmitList": [
      {
        "opId": 45,
        "status": 1,
        "submitAt": "2025-05-13 20:12:24",
        "submitData": {
          "field101": "test"
        },
        "user": "iolinker"
      }
    ]
  }
]
```

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.
