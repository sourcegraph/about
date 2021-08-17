# Customer Engineering Project Work

CEs engage in project work to both enhance the go-to-market capabilities of the company, to enhance the customer experience through reusable assets, and to perform other customer centric work that, for example, may involve development of code.

This page describes the process CEs follow to propose and complete project work. We use Asana for management of the projects.

## Concepts

 - **Project Brief**: A summary document that captures the purpose and scope of the project. This must be filled in before a project can begin
 - **Project Owner**: An individual who is responsible for the successful outcome of the project. They may delegate work to Project Contributors, but are responsible for Stakeholder alignment, timely progression of the project, keeping the Project Brief up-to-date, and updating status of the project in Asana
 - **Project Contributor**: An individual who works on the project.
 - **Project Stakeholder**: An individual who either provides input into the project and/or is notified of progress of the project.
 - **Project Impact**: Defines the impact the project has on either Sourcegraph, Sourcegraph's customers, or both. The possible values are as follows:
   1. The project will affect *most customers* and *multiple Sourcegraph departments*
   2. The project will either affect *most customers* or *multiple Sourcegraph departments*
   3. The project will affect a *small number of customers*
   4. The project will affect a *single Sourcegraph department*

## Process

 - Create a copy of the [project brief](https://docs.google.com/document/d/1xImkyvsZkwnZ2OtqTl6ocsaw8YBPSQwfGWHraIZLIyM/edit?usp=sharing)
   - fill in at least the mandatory fields (Title, Purpose, Objective)
   - save the document under [Sourcegraph -> Customer Engineering -> Project Briefs](https://drive.google.com/drive/folders/19VGpxb2wZEswMOvwJSoOK8MEV492TU0M) folder with the name that follows the pattern: ```[[Title]] - CE Project Brief```
 - Create a new [Asana](https://app.asana.com/0/1200768248900861/list) task (under the ```CE Projects``` project) tracking the project proposal
   - Ensure the task title matches the brief title
   - If you intend on being the Project Owner, assign yourself as the "Assignee"
   - Select the appropriate "Project Type"
     - If your project does not adequately fit into an existing "Project Type", leave it blank, and raise this at the next "CE Project Planning & Review meeting"
   - Optionally provide a "Project Impact"
   - Set the status of the task to "Proposed"
   - Save the URL of the Project Brief
 - Add a new entry in the CE Project Planning & Review [agenda document](https://docs.google.com/document/d/1xTq5Tj_y9cV9aDIhQXWj2QN9Z-gbWhvtkCVAk4b0LD0/edit?usp=sharing) as follows:
   - ```Review proposed project [[link to brief]]```
   - If you need to suggest a new Project Type, append: ```and recommend project type```
 - At the next CE Project Planning & Review meeting, the proposal will be discussed, and the following needs to be agreed:
   - Relative priority of the project and approximate timelines
   - Project owner, if not already assigned
   - Relevant stakeholders and their involvement
   - Project contributors, and their roles
   - Optionally (and time depending) other fields may be discussed with the wider team
 - The Project Owner updates the status of the project in Asana to "Agreed" and then, once work starts, to "In Progress"
 - The Project Owner is responsible for setting up meetings, Slack Channels, GitHub entries, updating the brief, updating Asana, etc. to ensure successful progression of the project
 - Tasks for this specific project can be tracked in Asana by creating sub-tasks.
 - If the Project Owner believes aspects of the project should be discussed with the wider them, they may add a new entry to the CE Project Planning & Review [agenda document](https://docs.google.com/document/d/1xTq5Tj_y9cV9aDIhQXWj2QN9Z-gbWhvtkCVAk4b0LD0/edit?usp=sharing) as follows:
   - ```Discuss [[topic]] for project [[link to brief]]```
 - Once the project work is ready for a review, the Project Owner sets the Asana status to "Ready for review"
   - At the very least the Project Stakeholders should be reviewers for the project.
   - If deemed necessary, a review with the wider CE team may be arranged at the next CE Project Planning & Review meeting. This can be arranged by adding a new item to the [agenda document](https://docs.google.com/document/d/1xTq5Tj_y9cV9aDIhQXWj2QN9Z-gbWhvtkCVAk4b0LD0/edit?usp=sharing) as follows: ```Review project [[link to brief]]```
 - Finally, once the project is reviewed, approved, and deployed, the status in Asana should be set to "Deployed"
 - Some projects will require on-going maintenance or updates. When such work is being undertaken, the Asana status should be set to "Maintenance"
